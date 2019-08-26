Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_WATER', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_WATER',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_WATER',
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
				text : '중분류',
				dataIndex : 'CO_CATEGORY2',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '운영연도',
				dataIndex : 'CO_YEAR',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '허가신고여부',
				dataIndex : 'ACT_YN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사업장규모종별)',
				dataIndex : 'CO_SCALE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '특정수질유해물질배출여부',
				dataIndex : 'TS_MAT_YN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '산업단지',
				dataIndex : 'INDU_COMP',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '농공단지',
				dataIndex : 'AGRI_COMP',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '처리형태',
				dataIndex : 'TRT_TYPE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '종말처리',
				dataIndex : 'END_TRT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '위탁처리',
				dataIndex : 'COMM_TRT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '배출허용기준적용지역',
				dataIndex : 'EMI_STD_AREA',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '폐수발생량(㎥/일)',
				dataIndex : 'OW_WATER',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '공정폐수(㎥/일)',
				dataIndex : 'KO_WATER',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '직접냉각폐수(㎥/일)',
				dataIndex : 'JN_WATER',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '생활오수량(㎥/일)',
				dataIndex : 'SH_WATER',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '폐수방류량(㎥/일)',
				dataIndex : 'BY_WATER',
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