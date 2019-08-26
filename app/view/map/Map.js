Ext.define("asSgis.view.map.Map", {
	extend: "Ext.container.Container",
	id: "mapContainer",
	xtype: "asSgis-map",
	y: 80,
	width: "100%",
	style:"overflow: hidden;",
	requires:["asSgis.view.map.CoreMap"],
	header:false,
	items:[{
		xtype:"asSgis-coremap"
	}],
	initComponent: function(){
		this.callParent();
		this.setWidth(Ext.getBody().getWidth());
		this.setHeight(Ext.getBody().getHeight()-80);
		//this.on("resize", this.setControlSize); // 이벤트 생성
	}

});