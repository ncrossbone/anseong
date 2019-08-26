Ext.define('asSgis.store.south.SearchResultGrid_FAC_HIS', {
    extend : 'Ext.data.Store',
    //autoLoad: true,
    pageSize: 100,
    fields: [
    	'PNU'
    	,'FAC_NO'
    	,'CO_ID'
    	,'CO_FACNO'
    	,'CO_CATEGORY1'
    	,'CO_CATEGORY2'
    	,'CO_CATEGORY3'
    	,'CO_FACNAME'
    	,'CO_FACCAP'
    	,'CO_FACUNIT'
    	,'CO_FACMATTER'
    	,'CO_FATSEC'
    	,'CO_FACDOC'
    	,'CO_FACNOTE'
    	,{
    		name: 'CO_FACUPDATE',
    	    type: 'date',
            dateFormat: 'Y.m.d'
    	}
    	,{
    		name: 'CO_FACDEL',
    	    type: 'date',
            dateFormat: 'Y.m.d'
    	}
    	,{
    		name: 'CO_FACCRE_DATE',
    	    type: 'date',
            dateFormat: 'Y.m.d'
    	}
    	,'CO_UPDN'
    	,'CO_HIGH'
    	,'CO_MET_KIND'
    	,'CO_TH'
    	,'PRE_STEP'
    	,'LEAK_PRE'
    	,'LEAK_SRC'
    	,'SPR_PRE'
    	],
    sorters: [{
    	property: 'SUR_DATE',
    	direction: 'DESC'
    }],
	listeners: {
		load: function(store) {
			Ext.defer(function() {
				var queryTask = new esri.tasks.QueryTask(_API.searchLayer+"/"+store.layerId);
				var query = new esri.tasks.Query();
				query.returnGeometry = false;
				console.info(store.pnuNo);
				if(store.pnuNo != "all"){
					query.where = "PNU = '" + store.pnuNo + "'";
				}else{
					query.where = " 1=1 ";
				}
				query.outFields = ['*'];
				query.format = "JSON";
				
				queryTask.execute(query,  function(results){
					console.info(results);
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
						var serachReultGrid = Ext.getCmp("serachReultGrid_"+store.gridName);
						serachReultGrid.setStore(store);
						
						console.info(store);
						
						var tabInfo = Ext.getCmp("tab_"+store.gridName);
						tabInfo.totalCnt = store.getCount();
						tabInfo.setTitle(tabInfo.initialConfig.title + "("+store.getCount()+")");
						
					}
					
				});
				dojo.connect(queryTask, "onError", function(err) {
					alert(err);
				});
			}, 1, this);
		}
    }
});