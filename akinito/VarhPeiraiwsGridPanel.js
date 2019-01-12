Ext.define('ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel', {
    requires: [
        'ePandektis.view.desktop.common.EntityDetailGrid',
        'ePandektis.view.common.BasePanelTool',
        'ePandektis.view.common.BasePanelToolMenu',
        'ePandektis.store.akinito.AkinitoVarhPeiraiwsGridStore',
        'ePandektis.view.common.FilterRowColumn',
        'ePandektis.view.common.FilterRowNumberColumn',
        'ePandektis.view.common.FilterRowNumberField',
        'ePandektis.view.common.FilterRowDateColumn',
        'ePandektis.view.common.FilterRowDateField',
        'ePandektis.view.common.FilterRowComboBoxColumn',
        'ePandektis.view.common.FilterRowComboBox'
    ],
    extend: 'ePandektis.view.desktop.common.EntityDetailGrid',
    alias: 'widget.akinitovarhpeiraiwsgridpanel',
    xtype: 'app-desktop-akinito-VarhPeiraiwsGridPanel',
    localizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Title',
    storeClassName: 'ePandektis.store.akinito.AkinitoVarhPeiraiwsGridStore',
    stateful: true,
    stateId: 'app-desktop-akinito-VarhPeiraiwsGridPanel-stateId',
    /*plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 1
    }],*/
    columns: [
        {
            text: 'show my columnheaders', //extjs 6.2 hidden header bug
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.For',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.For',
            stateId: 'app-desktop-akinito-VarhPeiraiwsGridPanel-yper',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'yper',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.WeightType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.WeightType',
            stateId: 'app-desktop-akinito-VarhPeiraiwsGridPanel-typosVarousId',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'typosVarousId',
            dataValueIndex: 'typosVarous',
            comboBoxStoreName: 'ePandektis.store.lookups.TyposVarousStore'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.WeightDescription',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.WeightDescription',
            stateId: 'app-desktop-akinito-VarhPeiraiwsGridPanel-sxolia',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'sxolia',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowdatecolumn',
            filterRowField: {
                xtype: 'filterrowdatefield',
                format: 'd/m/Y'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.RecordDate',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.RecordDate',
            stateId: 'app-desktop-akinito-VarhPeiraiwsGridPanel-imerominia',
            dataIndex: 'imerominia',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            format: 'd/m/Y',
            editor: {
                xtype: 'datefield',
                format: 'd/m/Y'
            }
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.Amount',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.Amount',
            stateId: 'app-desktop-akinito-VarhPeiraiwsGridPanel-poso',
            dataIndex: 'poso',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            editor: 'numberfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.ExternalSystemId',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel.Column.ExternalSystemId',
            stateId: 'app-desktop-akinito-VarhPeiraiwsGridPanel-kwdikosEkswterikouSystimatos',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'kwdikosEkswterikouSystimatos',
            editor: 'textfield'
        }
    ],
    tools: [
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnAdd',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.AddRecord',
            iconCls: 'x-fa fa-plus ucToolbarIcons',
            readOnlyContainerType: 'app-desktop-akinito-VarhPeiraiwsGridPanel',
            eventName: 'addRecord'
        },
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnDelete',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.DeleteRecord',
            iconCls: 'x-fa fa-minus ucToolbarIcons',
            readOnlyContainerType: 'app-desktop-akinito-VarhPeiraiwsGridPanel',
            eventName: 'deleteRecord'
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
        this.tryToolDisable('btnAdd');
        this.tryToolDisable('btnDelete');
    },
    isReadOnly: function () {
        return this.readOnly;
    }
});