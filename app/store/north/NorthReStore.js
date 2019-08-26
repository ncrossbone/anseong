Ext.define("asSgis.store.north.NorthReStore", {
	extend: "Ext.data.Store",
	remoteSort: true,
	autoload: true,
	fields: ['id', 'name','geometry'],
	listeners:{
		load: function(store) {
			Ext.defer(function() {
				var queryTask = new esri.tasks.QueryTask(_API.anseongRe);
				var query = new esri.tasks.Query();
				query.returnGeometry = true;
				query.where = "ADM_CD LIKE '"+store.admCd+"%'";
				query.outFields = ['ADM_CD', 'RI_NM'];
				queryTask.execute(query,  function(results){
					var data = results.features;
					var receiveData = [];
					Ext.each(data, function(media, index) {
						receiveData.push({id:media.attributes.ADM_CD, name:media.attributes.RI_NM, geometry:media.geometry})
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
	}
});