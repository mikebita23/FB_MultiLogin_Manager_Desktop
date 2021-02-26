const zipper = require('../helpers/Zipper');
const API = require('../API/file');
const path = require('path')
const fs = require('fs')
const nvCtrl = require('./navigatorController')
module.exports = {
    export : async (name) => {

        
        // Compressing code goes here ..
        zipper.compress({
            src: __navSessionDir + name + "/",
            out: __sessionBackUpdir + name
        }).then(res => {
            
            API.uploadFile( __sessionBackUpdir + name, name).then(res => {
                console.log(`\n\t\t UPLOAD FINSHED : ${res}`);
            }).catch(err =>{
                console.log(`\n\t\t UPLOAD ERROR : ${err} \n`);
            })
        }).catch(err => {
            console.log(`\n\t\t COMPRESSING ERROR : ${err} \n`);
        })
        
    },

    download: (id) => {
        API.downloadFile().then(body, data => {
            let writeStream = fs.createWriteStream(path.join(__sessionBackUpdir, `${id}`))
            writeStream.write(body, 'binary')
            writeStream.on('finish', ()=>{
                zipper.decompress({
                    src: path.join(__sessionBackUpdir, `${id}`),
                    out: path.join(__navSessionDir, `${id}`)
                })
                nvCtrl.open(id)
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
