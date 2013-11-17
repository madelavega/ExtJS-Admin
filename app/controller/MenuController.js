/*global Ext: false, window: false*/
Ext.define("APP.controller.MenuController", {
    extend: "Ext.app.Controller",

    refs: [
        {
            ref     : "appContent",
            selector: "appcontent"
        }
    ],

    optionsMap: {
        usuarios: "UsuariosController"
    },

    init: function () {
        this.control({
            "appmenu menuitem": {
                click: this.onAppMenuMenuItemClick
            }
        });
    },

    onAppMenuMenuItemClick: function (item) {
        var scope = this.resolveScope(item), controllerName,
            controller, baseController, option = item.option;
        if (option) {
            controllerName = [scope, "controller", this.optionsMap[option]].join(".");
            baseController = window[scope].app.controllers.get("BaseController");
            controller = baseController.getController(controllerName);
            this.getAppContent().add(Ext.create(controller.getMainView()));
        }
    },

    resolveScope: function (item) {
        var parentItem, scope = item.scope;
        if (!scope) {
            parentItem = item.parentMenu.parentItem;
            scope = parentItem.scope;
            if (!scope) {
                scope = this.resolveScope(parentItem);
            }
        }
        return scope;
    }
});