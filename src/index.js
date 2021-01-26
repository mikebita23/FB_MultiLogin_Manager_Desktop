/**
 * @module 
 * @name Main-Electron-App
 * @description the main electron script wich is executed when launching the app
 */

const { app, BrowserWindow} = require('electron');
const eventHandler = require('./app/eventHandler');

/**
 * @global
 * @name __userDataDir
 * @description global variable containg the main app directory
 */

 global.__userDataDir = app.getPath("userData");

/**
 * @global
 * @name __API_URL
 * @description global variable containg API url
 */

 global.__API_URL = "http://api.infinite-scale.fr";

/**
 * @global
 * @name __token
 * @description global variable containg the token wich will be used when communicating with the API
 */

 global.__token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pZGFsQGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjExNjUwMjA0LCJleHAiOjE2MTE2NTM4MDR9.u4da9x5e9wWOfIz6aYx6dls-fAmcbG5HCCeMpokqtuY'

 const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Enable live reload for Electron too
// require('electron-reload')(__dirname, {
//   // Note that the path to electron may vary according to the main file
//   electron: require(`${__dirname}/node_modules/electron`)
// });


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 700,
    minimizable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, './views/html/bienvenue.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
