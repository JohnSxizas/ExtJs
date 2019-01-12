Ext.define('ePandektis.view.desktop.akinito.OrofoiGridPanel', {
    requires: [
        'ePandektis.view.desktop.common.EntityDetailGrid',
        'ePandektis.view.common.BasePanelTool',
        'ePandektis.view.common.BasePanelToolMenu',
        'ePandektis.store.akinito.AkinitoOrofoiGridStore',
        'ePandektis.view.common.FilterRowColumn',
        'ePandektis.view.common.FilterRowNumberColumn',
        'ePandektis.view.common.FilterRowNumberField',
        'ePandektis.view.desktop.common.OrofosSingleSelectionWindow'
    ],
    extend: 'ePandektis.view.desktop.common.EntityDetailInnerGrid',
    alias: 'widget.akinitoorofoigridpanel',
    xtype: 'app-desktop-akinito-OrofoiGridPanel',
    localizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Title',
    storeClassName: 'ePandektis.store.akinito.AkinitoOrofoiGridStore',
    stateful: true,
    stateId: 'app-desktop-akinito-OrofoiGridPanel-stateId',    
    columns: [
        {
            text: 'show my columnheaders', //extjs 6.2 hidden header bug
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Column.Floor',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Column.Floor',
            stateId: 'app-desktop-akinito-OrofoiGridPanel-orofos',
            width: ePandektis.util.Common.isTablet() ? 167 : 167,
            dataIndex: 'orofosId',
            dataValueIndex: 'orofos',
            comboBoxStoreName: 'ePandektis.store.lookups.OrofoiStore',
            selectionClassName: 'ePandektis.view.desktop.common.OrofosSingleSelectionWindow'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Column.Area',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Column.Area',
            stateId: 'app-desktop-akinito-OrofoiGridPanel-emvado',
            dataIndex: 'emvado',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            editor: 'numberfield'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Column.SemiOpenArea',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Column.SemiOpenArea',
            stateId: 'app-desktop-akinito-OrofoiGridPanel-emvadoHmiypaithriwn',
            dataIndex: 'emvadoHmiypaithriwn',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            editor: 'numberfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Column.Description',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.OrofoiGridPanel.Column.Description',
            stateId: 'app-desktop-akinito-OrofoiGridPanel-perigrafi',
            width: ePandektis.util.Common.isTablet() ? 202 : 202,
            dataIndex: 'perigrafi',
            editor: 'textfield'
        }
    ],
    tools: [
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnAdd',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.AddRecord',
            readOnlyContainerType: 'app-desktop-akinito-OrofoiGridPanel',
            iconCls: 'x-fa fa-plus ucToolbarIcons',
            eventName: 'addRecord'
        },
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnDelete',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.DeleteRecord',
            readOnlyContainerType: 'app-desktop-akinito-OrofoiGridPanel',
            iconCls: 'x-fa fa-minus ucToolbarIcons',
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