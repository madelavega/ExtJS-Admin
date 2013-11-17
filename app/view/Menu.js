/*global Ext: false*/
Ext.define("APP.view.Menu", {
    extend: "Ext.container.Container",
    alias : "widget.appmenu",
    items : [
        {
            xtype: "button",
            text : "Menu",
            menu : {
                items: [
                    {
                        text : "Admin",
                        scope: "ADM",
                        menu: [
                            {
                                text  : "Usuarios",
                                option: "usuarios"
                            }
                        ]

                    }
                ]
            }
        }
    ]
});