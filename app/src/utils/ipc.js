let ipcRenderer;
if (window.require) {
  ({ ipcRenderer } = window.require("electron"));
}

export const ipc = ipcRenderer;
