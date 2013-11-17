/*global Ext: false*/
Ext.define("ADM.view.usuarios.Master", {
    extend  : "ADM.view.base.Master",
    alias   : "widget.admusuariosmaster",
    requires: [
        "ADM.view.usuarios.List",
        "ADM.view.usuarios.Criteria"
    ],
    layout  : "border",

    initComponent: function () {

        this.list = {
            xtype: "admusuarioslist"
        };

        this.criteria = {
            xtype: "admusuarioscriteria"
        };

        this.callParent(arguments);
    }
});