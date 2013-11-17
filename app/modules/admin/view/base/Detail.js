/*global Ext: false*/
Ext.define("ADM.view.base.Detail", {
    extend: "Ext.form.Panel",
    alias   : "widget.admbasedetail",
    model : null,

    initComponent: function () {
        if (this.model === null) {
            throw "You must specify the model for this detail";
        }
        this.callParent(arguments);
    }
});