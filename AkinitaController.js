Ext.define('ePandektis.controller.AkinitaController', {
    extend: 'ePandektis.controller.MasterIndexControllerBase',
    stores: [
        'ePandektis.store.akinita.IndexFilterChoiceStore'
    ],
    init: function () {
        this.control({
            'app-desktop-akinita-grid': {
                beforerender: this.afterGridInitialized,
                tabActivated: this.onTabActivated,
                itemclick: this.onItemClicked,
                itemdblclick: this.onItemDoubleClicked,
                filtersClicked: this.onFiltersClicked,
                filtersChanged: this.onFiltersChanged,
                filtersCleared: this.onFiltersCleared,
                refreshClicked: this.onRefreshClicked,
                searchClicked: this.onSearchClicked,
                deleteRecordClicked: this.onDeleteRecordClicked,
                exportToExcelClicked: this.onExportToExcelClicked,
                saveSettingsClicked: this.onSaveSettingsClicked,
                loadSettingsClicked: this.onLoadSettingsClicked,
                loadDefaultSettingsClicked: this.onLoadDefaultSettingsClicked,
                manualClicked: this.onManualClicked,
                closeClicked: this.onCloseClicked,
                addAkinitoClicked: this.onAddAkinitoClicked
            }
        });
    },
    onItemDoubleClicked: function (grid, record, item, index) {
        this.getController('ePandektis.controller.MainController').addAkinitoTab(record.get('serverId'));
    },
    onAddAkinitoClicked: function (grid) {
        this.getController('ePandektis.controller.MainController').addAkinitoTab(null);
    },
    onDeleteRecordConfirmed: function (grid, selection) {
        this.deleteIndexRecord(grid, selection, ePandektis.util.Globals.WebHandlerActions.UpdateAkinitoRecord, 'serverId');
    },
    onExportToExcelClicked: function (grid) {
        this.exportIndexToXLSX(grid, ePandektis.util.Globals.WebHandlerActions.ExportAkinitaRecords);
    }
});