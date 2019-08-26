Ext.define("asSgis.store.west.SoliEnvironHistoryPoint", {
	extend: "Ext.data.TreeStore",
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'resources/data/west/SoliEnvironHistoryPoint.json',
		reader: {
			type: 'json'	
		}
	},
	constructor: function(){
		this.callParent();
	}
});