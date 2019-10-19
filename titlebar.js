// const ipc = window.require('electron').ipcRenderer;

var titleBar = document.createElement('div')
titleBar.classList.add('titlebar')

var closeButton = document.createElement('button')
closeButton.classList.add('button')
closeButton.classList.add('button-close')
closeButton.id = "close-btn"

titleBar.appendChild(closeButton)

document.body.prepend(titleBar)



// closeButton.addEventListener('click', () => {
//     ipc.send('close-button-pressed')
// })

