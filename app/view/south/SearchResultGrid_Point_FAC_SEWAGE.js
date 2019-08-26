Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_SEWAGE', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_SEWAGE',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_SEWAGE',
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
				text : '처리시설명',
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
				text : '처리시설코드',
				dataIndex : 'CO_ID',
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
				text : '가동여부',
				dataIndex : 'OPER_YN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '시설용량(㎥/일)_합계',
				dataIndex : 'AMT_CAP',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '시설용량_물리적',
				dataIndex : 'PHY_CAP',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '시설용량_생물학적',
				dataIndex : 'CHEM_CAP',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '시설용량_고도',
				dataIndex : 'HIGH_CAP',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '전처리공정',
				dataIndex : 'PROC_HEAD',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '1차처리공정',
				dataIndex : 'PROC_1ST',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '2차처리공정',
				dataIndex : 'PROC_2ST',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '3차처리공정',
				dataIndex : 'PROC_3ST',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '가동개시일자',
				dataIndex : 'OPER_STAR_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '가동율(%)',
				dataIndex : 'OPER_RATE',
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