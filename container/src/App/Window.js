const { BrowserWindow } = require("electron");
const path = require("path");

class Window {
  constructor(config = {}) {
    this.config = {
      width: 800,
      height: 600,
      url: "",
      ...config
    };
    this.init();
  }

  init() {
    const { width, height, url, ...rest } = this.config;
    this.window = new BrowserWindow({
      width,
      height,
      ...rest,
      webPreferences: {
        nodeIntegration: false,
        preload: path.join(__dirname, "./preload.js")
      }
    });
    this.window.on("closed", () => {
      this.window = null;
    });
    this.loadUrl(url);
    // this.openDevTools();
  }

  loadUrl(url) {
    if (/http/.test(url)) {
      this.window.loadURL(url);
    } else {
      this.window.loadFile(url);
    }
  }

  openDevTools() {
    this.window.webContents.openDevTools();
  }

  reload() {
    this.window.webContents.reload();
  }
}

module.exports = Window;
