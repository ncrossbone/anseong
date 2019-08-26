Ext.define("asSgis.store.west.SoliEnvironHistoryTry", {
	extend: "Ext.data.TreeStore",
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'resources/data/west/SoliEnvironHistoryTry.json',
		reader: {
			type: 'json'	
		}
	},
	constructor: function(){
		this.callParent();
	}
});