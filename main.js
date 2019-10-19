const { app, remote, BrowserWindow, session } = require('electron')
ipc = require('electron').ipcMain;
//export 

var fs = require('fs');

function createWindow() {
    // Create the browser window.
    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36';
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });


    let mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        },
        frame: false,
        titleBarStyle: "hiddenInset"
    })

    mainWindow.setMenu(null)

    // mainWindow.webContents.on('dom-ready', function () {
    //     // fs.readFile(__dirname + '/styles/messenger/dark/style.css', 'utf8', function (error, data) {
    //     //     mainWindow.webContents.insertCSS(data)
    //     // })

    //     fs.readFile(__dirname + '/titlebar.js', 'utf8', function (error, data) {
    //         mainWindow.webContents.executeJavaScript(data)

    //         ipc.on('close-button-pressed', () => {
    //             console.log('lol')
    //         })
    //     })

    //     fs.readFile(__dirname + '/titlebar/titlebar.css', 'utf8', function (error, data) {
    //         mainWindow.webContents.insertCSS(data)
    //     })
    // })

    //window.document.getElementById('view').style.backgroundColor = 'red'

    ipc.on('button-close', () => {
        mainWindow.close()
    })

    ipc.on('button-maximize', () => {
        if(mainWindow.isMaximizable)
        {
            mainWindow.maximize()
        }
        else
        {
            mainWindow.maximize()
        }
    })

    ipc.on('button-hide', () => {
        mainWindow.minimize()
    })

    //mainWindow.webContents.openDevTools()
    mainWindow.loadFile("index.html")
}

app.on('ready', createWindow)


