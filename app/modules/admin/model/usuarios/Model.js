/*global Ext: false*/
Ext.define("ADM.model.usuarios.Model", {
    extend: "APP.model.BaseModel",

    fields: [
        "nombre", "apellido1", "apellido2"
    ],

    proxy: {
        type     : "baseproxy",
        localUrl : "data/adm/usuarios.json",
        remoteUrl: "usuarios"
    }
});