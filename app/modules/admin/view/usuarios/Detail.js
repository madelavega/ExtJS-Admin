/*global Ext: false*/
Ext.define("ADM.view.usuarios.Detail", {
    extend: "ADM.view.base.Detail",
    alias : "widget.admusuariosdetail",
    model : "ADM.model.usuarios.Model",

    initComponent: function () {

        this.callParent(arguments);
    }
});