Ext.define('asSgis.view.south.SearchResultGrid_PLLT_OBSERVE', {
	
	extend: 'Ext.container.Container',
	
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_PLLT_OBSERVE',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_PLLT_OBSERVE',
			autoScroll:true,
			plugins: 'gridfilters',
			listeners: {
				filterchange : function( store, filters, eOpts){
					//filter change 이벤트시 카운팅
					common.tabCounting(store);
				}
			},
			height: 215,
			columns : [ {
				text : 'PNU',
				dataIndex : 'PNU',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				listeners: {
					click: function(tblView, el, rowCnt, colCnt, row){
						console.info(row.record.data.PNU);
						//row.record.data.PNU
						common.areaComboSelect(row.record.data.PNU);
					}
				},
				filter: {
		            type: 'string',
		        }
			}, {
				text : '대분류',
				dataIndex : 'SUR_CATEGORY1',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '소분류',
				dataIndex : 'SUR_CATEGORY2',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '이력번호',
				dataIndex : 'SUR_HISNO',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'number',
		        }
			}, {
				text : '조사연도',
				dataIndex : 'SUR_DATE',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'number',
		        }
			}, {
				text : '지점번호',
				dataIndex : 'SUR_SPOTNO',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '지점이름(고유명칭)',
				dataIndex : 'SUR_SPOTNAME',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '지역구분(검사목적)',
				dataIndex : 'SUR_AREASEC',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'list',
		        }
			}, {
				text : '카드뮴(mg/kg)',
				dataIndex : 'SUR_Cd',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.00'
			}, {
				text : '구리',
				dataIndex : 'SUR_Cu',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '비소',
				dataIndex : 'SUR_As',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.00'
			}, {
				text : '수은',
				dataIndex : 'SUR_Hg',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.00'
			}, {
				text : '납',
				dataIndex : 'SUR_Pb',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '6가크롬',
				dataIndex : 'SUR_Cr',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '아연',
				dataIndex : 'SUR_Zn',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '니켈',
				dataIndex : 'SUR_Ni',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '불소',
				dataIndex : 'SUR_F',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0'
			}, {
				text : '유기인',
				dataIndex : 'SUR_DOP',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.00'
			}, {
				text : 'PCBs',
				dataIndex : 'SUR_PCBs',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.00'
			}, {
				text : '시안',
				dataIndex : 'SUR_Si',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '페놀류',
				dataIndex : 'SUR_Penol',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.00'
			}, {
				text : 'BTEX',
				dataIndex : 'SUR_BTEX',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '벤젠',
				dataIndex : 'SUR_Ben',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '톨루엔',
				dataIndex : 'SUR_TOL',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '에틸벤젠',
				dataIndex : 'SUR_ETIL',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '크실렌',
				dataIndex : 'SUR_CSIL',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : 'TPH',
				dataIndex : 'SUR_TPH',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0'
			}, {
				text : 'TCE',
				dataIndex : 'SUR_TCE',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : 'PCE',
				dataIndex : 'SUR_PCE',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '벤조(a)피렌',
				dataIndex : 'SUR_BENZO',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.000'
			}, {
				text : 'pH',
				dataIndex : 'SUR_Ph',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				xtype: 'numbercolumn',
				format: '0.0'
			}, {
				text : '출처구분',
				dataIndex : 'SUR_INSEC',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '출처(문서ID)',
				dataIndex : 'SUR_INDOC',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '비고',
				dataIndex : 'SUR_TEXT',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}]
		}]
	}],
	initComponent: function(){
		this.callParent();
	}
});