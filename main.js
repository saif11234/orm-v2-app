// This file is only used for the Electron desktop application
// For web deployment, this file should not be loaded

if (typeof require !== 'undefined') {
  const { app, BrowserWindow } = require('electron');
  const path = require('path');

  // Handle Squirrel on Windows startup
  if (require('electron-squirrel-startup')) {
    app.quit();
  }

  function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: path.join(__dirname, 'logo.ico'), 
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    });

    win.loadFile('index.html');
  }

  app.whenReady().then(() => {
    createWindow();

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
} else {
  // Web environment - register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js');
    });
  }
}
