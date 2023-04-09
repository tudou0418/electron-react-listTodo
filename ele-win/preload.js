const { contextBridge, ipcRenderer } = require('electron')

// 将Node.js API暴露给渲染进程
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer
})