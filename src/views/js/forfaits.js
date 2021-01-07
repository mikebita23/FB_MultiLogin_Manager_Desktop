const { ipcRenderer } = require('electron');
const { BrowserWindow } = require('electron/main');
window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");
const request = require('request-promise');
const API_URL1 = "https://gls-login.herokuapp.com";
    const Auth1 = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFAaWJyYS5jb20iLCJ1c2VySWQiOjQxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTAwMjUwNzMsImV4cCI6MTYxMDAyODY3M30.Xu_lxtv_jZQGZSRqvKvTrFOVUSspvyO6q-OIedrBJ6s"
}

var data;
function getData() {
    return request({
        method: 'GET',
        url: `${API_URL1}/forf/all`,
        auth: Auth1,
        json: true
    }).then(res => {
       
        data=res;
        return data;
    }).catch(err => {
        console.log(err.error);
        return err;
    })
}
data= getData()
console.log("Ma data", data);


$('#dataF').on('click', _ =>{
    //$("").hide();

    $.ajax({
        //url: 'https://gls-login.herokuapp.com/forf/all',
        url: 'http://localhost:3003/Msg/all',
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

   
    

