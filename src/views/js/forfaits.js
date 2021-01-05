const { ipcRenderer } = require('electron');
const { BrowserWindow } = require('electron/main');
window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");

const results = document.getElementById('results');
let dataF;

$('#dataF').on('click', _ =>{
    //$("").hide();

    $.ajax({
        //url: 'https://gls-login.herokuapp.com/forf/all',
        url: 'http://localhost:3008/forf/all',
        dataType: 'json',
        success: function(data) {

                  console.log(data);
        },
        
        
      }); 
});

        // $('#dataF').on('click', _ =>{
         
        //     ipcRenderer.on('get-forfaits-reply', (_, res) => {
        //         if (res) {
        //            console.log(res)
        //         } else {
                  
        //         }
        //     });
            
        // });

   
    

