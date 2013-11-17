/*global Ext: false*/
Ext.define("ADM.view.base.Wrapper", {
    extend: "Ext.panel.Panel",
    alias : "widget.admbasewrapper",
    layout: {
        type          : "card",
        deferredRender: true
    },
    master: null,
    detail: null,


    initComponent: function () {
        var masterObj, detailObj, dockedItems;

        if (this.master === null || this.detail === null) {
            throw "You must define master and detail part of the wrapper";
        }

        //dockedItems for master
        dockedItems = [
            {
                xtype: "toolbar",
                dock : "top",
                items: [
                    {
                        text: "Añadir..."
                    },
                    {
                        text: "Editar..."
                    },
                    {
                        xtype: "tbseparator"
                    },
                    {
                        text: "Eliminar"
                    }
                ]
            }
        ];
        if (Ext.isString(this.master)) {
            masterObj = Ext.create(this.master, {
                dockedItems: dockedItems
            });
        } else {
            masterObj = Ext.create(this.master.type, this.getConfig(this.master, dockedItems));
        }

        //dockedItems for detail
        dockedItems = [
            {
                xtype: "toolbar",
                dock : "top",
                items: [
                    {
                        text  : "Volver",
                        action: "back"
                    },
                    {
                        xtype: "tbseparator"
                    },
                    {
                        text: "Añadir..."
                    },
                    {
                        text: "Editar..."
                    },
                    {
                        xtype: "tbseparator"
                    },
                    {
                        text: "Eliminar"
                    }
                ]
            }
        ];

        if (Ext.isString(this.detail)) {
            detailObj = Ext.create(this.detail, {
                dockedItems: dockedItems
            });
        } else {
            detailObj = Ext.create(this.detail.type, this.getConfig(this.detail, dockedItems));
        }

        this.items = [masterObj, detailObj];
        this.current = 0;

        this.callParent(arguments);
    },

    getConfig: function (config, dockedItems) {
        config.dockedItems = config.dockedItems ? dockedItems.concat(config.dockedItems) : dockedItems;
        return config;
    },

    activateMaster: function () {
        if (this.current !== 0) {
            this.getLayout().prev();
            this.current = 0;
        }
    },

    activateDetail: function () {
        if (this.current === 0) {
            this.getLayout().next();
            this.current = 1;
        }
    },

    getCurrent: function () {
        return this.getLayout().getActiveItem();
    }
});