Ext.define('asSgis.map.DynamicLayerAdmin', {
	map:null, 
	id: "dynamicLayer",
	layer1:null,
	layers1:[],
	
	layer2:null,
	layers2:[],
	
	layer3:null,
	layers3:[24],
	
	
	
	anSeongLyaer:null,
	
	constructor: function(map) {
        var me = this;
        me.map = map;
        me.layer1 = new esri.layers.ArcGISDynamicMapServiceLayer(_API.dynamicLayer);
		me.layer1.id = "DynamicLayer";
		me.map.addLayer(me.layer1);
		me.layer1.setVisibleLayers([]);
		me.layer1.visible = true;
		
		
        me.layer2 = new esri.layers.ArcGISDynamicMapServiceLayer(_API.dynamicLayer);
		me.layer2.id = "DynamicLayer2";
		me.map.addLayer(me.layer2);
		me.layer2.setVisibleLayers([]);
		me.layer2.visible = true;
		
		me.layer3 = new esri.layers.ArcGISDynamicMapServiceLayer(_API.searchLayer);
		me.layer3.id = "DynamicLayer3";
		me.map.addLayer(me.layer3);
		me.layer3.setVisibleLayers([24]);
		me.layer3.visible = true;
		 
		//_API.anSeongDynamicLayer
		
		//ADM_CD: 4155000000

		
		/*var defaultSymbol = new esri.symbol.SimpleFillSymbol().setStyle(esri.symbol.SimpleFillSymbol.STYLE_NULL);
        defaultSymbol.outline.setStyle(esri.symbol.SimpleLineSymbol.STYLE_NULL);
		
		var renderer = new esri.renderer.UniqueValueRenderer(defaultSymbol, "ADM_CD");
		
		var featurelayer = new esri.symbol.SimpleFillSymbol().setColor(new esri.Color([0, 0, 0, 0]));
		featurelayer.setOutline(new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([255,0,0]), 2));   
		renderer.addValue("4155000000", featurelayer);
		
		var featureLayer = new esri.layers.FeatureLayer(_API.anSeongDynamicLayer);
		featureLayer.setRenderer(renderer);
		me.map.addLayer(featureLayer);*/
		
		
		//dynamiclayer on/off fire Event
		asSgis.getApplication().addListener('dynamicLayer1OnOff', me.dynamicLayer1OnOffHandler, me);
		asSgis.getApplication().addListener('dynamicLayer2OnOff', me.dynamicLayer2OnOffHandler, me);
		asSgis.getApplication().addListener('dynamicLayer3OnOff', me.dynamicLayer3OnOffHandler, me);
		
    },
    
    dynamicLayer1OnOffHandler: function(selectInfo){
    	var me = this;
    	if(selectInfo.childNodes.length > 0 ){
    		if(selectInfo.data.checked == false){
    			me.layers1 = [];
    			me.layer1.setVisibleLayers(me.layers1);
    		}else{
    			me.layers1 = [];
    			for(var i = 0 ; i < selectInfo.childNodes.length; i++){
    				me.layers1.push(selectInfo.childNodes[i].data.id);
        		}
    			
    			me.layer1.setVisibleLayers(me.layers1);
    		}
    	}else{
    		me.layer1OnOff(selectInfo);
    	}
    },
    
    layer1OnOff: function(selectInfo){
    	var me = this;
    	
    	var idIdx = me.layers1.map(function(layer){
    		return layer.toString();
    	}).indexOf(selectInfo.data.id);
    	
    	if(idIdx == -1){
    		me.layers1.push(parseInt(selectInfo.data.id));
    	}else{
    		me.layers1.splice(idIdx,1);
    	}
    	
		me.layer1.setVisibleLayers(me.layers1);
		
    },
    
    dynamicLayer2OnOffHandler: function(selectInfo){
    	var me = this;
    	if(selectInfo.childNodes.length > 0 ){
    		if(selectInfo.data.checked == false){
    			me.layers2 = [];
    			me.layer2.setVisibleLayers(me.layers2);
    		}else{
    			me.layers2 = [];
    			for(var i = 0 ; i < selectInfo.childNodes.length; i++){
    				me.layers2.push(selectInfo.childNodes[i].data.id);
        		}
    			
    			me.layer2.setVisibleLayers(me.layers2);
    		}
    	}else{
    		me.layer2OnOff(selectInfo);
    	}
    },
    
    layer2OnOff: function(selectInfo){
    	var me = this;
    	
    	var idIdx = me.layers2.map(function(layer){
    		return layer.toString();
    	}).indexOf(selectInfo.data.id);
    	
    	if(idIdx == -1){
    		me.layers2.push(parseInt(selectInfo.data.id));
    	}else{
    		me.layers2.splice(idIdx,1);
    	}
    	
		me.layer2.setVisibleLayers(me.layers2);
		
    },
    
    dynamicLayer3OnOffHandler: function(selectInfo){
    	var me = this;
    	if(selectInfo.childNodes.length > 0 ){
    		if(selectInfo.data.checked == false){
    			me.layers3 = [];
    			me.layer3.setVisibleLayers(me.layers3);
    		}else{
    			me.layers3 = [];
    			for(var i = 0 ; i < selectInfo.childNodes.length; i++){
    				me.layers3.push(selectInfo.childNodes[i].data.id);
        		}
    			
    			me.layer3.setVisibleLayers(me.layers3);
    		}
    	}else{
    		me.layer3OnOff(selectInfo);
    	}
    },
    
    layer3OnOff: function(selectInfo){
    	var me = this;
    	
    	var idIdx = me.layers3.map(function(layer){
    		return layer.toString();
    	}).indexOf(selectInfo.data.id);
    	if(idIdx == -1){
    		me.layers3.push(parseInt(selectInfo.data.id));
    	}else{
    		me.layers3.splice(idIdx,1);
    	}
    	
		me.layer3.setVisibleLayers(me.layers3);
		
    },
});