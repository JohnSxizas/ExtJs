Ext.define('ePandektis.view.desktop.akinito.IdioktitesPanel', {
    extend: 'ePandektis.view.common.BasePanel',    
    requires: [
        'ePandektis.view.common.BaseFormPanel',
        'ePandektis.view.desktop.akinito.IdioktitesGridPanel'
    ],
    xtype: 'app-desktop-akinito-idioktites',
    border: false,
    //bodyPadding: '2, 2, 10, 2',
    scrollable: true, 
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    items: [
        {
            xtype: 'akinitoidioktitesgridpanel',
            itemId: 'pnlIdioktites',
            flex: 1
        }
    ],
    listeners: {
        beforerender: function (panel) {
            ePandektis.util.Localizer.update(panel, true);
        }
    },
    loadRecord: function (record) {
        if (!record)
            return;

        this.queryById('pnlIdioktites').loadRecord(record);
    },
    updateRecord: function (record) {
        if (!record)
            return;
        
        ePandektis.util.Common.updateStoreRecords(this.queryById('pnlIdioktites').getStore(), record.idioktites());
    }
} );