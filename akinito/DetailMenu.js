Ext.define('ePandektis.view.desktop.akinito.DetailMenu', {
    requires: [
        'ePandektis.view.desktop.common.EntityDetailMenu'
    ],
    extend: 'ePandektis.view.desktop.common.EntityDetailMenu',
    xtype: 'app-desktop-akinito-detail-menu',
    localizerKey: 'ePandektis.view.desktop.akinito.DetailMenu.Title',
    store: 'ePandektis.store.akinito.AkinitoDetailsStore',
    storeLocalizer: true,
    onMenuItemSelection: function (localizerKey) {
        if (!localizerKey)
            return;

        if (localizerKey == 'ePandektis.view.desktop.akinito.DetailMenuOption.Floors') {
            this.fireEvent('orofoiClicked', this);
            return;
        }

        if (localizerKey == 'ePandektis.view.desktop.akinito.DetailMenuOption.Owners')
        {
            this.fireEvent('idioktitesClicked', this);
            return;
        }

        if (localizerKey == 'ePandektis.view.desktop.akinito.DetailMenuOption.Appendix') {
            this.fireEvent('parartimataClicked', this);
            return;
        }

        if (localizerKey == 'ePandektis.view.desktop.akinito.DetailMenuOption.Weights') {
            this.fireEvent('varhClicked', this);
            return;
        }
    }
});