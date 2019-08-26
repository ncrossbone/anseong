Ext.define('asSgis.store.south.SearchResultGrid_Point_BGSOIL_P', {
    extend : 'Ext.data.Store',
    //autoLoad: true,
    pageSize: 100,
    fields: [
    	'채취_연도',
    	'시료채취',
    	'주소',
    	'토성',
    	'토지이용',
    	'지목',
    	'토지피복도',
    	'지질',
    	'지질분류',
    	'지적도상',
    	'토양오염',
    	'Cd',
    	'Cu',
    	'As_',
    	'Hg',
    	'Pb',
    	'Cr6_',
    	'Zn',
    	'Ni',
    	'F',
    	'Cr',
    	'도심여부'
    	],
	listeners: {
		load: function(store) {
			Ext.defer(function() {
				
				var queryTask = new esri.tasks.QueryTask(_API.searchLayer+"/"+store.layerId);
				var query = new esri.tasks.Query();
				query.returnGeometry = false;
				query.where = "X_Y = '" + store.UID + "'";
				query.outFields = ['*'];
				query.format = "JSON";
				queryTask.execute(query,  function(results){
					
					var jsonData = "";
					var string = "[";
					if(results.features.length > 0){
						for(var i = 0 ; i < results.features.length; i++){
							if(i == results.features.length-1){
								string += JSON.stringify(results.features[i].attributes);
							}else{
								string += JSON.stringify(results.features[i].attributes);
								string += ",";
							}
						}
						string += ']';
						jsonData = Ext.util.JSON.decode(string);
						store.setData(jsonData);
						var serachReultGrid = Ext.getCmp("serachReultGrid_Point_"+store.gridName);
						serachReultGrid.setStore(store);
						
					}
					
					var tabInfo = Ext.getCmp("tab_"+store.gridName);
					tabInfo.totalCnt = store.getCount();
					tabInfo.setTitle(tabInfo.initialConfig.title + "("+store.getCount()+")");
					
				});
				dojo.connect(queryTask, "onError", function(err) {
					alert(err);
				});
			}, 1, this);
		}
    }
});