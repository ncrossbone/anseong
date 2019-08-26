Ext.define("asSgis.view.north.North", {
	extend: "Ext.container.Container",
	xtype: "asSgis-north",
	id: "northContainer",
	header:false,
	height:80,
	width:Ext.getBody().getWidth(),
	layout:{
		type:"hbox"
	},
	style:"border-bottom: 1px solid #d4d4d4;",
	items:[{
		xtype:"container",
		style:"background:#fff; padding:20px 30px;",
		width:280,
		height:80,
		items:[{
			xtype:"image",
			src:"./resources/images/ui/logo.gif",
			autoEl: {
			      tag: 'a',
			      href: './'
			      //add any other attributes to the 'a' tag as needed
			  }
		}]
	},{
		xtype:"container",
		id:"northContainerDtlMain",
		height:80,
		width:Ext.getBody().getWidth() - 280,
		layout:{
			type:"vbox"
		},
		items:[{
			xtype:"container",
			id:"northContainerDtl01",
			height:40,
			width:Ext.getBody().getWidth() - 280,
			style:"background:#00284b;",
			layout:{
				type:"hbox",
				align: "middle",
                pack: "end"
			},
			items:[{
				xtype:"image",
				cls:"onOffBtn",
				src:'./resources/images/ui/mapon.png',
				listeners:{  
			        afterrender: function(c){
			            c.el.on('click', function(a,b){
			            	
			            	var coreMap = Ext.getCmp("_mapDiv_");
			            	var bm = coreMap.map.getLayer("layer0");
			            	if(bm.visible == false){
			            		bm.setVisibility(true);
			            		c.setSrc("./resources/images/ui/mapon.png");
			            	}else{
			            		bm.setVisibility(false);
			            		c.setSrc("./resources/images/ui/mapoff.png");
			            	}
			            	
			            	
			            	
			            });
			        }
			    }
			},{
				xtype:"label",
				style:"margin: 0px 0px 0px 150px; font-size:13px; letter-spacing:-1px; color:#fff; background: url('./resources/images/ui/guide.png') no-repeat left center; padding-left: 18px; cursor:pointer;",
				text:"이용안내",
				listeners:{
					 render: function(c){
						c.getEl().on('click', function(){
							var manual = Ext.getCmp("userManualFileView");
							if(manual == undefined){
								manual = Ext.create("asSgis.view.center.UserManualFileView",{
									constrain :true
								});
								manual.show();
							}
							var viewComponentManual = Ext.getCmp("viewComponentManual");
							
							viewComponentManual.setHtml(
								"<iframe src=\"./resources/data/user_manual.pdf\" width=\"100%\" height=\"100%\"></iframe>"
							)
						})
					}
				}
			},{
				xtype:"container",
				width:50
			}]
		},{
			xtype:"container",
			style:"background: #f6f7fa;",
			id:"northContainerDtl02",
			width:Ext.getBody().getWidth() - 280,
			height:40,
			layout:{
				type:"hbox",
				align:"center"
			},
			items:[{
				xtype:"image",
				style:"width:12px; height:15px; margin:0 5px 0 20px;",
				src:'./resources/images/ui/search_position.png'
			},{
				xtype:"combo",
				id:"cbo01",
				editable:false,
				width:100,
				value:"경기도"
			},{
				xtype:"image",
				style:"width:6px;height:11px; margin:0 5px;",
				src:'./resources/images/ui/arrow.png'
			},{
				xtype:"combo",
				id:"cbo02",
				editable:false,
				width:100,
				value:"안성시"
			},{
				xtype:"image",
				style:"width:6px;height:11px; margin:0 5px;",
				src:'./resources/images/ui/arrow.png'
			},{
				xtype:"combo",
				id:"cbo03",
				//store: 'northDongStore',
				store: Ext.create('asSgis.store.north.NorthDongStore'),
				displayField: 'name',
				valueField: 'id',
				editable:false,
				width:100,
				listeners:{
					select:function(combo,record){
						var admCd = record.data.id.substring(0,8);
						var reStore = Ext.create('asSgis.store.north.NorthReStore');
						reStore.admCd = admCd;
						reStore.load();
						var cbo04 = Ext.getCmp("cbo04");
						cbo04.setStore(reStore);
						cbo04.setValue("");
						
						
					}
				}
			},{
				xtype:"image",
				style:"width:6px;height:11px; margin:0 5px;",
				src:'./resources/images/ui/arrow.png'
			},{
				xtype:"combo",
				id:"cbo04",
				displayField: 'name',
				valueField: 'id',
				editable:false,
				width:100,
				store: Ext.create('asSgis.store.north.NorthReStore')/*,
				listeners:{
					select:function(combo,record){
						common.areaComboSelect(combo,record);
					}
				}*/
			},{
				xtype:"checkbox",
				labelSeparator: '',
				id:"chkSan",
				style:"margin:0 5px 0 10px;",
				boxLabel:"<span style='font-family: notokr-bold;'>산</span>"
			},{
				xtype:"textfield",
				id:"ziBunCode"
			},{
				xtype:"image",
				style:"width:35px;height:30px; margin-left:3px; cursor:pointer;",
				src:'./resources/images/ui/search_icon.gif',
				listeners: {  
			        afterrender: function(c){
			            c.el.on('click', function(){
			            	
			            	var cbo04 = Ext.getCmp("cbo04").getValue();
			            	
			            	var cbo03 = Ext.getCmp("cbo03");
			            	
			            	var pnu = null;
			            	
			            	if(cbo03.rawValue.substring(cbo03.rawValue.length-1,cbo03.rawValue.length) == "동"){
			            		pnu = cbo03.getValue();		            		
			            	}else{
			            		if(cbo04 == null){
				            		alert("동리까지 선택하셔야 합니다");
				            		return;
				            	}else{
				            		pnu = cbo04;
				            	}
			            	}
			            	
			            	
			            	var chkSan = Ext.getCmp('chkSan').getValue() ? 2 : 1;
			            	
			            	var ziBunCode = Ext.getCmp("ziBunCode").getValue();
			            	if(ziBunCode == ""){
			            		alert("상세주소를 입력해 주시기 바랍니다");
			            		return;
			            	}
			            	
			            	var inbu = false;
			        		
			        		if(ziBunCode.indexOf("-") > -1){
			        			inbu = true;
			        		}
			        		var bonCd = null;  //본번
			        		var buCd = null;   //부번
			        		var bbCd = null;
			        		if(inbu){
			        			bonCd = ziBunCode.substring(0,ziBunCode.indexOf("-"));
			        			bonCd = bonCd + '';
			        			bonCd = bonCd.length >= 4 ? bonCd : new Array(4 - bonCd.length + 1).join('0') + bonCd ;
			        			//부번
			        			buCd = ziBunCode.substring(ziBunCode.indexOf("-")+1,ziBunCode.length);
			        			buCd = buCd + '';
			        			buCd = buCd.length >= 4 ? buCd : new Array(4 - buCd.length + 1).join('0') + buCd ;
			        			bbCd = bonCd + buCd;
			        		}else{
			        			bonCd = ziBunCode;
			        			bonCd = bonCd + '';
			        			bonCd = bonCd.length >= 4 ? bonCd : new Array(4 - bonCd.length + 1).join('0') + bonCd ;
			        			buCd = "0000";
			        			bbCd = bonCd + buCd;
			        		}
			            	
			        		
			        		var pnuCd = null;
			        		pnuCd = pnu + chkSan + bbCd;
			        		
			        		
			        		common.mapClick(pnuCd,"search");
			        		
			        		common.areaComboSelect(pnuCd);
			            	
			            });
			        }
			    }
				
			}/*,{
				xtype: 'button',
				listeners:{
					click:function(){
						var searchResultWindow = Ext.getCmp('searchResultWindow');
						var searchResultTabPanel = Ext.getCmp('searchResultTabPanel');
						console.info(searchResultTabPanel);
						
						//Ext.getCmp('TAB_PANEL_ID').getComponent('TAB_2').tab.hide();
						//console.info(Ext.getCmp('searchResultTabPanel').getComponent());
						Ext.getCmp('searchResultTabPanel').getComponent('tab_PLLT_SPECIFY').tab.hide();
						
						var tabPanel = searchResultWindow.down('#searchResultTabPanel');
						tabPanel.down('#tab_PLLT_SPECIFY').hide();
						
						var tab_PLLT_SPECIFY = Ext.getCmp("tab_PLLT_SPECIFY");
						console.info(tab_PLLT_SPECIFY);
						tab_PLLT_SPECIFY.setHidden(true);
					}
				}
			}*/]

		}]
	}],
	initComponent: function(){
		this.callParent();
	}
});
