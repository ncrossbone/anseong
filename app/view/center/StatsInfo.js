Ext.define("asSgis.view.center.StatsInfo", {
	extend: "Ext.window.Window",
	xtype: "asSgis-statsInfo",
	id:"StatsInfo",
	width:1000,
	height:650,
	border:false,
	shadow:false,
	constrain: true,
	title:"통계정보",
	items:[{
		xtype:"container",//전체
		width:1000,
		height:650,
		layout:{
			type:"hbox"
		},
		items:[{
			xtype:"container",//좌
			layout:{
				type:"vbox"
			},
			items:[{
				xtype:"container",//지도이미지
				width:500,
				height:370,
				items:[{
					xtype:"image",
					style: "padding-top: 22px;",
					src:"./resources/images/ui/samplemap.png"
				}]
			},{
				xtype:"container",//그리드
				layout:{
					type:"hbox"
				},
				items:[{
					xtype:"container",//그리드1
					width:250,
					items:[{
						xtype:"label",
						cls:"window-title-text",
						text:"전체조사지점"
					},{
						xtype:"grid",
						border:false,
						width:300,
						columns:[{
							text:"구분",
							dataIndex:"flag",
							style : 'text-align:center',
							width: 115
						},{
							text:"결과",
							dataIndex:"result",
							style : 'text-align:center',
							width: 115
						}],
						store:Ext.create("Ext.data.Store",{
							fields:["flag","result"],
							data:[["오염원 지점 수","120개소"],
								  ["시설도면","359"],
								  ["인허가 문서","334"],
								  ["정화보고서","5"]]
						}),
						viewConfig: {
					        getRowClass: function(record, index) {
					        	return 'price-rise';
					        }
					    }
					}]
				},{
					xtype:"container",//그리드2
					width:250,
					items:[{
						xtype:"label",
						cls:"window-title-text",
						text:"시설별조사지점"
					},{
						xtype:"grid",
						border:false,
						width:300,
						columns:[{
							text:"구분",
							dataIndex:"flag",
							style : 'text-align:center',
							width: 115
						},{
							text:"결과",
							dataIndex:"result",
							style : 'text-align:center',
							width: 115
						}],
						store:Ext.create("Ext.data.Store",{
							fields:["flag","result"],
							data:[["특정오염토양관리대상시설","1998 개소"],
								  ["토양측정망","109개소"],
								  ["토양오염방지 조치명령지역","9 개소"],
								  ["토양실태조사","255 항목"]]
						}),
						viewConfig: {
					        getRowClass: function(record, index) {
					        	return 'price-rise';
					        }
					    }
					}]
				}]
			}]
		},{
			xtype:"container",//우
			width:550,
			items:[{
				xtype:"label",
				cls:"window-title-text",
				text:"행정구역별 조사지점"
			},{
				xtype:"container",
				height:5
			},{
				xtype:"grid",
				autoScroll:true,
				border:false,
				width:500,
				height:550,
				id:"adminArea",
				columns:[{
					text:"구분",
					dataIndex:"flag",
					width: 110,
					style : 'text-align:center'
				},{
					text:"특정오염<br/>토양",
					dataIndex:"val01",
					width: 75,
					style : 'text-align:center'
				},{
					text:"토양<br/>측정망",
					dataIndex:"val02",
					width: 75,
					style : 'text-align:center'
				},{
					text:"오염방지<br/>조치명령",
					dataIndex:"val03",
					width: 75,
					style : 'text-align:center'
				},{
					text:"토양<br/>실태조사",
					dataIndex:"val04",
					width: 75,
					style : 'text-align:center'
				},{
					text:"합계",
					dataIndex:"sum",
					width: 75,
					style : 'text-align:center'
				}],
				viewConfig: {
			        getRowClass: function(record, index) {
			        	return 'price-rise';
			        }
			    },
				store:Ext.create("Ext.data.Store",{
					fields:["flag","val01","val02","val03","val04","sum"],
					data:[["고삼면","169","0","0","6","175"],
						  ["공도읍","99","10","0","17","126"],
						  ["금광면","76","0","0","0","76"],
						  ["대덕면","157","11","1","12","181"],
						  ["미양면","264","10","0","59","333"],
						  ["보개면","86","20","0","23","129"],
						  ["삼죽면","108","16","0","5","129"],
						  ["서운면","120","0","0","12","132"],
						  ["원곡면","324","0","0","14","338"],
						  ["안성1동","23","1","0","1","25"],
						  ["안성2동","66","0","4","5","75"],
						  ["안성3동","81","21","3","27","132"],
						  ["양성면","150","0","0","19","169"],
						  ["일죽면","169","6","1","5","181"],
						  ["죽산면","106","14","0","20","140"]]
				})
			}]
		}]
	}],
	initComponent: function(){
		this.callParent();
	}
});