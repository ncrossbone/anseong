Ext.define('asSgis.map.SearchLayerAdmin', {
	map:null, 
	id: "searchLayer",
	
	layer:null,
	layer_2:null,
	pointLayer:null,
	tryLayer:null,
	geometryService:null,
	
	layers:[],
	layers_2:[],
	pointlayers:[],
	trylayers:[],
	
	commonLayers:[],
	constructor: function(map, geometryService) {
        var me = this;
        me.map = map;
        me.geometryService = geometryService;
        
        me.layer = new esri.layers.ArcGISDynamicMapServiceLayer(_API.searchLayer);
		me.layer.id = "SearchLayer";
		me.map.addLayer(me.layer);
		me.layer.setVisibleLayers([]);
		me.layer.visible = true;
		
		me.layer_2 = new esri.layers.ArcGISDynamicMapServiceLayer(_API.searchLayer);
		me.layer_2.id = "SearchLayer_2";
		me.map.addLayer(me.layer_2);
		me.layer_2.setVisibleLayers([]);
		me.layer_2.visible = true;
		
		
		me.pointLayer = new esri.layers.ArcGISDynamicMapServiceLayer(_API.searchLayer);
		me.pointLayer.id = "SearchPointLayer";
		me.map.addLayer(me.pointLayer);
		me.pointLayer.setVisibleLayers([]);
		me.pointLayer.visible = true;
		
		me.tryLayer = new esri.layers.ArcGISDynamicMapServiceLayer(_API.searchLayer);
		me.tryLayer.id = "SearchTryLayer";
		me.map.addLayer(me.tryLayer);
		me.tryLayer.setVisibleLayers([]);
		me.tryLayer.visible = true;
		
		
		me.symbol = new esri.symbol.PictureMarkerSymbol({
 		    "angle": 0,
 		    "yoffset": 22,
 		    "type": "esriPMS",
 		    "url": "./resources/images/symbol/spot.png",
 		    "contentType": "image/png",
 		    "width": 20,
 		    "height": 48
 		});
		
		me.symGrpLayer = new esri.layers.GraphicsLayer();
		me.symGrpLayer.id = "symGrpLayer";
		me.symGrpLayer.visible = true;
		me.map.addLayer(me.symGrpLayer);
		
		
		me.sourceGraphicLayer = new esri.layers.GraphicsLayer();
		me.sourceGraphicLayer.id="sourceGraphic";
		me.map.addLayer(me.sourceGraphicLayer);
		
		
		
		
		
		
		//me.simpleFillSymbol= new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, me.smpLineSymbol, new dojo.Color([0,0,255,0.1]));
		
		//dynamiclayer on/off fire Event
		asSgis.getApplication().addListener('searchLayerOnOff', me.searchLayerOnOffHandler, me);
		asSgis.getApplication().addListener('searchLayerOnOff_2', me.searchLayerOnOffHandler_2, me);
		asSgis.getApplication().addListener('searchPointLayerOnOff', me.searchPointLayerOnOfffHandler, me);
		asSgis.getApplication().addListener('searchTryLayerOnOff', me.searchTryLayerOnOfffHandler, me);
		
		asSgis.getApplication().addListener('selectSymbol', me.selectSymbolHandler, me);
		//searchPointLayerOnOff
		asSgis.getApplication().addListener('bufferPoint', me.bufferPointHandler, me);
		//bufferPoint
		
    },
    
    bufferPointHandler: function(evt){
    	
    	var me = this;
    	
    	if(me.pointLayer.visibleLayers.length == 0 && me.tryLayer.visibleLayers.length == 0 ){
    		
    		return;
    	}else{
    		if(evt.type == undefined){
    			var queryTask = new esri.tasks.QueryTask(_API.anseongGeo);
    			var query = new esri.tasks.Query();
    			query.returnGeometry = true;
    			query.outSpatialReference = {"wkid":102100};
    			query.where = "PNU = '"+evt+"'";
    			query.outFields = ["*"];
    			queryTask.execute(query,  function(result){
    				
    				if(result.features.length == 0){
    					return;
    				}else{
    					
    					me.searchBufferResult(result.features[0].geometry);
	
    				}
    			});
    		}else{
    			me.searchBufferResult(evt);
    		}
    		
    		
    	}
	    
    	
    	
    	
    },
    
    searchBufferResult: function(evt){
    	
    	var me = this;
    	
    	var params = new esri.tasks.BufferParameters();
	    params.geometries  = [ evt ];
	    params.distances = [ 20 ];
	    params.outSpatialReference = new esri.SpatialReference({wkid:102100});
	    params.bufferSpatialReference = new esri.SpatialReference({wkid:102080});
	    params.unit = esri.tasks.GeometryService.UNIT_METER;
	    
	    me.geometryService.buffer(params, function(result){
	    	
	    	var arrayInfo = [];
	    	//me.commonLayers
	    	//for(var i = 0 ; i < me.pointLayer.visibleLayers.length; i++){
	    	for(var i = 0 ; i < me.commonLayers.length; i++){
	    		//var queryTask = new esri.tasks.QueryTask(_API.searchLayer+"/" + me.pointLayer.visibleLayers[i]);
	    		var queryTask = new esri.tasks.QueryTask(_API.searchLayer+"/" + me.commonLayers[i]);
	    		
	    		
				var query = new esri.tasks.Query();
				query.geometry = result[0];			
				query.returnGeometry = true;
				query.outFields = ["*"];
				arrayInfo.push(queryTask.execute(query));
	    	}
	    	
	    	var	defList = new dojo.DeferredList(arrayInfo);
			defList.then(function(){
				var results = [];
				try{
					for(var i=0; i<arguments[0].length; i++){
						var resultValue = arguments[0][i][1].features;
						if(resultValue[0] != undefined){
							//resultValue[0].attributes.layerNum = me.pointLayer.visibleLayers[i];
							resultValue[0].attributes.layerNum = me.commonLayers[i];
						}
						results = results.concat(resultValue);

					}	
				}catch(e){
					console.log(e);
				}
				
				
 
				
				
				
				
				if(results[0] != undefined){
					var point = new esri.geometry.Point(results[0].geometry.x, results[0].geometry.y, results[0].geometry.spatialReference);
					var popCtl = Ext.getCmp("popSiteInfo");
					
					var value , addr ,button = "";
					
					
					if(results[0].attributes.레이어그룹명 != undefined && results[0].attributes.레이어그룹명 == "토양배경수질"){
						button = "  <a href=\"#\"><img src=\"./resources/images/popup/search_p.gif\" onClick=\"common.testResult('"+results[0].attributes.X_Y+"','21');\" /></a> "+
						"  <a href=\"#\"><img src=\"./resources/images/popup/search_s.gif\" onClick=\"common.testResult('"+results[0].attributes.X_Y+"','22');\" /></a> ";
					}else{
						button = "  <a href=\"#\"><img src=\"./resources/images/popup/btn_data.gif\" onClick=\"common.testResult('"+results[0].attributes.UID+"','"+results[0].attributes.layerNum+"');\" /></a> ";
					}
					
					
					me.map.centerAt(point);
					
					// 팝업 띄워져있으면 닫기
					if(popCtl != undefined){
						popCtl.close();
					}
					Ext.create("Ext.window.Window", {
						//renderTo: Ext.getBody(),
						header: false,
						id: 'popSiteInfo',
						shadow: false,
						plain: true, // 요게 있어야 background: transparent 먹음..
						point: point, // 지점 포인트 정보
						width: 380,
						height: 215,
						cls: 'window_popSiteInfo',
						isMove: false,
						style: 'border-style: none !important; background: transparent none !important; height: 700px;',
						layout: {
							type: 'absolute'
						},
						html: 
							"<!doctype html>																																									"+
							"<html lang=\"ko\">                                                                                                                                                                 "+
							"<head>                                                                                                                                                                             "+
							"<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />                                                                                                          "+
							"<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge, chrome=1\" />                                                                                                              "+
							"<title>KRF-TOOLTIP</title>                                                                                                                                                         "+
							"<!--[if lt ie 9]>                                                                                                                                                                  "+
							"<script src=\"./resources/js/html5shiv.js\"></script>                                                                                                                                          "+
							"<![endif]-->                                                                                                                                                                       "+
							"<link href=\"./resources/css/BasicSet.css\" rel=\"stylesheet\" type=\"text/css\" />                                                                                                            "+
							"<style type=\"text/css\">                                                                                                                                                          "+
							"#toolTip { width: 370px; height: 230px; padding: 15px 15px 15px 10px; background: url(./resources/images/popup/Tooltip.png) no-repeat; position: relative; font-size: 12px; font-family:'NanumGothic'; }       "+
							"#toolTip> a.close { width: 25px; height: 25px; background: #FFF url(./resources/images/popup/btn_close.png) center center no-repeat; position: absolute; right: 15px; top: 15px; border: 1px solid #aaa; } "+
							"#toolTip> h1 { font-family: 'malgunbd'; font-size: 20px; margin: 0px; padding: 0px; letter-spacing: -1px; }                                                                        "+
							"#toolTip> dl { margin: 30px 0px 5px 0px; }                                                                                                                                         "+
							"#toolTip> dl:after { content:\"\"; clear:both; display:block; *zoom:1;}                                                                                                            "+
							"#toolTip> dl dt { float: left; font-weight: bold; color: #000; }                                                                                                                   "+
							"#toolTip> dl dd { margin: 0px; color: #434343; text-indent: 5px; }                                                                                                                 "+
							"#toolTip> ul { width: 362px; position: absolute; left: 15px; top: 143px; margin: 0px; padding: 0px; list-style: none; list-position: inside; }                                                                                                          "+
							"#toolTip> ul> li { }                                                                                                                                                               "+
							"#toolTip> ul> li> a { float: left; }                                                                                                                                          "+
							"</style>                                                                                                                                                                           "+
							"</head>                                                                                                                                                                            "+
							"<body>                                                                                                                                                                             "+
							"<div id=\"toolTip\">                                                                                                                                                               "+
							"	<h1>토양오염관리대상시설</h1>"+
							"   <a class=\"close\" onclick=\"common.closePopSiteInfo();\" href=\"#\"></a>" +
							"<dl>                                                                                                                                                                              "+
							"    	 <dt>분류 :</dt>                                                                                                                                                               "+
							"        <dd>"+results[0].attributes.대분류+"</dd> <br>                                                                                                                                            "+
							"        <dt>주소 :</dt>                                                                                                                                                            "+
							"        <dd>"+results[0].attributes.법정동주소+"</dd>                                                                                       "+
							"    </dl>                                                                                                                                                                          "+
							"    <ul>                                                                                                                                                                           "+
							"    	<li style=\"float: left;\">                                                                                                                                                   "+
							button +
							"       </li>                                                                                                                                                                   "+
							"        </li>                                                                                                                                                                      "+
							"    </ul>                                                                                                                                                                          "+
							"</div>                                                                                                                                                                             "+
							"</body>                                                                                                                                                                            "+
							"</html>                                                                                                                                                                            "
					}).show();
					
					me.symGrpLayer.clear();
					common.setTooltipXY(evt);
					
				}else{
					common.closePopSiteInfo();
				}
				
		    });
	    	
	    	
	    });
    },
    
    searchLayerOnOffHandler: function(selectInfo){
    	var me = this;
    	if(selectInfo.childNodes.length > 0 ){
    		if(selectInfo.data.checked == false){
    			me.layers = [];
    			me.layer.setVisibleLayers(me.layers);
    			common.closeWindow();
    			me.symGrpLayer.clear();
				
    		}else{
    			me.layers = [];
    			for(var i = 0 ; i < selectInfo.childNodes.length; i++){
    				me.layers.push(selectInfo.childNodes[i].data.id);
        		}
    			me.layer.setVisibleLayers(me.layers);
				
    		}
    	}else{
    		me.layerOnOff(selectInfo);
    	}
		
    },

    layerOnOff: function(selectInfo){
    	var me = this;
    	var idIdx = me.layers.map(function(layer){
    		return layer.toString();
    	}).indexOf(selectInfo.data.id);
    	
    	if(idIdx == -1){
    		me.layers.push(parseInt(selectInfo.data.id));
    	}else{
    		me.layers.splice(idIdx,1);
    	}
		
		me.layer.setVisibleLayers(me.layers);
		
		
		if(me.layers.length == 0){
			_saveMapPoint = undefined;
			common.closeWindow();
			me.symGrpLayer.clear();
		}
    },
    
    searchLayerOnOffHandler_2: function(selectInfo){
    	var me = this;
    	if(selectInfo.childNodes.length > 0 ){
    		if(selectInfo.data.checked == false){
    			me.layers_2 = [];
    			me.layer_2.setVisibleLayers(me.layers_2);
    			common.closeWindow();
    			me.symGrpLayer.clear();
				
    		}else{
    			me.layers_2 = [];
    			for(var i = 0 ; i < selectInfo.childNodes.length; i++){
    				me.layers_2.push(selectInfo.childNodes[i].data.id);
        		}
    			me.layer_2.setVisibleLayers(me.layers_2);
				
    		}
    	}else{
    		me.layerOnOff_2(selectInfo);
    	}
		
    },
    
    
    layerOnOff_2: function(selectInfo){
    	var me = this;
    	var idIdx = me.layers_2.map(function(layer_2){
    		return layer_2.toString();
    	}).indexOf(selectInfo.data.id);
    	
    	if(idIdx == -1){
    		me.layers_2.push(parseInt(selectInfo.data.id));
    	}else{
    		me.layers_2.splice(idIdx,1);
    	}
		
		me.layer_2.setVisibleLayers(me.layers_2);
		
		
		if(me.layers.length == 0){
			_saveMapPoint = undefined;
			common.closeWindow();
			me.symGrpLayer.clear();
		}
    },
    
    //point레이어와 tryangle 레이어 하나로 합친 배열생성
    commonLayer: function(type){
    	
    	var me = this;
    	me.commonLayers = me.pointLayer.visibleLayers.concat(me.tryLayer.visibleLayers);
    },
    
    searchPointLayerOnOfffHandler: function(selectInfo){
    	var me = this;
    	if(selectInfo.childNodes.length > 0 ){
    		if(selectInfo.data.checked == false){
    			me.pointlayers = [];
    			me.pointLayer.setVisibleLayers(me.pointlayers);
    			
    			me.commonLayer("point");
    		}else{
    			me.pointlayers = [];
    			for(var i = 0 ; i < selectInfo.childNodes.length; i++){
    				me.pointlayers.push(selectInfo.childNodes[i].data.id);
        		}
    			me.pointLayer.setVisibleLayers(me.pointlayers);
    			me.commonLayer("point");
    		}
    	}else{
    		me.pointLayerOnOff(selectInfo);
    	}
    	
    },
    
    pointLayerOnOff: function(selectInfo){
    	var me = this;
    	var idIdx = me.pointlayers.map(function(layer){
    		return layer.toString();
    	}).indexOf(selectInfo.data.id);
    	
    	if(idIdx == -1){
    		me.pointlayers.push(parseInt(selectInfo.data.id));
    	}else{
    		me.pointlayers.splice(idIdx,1);
    	}
    	me.pointLayer.setVisibleLayers(me.pointlayers);
    	me.commonLayer("point");
    },
    
    
    searchTryLayerOnOfffHandler: function(selectInfo){
    	var me = this;
    	if(selectInfo.childNodes.length > 0 ){
    		if(selectInfo.data.checked == false){
    			me.trylayers = [];
    			me.tryLayer.setVisibleLayers(me.trylayers);
    			me.commonLayer("try");
    		}else{
    			me.trylayers = [];
    			for(var i = 0 ; i < selectInfo.childNodes.length; i++){
    				me.trylayers.push(selectInfo.childNodes[i].data.id);
        		}
    			me.tryLayer.setVisibleLayers(me.trylayers);
    			me.commonLayer("try");
    		}
    	}else{
    		me.tryLayerOnOff(selectInfo);
    	}
    	
    },
    
    tryLayerOnOff: function(selectInfo){
    	var me = this;
    	var idIdx = me.trylayers.map(function(layer){
    		return layer.toString();
    	}).indexOf(selectInfo.data.id);
    	
    	if(idIdx == -1){
    		
    		me.trylayers.push(parseInt(selectInfo.data.id));
    	}else{
    		me.trylayers.splice(idIdx,1);
    	}
    	
    	me.tryLayer.setVisibleLayers(me.trylayers);
    	me.commonLayer("try");
    },
    
    selectSymbolHandler: function(evt){
    	var me = this;
    	
    	var graphic = null;
    	graphic = new esri.Graphic(evt, me.symbol);
    	me.symGrpLayer.clear();
    	me.symGrpLayer.add(graphic);
    	
    	Ext.defer(function(){
			me.symGrpLayer.clear();
			//me.map.removeLayer(obj);
		}, 10000, this);
    	
    }
});