const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'Open new Window'
button.addEventListener('click', () => {
  var window = remote.getCurrentWindow()
  main.openWindow('index')
  window.close()
}, false)

document.body.appendChild(button)
