/*global Ext: false*/
Ext.define("APP.view.Viewport", {
    extend  : "Ext.container.Viewport",
    requires: ["Ext.layout.container.Border", "APP.view.Menu", "APP.view.Content"],
    layout  : "border",
    items   : [
        {
            xtype : "appmenu",
            region: "north"
        },
        {
            xtype : "appcontent",
            region: "center"
        }
    ]
});