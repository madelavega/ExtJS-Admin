/*global Ext: false*/
Ext.define("ADM.view.usuarios.List", {
    extend  : "ADM.view.base.List",
    alias   : "widget.admusuarioslist",
    requires: [
        "Ext.grid.column.Template"
    ],
    title : "Listado de usuarios",

    initComponent: function () {
        this.store = Ext.create("ADM.store.usuarios.Store");
        this.columns = [
            {
                text     : "Nombre",
                dataIndex: "nombre"
            },
            {
                xtype    : "templatecolumn",
                text     : "Apellidos",
                tpl      : "{apellido1} {apellido2}",
                dataIndex: "apellido1",
                flex     : 1
            }
        ];

        this.callParent(arguments);
    }
});