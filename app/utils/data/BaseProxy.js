/*global Ext: false, APP: false*/
Ext.define("APP.utils.data.BaseProxy", {
    alias      : "proxy.baseproxy",
    requires   : [
        "APP.config.Config",
        "Ext.data.proxy.Rest",
        "Ext.data.proxy.Ajax"
    ],
    localUrl   : null,
    remoteUrl  : null,
    constructor: function (config) {
        var proxy, reader, AppConfig = APP.config.Config;
        config = config || {};
        reader = {
            messageProperty: "info",
            root           : "data",
            successProperty: "success",
            totalProperty  : "total",
            type           : "json"
        };
        if (config.reader && config.reader.idProperty) {
            reader.idProperty = config.reader.idProperty;
        }

        if (AppConfig.isLocalDataMode()) {
            Ext.apply(config, {
                url          : [AppConfig.getContextPath(), "/", (config.localUrl !== null ? config.localUrl : config.remoteUrl)].join(""),
                actionMethods: {
                    create  : "POST",
                    criteria: "GET",
                    destroy : "POST",
                    read    : "GET",
                    update  : "POST"
                },
                reader       : reader
            });
            proxy = new Ext.data.proxy.Ajax(config);
        } else {
            Ext.apply(config, {
                url          : [AppConfig.getServicesPath(), "/", config.remoteUrl].join(""),
                actionMethods: {
                    create  : "POST",
                    destroy : "DELETE",
                    read    : "GET",
                    update  : "PUT"
                },
                reader       : reader
            });
            proxy = new Ext.data.proxy.Rest(config);
        }

        return proxy;
    }
});