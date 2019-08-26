Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_SCRAP', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_SCRAP',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_SCRAP',
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
				text : '상호명',
				dataIndex : 'CO_NM',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '관할기관',
				dataIndex : 'CO_ORG',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '대분류',
				dataIndex : 'CO_CATEGORY1',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '중분류',
				dataIndex : 'CO_CATEGORY2',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '소분류',
				dataIndex : 'CO_CATEGORY3',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사업자등록번호',
				dataIndex : 'CO_UNQNO',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '폐쇄여부',
				dataIndex : 'CLOSE_YN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '휴/폐업일(년-월-일)',
				dataIndex : 'CLOSE_YEAR',
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