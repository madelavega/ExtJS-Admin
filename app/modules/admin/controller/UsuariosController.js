/*global Ext: false*/
Ext.define("ADM.controller.UsuariosController", {
    extend: "ADM.controller.BaseController",
    views : ["usuarios.Wrapper"],
    stores: ["usuarios.Store"],
    init  : function () {

    },

    getMainView: function () {
        return "ADM.view.usuarios.Wrapper";
    }
});