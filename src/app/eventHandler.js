

const { ipcMain } = require('electron');
const apiMessage = require('./API/message');
const apiUser = require('./API/user');
const { event } = require('jquery');

// Message 
ipcMain.on('send-message', (event, data) =>{
    apiMessage.sendMessage(data, (err, res, body)=> {
        event.reply('send-message-reply',true)     
     })
});

//Users
ipcMain.on('update-user', ( event, data) =>{
    apiUser.updateUser(data, (res)=> {
        event.reply('update-user-reply', true)  
     })
});
ipcMain.on('get-user',_=>{
    apiUser.getUser()
    });


//Forfait

ipcMain.on('get-forfaits', (event)=>{ 
    apiForfait.getForfaits().then(
        res=>{
           event.reply('get-forfaits-reply',true)
        }).catch(err =>{
            console.log(err)
        })
});

