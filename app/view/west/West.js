Ext.define("asSgis.view.west.West", {
	extend: "Ext.panel.Panel",
	xtype: "asSgis-west",
	id: "westContainer",
	y:80,
	width:297,
	autoScroll: true,
	collapsible: true,
    collapseDirection: 'left',
    headerPosition: 'right',
    border:false,
    style:"overflow: hidden;",
    header:{
    	width:17,
    	style:"background:transparent;",
    	titlePosition:1
    },
    layout:{
		type:'accordion',
		 animate: true,
	     multi: true,
         fill: false
	},
	defaults: {
        titleCollapse: false
    },
	items:[{
		xtype:"treepanel",
		title:"<span class='westTitle'>토양오염 이력정보</span><a style='color: #fff; background: #454c5e; padding: 0px 5px; margin-left: 30px; font-size: 14px; font-family: notokr-regular; cursor:pointer;' onclick='common.onClickStaticBtn()'>통계정보</a>",
		/*title:"<span class='westTitle'>토양환경 이력 선택</span>",*/
		store:Ext.create("asSgis.store.west.SoliEnvironHistory"),
		id:"soliEnvironHis1",
		scroll: false,
		rootVisible: false,
		viewConfig: {
			style: { overflow: 'auto', overflowX: 'hidden' }
		},
		useArrows: false,
		lines:true,
		bufferedRenderer: false,
		collapsed: false,
		listeners: {
			checkchange:function(node,checked){
				
				node.eachChild(function(n) {
	                node.cascadeBy(function(n){
	                    n.set('checked', checked);
                    });
	            });
				
				common.searchTreePanel1Controll(node);
				
				if(_saveMapPoint != undefined){
					common.mapClick(_saveMapPoint);
				}
			},
			expand: {
				fn: function(el){
					Ext.getCmp("soliEnvironHis2").setHidden(false);
					Ext.getCmp("soliEnvironHis3").setHidden(false);
	    		}
	        },
	        collapse:{
	    		fn: function(el){
	    			Ext.getCmp("soliEnvironHis2").setHidden(true);
	    			Ext.getCmp("soliEnvironHis3").setHidden(true);
	    		}
	    	},
		}
	},{
		xtype:"treepanel",
		header: {
			hidden: true
		},
		id: "soliEnvironHis4",
		store:Ext.create("asSgis.store.west.SoliEnvironHistory2"),
		scroll: false,
		rootVisible: false,
		viewConfig: {
			style: { overflow: 'auto', overflowX: 'hidden' }
		},
		useArrows: false,
		lines:false,
		bufferedRenderer: false,
		collapsed: false,
		listeners: {
			checkchange:function(node,checked){
				node.eachChild(function(n) {
	                node.cascadeBy(function(n){
	                    n.set('checked', checked);
                    });
	            });
				
				common.searchTreePanel1Control2(node);
				
				if(_saveMapPoint != undefined){
					common.mapClick(_saveMapPoint);
				}
				
				
			}
		}
	},{
		xtype:"treepanel",
		header: {
			hidden: true
		},
		id: "soliEnvironHis2",
		store:Ext.create("asSgis.store.west.SoliEnvironHistoryPoint"),
		scroll: false,
		rootVisible: false,
		viewConfig: {
			style: { overflow: 'auto', overflowX: 'hidden' }
		},
		useArrows: false,
		lines:false,
		bufferedRenderer: false,
		collapsed: false,
		listeners: {
			checkchange:function(node,checked){
				node.eachChild(function(n) {
	                node.cascadeBy(function(n){
	                    n.set('checked', checked);
                    });
	            });
				
				common.searchTreePanel2Controll(node);
				
				
			}
		}
	},{
		xtype:"treepanel",
		header: {
			hidden: true
		},
		id: "soliEnvironHis3",
		store:Ext.create("asSgis.store.west.SoliEnvironHistoryTry"),
		scroll: false,
		rootVisible: false,
		viewConfig: {
			style: { overflow: 'auto', overflowX: 'hidden' }
		},
		useArrows: false,
		lines:false,
		bufferedRenderer: false,
		collapsed: false,
		listeners: {
			checkchange:function(node,checked){
				node.eachChild(function(n) {
	                node.cascadeBy(function(n){
	                    n.set('checked', checked);
                    });
	            });
				
				common.searchTreePanel3Controll(node);
				
				
			}
		}
	},{
		xtype:"treepanel",
		title:"<span class='westTitle'>주제도</span>",
		store:Ext.create("asSgis.store.west.ThematicMap3"),
		id:"thematicMap3",
		border:false,
		scroll: false,
		rootVisible: false,
		useArrows: false,
		lines:false,
		bufferedRenderer: false,
		collapsed: false,
		listeners: {
			checkchange:function(node,checked){
				
				node.eachChild(function(n) {
	                node.cascadeBy(function(n){
	                    n.set('checked', checked);
                    });
	            });
				
				common.dynamicTreePanel3Controll(node);
			},
			expand: {
				fn: function(el){
					//Ext.getCmp("thematicMap2").setCollapsed(false);
					Ext.getCmp("thematicMap1").setHidden(false);
					Ext.getCmp("thematicMap2").setHidden(false);
	    		}
	        },
	        collapse:{
	    		fn: function(el){
	    			Ext.getCmp("thematicMap1").setHidden(true);
	    			Ext.getCmp("thematicMap2").setHidden(true);
	    			/*Ext.getCmp("thematicMap2").setCollapsed(true);
	    			console.info(Ext.getCmp("thematicMap2"));*/
	    		}
	    	},
		}
	},{
		xtype:"treepanel",
		header: {
			hidden: true
		},
		id:"thematicMap1",
		store:Ext.create("asSgis.store.west.ThematicMap1"),
		scroll: false,
		rootVisible: false,
		useArrows: false,
		lines:false,
		bufferedRenderer: false,
		collapsed: false,
		listeners: {
			checkchange:function(node,checked){
				
				node.eachChild(function(n) {
	                node.cascadeBy(function(n){
	                    n.set('checked', checked);
                    });
	            });
				
				common.dynamicTreePanel1Controll(node);
			}
		}
		
	},{
		xtype:"treepanel",
		header: {
			hidden: true
		},
		id:"thematicMap2",
		store:Ext.create("asSgis.store.west.ThematicMap2"),
		scroll: false,
		rootVisible: false,
		useArrows: false,
		lines:false,
		bufferedRenderer: false,
		collapsed: false,
		listeners: {
			checkchange:function(node,checked){
				
				node.eachChild(function(n) {
	                node.cascadeBy(function(n){
	                    n.set('checked', checked);
                    });
	            });
				
				common.dynamicTreePanel2Controll(node);
			}
		}
		
	}],
	initComponent: function(){
		this.callParent();
		this.setHeight(Ext.getBody().getHeight()-80);
	},
	listeners:{
    	collapse:{
    		fn: function(el){
    			Ext.get("westContainer_header-innerCt").setStyle("background","url('./resources/images/ui/left_off.png') no-repeat");
    		}
    	},
    	expand:{
    		fn: function(el){
    			Ext.get("westContainer_header-innerCt").setStyle("background","url('./resources/images/ui/left_on.png') no-repeat");
    		}
    	}

    }
});