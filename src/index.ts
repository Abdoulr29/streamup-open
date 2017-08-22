import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
import { RoboCopy } from './sync/roboCopy';
import { Rsync } from './sync/Rsync';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload();

const createWindow = async () => {
  // Create the browser window.
  var mainWindow = new BrowserWindow({
    height: 630,
    width: 440,
    resizable: false,
    icon: "logo.svg"
    // height: 1382,
    //     width: 744,
  });
  mainWindow.setMenuBarVisibility(false)


  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // var loginWindow = new BrowserWindow({
  //   height:400,
  //   width:500,
  //   show:false
  // });
  // const mainMenu = Menu.buildFromTemplate(menuTemplate);
  //     Menu.setApplicationMenu(mainMenu);




  // ipcMain.on('login', () => {
  //   loginWindow.loadURL(`file://${__dirname}/login.html`);
  // })


  // Open the DevTools.
  if (isDevMode) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
//sync files with  synchronization constructor

//  new synchronization('C:\\Users\\Pc\\burned\\');

import { SynchronizationManager } from './SynchronizationManager';
if (process.platform !== 'darwin') {
  (new SynchronizationManager(new RoboCopy())).syncRemote()
} else {
  (new SynchronizationManager(new Rsync())).syncRemote()
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


// add new window
// function newWindow() {
//     var addWindow = new BrowserWindow({
//         height: 630,
//         width: 440,
//         title: "new windows",
//         resizable: false
//     })
//       addWindow.loadURL(`file://${__dirname}/login.html`);}

//       const menuTemplate = [
//     {
//         label: 'File',
//         submenu: [{
//             label: 'new'
//         },
//         {
//             label: 'open',
//             click() {
//                 newWindow();

//             }
//         },

//         { label: 'exit' }
//         ]
//     }

// ];

