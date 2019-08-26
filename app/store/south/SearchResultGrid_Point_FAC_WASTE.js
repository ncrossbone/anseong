Ext.define('asSgis.store.south.SearchResultGrid_Point_FAC_WASTE', {
    extend : 'Ext.data.Store',
    //autoLoad: true,
    pageSize: 100,
    fields: [
    	'CO_NM'
    	,'CO_ORG'
    	,'CO_CATEGORY2'
    	,'CO_CATEGORY3'
    	,'CO_FAC'
    	,'CO_FAC_CLASS'
    	,'CO_KIND'
    	,'CO_STATUS'
    	,'CO_UNQNO'
    	,'SUR_AREASEC'
    	,'START_DATE'
    	,'OBJ_PLLT_ITEM'
    	,'CO_AREA'
    	,'CO_CAT'
    	,'LANDFILL_CAT_ALL'
    	,'LANDFILL_CAT_RMD'
    	,'PREV_FAC'
    	,'USE_DATE'
    	,'USE_CLOSE_DATE'
    	,'LIB_CLOSE_PLAN'
    	,'MAG_CLOSE_DATE'
    	,'MAG_CLOSE_YEAR'
    	,'LAN_WATER_CAT'
    	,'LAN_WATER_MET'
    	,'LIN_FAC'
    	,'UND_TEST_WATER'
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