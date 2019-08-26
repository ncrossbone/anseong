Ext.define("asSgis.store.west.ThematicMap2", {
	extend: "Ext.data.TreeStore",
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'resources/data/west/ThematicMap2.json',
		reader: {
			type: 'json'	
		}
	},
	constructor: function(){
		this.callParent();
	}
});