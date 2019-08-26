Ext.define("asSgis.view.center.PollutionDetailPop", {
	extend: "Ext.window.Window",
	xtype: "asSgis-pollutionDetailPop",
	id:"PollutionDetailPop",
	width:430,
	height:450,
	title:"오염원 상세정보",
	constrain: false,
	border:false,
	shawdow:false,
	items:[{
		xtype:"tabpanel",
		border:false,
		id:"popTab",
		tabBarPosition: "top",
		items: [{
			title:"기본정보",
			id:"mainInfo",
			border:false,
			items:[{
				xtype:"container",
				border:false,
				layout:{
					type:'table',
					columns: 2
				},
				items : [{
					html : '주소',
					bodyStyle:"background:#eaeff4; padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-top:1px solid #dbdbdb !important; border-bottom:1px solid #dbdbdb !important; border-right:1px solid #dbdbdb !important;",
					border:false,
					height:30,
					width: 120
				}, {
					id:'infoAddr',
					height:30,
					width: 280,
					bodyStyle:"padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important; border-top:1px solid #dbdbdb !important;",
					border:false
				}, {
					html : '지목',
					bodyStyle:"background:#eaeff4; padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important; border-right:1px solid #dbdbdb !important;",
					border:false,
					height:30,
					width: 120
				}, {
					id:'infoJimok',
					height:30,
					width: 280,
					bodyStyle:"padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important;",
					border:false
				}, {
					html : '면적',
					bodyStyle:"background:#eaeff4; padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important; border-right:1px solid #dbdbdb !important;",
					border:false,
					height:30,
					width: 120
				}, {
					id:'infoArea',
					height:30,
					width: 280,
					bodyStyle:"padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important;",
					border:false
				}]
			},{
				xtype:"container",
				height: 10
			},{
				xtype:"label",
				cls:"window-title-text",
				text:"이력정보"
			},{
				xtype:"container",
				height: 5
			},{
				xtype:"grid",
				border:false,
				id:'infoRecord',
				autoWidth:true,
				columns : [{
					text : '변동일자',
					dataIndex : 'CO_UPDATE_DATE',
					align: 'left',
					style: 'text-align:left',
					width : "30%"
				},{
					text : '변동사유',
					dataIndex : 'RESON',
					align: 'left',
					style: 'text-align:left',
					width : "30%"
				},{
					text : '변경내용',
					dataIndex : 'CO_UPDATE_INFO',
					align: 'left',
					style: 'text-align:left',
					width : "30%"
				}]
			}]
		},{
			title:"사업장정보",
			id:"subInfo",
			disabled: true,
			items:[{
				xtype:"container",
				width:430,
				border:false,
				layout:{
					type:'table',
					columns: 2
				},
				items : [{
					html : '주소',
					bodyStyle:"background:#eaeff4; padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-top:1px solid #dbdbdb !important; border-bottom:1px solid #dbdbdb !important; border-right:1px solid #dbdbdb !important;",
					border:false,
					height:30,
					width: 120
				}, {
					id:'infoAddr1',
					height:30,
					width: 280,
					bodyStyle:"padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important; border-top:1px solid #dbdbdb !important;",
					border:false
				}, {
					html : '지목',
					bodyStyle:"background:#eaeff4; padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important; border-right:1px solid #dbdbdb !important;",
					border:false,
					height:30,
					width: 120
				}, {
					id:'infoJimok1',
					height:30,
					width: 280,
					bodyStyle:"padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important;",
					border:false
				}, {
					html : '면적',
					bodyStyle:"background:#eaeff4; padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important; border-right:1px solid #dbdbdb !important;",
					border:false,
					height:30,
					width: 120
				}, {
					id:'infoArea1',
					height:30,
					width: 280,
					bodyStyle:"padding:5px 10px; font-family: notokr-bold; letter-spacing:-1px; border-bottom:1px solid #dbdbdb !important;",
					border:false
				}]
			},{
				xtype:"container",
				height: 10
			},{
				xtype:"label",
				cls:"window-title-text",
				text:"사업장 정보"
			},{
				xtype:"container",
				height: 5
			},{
				xtype:"grid",
				id:'coInfoRecord',
				autoScroll:true,
				border:false,
				height: 170,
				autoWidth:true,
				columns : [{
					text : '변경일자',
					dataIndex : 'CHG_DAY',
					align: 'right',
					style: 'text-align:center',
					width : '33%'
				},{
					text : '말소일자',
					dataIndex : 'END_DAY',
					align: 'right',
					style: 'text-align:center',
					width : '33%'
				},{
					text : '사업장이름',
					dataIndex : 'CO_NAME',
					align: 'right',
					style: 'text-align:center',
					width : '33%'
				}],
				listeners:{
					cellclick: function(thisGrid, rowIndex, columnIndex, e) {
						var searchResultWindow = Ext.getCmp("searchResultWindow");
						searchResultWindow.show();
						
						//사업장 정보에서 클릭했을시 검색결과 hidden
						var comp = Ext.getCmp('searchResultTabPanel').items.items;
						for(var a = 0 ; a < comp.length; a++){
							Ext.getCmp('searchResultTabPanel').getComponent(comp[a].id).tab.show();
						}
						
					}
				}
			},{
				xtype:"label",
				cls:"window-title-text",
				text:"사업장 추가자료"
			},{
				xtype:"combo",
				id:"imgCombo",
				displayField: 'fileClass',
				valueField: 'fileName',
				hiddenName : 'fileType',
				editable:false,
				width : '100%',
				listeners:{
					select: function(combo,record){
						
						var pollutionFileView = Ext.getCmp("pollutionFileView");
						console.info(pollutionFileView);
						if(pollutionFileView == undefined){
							pollutionFileView = Ext.create("asSgis.view.center.PollutionFileView",{
								constrain :true
							});
							pollutionFileView.show();
						}
						
						var viewComponent = Ext.getCmp("viewComponent");
						if(combo.valueCollection.items[0].data.fileName.substring(combo.valueCollection.items[0].data.fileName.length-3,combo.valueCollection.items[0].data.fileName.length) == "pdf"){
							viewComponent.setHtml(
									"<iframe src=\"./resources/DOC/"+combo.valueCollection.items[0].data.folderName+"/"+combo.valueCollection.items[0].data.fileName+"\" width=\"100%\" height=\"100%\"></iframe>"
								)
						}else{
							viewComponent.setHtml(
									"<img src=\"./resources/DOC/"+combo.valueCollection.items[0].data.folderName+"/"+combo.valueCollection.items[0].data.fileName+"\" width=\"100%\" height=\"100%\"></img>"
								)
						}
					}
					
				}
			}]
		}]
	}],
	initComponent: function(){
		this.callParent();
	}
});