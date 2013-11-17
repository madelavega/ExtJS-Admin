/*global Ext: false*/
Ext.define("ADM.view.base.Master", {
    extend  : "Ext.panel.Panel",
    alias   : "widget.admbasemaster",
    criteria: null,
    list    : null,

    initComponent: function () {
        if (this.criteria === null || this.list === null) {
            throw "You must define criteria and list";
        }

        this.criteria.region = "west";
        this.criteria.width = 180;
        this.list.region = "center";

        this.items = [this.criteria, this.list];

        this.callParent(arguments);
    },

    getSelection: function () {
        return this.list.getSelection();
    }
});