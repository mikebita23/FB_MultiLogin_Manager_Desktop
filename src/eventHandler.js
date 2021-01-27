const {
    ipcMain
} = require('electron');
const apiMessage = require('./API/message');
const apiForfait = require('./API/forfait');
const apiUser = require('./API/Routes/user');
const apiLogin = require('./API/Routes/login');
const {
    event
} = require('jquery');

// Message 
ipcMain.on('send-message', (event, data) => {
    apiMessage.sendMessage(data, (err, res, body) => {
        event.reply('send-message-reply', res.statusCode < 400)

    })
});

//Users
ipcMain.on('add-user', (event, data) => {
    apiUser.addUser(data, (res) => {
        event.reply('add-user-reply', res.statusCode < 400)
    })
});
ipcMain.on('get-user', (event, idUser) => {
    apiUser.getUser(idUser, (res) => {
        event.reply('get-User-reply', true)
    });
})


//Forfait

ipcMain.on('add-forfait', (event, data) => {
    apiMessage.addForfait(data).then(res => {
        console.log(data)
        event.reply('add-forfait-reply', res.statusCode < 400)
    }).catch(err => {
        // erro to handl
    })
});

ipcMain.on('udapte-forfait', (event, data) => {
    apiMessage.addForfait(idForfait).then(res => {
        console.log(data)
        event.reply('add-forfait-reply', res.statusCode < 400)
    }).catch(err => {
        // erro to handl
    })
});
ipcMain.on('get-forfaits', (event) => {
    apiForfait.getForfaits().then(
        res => {
            event.reply('get-forfaits-reply', res.statusCode < 400)
        }).catch(err => {

    })
});
ipcMain.on('ask-for-auth', (event, args) => {
    apiLogin.connect(args.email, args.passWord).then(res => {
        event.reply('ask-for-auth-reply', res.statusCode < 400)
    }).catch(err => {
        // erro to handl
    })
})