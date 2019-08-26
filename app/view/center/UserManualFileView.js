Ext.define("asSgis.view.center.UserManualFileView", {
	extend: "Ext.window.Window",
	xtype: "asSgis-UserManualFileView",
	id:"userManualFileView",
	width:430,
	height:450,
	title:"사용자 메늎얼",
	constrain: false,
	border:false,
	shawdow:false,
	items:[{
		xtype: 'component',
		height: '100%',
		id: 'viewComponentManual'
	}],
	initComponent: function(){
		this.callParent();
	}
});