/*global Ext: false*/
Ext.define("ADM.view.usuarios.Criteria", {
    extend       : "ADM.view.base.Criteria",
    alias        : "widget.admusuarioscriteria",
    initComponent: function () {
        this.items = [
            {
                fieldLabel: "Nombre",
                name      : "nombre"
            },
            {
                fieldLabel: "Primer apellido",
                name      : "apellido1"
            },
            {
                fieldLabel: "Segundo Apellido",
                name      : "apellido2"
            }
        ];
        this.callParent(arguments);
    }
});