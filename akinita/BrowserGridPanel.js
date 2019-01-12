Ext.define('ePandektis.view.desktop.akinita.BrowserGridPanel', {
    extend: 'ePandektis.view.common.BaseMasterIndex',
    requires: [
        'ePandektis.view.common.BaseMasterIndex',
        'ePandektis.view.common.RowExpanderGrid',
        'ePandektis.store.akinita.AkinitaStore',
        'ePandektis.view.desktop.akinita.IdioktitesGridPanel',
        'ePandektis.view.desktop.akinita.ErgasiesGridPanel',
        'ePandektis.store.akinita.IndexFilterChoiceStore'
    ],
    xtype: 'app-desktop-akinita-grid',
    storeClassName: 'ePandektis.store.akinita.AkinitaStore',
    indexFilterEntityType: ePandektis.util.FilterManager.IndexEntities.Akinita,
    choiceFilterStoreClassName: 'ePandektis.store.akinita.IndexFilterChoiceStore',
    stateful: true,
    stateId: 'app-desktop-akinita-grid-stateId',
    extraToolbarItems: [
         {
             xtype: 'button',
             itemId: 'btnAddDetail',
             ui: ePandektis.util.Common.getCurrentThemeUI('EntityToolbarButtons'),
             iconCls: 'x-fa fa-plus ucToolbarIcons',
             tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.AddRecord',
             listeners: {
                 click: function (button, e, eOpts) {
                     var thisObj = this.up('app-desktop-akinita-grid');
                     thisObj.fireEvent('addAkinitoClicked', thisObj);
                 },
                 beforerender: function (panel) {
                     ePandektis.util.Localizer.update(panel, true);
                 }
             }
         },
        {
            xtype: 'button',
            tooltipLocalizerKey: 'ePandektis.view.desktop.Grid.DeleteRecord',
            ui: ePandektis.util.Common.getCurrentThemeUI('EntityToolbarButtons'),
            cls: 'ucGridToolbarButton',
            iconCls: 'x-fa fa-minus ucToolbarIcons',
            listeners: {
                click: function (button, e, eOpts) {
                    var thisObj = this.up('app-desktop-akinita-grid');
                    thisObj.fireEvent('deleteRecordClicked', thisObj);
                },
                beforerender: function (panel) {
                    ePandektis.util.Localizer.update(panel, true);
                }
            }
        }
    ],
    columns: [
        {
            xtype: 'filterrowtemplatecolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.ID',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.ID',
            stateId: 'app-desktop-akinita-grid-serverId',
            dataIndex: 'serverId',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.ID,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.ID,
            flex: 1,            
            tpl: '<a href="javascript:void(0);" onclick="openEntityAkinito(event, this, {serverId});">{serverId}</a>',
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            text: 'show my columnheaders',
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.PropertyType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.PropertyType',
            stateId: 'app-desktop-akinita-grid-eidosAkinitou',
            dataIndex: 'eidosAkinitou',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.EidosAkinitou,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.EidosAkinitou,
            flex: 1,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.Floors',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.Floors',
            stateId: 'app-desktop-akinita-grid-orofoi',
            dataIndex: 'orofoi',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.Orofoi,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.Orofoi,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.Address',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.Address',
            stateId: 'app-desktop-akinita-grid-dieuthinsi',
            dataIndex: 'dieuthinsi',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.Dieuthinsi,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.Dieuthinsi,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            flex: 1,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.PO',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.PO',
            stateId: 'app-desktop-akinita-grid-tk',
            dataIndex: 'tk',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.Tk,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.Tk,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },        
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.City',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.City',
            stateId: 'app-desktop-akinita-grid-polh',
            dataIndex: 'polh',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.Polh,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.Polh,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.Municipality',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.Municipality',
            stateId: 'app-desktop-akinita-grid-dimos',
            dataIndex: 'dimos',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.Dimos,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.Dimos,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.County',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.County',
            stateId: 'app-desktop-akinita-grid-nomos',
            dataIndex: 'nomos',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.Nomos,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.Nomos,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.PlaceName',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.PlaceName',
            stateId: 'app-desktop-akinita-grid-toponimio',
            dataIndex: 'toponimio',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.Toponimio,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.Toponimio,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        },
        {
            xtype: 'filterrowcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.Kaek',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.BrowserGridPanel.Column.Kaek',
            stateId: 'app-desktop-akinita-grid-kaek',
            dataIndex: 'kaek',
            serverFilterId: ePandektis.util.FilterManager.AkinitaIndexFilterColumns.Kaek,
            serverOrderId: ePandektis.util.FilterManager.AkinitaIndexOrderColumns.Kaek,
            width: ePandektis.util.Common.isTablet() ? 150 : 120,
            filterRowField: {
                xtype: 'filterrowtextfield'
            }
        }
    ],
    plugins: [
         {
             ptype: 'rowexpandergrid',
             pluginId: 'rowexpandergrid',
             gridConfig: [
                 {
                     detailGridType: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel'
                 },
                 {
                     detailGridType: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel'
                 }
             ]
         }
    ]
});