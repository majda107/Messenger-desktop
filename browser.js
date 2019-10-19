const ipc = require('electron').ipcRenderer

var fs = require('fs');

var webview = document.getElementById('view')

webview.addEventListener('dom-ready', function () {
    console.log("inserting css")
    fs.readFile(__dirname + '/styles/messenger/dark/style.css', 'utf8', function (error, data) {
        console.log(data)
        webview.insertCSS(data)
    })
})


var button_close = document.getElementById('button-close')

button_close.addEventListener('click', () => {
    ipc.send('button-close')
})



var button_maximize = document.getElementById('button-maximize')

button_maximize.addEventListener('click', () => {
    ipc.send('button-maximize')
})


var button_hide = document.getElementById('button-hide')

button_hide.addEventListener('click', () => {
    ipc.send('button-hide')
})
