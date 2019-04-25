const Window = require("./Window");
const { app, Menu, globalShortcut } = require("electron");
const path = require("path");

class App {
  constructor() {
    this.app = app;
    this.init();
  }

  init() {
    if (require("electron-squirrel-startup")) {
      this.app.quit();
    }

    this.app.on("ready", () => {
      this.createWindow();
      App.setMenuNull();
      globalShortcut.register("CommandOrControl+O", () => {
        this.window.openDevTools();
      });
      globalShortcut.register("CommandOrControl+R", () => {
        this.window.reload();
      });
    });

    this.app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        this.app.quit();
      }
    });

    this.app.on("activate", () => {
      if (this.window === null) {
        this.createWindow();
      }
    });
  }

  static setMenuNull() {
    Menu.setApplicationMenu(null);
  }

  createWindow() {
    this.window = new Window({
      width: 400,
      height: 680,
      url: path.join(__dirname, "../static/index.html"),
      titleBarStyle: "hidden",
      fullscreen: false,
      resizable: false
    });
  }
}

module.exports = new App();
