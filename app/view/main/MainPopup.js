Ext.define("asSgis.view.main.MainPopup", {
	extend: "Ext.window.Window",
	xtype: "asSgis-main-popup",
	id: "mainPopup",
	header:true,
	border:false,
    items:[{
       	xtype:"container",
       	header:false,
       	
       	layout:{
    	    type:"vbox"
    	},
		//mouseover 적용
		items:[{
		    xtype:"image", //줌 +
		    id:"btn01",
		    style:"width:31px; height:31px; cursor:pointer;",
		    src:'./resources/images/ui/expand_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		},{
		    xtype:"image",
		    id:"btn02", // 줌 -
		    style:"width:31px; height:31px; margin-top:-1px; cursor:pointer;",
		    src:'./resources/images/ui/reduce_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		},{
		    xtype:"image",
		    id:"btn03", // 이동
		    style:"width:31px; height:31px; margin-top:-1px; cursor:pointer;",
		    src:'./resources/images/ui/move_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		},{
		    xtype:"image",
		    id:"btn04", //전체화면
		    style:"width:31px; height:31px; margin-top:-1px; cursor:pointer;",
		    src:'./resources/images/ui/full_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		},{
		    xtype:"image",
		    id:"btn05", //새로고침
		    style:"width:31px; height:31px; margin-top:-1px; cursor:pointer;",
		    src:'./resources/images/ui/reset_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		},{
		    xtype:"image",
		    id:"btn06", //정보
		    style:"width:31px; height:31px; margin-top:-1px; cursor:pointer;",
		    src:'./resources/images/ui/info_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		},{
		    xtype:"image",
		    id:"btn07", //자
		    style:"width:31px; height:31px; margin-top:-1px; cursor:pointer;",
		    src:'./resources/images/ui/ruler_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		},{
		    xtype:"image",
		    id:"btn08", //면적?
		    style:"width:31px; height:31px; margin-top:-1px; cursor:pointer;",
		    src:'./resources/images/ui/area_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		},{
		    xtype:"image",
		    id:"btn09", //인쇄
		    style:"width:31px; height:31px; margin-top:-1px; cursor:pointer;",
		    src:'./resources/images/ui/print_off.gif',
		    listeners: {
		        el: {
		            click: function(obj) {
		                common.groupBtnClick(obj);
		            }
		        }
		    }
		}]
    }],

	initComponent: function(){
		this.callParent();
	}
});