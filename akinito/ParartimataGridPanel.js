Ext.define('ePandektis.view.desktop.akinito.ParartimataGridPanel', {
    requires: [
        'ePandektis.view.desktop.common.EntityDetailGrid',
        'ePandektis.view.common.BasePanelTool',
        'ePandektis.view.common.BasePanelToolMenu',
        'ePandektis.store.akinito.AkinitoParartimataGridStore',
        'ePandektis.view.common.FilterRowColumn',
        'ePandektis.view.common.FilterRowNumberColumn',
        'ePandektis.view.common.FilterRowNumberField'
    ],
    extend: 'ePandektis.view.desktop.common.EntityDetailGrid',
    alias: 'widget.akinitoparartimatagridpanel',
    xtype: 'app-desktop-akinito-ParartimataGridPanel',
    localizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Title',
    storeClassName: 'ePandektis.store.akinito.AkinitoParartimataGridStore',
    stateful: true,
    stateId: 'app-desktop-akinito-ParartimataGridPanel-stateId',
    /*plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 1 //add missing icon
    }],*/    
    columns: [
        {
            text: 'show my columnheaders', //extjs 6.2 hidden header bug
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.OperationId',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.OperationId',
            stateId: 'app-desktop-akinito-ParartimataGridPanel-serverId',
            width: ePandektis.util.Common.isTablet() ? 94 : 94,
            dataIndex: 'serverId'
        },
        {
            xtype: 'filterrowtemplatecolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.ID',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.ID',
            stateId: 'app-desktop-akinito-ParartimataGridPanel-kwdikosAkinitou',
            width: ePandektis.util.Common.isTablet() ? 79 : 79,
            dataIndex: 'kwdikosAkinitou',
            tpl: '<a href="javascript:void(0);" onclick="openEntityAkinito(event, this, {kwdikosAkinitou});">{kwdikosAkinitou}</a>',
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.PropertyType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.PropertyType',
            width: ePandektis.util.Common.isTablet() ? 169 : 169,
            stateId: 'app-desktop-akinito-ParartimataGridPanel-typosIdioktisiasId',
            dataIndex: 'typosIdioktisiasId',
            dataValueIndex: 'typosIdioktisias',
            comboBoxStoreName: 'ePandektis.store.lookups.TyposIdioktisiasStore'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.Description',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.Description',
            width: ePandektis.util.Common.isTablet() ? 225 : 225,
            stateId: 'app-desktop-akinito-ParartimataGridPanel-perigrafi',
            dataIndex: 'perigrafi',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.Operations',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.ParartimataGridPanel.Column.Operations',
            width: ePandektis.util.Common.isTablet() ? 291 : 291,
            stateId: 'app-desktop-akinito-ParartimataGridPanel-ergasies',
            dataIndex: 'ergasies',
            editor: 'textfield'
        }
    ],
    tools: [
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnAdd',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.AddRecord',
            readOnlyContainerType: 'app-desktop-akinito-ParartimataGridPanel',
            iconCls: 'x-fa fa-plus ucToolbarIcons',
            eventName: 'addRecord'
        },
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnDelete',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.DeleteRecord',
            readOnlyContainerType: 'app-desktop-akinito-ParartimataGridPanel',
            iconCls: 'x-fa fa-minus ucToolbarIcons',
            eventName: 'deleteRecord'
        },
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnDisconnect',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.DisconnectProperty',
            readOnlyContainerType: 'app-desktop-akinito-ParartimataGridPanel',
            iconCls: 'x-fa fa-unlink ucToolbarIcons',
            eventName: 'disconnect'
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
        this.tryToolDisable('btnDisconnect');
    },
    isReadOnly: function () {
        return this.readOnly;
    }
});