const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.getElementById('listen-to-window')
button.addEventListener('click', () => {
  var window = remote.getCurrentWindow()
  main.openWindow('/views/test')
  window.close()
}, false)
