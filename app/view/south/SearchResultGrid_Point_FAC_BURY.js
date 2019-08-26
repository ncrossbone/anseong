Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_BURY', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_BURY',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_BURY',
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
				text : 'UID',
				dataIndex : 'UID',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '관리번호',
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
				text : '중분류',
				dataIndex : 'CO_CATEGORY2',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '조사연도_2008',
				dataIndex : 'RSC_YEAR_2008',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '조사연도_2009',
				dataIndex : 'RSC_YEAR_2009',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '조사연도_2010',
				dataIndex : 'RSC_YEAR_2010',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '조사연도_2011',
				dataIndex : 'RSC_YEAR_2011',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '조사연도_2012',
				dataIndex : 'RSC_YEAR_2012',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '조사연도_2013',
				dataIndex : 'RSC_YEAR_2013',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '매몰일자',
				dataIndex : 'BURY_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '매몰지규모(m2)',
				dataIndex : 'BURY_AREA',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '축종_돼지',
				dataIndex : 'NUM_PIG',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '축종_소',
				dataIndex : 'NUM_COW',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '축종_가금류',
				dataIndex : 'NUM_BIRD',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '축종_기타',
				dataIndex : 'NUM_ETC',
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