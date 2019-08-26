Ext.define('asSgis.store.south.SearchResultGrid_PLLT_OBSERVE', {
    extend : 'Ext.data.Store',
    autoLoad: true,
    pageSize: 100,
	fields:[
		'PNU'
		,'SUR_CATEGORY1'
		,'SUR_CATEGORY2'
		,'SUR_HISNO'
		,'SUR_DATE'
		,'SUR_SPOTNO'
		,'SUR_SPOTNAME'
		,'SUR_AREASEC'
		,'SUR_Cd'
		,'SUR_Cu'
		,'SUR_As'
		,'SUR_Hg'
		,'SUR_Pb'
		,'SUR_Cr'
		,'SUR_Zn'
		,'SUR_Ni'
		,'SUR_F'
		,'SUR_DOP'
		,'SUR_PCBs'
		,'SUR_Si'
		,'SUR_Penol'
		,'SUR_BTEX'
		,'SUR_Ben'
		,'SUR_TOL'
		,'SUR_ETIL'
		,'SUR_CSIL'
		,'SUR_TPH'
		,'SUR_TCE'
		,'SUR_PCE'
		,'SUR_BENZO'
		,'SUR_Ph'
		,'SUR_INSEC'
		,'SUR_INDOC'
		,'SUR_TEXT'
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

				if(store.pnuNo != "all"){
					query.where = "PNU = '" + store.pnuNo + "'";
				}else{
					query.where = " 1=1 ";
				}
				
				query.outFields = ['*'];
				query.format = "JSON";
				queryTask.execute(query,  function(results){
					
					var jsonData = "";
					var string = "[";
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
					if(store.pnuNo != "all"){
						if(store.noCoId == true){
							common.pollutionPop(serachReultGrid,store.getCoId, store.noCoId);
						}
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