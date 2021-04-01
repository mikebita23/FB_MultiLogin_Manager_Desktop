const zipper = require('../helpers/Zipper');
const API = require('../API/session');
const upload = require('../API/file').uploadFile
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
            
            upload( __sessionBackUpdir + name, name).then(res => {
                console.log(`\n\t\t UPLOAD FINSHED : ${res}`);
            }).catch(err =>{
                console.log(`\n\t\t UPLOAD ERROR : ${err} \n`);
            })
        }).catch(err => {
            console.log(`\n\t\t COMPRESSING ERROR : ${err} \n`);
        })
        
    },

    download: async (id) => {
        
        let writeStream = fs.createWriteStream(path.join(__sessionBackUpdir, `${id}`))
        
        writeStream.on('close', ()=>{
            console.log("download finished ! ");
            zipper.decompress({
                src: path.join(__sessionBackUpdir, `${id}`),
                out: path.join(__navSessionDir, `${id}`)
            })
            nvCtrl.open(id)
        })
        
        API.getSessionData(id).then(body => {
            console.log("downloading");    
            writeStream.write(body, 'binary')
        }).catch( err => {
            // console.log(err);
            fs.mkdir(path.join(__navSessionDir, `${id}`), (err) => {
                if (err) {
                    console.log(err);
                }else{
                    nvCtrl.open(id)
                }
            })
            
        })
    }
}
