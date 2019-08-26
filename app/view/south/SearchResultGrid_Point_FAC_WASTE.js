Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_WASTE', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_WASTE',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_WASTE',
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
				text : '보유시설',
				dataIndex : 'CO_FAC',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '보유시설세부구분',
				dataIndex : 'CO_FAC_CLASS',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '업종',
				dataIndex : 'CO_KIND',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '운영상태',
				dataIndex : 'CO_STATUS',
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
				text : '지역구분',
				dataIndex : 'SUR_AREASEC',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사용개시일(허가연월일)',
				dataIndex : 'START_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '처리대상폐기물',
				dataIndex : 'OBJ_PLLT_ITEM',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '부지면적(m2)',
				dataIndex : 'CO_AREA',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '시설용량(m3/일)',
				dataIndex : 'CO_CAT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '총매립용량(m3)',
				dataIndex : 'LANDFILL_CAT_ALL',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '잔여매립가능량(m3)',
				dataIndex : 'LANDFILL_CAT_RMD',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '방지시설',
				dataIndex : 'PREV_FAC',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사용기간(년~년)',
				dataIndex : 'USE_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사용종료예정일',
				dataIndex : 'USE_CLOSE_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '립종료후이용계획',
				dataIndex : 'LIB_CLOSE_PLAN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사후관리종료일',
				dataIndex : 'MAG_CLOSE_DATE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사후관리기간(년)',
				dataIndex : 'MAG_CLOSE_YEAR',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '침출수처리량(톤/일)',
				dataIndex : 'LAN_WATER_CAT',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '침출수처리방법',
				dataIndex : 'LAN_WATER_MET',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '차수시설',
				dataIndex : 'LIN_FAC',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '지하수검사정수',
				dataIndex : 'UND_TEST_WATER',
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