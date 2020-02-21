const electron = require("electron");

let {app, BrowserWindow, Menu} = electron;
const path = require("path");

let mainWindow;

app.on("ready",()=>{
   mainWindow = new BrowserWindow({
      show: false,
      nodeIntegration: true,
      webPreferences: {
         allowRunningInsecureContent: true,
         nodeIntegration: true
      }
   });
   let index = path.join(__dirname,'/dist/index.html');
   let prodURL = `file://${index}`;
   mainWindow.loadURL(prodURL);

   mainWindow.once("ready-to-show",mainWindow.show)
});

Menu.setApplicationMenu(null)