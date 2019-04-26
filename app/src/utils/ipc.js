let ipcRenderer;
if (window.require) {
  ({ ipcRenderer } = window.require("electron"));
} else {
  console.log("window.require不存在");
}

export const ipc = ipcRenderer;
