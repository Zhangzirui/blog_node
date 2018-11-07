import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import routeConfig from '$route';
import {htmlTemplate} from '$util/serverUtil';

const app = express();
const router = express.Router();

app.use(express.static(path.resolve(__dirname, '../dist')));

router.get('/*', (req, res) => {
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
        fs.readdirSync('../dist')
            .forEach((file) => {
                if (file.indexOf(renderObj.name) !== -1) {
                    renderObj.jsPath = file;
                }
                if (file.indexOf('common') !== -1) {
                    renderObj.jsCommonPath = file;
                }
            });

        const reactStr = ReactDOM.renderToString(renderObj.component);

        res.set('Content-type', 'text/html');
        res.end(htmlTemplate(reactStr));
    } else {
        res.end('404');
    }
});

app.use('blognode', router);
