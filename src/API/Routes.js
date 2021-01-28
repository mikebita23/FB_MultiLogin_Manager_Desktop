const fs = require('fs');
const path = require('path');

let Views = path.join(__baseDir, 'views')

let Folders = {
    views: Views,
    css: path.join(Views, 'css'),
    html: path.join(Views, 'html'),
    js: path.join(Views, 'js'),
    img: path.join(Views, 'img'),
    vendor: path.join(Views, 'vendor'),
}



module.exports = {

}