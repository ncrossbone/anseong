Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_GOLF', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_GOLF',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_GOLF',
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
				text : '등록일',
				dataIndex : 'REG_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '개장일',
				dataIndex : 'OPEN_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '회사명',
				dataIndex : 'CO_NM',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '운영상태',
				dataIndex : 'OPER_STATUS',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '운영연도',
				dataIndex : 'OPER_YEAR',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '홀수',
				dataIndex : 'HOLE_NUM',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '면적(m2)총계',
				dataIndex : 'CO_AREA',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '농약사용면적',
				dataIndex : 'AGR_USE_AREA',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '농약미사용면적',
				dataIndex : 'AGR_NON_AREA',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '총사용량(kg)_실물량',
				dataIndex : 'AGR_USE_SM_AMT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '총사용량(kg)_성분량',
				dataIndex : 'AGR_USE_SB_AMT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '전체면적대비ha당사용량(kg)_실물량',
				dataIndex : 'ALL_PER_SM_AMT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '전체면적대비ha당사용량(kg)_성분량',
				dataIndex : 'ALL_PER_SB_AMT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '농약사용면적대비ha당사용량(kg)_실물량',
				dataIndex : 'USE_PER_SM_AMT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '농약사용면적대비ha당사용량(kg)_성분량',
				dataIndex : 'USE_PER_SM_AMT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '농약품목수',
				dataIndex : 'DRUG_NUM',
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