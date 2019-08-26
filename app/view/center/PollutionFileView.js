Ext.define("asSgis.view.center.PollutionFileView", {
	extend: "Ext.window.Window",
	xtype: "asSgis-PollutionFileView",
	id:"pollutionFileView",
	width:430,
	height:450,
	title:"사업장 추가자료",
	constrain: false,
	border:false,
	shawdow:false,
	items:[{
		xtype: 'component',
		height: '100%',
		id: 'viewComponent'
	}],
	initComponent: function(){
		this.callParent();
	}
});