/**
 * @class Ext.ux.Exporter.Button
 * @extends Ext.Button
 * @author Nige White, with modifications from Ed Spencer, with modifications from iwiznia with modifications from yogesh
 * Internally, this is just a link.
 * Pass it either an Ext.Component subclass with a 'store' property, or componentQuery of that component or just a store or nothing and it will try to grab the first parent of this button that is a grid or tree panel:
 * new Ext.ux.Exporter.ExporterButton({component: someGrid});
 * new Ext.ux.Exporter.ExporterButton({store: someStore});
 * new Ext.ux.Exporter.ExporterButton({component: '#itemIdSomeGrid'});
 * @cfg {Ext.Component} component The component the store is bound to
 * @cfg {Ext.data.Store} store The store to export (alternatively, pass a component with a getStore method)
 */
Ext.define("asSgis.exporter.excelFormatter.ExporterButton", {
    extend: "Ext.Button",
    id: "exporterButton",
    requires: ['asSgis.exporter.Exporter', 'asSgis.exporter.FileSaver'],
    alias: "widget.exporterbutton",

    config: {
        /**
         * @cfg {String} text
         * The button text to be used as innerHTML (html tags are accepted).
         */
        text: 'Download',

        /**
         * @cfg {String} format
         * The Exported File formatter 
         */
        format: 'csv',

        /**
         * @cfg {Boolean} preventDefault
         * False to allow default action when the {@link #clickEvent} is processed.
         */
        preventDefault: false,

        /**
         * @cfg {Number} saveDelay
         * Increased buffer to avoid clickEvent fired many times within a short period.
         */
        saveDelay: 300,

        //iconCls: 'save',

        /**
         * @cfg {Boolean} remote
         * To remotely download file only if browser doesn't support locally 
         * otherwise it will try to open in new window
         */
        remote: false,
        /**
         * @cfg {String} title
         * To set name to eported file, extension will be appended based on format  
         */
        title: 'export',


        component: null,
        
        store: null

    },

    initComponent: function() {
        var me = this;

        //Ext.ux.exporter.ExporterButton.superclass.constructor.call(me, config);
        
        var component = me.getComponent();
        var store = me.getStore();

        me.on("afterrender", function() { //wait for the button to be rendered, so we can look up to grab the component
            //debugger;
            if (component) {
                component = !Ext.isString(component) ? component : Ext.ComponentQuery.query(component)[0];
            }
            me.setCompSt(store || component || me.up("gridpanel") || me.up("treepanel"));
        });
        //this.addEvents('start', 'complete');
        
        me.callParent();
    },

    onClick: function(e) {
    	console.info(e);
        var me = this,
            blobURL = "",
            format = me.getFormat(),
            title = me.getTitle(),
            remote = me.getRemote(),
            dt = new Date(),
            link = me.el.dom,
            res, fullname;
        
        debugger;

        me.fireEvent('start', me);
        res = Ext.ux.exporter.Exporter.exportAny(me.component, format, {
            title: title
        });
        filename = title + "_" + Ext.Date.format(dt, "Y-m-d h:i:s") + "." + res.ext;
        Ext.ux.exporter.FileSaver.saveAs(res.data, res.mimeType, res.charset, filename, link, remote, me.onComplete, me);

        me.callParent(arguments);
    },

    setCompSt: function(compSt) {
        var me = this;
        me.setComponent(compSt);
        me.setStore(!compSt.is ? compSt : compSt.getStore());// only components or stores, if it doesn't respond to is method, it's a store
    },

    onComplete: function() {
        this.fireEvent('complete', this);
    }
});