import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import routeConfig from '$route';
import {htmlTemplate} from '$util/serverUtil';

const app = express();
const router = express.Router();
const PORT = 8000;
const staticPath = path.resolve(__dirname, '../dist');

app.use(express.static(staticPath));

router.get('/*', (req, res) => {
    console.log('url:', req.url);
    console.log('path:', req.path);
    let renderObj;

    routeConfig
        .some((route) => {
            if (route.url === req.path) {
                renderObj = route;
                return true;
            };
            return false;
        });
    if (renderObj) {
        fs.readdirSync(staticPath)
            .forEach((file) => {
                if (file.indexOf(renderObj.name) !== -1) {
                    if (file.endsWith('js')) {
                        renderObj.jsPath = file;
                    } else if (file.endsWith('css')) {
                        renderObj.cssPath = file;
                    }
                }
                if (file.indexOf('common') !== -1) {
                    if (file.endsWith('js')) {
                        renderObj.jsCommonPath = file;
                    } else if (file.endsWith('css')) {
                        renderObj.cssCommonPath = file;
                    }
                }
            });
        let args = renderObj.param.map((item) => {
            return req.query[item];
        });

        console.log(args);
        renderObj.store.dispatch(renderObj.action(...args))
            .then(() => {
                renderObj.reactString = ReactDOM.renderToString(renderObj.component);
                res.set('Content-type', 'text/html');
                res.end(htmlTemplate(renderObj));
            });
    } else {
        res.end('404');
    }
});

app.use('/blognode', router);

app.listen(PORT, () => {
    console.log('node ssr ...');
});


