/*global Ext: false*/
Ext.define("ADM.controller.BaseController", {
    extend: "APP.controller.ModuleBaseController",

    init: function () {
        this.control({
            "admbaselist"                                                           : {
                beforerender: this.loadList
            },
            "admbasewrapper > admbasemaster > admbaselist"                          : {
                itemdblclick: this.openDetail
            },
            "admbasewrapper > admbasemaster > admbasecriteria button[action=search]": {
                click: this.search
            },
            "admbasewrapper > admbasedetail toolbar button[action=back]"            : {
                click: this.backFromDetail
            }
        });
    },

    loadList: function (list) {
        list.getStore().load();
    },

    openDetail: function (list) {
        list.up("admbasewrapper").activateDetail();
    },

    search: function (btn) {
        var name, criteria, values, list, filter = [], store;

        criteria = btn.up("admbasecriteria");
        list = criteria.up("admbasemaster").down("admbaselist");
        store = list.getStore();

        store.clearFilter();
        values = criteria.getValues();
        for (name in values) {
            if (values.hasOwnProperty(name)) {
                filter.push({
                    property: name,
                    value   : values[name]
                });
            }
        }
        store.filter(filter);
    },

    backFromDetail: function (btn) {
        btn.up("admbasewrapper").activateMaster();
    }
});