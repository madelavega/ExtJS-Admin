/*global Ext: false*/
Ext.define("APP.controller.ModuleBaseController", {
    extend: "Ext.app.Controller",

    getMainView : function () {
        throw "This method must be override to get the main view class for this controller";
    }
});