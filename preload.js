const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("gadget", {
  load: () => ipcRenderer.invoke("data:load"), save: d => ipcRenderer.invoke("data:save", d),
  search: q => ipcRenderer.invoke("search", q), identify: files => ipcRenderer.invoke("identify", files),
  settings: s => ipcRenderer.invoke("settings", s), exportPDF: d => ipcRenderer.invoke("export:pdf", d),
  exportCSV: d => ipcRenderer.invoke("export:csv", d), open: u => ipcRenderer.invoke("open", u),
  onAlert: cb => ipcRenderer.on("alert", (_, d) => cb(d))
});
