/*global Ext: false*/
Ext.define("ADM.view.base.List", {
    extend: "Ext.grid.Panel",
    alias : "widget.admbaselist",

    initComponent: function () {
        this.simpleTitle = this.title;
        this.title = Ext.util.Format.format("{0} <strong>[{1}]</strong>", this.simpleTitle, 0);
        this.store.on("load", this.onStoreLoad, this);
        this.callParent(arguments);
    },

    onStoreLoad: function (store) {
        this.setTitle(Ext.util.Format.format("{0} <strong>[{1}]</strong>", this.simpleTitle, store.count()));
    },

    getSelection: function () {
        return this.getView().getSelectionModel().getSelection();
    }
});