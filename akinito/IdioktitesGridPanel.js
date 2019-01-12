Ext.define('ePandektis.view.desktop.akinito.IdioktitesGridPanel', {
    requires: [
        'ePandektis.view.desktop.common.EntityDetailGrid',
        'ePandektis.view.common.BasePanelTool',
        'ePandektis.view.common.BasePanelToolMenu',
        'ePandektis.store.akinito.AkinitoIdioktitesGridStore',
        'ePandektis.view.common.FilterRowColumn',
        'ePandektis.view.common.FilterRowNumberColumn',
        'ePandektis.view.common.FilterRowNumberField',
        'ePandektis.view.common.FilterRowTemplateColumn',
        'ePandektis.view.common.FilterRowCheckbox',
        'ePandektis.view.common.FilterRowComboBoxColumn',
        'ePandektis.view.common.FilterRowComboBox',
        'ePandektis.view.desktop.common.IdioktitesMultiSelectionWindow'
    ],
    extend: 'ePandektis.view.desktop.common.EntityDetailGrid',
    alias: 'widget.akinitoidioktitesgridpanel',
    xtype: 'app-desktop-akinito-IdioktitesGridPanel',
    storeClassName: 'ePandektis.store.akinito.AkinitoIdioktitesGridStore',
    localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Title',
    stateful: true,
    stateId: 'app-desktop-akinito-IdioktitesGridPanel-stateId',
    /*plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 1
    }],*/
    columns: [
        {
            text: 'show my columnheaders', //extjs 6.2 hidden header bug
            xtype: 'filterrowtemplatecolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.ID',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.ID',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-kwdikosIdioktiti',
            width: ePandektis.util.Common.isTablet() ? 54 : 54,
            tpl: '<a href="javascript:void(0);" onclick="openEntityContact(event, this, {kwdikosIdioktiti}, 2, false);">{kwdikosIdioktiti}</a>',
            dataIndex: 'kwdikosIdioktiti'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Connection',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Connection',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-sindesi',
            dataIndex: 'sindesi',
            width: ePandektis.util.Common.isTablet() ? 63 : 63,
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Surename',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Surename',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-eponymo',
            dataIndex: 'eponymo',
            width: ePandektis.util.Common.isTablet() ? 154 : 154,
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Name',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Name',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-onoma',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'onoma',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.FathersName',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.FathersName',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-patronymo',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'patronymo',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.MothersName',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.MothersName',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-mitronymo',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'mitronymo',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.OwnershipType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.OwnershipType',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-eidosKiriotitasId',
            width: ePandektis.util.Common.isTablet() ? 131 : 131,
            dataIndex: 'eidosKiriotitasId',
            dataValueIndex: 'eidosKiriotitas',
            comboBoxStoreName: 'ePandektis.store.lookups.EidosKyriotitasStore'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Percentage',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Percentage',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-pososto',
            width: ePandektis.util.Common.isTablet() ? 94 : 94,
            dataIndex: 'pososto',
            editor: 'numberfield'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.PercentageNumerator',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.PercentageNumerator',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-posostoArithmitis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'posostoArithmitis',
            editor: 'numberfield'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.PercentageDenominator',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.PercentageDenominator',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-posostoParonomastis',
            width: ePandektis.util.Common.isTablet() ? 110 : 110,
            dataIndex: 'posostoParonomastis',
            editor: 'numberfield'
        },
        {
            xtype: 'filterrowcheckcolumn',
            filterRowField: {
                xtype: 'filterrowcombobox',
                store: 'ePandektis.store.lookups.BooleanFilterStore',
                displayField: 'value',
                valueField: 'serverId'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.HabitationRight',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.HabitationRight',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-dikaiwmaOikisis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'dikaiwmaOikisis'
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.IdType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.IdType',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-eidosTautotitasId',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'eidosTautotitasId',
            dataValueIndex: 'eidosTautotitas',
            comboBoxStoreName: 'ePandektis.store.lookups.EidosTautotitasStore'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Genus',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Genus',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-genos',
            width: ePandektis.util.Common.isTablet() ? 111 : 111,
            dataIndex: 'genos',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcheckcolumn',
            filterRowField: {
                xtype: 'filterrowcombobox',
                store: 'ePandektis.store.lookups.BooleanFilterStore',
                displayField: 'value',
                valueField: 'serverId'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.IsEntity',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.IsEntity',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-nomiko',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'nomiko'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Afm',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Afm',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-afm',
            dataIndex: 'afm',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Address',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Address',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-dieuthinsi',
            dataIndex: 'dieuthinsi',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.City',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.City',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-polh',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'polh',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.PO',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.PO',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-tk',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'tk',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.ResidencePhone',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.ResidencePhone',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-tilefwno',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'tilefwno',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.MobilePhone',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.MobilePhone',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-kinito',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'kinito',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcheckcolumn',
            filterRowField: {
                xtype: 'filterrowcombobox',
                store: 'ePandektis.store.lookups.BooleanFilterStore',
                displayField: 'value',
                valueField: 'serverId'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Active',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.Active',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-energos',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'energos'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.OperationCode',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.OperationCode',
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-kwdikosErgasias',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,            
            dataIndex: 'kwdikosErgasias',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.OperationDescription',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.IdioktitesGridPanel.Column.OperationDescription',
            width: ePandektis.util.Common.isTablet() ? 176 : 176,
            stateId: 'app-desktop-akinito-IdioktitesGridPanel-perigrafiErgasias',
            dataIndex: 'perigrafiErgasias',
            editor: 'textfield'
        }
    ],
    tools: [
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnAdd',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.AddRecord',
            iconCls: 'x-fa fa-plus ucToolbarIcons',
            readOnlyContainerType: 'app-desktop-akinito-IdioktitesGridPanel',
            eventName: 'addRecord'
        },
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnDelete',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.DeleteRecord',
            iconCls: 'x-fa fa-minus ucToolbarIcons',
            readOnlyContainerType: 'app-desktop-akinito-IdioktitesGridPanel',
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