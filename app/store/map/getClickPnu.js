Ext.define("asSgis.store.map.getClickPnu", {
	extend: "Ext.data.Store",
	remoteSort: true,
	autoload: true,
	storeId: "northDongStore",
	listeners:{
		load: function(store) {
			Ext.defer(function() {
				var queryTask = new esri.tasks.QueryTask(_API.searchLayer +"/" + store.layerId);
				var query = new esri.tasks.Query();
				query.geometry = store.evt.mapPoint;
				query.outFields = ["*"];
				queryTask.execute(query,  function(results){
					if(results.features.length > 0){
						console.info(results);
					}
				});
				dojo.connect(queryTask, "onError", function(err) {
					alert(err);
				});
			}, 1, this);
		}
	},
	
	initComponent: function(){
		this.callParent();
	}
});