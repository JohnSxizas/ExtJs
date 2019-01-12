Ext.define('ePandektis.view.desktop.akinito.Main', {
    extend: 'ePandektis.view.desktop.common.EntityContainerPanel',
    requires: [
        'ePandektis.view.desktop.common.EntityContainerPanel',
        'ePandektis.view.desktop.akinito.Master',
        'ePandektis.view.desktop.akinito.Detail',
        'ePandektis.store.akinito.AkinitoStore'
    ],
    xtype: 'app-desktop-akinito-main',
    localizerKey: 'ePandektis.view.desktop.akinito.Main.Title',
    storeClassName: 'ePandektis.store.akinito.AkinitoStore',
    scrollable: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: ePandektis.util.Common.getCurrentThemeUI('EntityToolbar'),
            items: [
                {
                    xtype: 'label',
                    itemId: 'lblStatus'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.Manual',
                    ui: ePandektis.util.Common.getCurrentThemeUI('EntityToolbarButtons'),
                    cls: 'ucGridToolbarButton',
                    iconCls: 'x-fa fa-book ucToolbarIcons',
                    listeners: {
                        click: function (button, e, eOpts) {
                            var thisObj = this.up('app-desktop-akinito-main');
                            thisObj.fireEvent('buttonManualClicked', thisObj);
                        },
                        beforerender: function (panel) {
                            ePandektis.util.Localizer.update(panel, true);
                        }
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'btnSave',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.Save',
                    ui: ePandektis.util.Common.getCurrentThemeUI('EntityToolbarButtons'),
                    cls: 'ucGridToolbarButton',
                    iconCls: 'x-fa fa-save ucToolbarIcons',
                    listeners: {
                        click: function (button, e, eOpts) {
                            var thisObj = this.up('app-desktop-akinito-main');
                            thisObj.fireEvent('saveData', thisObj);
                        },
                        beforerender: function (panel) {
                            ePandektis.util.Localizer.update(panel, true);
                        }
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'btnSaveAndExit',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.SaveAndExit',
                    ui: ePandektis.util.Common.getCurrentThemeUI('EntityToolbarButtons'),
                    cls: 'ucGridToolbarButton',
                    iconCls: 'x-fa fa-check ucToolbarIcons',
                    listeners: {
                        click: function (button, e, eOpts) {
                            var thisObj = this.up('app-desktop-akinito-main');
                            thisObj.fireEvent('saveData', thisObj, true);
                        },
                        beforerender: function (panel) {
                            ePandektis.util.Localizer.update(panel, true);
                        }
                    }
                },
                {
                    xtype: 'button',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.Close',
                    ui: ePandektis.util.Common.getCurrentThemeUI('EntityToolbarButtons'),
                    cls: 'ucGridToolbarButton',
                    iconCls: 'x-fa fa-close ucToolbarIcons',
                    listeners: {
                        click: function (button, e, eOpts) {
                            this.up('app-desktop-akinito-main').close();
                        },
                        beforerender: function (panel) {
                            ePandektis.util.Localizer.update(panel, true);
                        }
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'app-desktop-akinito-master',
            itemId: 'pnlMaster',
            collapsible: true,
            collapseDirection: 'top',
            collapseMode: 'header',
            collapseFirst: false,
            resizable: true,
            resizeHandles: 's'
        },
        {
            xtype: 'app-desktop-akinito-detail',
            itemId: 'pnlDetail',
            height: 500
        }
    ],
    listeners: {
        beforerender: function (panel) {
            ePandektis.util.Localizer.update(panel, true);
        }
    },   
    loadRecord: function (record) {
        this.queryById('pnlMaster').loadRecord(record);
        this.record = record;
    },
    updateRecordFromUser: function () {
        if (!this.record)
        {
            ePandektis.util.Common.consoleWarn('No record to update');
            return;
        }
        
        this.queryById('pnlMaster').updateRecord(this.record);
        this.queryById('pnlDetail').updateRecord(this.record);
    },
    setReadOnly: function (message) {
        this.queryById('lblStatus').setHtml(message);
        this.queryById('btnSave').disable();
        this.queryById('btnSaveAndExit').disable();

        var mainPanel = this;

        var masterItems = this.down('app-desktop-akinito-master').items;
        masterItems.each(function (panelItem, index, totalCount) {
            if (panelItem.xtype == 'baseformpanel')
                mainPanel.setReadOnlyBaseFormItems(panelItem.items);
        });

        //set default detail readOnly
        var defaultDetail = this.down('app-desktop-akinito-OrofoiGridPanel');

        //if rendered readOnly cls not working (tools are readOnly)
        if (defaultDetail.setReadOnly)
            defaultDetail.setReadOnly();
    },
    setReadOnlyBaseFormItems: function (formItems) {
        var mainPanel = this;
        formItems.each(function (panelItem, index, totalCount) {
            if ((panelItem.xtype == 'baseformpanel') || (panelItem.xtype == 'container') || (panelItem.xtype == 'fieldcontainer'))
                mainPanel.setReadOnlyBaseFormItems(panelItem.items);
            else
                (typeof panelItem.setReadOnly === 'function') ? panelItem.setReadOnly(true) : panelItem.setDisabled(true); //setDisabled for button
        });
    },
    isReadOnly: function () {
        return this.queryById('btnSave').isDisabled();
    }
});