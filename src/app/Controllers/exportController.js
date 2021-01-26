const zipper = require('../helpers/Zipper');
const API = require('../API/file');
const path = require('path')

module.exports = {
    export : async (name) => {

        
        // Compressing code goes here ..
        zipper.compress({
            src: __navSessionDir + name + "/",
            out: __sessionBackUpdir + name
        }).then(res => {
            
            API.uploadFile( __sessionBackUpdir + name).then(res => {
                console.log(`\n\t\t UPLOAD FINSHED : ${res}`);
            }).catch(err =>{
                console.log(`\n\t\t UPLOAD ERROR : ${err} \n`);
            })
        }).catch(err => {
            console.log(`\n\t\t COMPRESSING ERROR : ${err} \n`);
        })

        //uploading code goes here
        
    }
}
