import fs from 'fs';

export const readDir = function(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                throw new Error(err);
            }
            resolve(files);
        });
    })
        .catch((err) => {
            console.log(err);
        });
};


export const htmlTemplate = function(renderObj, initialState) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>吃肉吃肉的博客</title>
            <script>
                window.__initialState = ${JSON.stringify(initialState)}
            </script>  
        </head>
        <body>
            <div id="root">${renderObj.component}</div>
            <script type="text/javascript" src="../${renderObj.jsPath}"></script>
        </body>
    </html>
    `;
};
