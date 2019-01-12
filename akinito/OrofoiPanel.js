Ext.define('ePandektis.view.desktop.akinito.OrofoiPanel', {
    extend: 'ePandektis.view.common.BasePanel',    
    requires: [
        'ePandektis.view.common.BaseFormPanel',
        'ePandektis.view.desktop.akinito.OrofoiGridPanel'
    ],
    xtype: 'app-desktop-akinito-orofoi',
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
            xtype: 'akinitoorofoigridpanel',
            itemId: 'pnlOrofoi',
            flex: 1
        }
    ],
    listeners: {
        beforerender: function (panel) {
            ePandektis.util.Localizer.update(panel, true);
        }
    },
    updateRecord: function (record) {
        if (!record)
            return;
        
        ePandektis.util.Common.updateStoreRecords(this.queryById('pnlOrofoi').getStore(), record.orofoi());
    }
} );