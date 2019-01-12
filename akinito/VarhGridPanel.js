Ext.define('ePandektis.view.desktop.akinito.VarhGridPanel', {
    requires: [
        'ePandektis.view.common.RowExpanderGrid',
        'ePandektis.view.desktop.common.EntityDetailGrid',
        'ePandektis.view.common.BasePanelTool',
        'ePandektis.view.common.BasePanelToolMenu',
        'ePandektis.store.akinito.AkinitoVarhGridStore',
        'ePandektis.view.common.FilterRowColumn',
        'ePandektis.view.common.FilterRowNumberColumn',
        'ePandektis.view.common.FilterRowNumberField',
        'ePandektis.view.common.FilterRowDateColumn',
        'ePandektis.view.common.FilterRowDateField',
        'ePandektis.view.common.FilterRowComboBoxColumn',
        'ePandektis.view.common.FilterRowComboBox',
        'ePandektis.view.desktop.akinito.KathwnGridPanel',
    ],
    extend: 'ePandektis.view.desktop.common.EntityDetailGrid',
    alias: 'widget.akinitovarhgridpanel',
    xtype: 'app-desktop-akinito-VarhGridPanel',
    localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Title',
    storeClassName: 'ePandektis.store.akinito.AkinitoVarhGridStore',
    stateful: true,
    stateId: 'app-desktop-akinito-VarhGridPanel-stateId',
    plugins: [
        {
            ptype: 'rowexpandergrid',
            pluginId: 'rowexpandergrid',
            gridConfig: [
                {
                    detailGridType: 'ePandektis.view.desktop.akinito.KathwnGridPanel'
                }
            ]
        }
    ],
    columns: [
        {
            text: 'show my columnheaders', //extjs 6.2 hidden header bug
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.WeightType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.WeightType',
            stateId: 'app-desktop-akinito-VarhGridPanel-typosVarousId',
            width: ePandektis.util.Common.isTablet() ? 150 : 150,
            dataIndex: 'typosVarousId',
            dataValueIndex: 'typosVarous',
            comboBoxStoreName: 'ePandektis.store.lookups.TyposVarousStore'
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Series',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Series',
            stateId: 'app-desktop-akinito-VarhGridPanel-seiraId',
            width: ePandektis.util.Common.isTablet() ? 172 : 172,
            dataIndex: 'seiraId',
            dataValueIndex: 'seira',
            comboBoxStoreName: 'ePandektis.store.lookups.SeiraStore'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Amount',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Amount',
            stateId: 'app-desktop-akinito-VarhGridPanel-poso',
            dataIndex: 'poso',
            width: ePandektis.util.Common.isTablet() ? 110 : 110,
            editor: 'numberfield'
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Curency',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Curency',
            stateId: 'app-desktop-akinito-VarhGridPanel-nomismaId',
            width: ePandektis.util.Common.isTablet() ? 87 : 87,
            dataIndex: 'nomismaId',
            dataValueIndex: 'nomisma',
            comboBoxStoreName: 'ePandektis.store.lookups.NomismaStore'
        },
        {
            xtype: 'filterrowdatecolumn',
            filterRowField: {
                xtype: 'filterrowdatefield',
                format: 'd/m/Y'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Date',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Date',
            stateId: 'app-desktop-akinito-VarhGridPanel-imerominia',
            dataIndex: 'imerominia',
            width: ePandektis.util.Common.isTablet() ? 107 : 107,
            format: 'd/m/Y',
            editor: {
                xtype: 'datefield',
                format: 'd/m/Y'
            }
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ForType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ForType',
            stateId: 'app-desktop-akinito-VarhGridPanel-typosYperId',
            width: ePandektis.util.Common.isTablet() ? 186 : 186,
            dataIndex: 'typosYperId',
            dataValueIndex: 'typosYper',
            comboBoxStoreName: 'ePandektis.store.lookups.TyposYperStore'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ForCreditInstitution',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ForCreditInstitution',
            stateId: 'app-desktop-akinito-VarhGridPanel-yperPistotikouIdrimatos',
            width: ePandektis.util.Common.isTablet() ? 165 : 165,
            dataIndex: 'yperPistotikouIdrimatos',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ForVaros',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ForVaros',
            stateId: 'app-desktop-akinito-VarhGridPanel-yper',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'yper',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Against',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Against',
            stateId: 'app-desktop-akinito-VarhGridPanel-kata',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'kata',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.LandRegistry',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.LandRegistry',
            stateId: 'app-desktop-akinito-VarhGridPanel-ypothikofylakeioId',
            width: ePandektis.util.Common.isTablet() ? 140 : 140,
            dataIndex: 'ypothikofylakeioId',
            dataValueIndex: 'ypothikofylakeio',
            comboBoxStoreName: 'ePandektis.store.lookups.YpothikofylakeiaStore'
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.CadastralOffice',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.CadastralOffice',
            stateId: 'app-desktop-akinito-VarhGridPanel-ktimatologikoId',
            width: ePandektis.util.Common.isTablet() ? 150 : 150,
            dataIndex: 'ktimatologikoId',
            dataValueIndex: 'ktimatologiko',
            comboBoxStoreName: 'ePandektis.store.lookups.KtimatologikaGrafeiaStore'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.RecordVolume',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.RecordVolume',
            stateId: 'app-desktop-akinito-VarhGridPanel-tomosEggrafis',
            width: ePandektis.util.Common.isTablet() ? 145 : 145,
            dataIndex: 'tomosEggrafis',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.RecordNumber',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.RecordNumber',
            stateId: 'app-desktop-akinito-VarhGridPanel-arithmosEggrafis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'arithmosEggrafis',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ActNumber',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ActNumber',
            stateId: 'app-desktop-akinito-VarhGridPanel-arithmosPraxis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'arithmosPraxis',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowdatecolumn',
            filterRowField: {
                xtype: 'filterrowdatefield',
                format: 'd/m/Y'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ActDate',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.ActDate',
            stateId: 'app-desktop-akinito-VarhGridPanel-imerominiaPraxis',
            dataIndex: 'imerominiaPraxis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            format: 'd/m/Y',
            editor: {
                xtype: 'datefield',
                format: 'd/m/Y'
            }
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.NotaryFullName',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.NotaryFullName',
            stateId: 'app-desktop-akinito-VarhGridPanel-symvolaiografos',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'symvolaiografos',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.JudgementNumber',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.JudgementNumber',
            stateId: 'app-desktop-akinito-VarhGridPanel-arithmosApofasis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'arithmosApofasis',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.LoanAgreementNumber',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.LoanAgreementNumber',
            stateId: 'app-desktop-akinito-VarhGridPanel-arithmosDaniakisSimvasis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'arithmosDaniakisSimvasis',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Comments',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Comments',
            stateId: 'app-desktop-akinito-VarhGridPanel-sxolia',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'sxolia',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.OperationId',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.OperationId',
            stateId: 'app-desktop-akinito-VarhGridPanel-kwdikosErgasias',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'kwdikosErgasias',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Operations',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhGridPanel.Column.Operations',
            stateId: 'app-desktop-akinito-VarhGridPanel-ergasies',
            width: ePandektis.util.Common.isTablet() ? 145 : 145,
            dataIndex: 'ergasies',
            editor: 'textfield'
        }
    ],
    tools: [
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnConnect',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.ConnectOwner',
            iconCls: 'x-fa fa-link ucToolbarIcons',
            readOnlyContainerType: 'app-desktop-akinito-VarhGridPanel',
            eventName: 'connect'
        },
        {
            xtype: 'app-desktop-common-basepaneltoolmenu',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.Settings',
            iconCls: 'x-fa fa-gear ucToolbarIcons',
            menu: [
                {
                    localizerKey: 'ePandektis.view.desktop.Grid.Settings.Save',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.Settings.Save',
                    iconCls: 'x-fa fa-save ucToolbarIcons',
                    eventName: 'buttonSaveSettingsClicked'
                },
                {
                    localizerKey: 'ePandektis.view.desktop.Grid.Settings.Load',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.Settings.Load',
                    iconCls: 'x-fa fa-arrow-circle-o-up ucToolbarIcons',
                    eventName: 'buttonLoadSettingsClicked'
                },
                {
                    localizerKey: 'ePandektis.view.desktop.Grid.Settings.LoadDefaults',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.Settings.LoadDefaults',
                    iconCls: 'x-fa fa-arrow-circle-up ucToolbarIcons',
                    eventName: 'buttonLoadDefaultSettingsClicked'
                }
            ]
        }
    ],
    setReadOnly: function () {
        this.readOnly = true;
        this.tryToolDisable('btnConnect');
    },
    isReadOnly: function () {
        return this.readOnly;
    }
});