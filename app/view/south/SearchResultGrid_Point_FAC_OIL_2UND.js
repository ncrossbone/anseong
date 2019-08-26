Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_OIL_2UND', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_OIL_2UND',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_OIL_2UND',
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
				text : '탱크번호또는명칭',
				dataIndex : 'TANK_INFO',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '탱크_설치일',
				dataIndex : 'TANK_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '탱크저장품명',
				dataIndex : 'TANK_ITEM',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '오염물질종류(품목)',
				dataIndex : 'PLLT_KIND',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '저장용량(L)',
				dataIndex : 'TANK_CAP',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '지상또는지하',
				dataIndex : 'LAND',
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
				text : '폐쇄여부',
				dataIndex : 'CO_FACDEL',
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
				text : '신고번호',
				dataIndex : 'CO_REGNO',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '설치연월일',
				dataIndex : 'SETUP_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '저장탱크수',
				dataIndex : 'TANK_NUM',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '총저장용량',
				dataIndex : 'CO_CAP',
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