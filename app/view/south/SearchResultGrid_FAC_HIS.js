Ext.define('asSgis.view.south.SearchResultGrid_FAC_HIS', {
	
	extend: 'Ext.container.Container',
	items: [{
		xtype: 'container',
		id: 'searchResultContainer_FAC_HIS',
		items: [{
			xtype: 'grid',
			id: 'serachReultGrid_FAC_HIS',
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
				dataIndex : 'PNU',
				text : 'PNU',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				listeners: {
					click: function(tblView, el, rowCnt, colCnt, row){
						console.info(row.record.data.PNU);
						//row.record.data.PNU
						common.areaComboSelect(row.record.data.PNU);
					}
				},filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'FAC_NO',
				text : '이력번호',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_ID',
				text : '사업장id',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_FACNO',
				text : '시설연번',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'number',
		        }
			}, {
				dataIndex : 'CO_CATEGORY1',
				text : '대분류',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_CATEGORY2',
				text : '중분류',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_CATEGORY3',
				text : '소분류',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_FACNAME',
				text : '시설이름',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_FACCAP',
				text : '시설용량',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'number',
		        }
			}, {
				dataIndex : 'CO_FACUNIT',
				text : '단위',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_FACMATTER',
				text : '저장물질',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_FATSEC',
				text : '출처구분',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_FACDOC',
				text : '출처(문서ID)',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_FACNOTE',
				text : '비고',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				filter: {
		            type: 'string',
		        }
			}, {
				dataIndex : 'CO_FACUPDATE',
				text : '변경기준일',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				xtype: 'datecolumn',
		        filter: {
		            type: 'date',
		        },
		        renderer: Ext.util.Format.dateRenderer('Y.m.d')
			}, {
				dataIndex : 'CO_FACDEL',
				text : '(자료)폐쇄일',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				xtype: 'datecolumn',
		        filter: {
		            type: 'date',
		        },
		        renderer: Ext.util.Format.dateRenderer('Y.m.d')
			}, {
				dataIndex : 'CO_FACCRE_DATE',
				text : '완공일/사용일',
				align : 'right',
				style : 'text-align:center',
				width : 150,
				xtype: 'datecolumn',
		        filter: {
		            type: 'date',
		        },
		        renderer: Ext.util.Format.dateRenderer('Y.m.d')
			}, {
				dataIndex : 'CO_UPDN',
				text : '지상지하',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				dataIndex : 'CO_HIGH',
				text : '(23)높이또는깊이(m)',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				dataIndex : 'CO_MET_KIND',
				text : '(24)탱크재질',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				dataIndex : 'CO_TH',
				text : '(25)두께(t)',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				dataIndex : 'PRE_STEP',
				text : '(26)부식/산화방지조치',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				dataIndex : 'LEAK_PRE',
				text : '(27)누출방지시설',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				dataIndex : 'LEAK_SRC',
				text : '(28)누출감지시설',
				align : 'right',
				style : 'text-align:center',
				width : 150
			}, {
				dataIndex : 'SPR_PRE',
				text : '(29)확산방지시설',
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