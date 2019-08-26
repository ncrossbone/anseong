Ext.define('asSgis.view.south.SearchResultGrid_PLLT_CLEAN', {
	
	extend: 'Ext.container.Container',
	
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_PLLT_CLEAN',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_PLLT_CLEAN',
			height: 215,
			plugins: 'gridfilters',
			listeners: {
				filterchange : function( store, filters, eOpts){
					//filter change 이벤트시 카운팅
					common.tabCounting(store);
					
				}
			},
			autoScroll:true,
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
				text : '사업장ID',
				dataIndex : 'CO_ID',
				align: 'right',
				style: 'text-align:center',
				width : 150,
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
		            type: 'list',
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
				text : '수행연도',
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
		            type: 'number',
		        }
			}, {
				text : '지점이름(정화장소)',
				dataIndex : 'SUR_SPOTNAME',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '정화부지상세',
				dataIndex : 'SUR_SPOTDET',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '정화기준',
				dataIndex : 'SRU_REFER',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '카드뮴(mg/kg)',
				dataIndex : 'SUR_Cd',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '구리',
				dataIndex : 'SUR_Cu',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '비소 ',
				dataIndex : 'SUR_As',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '수은',
				dataIndex : 'SUR_Hg',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '납',
				dataIndex : 'SUR_Pb',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '6가 크롬',
				dataIndex : 'SUR_Cr',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '아연',
				dataIndex : 'SUR_Zn',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '니켈',
				dataIndex : 'SUR_Ni',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '불소',
				dataIndex : 'SUR_F',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '유기인',
				dataIndex : 'SUR_DOP',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : 'PCBs',
				dataIndex : 'SUR_PCBs',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '시안',
				dataIndex : 'SUR_Si',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '페놀류',
				dataIndex : 'SUR_Penol',
				hidden: true,
				align: 'right',
				style: 'text-align:center',
				width : 150
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
				width : 150
			}, {
				text : '톨루엔',
				dataIndex : 'SUR_TOL',
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '에틸벤젠',
				dataIndex : 'SUR_ETIL',
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '크실렌',
				dataIndex : 'SUR_CSIL',
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : 'TPH',
				dataIndex : 'SUR_TPH',
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : 'TCE',
				dataIndex : 'SUR_TCE',
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : 'PCE',
				dataIndex : 'SUR_PCE',
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '벤조(a)피렌',
				dataIndex : 'SUR_BENZO',
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : 'pH',
				dataIndex : 'SUR_Ph',
				align: 'right',
				style: 'text-align:center',
				width : 150
			}, {
				text : '오염도검사기관',
				dataIndex : 'SUR_ORG',
				align: 'right',
				style: 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
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
				width : 151,
				filter: {
		            type: 'string',
		        }
			}, {
				text : '비고',
				dataIndex : 'SUR_TEXT',
				align: 'right',
				style: 'text-align:center',
				width : 152,
				filter: {
		            type: 'string',
		        }
			}
			]
		}]
	}],
	initComponent: function(){
		this.callParent();
	}
});