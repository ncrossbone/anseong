Ext.define('asSgis.store.south.SearchResultGrid_Point_FAC_TOXIC', {
    extend : 'Ext.data.Store',
    //autoLoad: true,
    pageSize: 100,
    fields: [
    	'CO_NM'
    	,'CO_ORG'
    	,'CO_CATEGORY2'
    	,'CO_CATEGORY3'
    	,'CO_STATUS'
    	,'CO_UNQNO'
    	,'CO_ITEM_NM'
    	,'ALL_CAP_YEAR'
    	,'CO_SIZE'
    	,'ALL_SAVE_STORAGE'
    	,'MAKE_NM_EN'
    	,'MAKE_NM_KR'
    	,'MAKE_NO'
    	,'USE_NM_EN'
    	,'USE_NM_KR'
    	,'USE_NO'
    	,'SAVE_NM_EN'
    	,'SAVE_NM_KR'
    	,'SAVE_NO'
    	,'CO_CAP'
    	],
	listeners: {
		load: function(store) {
			Ext.defer(function() {
				var queryTask = new esri.tasks.QueryTask(_API.searchLayer+"/"+store.layerId);
				var query = new esri.tasks.Query();
				query.returnGeometry = false;
				query.where = "UID = '" + store.UID + "'";
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