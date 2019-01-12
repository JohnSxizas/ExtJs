Ext.define('ePandektis.view.desktop.akinita.Main', {
    extend: 'ePandektis.view.common.BaseMasterIndexTab',
    requires: [
        'ePandektis.view.common.BaseMasterIndexTab',
        'ePandektis.view.desktop.akinita.BrowserGridPanel',
    ],
    xtype: 'app-desktop-akinita-main',
    localizerKey: 'ePandektis.view.desktop.akinita.Main.Title',
    layout: 'fit',
    closable: true,
    items: [
        {
            xtype: 'app-desktop-akinita-grid',
            itemId: 'pnlAkinitaGrid'
        }
    ]
});