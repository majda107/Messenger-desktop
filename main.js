const { app, BrowserWindow, session } = require('electron');

var fs = require('fs');

function createWindow() {
    // Create the browser window.
    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36';
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });


    let mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: false
        }
    })

    mainWindow.webContents.on('dom-ready', function () {
        fs.readFile(__dirname + '/style.css', 'utf8', function (error, data) {
            mainWindow.webContents.insertCSS(data)
        })
    })

    mainWindow.webContents.openDevTools();
    mainWindow.loadURL("http://messenger.com")
}

app.on('ready', createWindow)


