Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_TRAFFIC', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_TRAFFIC',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_TRAFFIC',
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
				text : '업체명',
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
				text : '소분류',
				dataIndex : 'CO_CATEGORY3',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '대표자',
				dataIndex : 'CO_MAN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '정비형태',
				dataIndex : 'FIX_FORM',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '설치일자(년월일)',
				dataIndex : 'SETUP_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '대지면적(㎡)',
				dataIndex : 'AREA_LAN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '건물면적(㎡)',
				dataIndex : 'AREA_BLD',
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