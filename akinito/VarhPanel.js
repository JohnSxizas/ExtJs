Ext.define('ePandektis.view.desktop.akinito.VarhPanel', {
    extend: 'ePandektis.view.common.BasePanel',    
    requires: [
        'ePandektis.view.common.BaseFormPanel',
        'ePandektis.view.desktop.akinito.VarhGridPanel',
        'ePandektis.view.desktop.akinito.VarhPeiraiwsGridPanel'
    ],
    xtype: 'app-desktop-akinito-varh',
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
            xtype: 'akinitovarhgridpanel', // or akinitovarhpeiraiwsgridpanel
            itemId: 'pnlVarh',            
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

        this.queryById('pnlVarh').loadRecord(record);
    },
    updateRecord: function (record) {
        if (!record)
            return;
        
        ePandektis.util.Common.updateStoreRecords(this.queryById('pnlVarh').getStore(), record.varh());
    }
} );