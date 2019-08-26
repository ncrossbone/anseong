Ext.define("asSgis.store.north.NorthDongStore", {
	extend: "Ext.data.Store",
	remoteSort: true,
	//autoload: true,
	storeId: "northDongStore",
	fields: ['id', 'name'],
	listeners:{
		load: function(store) {
			Ext.defer(function() {
				var queryTask = new esri.tasks.QueryTask(_API.anseongDong);
				var query = new esri.tasks.Query();
				query.returnGeometry = false;
				query.where = "ADM_CD LIKE '4155%'";
				query.outFields = ['ADM_CD', 'DONG_NM'];
				queryTask.execute(query,  function(results){
					var data = results.features;
					var receiveData = [];
					Ext.each(data, function(media, index) {
						receiveData.push({id:media.attributes.ADM_CD, name:media.attributes.DONG_NM})
					});
					
					receiveData.sort(function(a, b) { // 오름차순
					    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
					});
					
					store.setData(receiveData);
				});
				dojo.connect(queryTask, "onError", function(err) {
					alert(err);
				});
			}, 1, this);
		}
	},
	
	initComponent: function(){
		this.callParent();
		this.on('render', this.loadStore, this);
	}
});