const { app, BrowserWindow } = require('electron')
const path = require('path')

const DEV_ENV = app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 600,
    frame:false,
    title:'todoList',
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加载本地的React应用程序

    win.loadURL('http://localhost:5173')


  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})