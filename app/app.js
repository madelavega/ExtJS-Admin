/*global Ext: false, window: false*/
Ext.Loader.setConfig({
    disableCaching: true,
    paths         : {
        "APP": "app",
        "ADM": "app/modules/admin"
    }
});

Ext.require("APP.config.Config");

Ext.onReady(function () {
    Ext.application({
        name              : "APP",
        autoCreateViewport: true,
        appFolder         : "app",
        controllers       : ["MenuController"]
    });

    Ext.application({
        name              : "ADM",
        autoCreateViewport: false,
        appFolder         : "app/modules/admin",
        controllers       : ["BaseController", "UsuariosController"]
    });
});