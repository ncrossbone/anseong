Ext.define("asSgis.view.main.Main", {
	extend: "Ext.container.Container",
	xtype: "asSgis-main",
	header:false,
	border:false,
	requires:[
			  "asSgis.view.map.Map",
			  "asSgis.view.north.North",
			  "asSgis.view.west.West"],
	layout:{
		type:"absolute"
	},
	items: [{
		xtype:"asSgis-map"
	},{
		xtype:"asSgis-north"
	},{
		xtype:"asSgis-west"
	}],
	initComponent: function(){
		this.callParent();
		this.setHeight(Ext.getBody().getHeight()-80);
		var MainPopup = Ext.create("asSgis.view.main.MainPopup");
		MainPopup.hide();
		
		Ext.EventManager.onWindowResize( this.onBrowserResize, this );
	},
	onBrowserResize: function(width,height) {
		var map = Ext.getCmp("mapContainer");
		map.setWidth(width);
		map.setHeight(height - 80);
		
		/*this.setWidth(Ext.getBody().getWidth());
		this.setHeight(Ext.getBody().getHeight()-80);*/
		
		var west = Ext.getCmp("westContainer");
		west.setHeight(Ext.getBody().getHeight()-80);
		
		var northDtl01 = Ext.getCmp("northContainerDtl01");
		northDtl01.setWidth(width - 280);
		var northDtl02 = Ext.getCmp("northContainerDtl02");
		northDtl02.setWidth(width - 280);
		var northContainerDtlMain = Ext.getCmp("northContainerDtlMain");
		northContainerDtlMain.setWidth(width - 280);
		var north = Ext.getCmp("northContainer");
		north.setWidth(width);
		
		if(Ext.getCmp('PollutionDetailPop')!=undefined){
			Ext.getCmp('PollutionDetailPop').setPosition(width - 450 ,height - 900 );
		}
		if(Ext.getCmp('searchResultWindow')!=undefined){
			var windowY = map.getHeight() - 300;
			Ext.getCmp('searchResultWindow').setWidth(map.getWidth()-west.getWidth()+20);
			Ext.getCmp('searchResultWindow').setHeight(map.getHeight()-windowY);
			Ext.getCmp('searchResultWindow').setPosition(west.width-15 ,windowY);
		}
	}
});