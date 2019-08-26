Ext.define("asSgis.view.south.SearchResult", {
	extend: "Ext.window.Window",
	xtype: "asSgis-searchResult",
	id:"SearchResult",
	width:1500,
	height:350,
	y:600,
	title:"검색결과",
	border:false,
	shadow:false,
	items:[{
		xtype:"tabpanel",
		border:false,
		tabBarPosition: "top",
		items: [{
			title:"토양정화명령부지(142)"
		},{
			title:"토양오염실태조사(42)"
		},{
			title:"특정토양오염관리대상시설"
		}]
	}],
	initComponent: function(){
		this.callParent();
	}
});