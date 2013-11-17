/*global Ext: false, document: false*/
Ext.define("APP.config.Config", {
    singleton    : true,
    contextPath  : '',  //contextPath of the application
    locale       : null,
    i18nPath     : '/locale', //path of the i18n file. If null, we won't load it.
    debug        : false,
    roles        : {},
    localDataMode: true, //poner a true cuando se quiere trabajar con los archivos de datos estáticos de la carpeta data

    initI18n: function () {
        var doc = document, scriptElem = doc.createElement('script');
        scriptElem.src = this.contextPath + this.i18nPath + '/i18n-' + this.locale + '.js';
        doc.getElementsByTagName('head')[0].appendChild(scriptElem);
    },

    servicesPath: '/ssrlservices',

    getContextPath: function () {
        return this.contextPath;
    },

    setContextPath: function (c) {
        this.contextPath = c;
    },

    setRoles: function (arrRoles) {
        var len = arrRoles.length;
        while (len--) {
            this.roles[arrRoles[len]] = true;
        }
    },

    hasRoles: function () {
        var len = arguments.length;
        while (len--) {
            if (!this.roles[arguments[len]]) {
                return false;
            }
        }
        return true;
    },

    hasAnyRoles: function () {
        var len = arguments.length;
        while (len--) {
            if (this.roles[arguments[len]]) {
                return true;
            }
        }
        return false;
    },


    getLocale: function () {
        if (this.locale === null || this.locale === '') {
            return null;
        }
        return this.locale.toLowerCase();
    },

    setLocale: function (l) {
        this.locale = l.toLowerCase();
        //if our own i18n file is not null, we'll load it synchronously
        if (this.i18nPath !== null) {
            this.initI18n();
        } else {
            try {
                if (this.debug && console) {
                    console.warn(['You\'re setting locale to "' + l + '", ',
                        'but you haven\'t defined the i18n filepath. ',
                        'You must set the i18nPath variable if you want to localize your application.'].join(''));
                }
            } catch (e) {
                //nothing to do: console is not defined...
            }
        }
    },

    debugMode: this.debug,

    getJSONDateFormat: function () {
        if (this.frontDev) {
            return 'd/m/Y';
        } else {
            return 'dmYHis';
        }
    },

    isLocalDataMode: function () {
        return this.localDataMode;
    },

    getServicesPath: function () {
        return this.contextPath + this.servicesPath;
    },

    getUTC: function (d) {
        return Ext.Date.parse(Ext.Date.format(d, "dmYHi") + "+0000", "dmYHiO");
    }

});