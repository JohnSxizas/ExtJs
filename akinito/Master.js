Ext.define('ePandektis.view.desktop.akinito.Master', {
    extend: 'ePandektis.view.common.BasePanel',
    xtype: 'app-desktop-akinito-master',
    requires: [
        'ePandektis.view.common.BaseFormPanel',
        'ePandektis.view.desktop.common.ClickableLabelComboBox',
        'ePandektis.view.desktop.common.TyposIdioktisiasSingleSelectionWindow',
        'ePandektis.view.desktop.common.NomosSingleSelectionWindow',
        'ePandektis.view.desktop.common.DimoiSingleSelectionWindow',
        'ePandektis.view.desktop.common.CitiesSingleSelectionWindow'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },     
    localizerKey: 'ePandektis.view.desktop.akinito.Master.Title',    
    scrollable: true, 
    cls: 'ucEntityMasterContainer',
    bodyCls: 'ucEntityMasterContainerBody',
    ui: ePandektis.util.Common.getCurrentThemeUI('EntityMasterContainer'),
    items: [
        {
            xtype: 'baseformpanel',
            itemId: 'pnlHboxContainer',
            border: false,
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'baseformpanel',
                    itemId: 'pnlColumn1',
                    border: false,
                    flex: 1,
                    defaults: {
                        width: '100%',
                        labelWidth: ePandektis.util.Common.isTablet() ? 140 : 120,
                        labelClsExtra: 'ucEntityFieldName',
                        fieldCls: 'ucEntityFieldValue'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'kwdikos',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.Code',
                            tabIndex: 1
                        },
                        {
                            xtype: 'textfield',
                            name: 'kaek',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.Kaek',
                            tabIndex: 3
                        },
                        {
                            xtype: 'clickablelabelcombobox',
                            itemId: 'cmbProperty',
                            name: 'eidosIdioktisiasId',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.PropertyType',
                            labelClsExtra: 'ucLinkFieldLabel',
                            store: 'ePandektis.store.lookups.TyposIdioktisiasStore',
                            valueField: 'serverId',
                            displayField: 'value',
                            tabIndex: 7,
                            listeners: {
                                labelClicked: function (field) {
                                    var container = field.up('app-desktop-akinito-main');

                                    if (container)
                                        container.fireEvent('typosIdioktisiasClicked', container, field);
                                    else {
                                        var tabletcontainer = field.up('app-tablet-akinito-main');
                                        tabletcontainer.fireEvent('typosIdioktisiasClicked', tabletcontainer, field);
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'container',
                            border: false,
                            padding: '0 0 5 0',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                pack: 'start'
                            },
                            defaults: {
                                width: '100%',
                                labelWidth: ePandektis.util.Common.isTablet() ? 140 : 120,
                                labelClsExtra: 'ucEntityFieldName',
                                fieldCls: 'ucEntityFieldValue',
                                flex: 1
                            },
                            items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'emvadon',
                                    localizerKey: 'ePandektis.view.desktop.akinito.Master.Area',
                                    mouseWheelEnabled: false,
                                    tabIndex: 11
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'emvadonOikopedou',
                                    localizerKey: 'ePandektis.view.desktop.akinito.Master.PlotArea',
                                    mouseWheelEnabled: false,
                                    tabIndex: 13,
                                    margin: { left: 10 }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            border: false,
                            padding: '0 0 5 0',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                pack: 'start'
                            },
                            defaults: {
                                width: '100%',
                                labelWidth: ePandektis.util.Common.isTablet() ? 140 : 120,
                                labelClsExtra: 'ucEntityFieldName',
                                fieldCls: 'ucEntityFieldValue',
                                flex: 1
                            },
                            items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'pososto',
                                    localizerKey: 'ePandektis.view.desktop.akinito.Master.Percentage',
                                    mouseWheelEnabled: false,
                                    tabIndex: 15
                                },
                                {
                                    xtype: 'combobox',
                                    itemId: 'cmbPosostoEmvadou',
                                    name: 'eidosPosostouId',
                                    store: 'ePandektis.store.lookups.TyposPosostouStore',
                                    valueField: 'serverId',
                                    displayField: 'value',
                                    tabIndex: 17,
                                    margin: { left: 10 },
                                    hideLabel: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            border: false,
                            padding: '0 0 5 0',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                pack: 'start'
                            },
                            defaults: {
                                width: '100%',
                                labelWidth: ePandektis.util.Common.isTablet() ? 140 : 120,
                                labelClsExtra: 'ucEntityFieldName',
                                fieldCls: 'ucEntityFieldValue',
                                flex: 1
                            },
                            items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'posostoArithmitis',
                                    localizerKey: 'ePandektis.view.desktop.akinito.Master.PercentageNumerator',
                                    mouseWheelEnabled: false,
                                    tabIndex: 21
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'posostoParonomastis',
                                    localizerKey: 'ePandektis.view.desktop.akinito.Master.PercentageDenominator',
                                    mouseWheelEnabled: false,
                                    tabIndex: 23,
                                    margin: { left: 10 }
                                }
                            ]
                        },
                        /*{ //not being used 
                            xtype: 'textfield',
                            name: 'status',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.PropertyStatus',
                            labelClsExtra: 'ucLinkFieldLabel',
                            tabIndex: 25
                        },*/
                        {
                            xtype: 'numberfield', //diamerisma
                            name: 'ektimithenPoso',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.EstimatedAmount',
                            mouseWheelEnabled: false,
                            tabIndex: 27
                        },
                        {
                            xtype: 'numberfield', //diamerisma
                            name: 'posoEggrafisVarwn',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.WeightRegistrationAmount',
                            mouseWheelEnabled: false,
                            tabIndex: 29
                        },
                        {
                            xtype: 'datefield', //diamerisma
                            name: 'imerominiaEktimisis',
                            format: 'd/m/Y',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.EstimationDate',
                            tabIndex: 31
                        },
                        {
                            xtype: 'numberfield', //diamerisma
                            name: 'endiktikoKostosProsimiosis',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.IndicativeMortgageCost',
                            labelClsExtra: 'ucLinkFieldLabel',
                            mouseWheelEnabled: false,
                            tabIndex: 33
                        }
                    ]
                },
                {
                    xtype: 'baseformpanel',
                    itemId: 'pnlColumn2',
                    border: false,
                    flex: 1,
                    defaults: {
                        width: '100%',
                        //labelWidth: ePandektis.util.Common.isTablet() ? 120 : 100,
                        labelClsExtra: 'ucEntityFieldName',
                        fieldCls: 'ucEntityFieldValue'
                    },
                    margin: {
                        top: 0,
                        bottom: 0,
                        left: 20,
                        right: 0
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'odos',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.Street',
                            tabIndex: 2
                        },
                        {
                            xtype: 'fieldcontainer',
                            itemId: 'pnlAddressNumberFromPanel',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.FromNumber',
                            border: false,
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                pack: 'start'
                            },
                            defaults: {
                                hideLabel: true,
                                fieldCls: 'ucEntityFieldValue'
                            },
                            items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'apoArithmo1',
                                    width: ePandektis.util.Common.isTablet() ? 110 : 100,
                                    mouseWheelEnabled: false,
                                    tabIndex: 4
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'apoArithmo2',
                                    width: ePandektis.util.Common.isTablet() ? 80 : 60,
                                    tabIndex: 6,
                                    margin: {
                                        top: 0,
                                        bottom: 0,
                                        left: 10,
                                        right: 0
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            itemId: 'pnlAddressNumberToPanel',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.ToNumber',
                            border: false,
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                pack: 'start'
                            },
                            defaults: {
                                hideLabel: true,
                                fieldCls: 'ucEntityFieldValue'
                            },
                            items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'ewsArithmo1',
                                    width: ePandektis.util.Common.isTablet() ? 110 : 100,
                                    mouseWheelEnabled: false,
                                    tabIndex: 8
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'ewsArithmo2',
                                    width: ePandektis.util.Common.isTablet() ? 80 : 60,
                                    tabIndex: 10,
                                    margin: {
                                        top: 0,
                                        bottom: 0,
                                        left: 10,
                                        right: 0
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            name: 'tk',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.PO',
                            tabIndex: 12
                        },
                        {
                            xtype: 'textfield',
                            name: 'odos2',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.Street2',
                            tabIndex: 14
                        },
                        {
                            xtype: 'fieldcontainer',
                            itemId: 'pnlAddressNumber2Panel',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.Number',
                            border: false,
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                                pack: 'start'
                            },
                            defaults: {
                                hideLabel: true,
                                fieldCls: 'ucEntityFieldValue'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'arithmos1',
                                    width: ePandektis.util.Common.isTablet() ? 95 : 80,
                                    tabIndex: 18
                                },
                                {
                                    xtype: 'textfield',
                                    width: ePandektis.util.Common.isTablet() ? 95 : 80,
                                    name: 'arithmos2',
                                    tabIndex: 20,
                                    margin: {
                                        top: 0,
                                        bottom: 0,
                                        left: 10,
                                        right: 0
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            name: 'toponimio',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.PlaceName',
                            tabIndex: 22
                        },
                        {
                            xtype: 'clickablelabelcombobox',
                            itemId: 'cmbDimos',
                            name: 'dimosId',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.Municipality',
                            labelClsExtra: 'ucLinkFieldLabel',
                            store: 'ePandektis.store.lookups.DimoiStore',
                            valueField: 'serverId',
                            displayField: 'value',
                            tabIndex: 24,
                            listeners: {
                                labelClicked: function (field) {
                                    var container = field.up('app-desktop-akinito-main');

                                    if (container)
                                        container.fireEvent('dimosClicked', container, field);
                                    else {
                                        var tabletcontainer = field.up('app-tablet-akinito-main');
                                        tabletcontainer.fireEvent('dimosClicked', tabletcontainer, field);
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'clickablelabelcombobox',
                            itemId: 'cmbPolh',
                            name: 'polhId',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.City',
                            labelClsExtra: 'ucLinkFieldLabel',
                            store: 'ePandektis.store.lookups.CitiesStore',
                            valueField: 'serverId',
                            displayField: 'value',
                            tabIndex: 26,
                            listeners: {
                                labelClicked: function (field) {
                                    var container = field.up('app-desktop-akinito-main');

                                    if (container)
                                        container.fireEvent('polhClicked', container, field);
                                    else {
                                        var tabletcontainer = field.up('app-tablet-akinito-main');
                                        tabletcontainer.fireEvent('polhClicked', tabletcontainer, field);
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'clickablelabelcombobox',
                            itemId: 'cmbNomos',
                            name: 'nomosId',
                            localizerKey: 'ePandektis.view.desktop.akinito.Master.County',
                            labelClsExtra: 'ucLinkFieldLabel',
                            store: 'ePandektis.store.lookups.NomoiStore',
                            valueField: 'serverId',
                            displayField: 'value',
                            tabIndex: 28,
                            listeners: {
                                labelClicked: function (field) {
                                    var container = field.up('app-desktop-akinito-main');

                                    if (container)
                                        container.fireEvent('nomosClicked', container, field);
                                    else {
                                        var tabletcontainer = field.up('app-tablet-akinito-main');
                                        tabletcontainer.fireEvent('nomosClicked', tabletcontainer, field);
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'baseformpanel',
                    itemId: 'pnlColumn3',
                    border: false,
                    flex: 1,
                    hidden: ePandektis.util.Common.isTablet(),
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start'
                    },
                    margin: {
                        top: 0,
                        bottom: 0,
                        left: 20,
                        right: 0
                    },
                    /*defaults: {
                        labelWidth: ePandektis.util.Common.isTablet() ? 120 : 100,
                        //labelCls: 'ucEntityFieldName',
                        //fieldCls: 'ucEntityFieldValue'
                    },*/
                    items: [
                            {
                                xtype: 'label',
                                cls: 'textAreaFieldName',
                                localizerKey: 'ePandektis.view.desktop.akinito.Master.Description'
                            },
                            {
                                xtype: 'textareafield',
                                name: 'perigrafi',
                                flex: 1,
                                fieldCls: 'ucNotesTextArea'
                            },
                            {
                                xtype: 'label',
                                cls: 'textAreaFieldName',
                                localizerKey: 'ePandektis.view.desktop.akinito.Master.ExistingWeightDescription'
                            },
                            {
                                xtype: 'textareafield', //diamerisma
                                name: 'perigrafiYfistamenwnVarwn',
                                flex: 1,
                                fieldCls: 'ucNotesTextArea'
                            },
                            {
                                xtype: 'label',
                                cls: 'textAreaFieldName',
                                localizerKey: 'ePandektis.view.desktop.akinito.Master.Info'
                            }
                    ]
                }
            ]
        },
        {
            xtype: 'baseformpanel',
            itemId: 'pnlNotes',
            border: false,
            hidden: !ePandektis.util.Common.isTablet(),
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            margin: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            /*defaults: {
                labelWidth: ePandektis.util.Common.isTablet() ? 120 : 100,
                //labelCls: 'ucEntityFieldName',
                //fieldCls: 'ucEntityFieldValue'
            },*/
            items: [
                {
                    xtype: 'label',
                    cls: 'textAreaFieldName',
                    localizerKey: 'ePandektis.view.desktop.akinito.Master.Description'
                },
                {
                    xtype: 'textareafield',
                    name: 'perigrafi',
                    flex: 1,
                    fieldCls: 'ucNotesTextArea'
                },
                {
                    xtype: 'label',
                    cls: 'textAreaFieldName',
                    localizerKey: 'ePandektis.view.desktop.akinito.Master.ExistingWeightDescription'
                },
                {
                    xtype: 'textareafield', //diamerisma
                    name: 'perigrafiYfistamenwnVarwn',
                    flex: 1,
                    fieldCls: 'ucNotesTextArea'
                },
                {
                    xtype: 'label',
                    cls: 'textAreaFieldName',
                    localizerKey: 'ePandektis.view.desktop.akinito.Master.Info'
                }
            ]
        }
    ],
    loadRecord: function (record) {
        if (!record)
            return;

        ePandektis.util.Common.addLookupRecord(this.queryById('cmbProperty').getStore(), record.get('eidosIdioktisiasId'), record.get('eidosIdioktisias'));
        ePandektis.util.Common.addLookupRecord(this.queryById('cmbPosostoEmvadou').getStore(), record.get('eidosPosostouId'), record.get('eidosPosostou'));
        ePandektis.util.Common.addLookupRecord(this.queryById('cmbNomos').getStore(), record.get('nomosId'), record.get('nomos'));
        ePandektis.util.Common.addLookupRecord(this.queryById('cmbDimos').getStore(), record.get('dimosId'), record.get('dimos'));
        ePandektis.util.Common.addLookupRecord(this.queryById('cmbPolh').getStore(), record.get('polhId'), record.get('polh'));

        this.queryById('pnlColumn1').loadRecord(record);
        this.queryById('pnlColumn2').loadRecord(record);
        this.getActiveNotesPanel().loadRecord(record);
    },
    updateRecord: function (record) {
        if (!record)
            return;

        this.queryById('pnlColumn1').updateRecord(true);
        this.queryById('pnlColumn2').updateRecord(true);
        this.getActiveNotesPanel().updateRecord(true);
    },
    getActiveNotesPanel: function () {
        return ePandektis.util.Common.isTablet() ? this.queryById('pnlNotes') : this.queryById('pnlColumn3');
    }
});