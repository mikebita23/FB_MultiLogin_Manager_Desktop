const { post } = require("request-promise");

const asyncd= require("async");


async function getData(url){
    let res= await fetch(url)
    .then(async (response) =>{

        if(!response.ok){
            throw new Error('Error getting data');
        }
        return response.text().then((data) =>{
            return data;
        });
    })
    .catch((error) =>{
        console.log(console.error())
    });
    return res;
}

async function getFile(url){
    let res= await fetch(url).then(async (response)=>{
        if(!response.ok){

        }
        return response.blob().then((data)=>{
            return URL.createObjectURL(data);
        })
    })
    .catch((error) =>{
        console.log(error)
    });
    return res;
}
async function postData(url='', data={}){
     const response= await fetch(url, {
         method: 'POST',
         
         headers:{
             'content-type': 'application/json'
            },
         body: JSON.stringify(data)
        });

     return response.json();
}

// const { ipcRenderer } = require('electron');
// window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");

// $('#messageButton').on('click', _ =>{
//     console.log($('#areaContenu').val());
//     $("#messageButton").prop("disabled", true);
//     ipcRenderer.send('send-message', { Objet: $('').val(), Content: $('#areaContenu').val(), senderId: $('').val()})
// });

// ipcRenderer.on('send-message-reply', (_, res) => {
    
//     console.log(res);
//     if (res) {
//         console.log('Redirection vers la page bienvenue');
//         window.location.href = '../html/bienvenue.html'
//     } else {
//         $("#messageButton").prop("disabled", false);
//     }
// })
