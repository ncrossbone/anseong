Ext.define('asSgis.view.south.SearchResultGrid_Point_FAC_TOXIC', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_Point_FAC_TOXIC',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_Point_FAC_TOXIC',
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
				text : '소분류(업종)',
				dataIndex : 'CO_CATEGORY3',
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
				text : '취급품목명',
				dataIndex : 'CO_ITEM_NM',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '전체연간취급량(톤또는m3)',
				dataIndex : 'ALL_CAP_YEAR',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사업장면적(m2)',
				dataIndex : 'CO_SIZE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '전체보관·저장시설능력(톤또는m3)',
				dataIndex : 'ALL_SAVE_STORAGE',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '제조_유해화학물질_영문명',
				dataIndex : 'MAKE_NM_EN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '제조_유해화학물질_국문명',
				dataIndex : 'MAKE_NM_KR',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '제조_유해화학물질_CAS-No.',
				dataIndex : 'MAKE_NO',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사용_유해화학물질_영문명',
				dataIndex : 'USE_NM_EN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사용_유해화학물질_국문명',
				dataIndex : 'USE_NM_KR',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '사용_유해화학물질_CAS-No.',
				dataIndex : 'USE_NO',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '보관저장_유해화학물질_영문명',
				dataIndex : 'SAVE_NM_EN',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '보관저장_유해화학물질_국문명',
				dataIndex : 'SAVE_NM_KR',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '보관저장_유해화학물질_CAS-No.',
				dataIndex : 'SAVE_NO',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				text : '용량(m3)',
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