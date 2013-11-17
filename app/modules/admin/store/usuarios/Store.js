/*global Ext: false*/
Ext.define("ADM.store.usuarios.Store", {
    extend  : "APP.store.BaseStore",
    requires: ["ADM.model.usuarios.Model"],
    model   : "ADM.model.usuarios.Model",

    proxy: {
        type     : "baseproxy",
        localUrl : "data/adm/usuarios.json",
        remoteUrl: "usuarios"
    }
});