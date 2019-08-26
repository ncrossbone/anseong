Ext.define('asSgis.view.south.SearchResultGrid_Point_BGSOIL_S', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_BGSOIL_S',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_BGSOIL_S',
			autoScroll:true,
			height: 215,
			plugins: 'gridfilters',
			listeners: {
				filterchange : function( store, filters, eOpts){
					//filter change 이벤트시 카운팅
					common.tabCounting(store);
				}
			},
			columns : [ {
				text : '체취연도',
				dataIndex : '채취_연도',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '시료채취',
				dataIndex : '시료채취',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '주소',
				dataIndex : '주소',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '토성',
				dataIndex : '토성',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '토지이용',
				dataIndex : '토지이용',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '지목',
				dataIndex : '지목',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '토지피복도',
				dataIndex : '토지피복도',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '지질',
				dataIndex : '지질',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '지질분류',
				dataIndex : '지질분류',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '지적도상',
				dataIndex : '지적도상',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '토양오염',
				dataIndex : '토양오염',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'Cd',
				dataIndex : 'Cd',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'Cu',
				dataIndex : 'Cu',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'As_',
				dataIndex : 'As_',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'Hg',
				dataIndex : 'Hg',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'Pb',
				dataIndex : 'Pb',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'Cr6_',
				dataIndex : 'Cr6_',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'Zn',
				dataIndex : 'Zn',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'Ni',
				dataIndex : 'Ni',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'F',
				dataIndex : 'F',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : 'Cr',
				dataIndex : 'Cr',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '도심여부',
				dataIndex : '도심여부',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}]
		}]
	}],
	initComponent: function(){
		this.callParent();
	}
});