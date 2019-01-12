Ext.define('ePandektis.view.desktop.akinito.KathwnGridPanel', {
    requires: [
        'ePandektis.view.desktop.common.EntityDetailInnerGrid',
        'ePandektis.view.common.BasePanelTool',
        'ePandektis.view.common.BasePanelToolMenu',
        'ePandektis.store.akinito.AkinitoKathwnGridStore',
        'ePandektis.view.common.FilterRowColumn',
        'ePandektis.view.common.FilterRowNumberColumn',
        'ePandektis.view.common.FilterRowNumberField',
        'ePandektis.view.common.FilterRowTemplateColumn',
        'ePandektis.view.common.FilterRowCheckbox',
        'ePandektis.view.common.FilterRowComboBoxColumn',
        'ePandektis.view.common.FilterRowComboBox',
        'ePandektis.view.common.FilterRowDateColumn',
        'ePandektis.view.common.FilterRowDateField'
    ],
    extend: 'ePandektis.view.desktop.common.EntityDetailInnerGrid',
    alias: 'widget.akinitokathwngridpanel',
    xtype: 'app-desktop-akinito-KathwnGridPanel',    
    storeClassName: 'ePandektis.store.akinito.AkinitoKathwnGridStore',
    stateful: true,
    stateId: 'app-desktop-akinito-KathwnGridPanel-stateId',
    localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Title',
    height: 200,
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
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.ID',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.ID',
            stateId: 'app-desktop-akinito-KathwnGridPanel-kwdikosIdioktiti',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            tpl: '<a href="javascript:void(0);" onclick="openEntityContact(event, this, {kwdikosIdioktiti}, 2, false);">{kwdikosIdioktiti}</a>',
            dataIndex: 'kwdikosIdioktiti'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Connection',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Connection',
            stateId: 'app-desktop-akinito-KathwnGridPanel-sindesi',
            dataIndex: 'sindesi',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Surename',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Surename',
            stateId: 'app-desktop-akinito-KathwnGridPanel-eponymo',
            dataIndex: 'eponymo',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Name',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Name',
            stateId: 'app-desktop-akinito-KathwnGridPanel-onoma',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'onoma',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.FathersName',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.FathersName',
            stateId: 'app-desktop-akinito-KathwnGridPanel-patronymo',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'patronymo',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.MothersName',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.MothersName',
            stateId: 'app-desktop-akinito-KathwnGridPanel-mitronymo',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'mitronymo',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.OwnershipType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.OwnershipType',
            stateId: 'app-desktop-akinito-KathwnGridPanel-eidosKiriotitasId',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'eidosKiriotitasId',
            dataValueIndex: 'eidosKiriotitas',
            comboBoxStoreName: 'ePandektis.store.lookups.EidosKyriotitasStore'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Percentage',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Percentage',
            stateId: 'app-desktop-akinito-KathwnGridPanel-pososto',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'pososto',
            editor: 'numberfield'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.PercentageNumerator',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.PercentageNumerator',
            stateId: 'app-desktop-akinito-KathwnGridPanel-posostoArithmitis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'posostoArithmitis',
            editor: 'numberfield'
        },
        {
            xtype: 'filterrownumbercolumn',
            filterRowField: {
                xtype: 'filterrownumberfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.PercentageDenominator',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.PercentageDenominator',
            stateId: 'app-desktop-akinito-KathwnGridPanel-posostoParonomastis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
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
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.HabitationRight',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.HabitationRight',
            stateId: 'app-desktop-akinito-KathwnGridPanel-dikaiwmaOikisis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'dikaiwmaOikisis',
            listeners: {
                beforecheckchange: function () {
                    return false; //Make checkbox readonly
                }
            }
        },
        {
            xtype: 'filterrowcomboboxcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.IdType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.IdType',
            stateId: 'app-desktop-akinito-KathwnGridPanel-eidosTautotitasId',
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
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Genus',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Genus',
            stateId: 'app-desktop-akinito-KathwnGridPanel-genos',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
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
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.IsEntity',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.IsEntity',
            stateId: 'app-desktop-akinito-KathwnGridPanel-nomiko',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'nomiko',
            listeners: {
                beforecheckchange: function () {
                    return false; //Make checkbox readonly
                }
            }
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Afm',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.Afm',
            stateId: 'app-desktop-akinito-KathwnGridPanel-afm',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'afm',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.City',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.City',
            stateId: 'app-desktop-akinito-KathwnGridPanel-polh',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'polh',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.PO',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.PO',
            stateId: 'app-desktop-akinito-KathwnGridPanel-tk',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'tk',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.ResidencePhone',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.ResidencePhone',
            stateId: 'app-desktop-akinito-KathwnGridPanel-tilefwno',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'tilefwno',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.MobilePhone',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.MobilePhone',
            stateId: 'app-desktop-akinito-KathwnGridPanel-kinito',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'kinito',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.OperationCode',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.OperationCode',
            stateId: 'app-desktop-akinito-KathwnGridPanel-kwdikosErgasias',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'kwdikosErgasias',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowcolumn',
            filterRowField: {
                xtype: 'filterrowtextfield'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.OperationDescription',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.OperationDescription',
            stateId: 'app-desktop-akinito-KathwnGridPanel-perigrafiErgasias',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            dataIndex: 'perigrafiErgasias',
            editor: 'textfield'
        },
        {
            xtype: 'filterrowdatecolumn',
            filterRowField: {
                xtype: 'filterrowdatefield',
                format: 'd/m/Y'
            },
            localizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.AssignmentDate',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinito.KathwnGridPanel.Column.AssignmentDate',
            stateId: 'app-desktop-akinito-KathwnGridPanel-imerominiaAnathesis',
            dataIndex: 'imerominiaAnathesis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            format: 'd/m/Y',
            editor: {
                xtype: 'datefield',
                format: 'd/m/Y'
            }
        }
    ],
    tools: [
        {
            xtype: 'app-desktop-common-basepaneltool',
            itemId: 'btnDelete',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.DeleteRecord',
            iconCls: 'x-fa fa-minus ucToolbarIcons',
            //readOnlyContainerType: 'app-desktop-akinito-KathwnGridPanel',
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
    listeners: {
        beforerender: function (panel) {
            ePandektis.util.Localizer.update(panel, true);
        }
    },
    loadRecords: function (grid) {
        var store = grid ? grid.getStore() : null;
        if (!store)
            return;

        var masterGrid = grid.masterGrid;
        if (!masterGrid) {
            ePandektis.util.Common.consoleWarn('masterGrid not found');
            return;
        }

        var mainPanel = (masterGrid.up('app-desktop-akinito-main')) ? masterGrid.up('app-desktop-akinito-main') : masterGrid.up('app-tablet-akinito-main');
        if (!mainPanel) {
            ePandektis.util.Common.consoleWarn('mainPanel not found');
            return;
        }

        this.setReadOnly(mainPanel);

        var masterGridRecord = grid.masterGridRecord;
        if (!masterGridRecord) {
            ePandektis.util.Common.consoleWarn('masterGridRecord not found');
            return;
        }

        var akinitoId = grid.masterGridRecord.get('akinitoId');
        if (!akinitoId) {
            ePandektis.util.Common.consoleWarn('akinitoId not provided');
            return;
        }

        var codeTrans = grid.masterGridRecord.get('kwdikosErgasias');
        if (!codeTrans) {
            ePandektis.util.Common.consoleWarn('codeTrans not provided');
            return;
        }

        //store.getProxy().extraParams['akinitoId'] = akinitoId;
        //store.getProxy().extraParams['codeTrans'] = codeTrans;

        store.load({
            params: {
                akinitoId: akinitoId,
                codeTrans: codeTrans
            },
            callback: function (records, operation, success) {
                //console.log(grid.getId() + ' records loaded');
            }
        });
    },
    setReadOnly: function (mainPanel) {
        if ((!mainPanel) || (!mainPanel.isReadOnly) || (!mainPanel.isReadOnly()))
            return;
        
        this.tools[0].disable();

    }/*,
    setReadOnly: function () {
        this.readOnly = true;
    },
    isReadOnly: function () {
        return this.readOnly;
    }*/
});