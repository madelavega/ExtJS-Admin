/*global Ext: false*/
Ext.define("ADM.view.usuarios.Wrapper", {
    extend  : "ADM.view.base.Wrapper",
    alias   : "widget.admusuarioswrapper",
    requires: ["ADM.view.usuarios.Master", "ADM.view.usuarios.Detail"],
    cls     : "adm-usuarios",

    initComponent: function () {

        this.master = "ADM.view.usuarios.Master";
        this.detail = {type : "ADM.view.usuarios.Detail"};

        this.callParent(arguments);
    }

});