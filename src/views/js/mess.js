const electron =require("electron");
const ipc=electron.ipcRenderer;

const messageBtn= document.getElementById('messageButton')

messageBtn.addEventListener('clic', function(){
    ipc.send('send-message-dialog')
})
