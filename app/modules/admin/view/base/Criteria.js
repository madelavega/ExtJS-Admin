/*global Ext: false*/
Ext.define("ADM.view.base.Criteria", {
    extend       : "Ext.form.Panel",
    alias        : "widget.admbasecriteria",
    layout       : "anchor",
    autoScroll   : true,
    defaults     : {
        xtype         : "textfield",
        anchor        : "100%",
        labelAlign    : "top",
        labelSeparator: "",
        margin        : "0 5 0 5"
    },
    title        : "Criterios de búsqueda",
    initComponent: function () {
        this.buttons = [
            {
                text: "Limpiar"
            },
            {
                text  : "Buscar",
                action: "search"
            }
        ];
        this.callParent(arguments);
    }
});