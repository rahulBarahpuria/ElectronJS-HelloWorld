const{app, BrowserWindow, Tray} = require('electron');
//var updater = require('electron-updater');

let win;
//console.log('the Application');
//console.log(process.versions['electron']);
function createWindow(){
  //updater.on('ready', function(){
    win = new BrowserWindow({
      height : 800,
      width : 600

      });
    win.loadURL('C:/rahul/Electron/HelloWorld/index.html');

//  });

//  updater.on('updateRequired', function () {
//        app.quit();
//  });
//  updater.on('updateAvailable', function () {
//        mainWindow.webContents.send('update-available');
//  });
//  updater.start();
}
app.on('ready', createWindow);
