Ext.define('ePandektis.view.desktop.akinito.ParartimataPanel', {
    extend: 'ePandektis.view.common.BasePanel',    
    requires: [
        'ePandektis.view.common.BaseFormPanel',
        'ePandektis.view.desktop.akinito.ParartimataGridPanel'
    ],
    xtype: 'app-desktop-akinito-parartimata',
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
            xtype: 'akinitoparartimatagridpanel',
            itemId: 'pnlParartimata',
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

        this.queryById('pnlParartimata').loadRecord(record);
    },
    updateRecord: function (record) {
        if (!record)
            return;
        
        ePandektis.util.Common.updateStoreRecords(this.queryById('pnlParartimata').getStore(), record.parartimata());
    }
} );