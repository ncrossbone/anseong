Ext.define("asSgis.view.map.CoreMap", {
	extend: "Ext.container.Container",
	xtype: "asSgis-coremap",
	id: "_mapDiv_",
	map:null,
	dynamicLayerAdmin:null, // 주제도 dynamiclayer
	searchLayerAdmin:null, // 검색 searchlayer
	geometryService:null,
	history :[],
	history_now :-1,
	width: "100%",
	height: "100%",
	requires: [
   	    'asSgis.map.DynamicLayerAdmin',
   	    'asSgis.map.SearchLayerAdmin'
   	],
	
	initComponent: function(){
		this.callParent();
		this.mapRendered();
	},
	
	mapRendered: function(){
		var me = this;
		
		require(["dojo/dom",
		         "dojo/dom-attr",
		         "dojo/_base/array",
		         "dojo/dom-construct",
		         "esri/Color",
		         "dojo/number",
		         "dojo/parser",
		         "dijit/registry",
		         "esri/dijit/Popup",
		         "esri/config",
		         "esri/map",
		         "esri/graphic",
		         "esri/InfoTemplate",
		         "esri/geometry/normalizeUtils",
		         "esri/tasks/GeometryService",
		         "esri/tasks/BufferParameters",
		         "esri/toolbars/draw",
		         "esri/symbols/SimpleMarkerSymbol",
		         "esri/symbols/SimpleLineSymbol",
		         "esri/symbols/SimpleFillSymbol",
		         "esri/symbols/PictureMarkerSymbol",
		         "esri/symbols/Font",
		         "esri/Color",
		         "esri/symbols/TextSymbol",
		         "esri/renderers/ClassBreaksRenderer",
		         "esri/tasks/AreasAndLengthsParameters",
		         "esri/tasks/LengthsParameters",
		         "dijit/layout/BorderContainer",
		         "dijit/layout/ContentPane",
		         "dojox/uuid/generateRandomUuid",
		         "esri/tasks/ProjectParameters"],  
		         function() {
	        	esri.config.defaults.io.proxyUrl = "./proxy/proxy.jsp";
	    		esri.config.defaults.io.alwaysUseProxy = true;
	    		esri.config.defaults.io.postLength = 1;
	    		Ext.defer(function() {
	    			
	    			
   				me.map = new esri.Map('_mapDiv_', {
			        		isDoubleClickZoom:false,
			    	     	isPan:true,
			    	 		logo:false,
			    	 		//slider: true,
			    	 		slider: false,
			    	 		autoResize: true
			    	 		
			    });
		        
   				
   				console.info(_API);
   				me.geometryService = new esri.tasks.GeometryService(_API.geometryServer);
   				
   				
				var timerId = window.setInterval(function(){
		        	
					me.baseMapInit();
					//me.map.setLevel(1+6);
					
					me.dynamicLayerAdmin = Ext.create('asSgis.map.DynamicLayerAdmin', me.map); // dynamicLayer 주제도
					me.searchLayerAdmin = Ext.create('asSgis.map.SearchLayerAdmin', me.map, me.geometryService);  // searchLayer  검색
					var dongStore = Ext.create('asSgis.store.north.NorthDongStore');
					dongStore.load();
		            window.clearInterval(timerId);
	
				}, 1);
		   		dojo.connect(me.map, "onClick", common.mapClick);    	
		   		dojo.connect(me.map, "onExtentChange", me.onExtentChange);
		        	
    		}, 1000, this);
	        	
		});
	},
	
	//extent change 이벤트
	onExtentChange: function(extent,a,b,obj,c){
		
		var me = this;
		common.setTooltipXY();
		//7레벨을 벗어날시 초기 zoomlevel로 돌리기
		if(obj.level < 7){
			common.setInitZoomLevel(extent,a,b,obj,c);
		}
	},
	
	
	baseMapInit: function(){
		var me = this;
		dojo.declare('CustomMapsLayer', esri.layers.TiledMapServiceLayer, {
		    constructor: function(opts) {
		      opts = opts || {};
		      this.spatialReference = new esri.SpatialReference({wkid: 102100});
		      this.tileInfo = new esri.layers.TileInfo({
		        rows: 256, cols: 256, dpi: 96,
		        origin: {x: -20037508.342787, y: 20037508.342787},
		        spatialReference: {wkid: 102100},
		        lods: [
						{level:0, resolution:156543.033928,    scale:591657527.591555},
						{level:1, resolution:78271.5169639999, scale:295828763.795777},
						{level:2, resolution:39135.7584820001, scale:147914381.897889},
						{level:3, resolution:19567.8792409999, scale:73957190.948944},
						{level:4, resolution:9783.93962049996, scale:36978595.474472},
						{level:5, resolution:4891.96981024998, scale:18489297.737236},
						{level:6, resolution:2445.98490512499, scale:9244648.868618},
						{level:7, resolution:1222.99245256249, scale:4622324.434309}, //start
						{level:8, resolution:611.49622628138,  scale:2311162.217155},
						{level:9, resolution:305.748113140558, scale:1155581.108577},
						{level:10,resolution:152.874056570411, scale:577790.554289},
						{level:11,resolution:76.4370282850732, scale:288895.277144},
						{level:12,resolution:38.2185141425366, scale:144447.638572},
						{level:13,resolution:19.1092570712683, scale:72223.819286},
						{level:14,resolution:9.55462853563415, scale:36111.909643},
						{level:15,resolution:4.77731426794937, scale:18055.954822},
						{level:16,resolution:2.38865713397468, scale:9027.977411},
						{level:17,resolution:1.19432856685505, scale:4513.988705},
						{level:18,resolution:0.597164283559817,scale:2256.994353}
						//{level:19,resolution:0.298582141647617,scale:1128.497176}
		          ]
		      });
		      
		      me.tileInfo = this.tileInfo;
		      
		      me.fullExtent = this.fullExtent = new esri.geometry.Extent({
		    	  xmin: 12728905.446270483,
		    	  ymin: 3409091.461517964,
		    	  xmax: 15766818.698435722,
		    	  ymax: 5441704.9176768325,
		          spatialReference: {
		        	  wkid: 102100
		          }
		      });
		      /*this.initialExtent = new esri.geometry.Extent({
		    	  xmin: 12728905.446270483,
		    	  ymin: 3409091.461517964,
		    	  xmax: 15766818.698435722,
		    	  ymax: 5441704.9176768325,
		          spatialReference: {
		        	  wkid: 102100
		          }
		      });*/
		      this.initialExtent = new esri.geometry.Extent({
		    	  xmax:14196343.51528886,
		    	  xmin:14135499.64077394,
		    	  ymax:4456316.967538697,
		    	  ymin:4421767.430753843,
		          spatialReference: {
		        	  wkid: 102100
		          }
		      });
		      this.loaded = true;
		      this.onLoad(this);
		    },
		    getTileUrl: function(level, row, col) {
		    	var newrow = row + (Math.pow(2, level) * 47);
      			var newcol = col + (Math.pow(2, level) * 107);
		    	return esri.config.defaults.io.proxyUrl + "?http://xdworld.vworld.kr:8080/2d/Base/201301/" + level + "/" + col + "/" + row + ".png";
		    	//return "http://112.218.1.243:20080/2d/Base/201411/" + level + "/" + level + "/" + col + "/" + row + ".png";
		    }	
		  });
		var baseMap = new CustomMapsLayer();
		
		this.map.addLayer(baseMap);
	},
});