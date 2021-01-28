

const { ipcMain } = require('electron');
const apiMessage = require('./API/message');
const apiUser = require('./API/user');


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



