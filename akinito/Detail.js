Ext.define('ePandektis.view.desktop.akinito.Detail', {
    extend: 'ePandektis.view.common.BasePanel',
    xtype: 'app-desktop-akinito-detail',
    requires: [
        'ePandektis.view.common.DynamicCardPanel',
        'ePandektis.view.desktop.akinito.DetailMenu',
        'ePandektis.view.desktop.akinito.OrofoiPanel',
        'ePandektis.view.desktop.akinito.IdioktitesPanel',
        'ePandektis.view.desktop.akinito.ParartimataPanel',
        'ePandektis.view.desktop.akinito.VarhPanel'
    ],
    layout: 'border',
    cls: 'ucEntityDetailContainer',
    bodyCls: 'ucEntityDetailContainerBody',
    ui: ePandektis.util.Common.getCurrentThemeUI('EntityDetailContainer'),
    items: [
        {
            xtype: 'app-desktop-akinito-detail-menu',
            region: 'west'
        },
        {
            xtype: 'dynamiccardpanel',
            itemId: 'pnlCards',
            region: 'center',
            cls: 'ucEntityDetailPanel',
            bodyCls: 'ucEntityDetailPanelBody',
            defaultCardType: 'ePandektis.view.desktop.akinito.OrofoiPanel',
            items: [
                {
                    xtype: 'app-desktop-akinito-orofoi'
                }
            ]
        }
    ],
    activateOrofoiPanel: function () {
        this.queryById('pnlCards').activateCard('ePandektis.view.desktop.akinito.OrofoiPanel');
    },
    activateIdioktitesPanel: function () {
        this.queryById('pnlCards').activateCard('ePandektis.view.desktop.akinito.IdioktitesPanel');
    },
    activateParartimataPanel: function () {
        this.queryById('pnlCards').activateCard('ePandektis.view.desktop.akinito.ParartimataPanel');
    },
    activateVarhPanel: function () {
        this.queryById('pnlCards').activateCard('ePandektis.view.desktop.akinito.VarhPanel');
    },
    updateRecord: function (record) {
        this.queryById('pnlCards').updateRecord(record);
    }    
});