Ext.define("asSgis.store.west.SoliEnvironHistory2", {
	extend: "Ext.data.TreeStore",
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'resources/data/west/SoliEnvironHistory2.json',
		reader: {
			type: 'json'	
		}
	},
	constructor: function(){
		this.callParent();
	}
});