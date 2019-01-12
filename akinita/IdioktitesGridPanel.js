Ext.define('ePandektis.view.desktop.akinita.IdioktitesGridPanel', {
    extend: 'ePandektis.view.common.BaseDetailIndex',
    requires: [
        'ePandektis.view.common.BaseDetailIndex',
        'ePandektis.store.akinita.AkinitaIdioktitesStore'
    ],
    xtype: 'app-desktop-akinita-idioktitesgrid',
    storeClassName: 'ePandektis.store.akinita.AkinitaIdioktitesStore',
    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Title',
    stateful: true,
    stateId: 'app-desktop-akinita-idioktitesgrid-stateId',
    height: 150,
    columns: [
        {
            localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Group.Owner',
            columns: [
                {
                    text: 'show my columnheaders', //show column headers 
                    xtype: 'gridcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Surename',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Surename',
                    stateId: 'app-desktop-akinita-idioktitesgrid-eponymo',
                    dataIndex: 'eponymo',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                },
                {
                    xtype: 'gridcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Name',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Name',
                    stateId: 'app-desktop-akinita-idioktitesgrid-onoma',
                    dataIndex: 'onoma',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                },
                {
                    xtype: 'numbercolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Percentage',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Percentage',
                    stateId: 'app-desktop-akinita-idioktitesgrid-pososto',
                    dataIndex: 'pososto',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                },
                {
                    xtype: 'gridcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.OwnershipType',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.OwnershipType',
                    stateId: 'app-desktop-akinita-idioktitesgrid-eidosKiriotitas',
                    dataIndex: 'eidosKiriotitas',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                },
                {
                    xtype: 'gridcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.FathersName',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.FathersName',
                    stateId: 'app-desktop-akinita-idioktitesgrid-patronymo',
                    dataIndex: 'patronymo',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                },
                {
                    xtype: 'gridcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.MothersName',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.MothersName',
                    stateId: 'app-desktop-akinita-idioktitesgrid-mitronymo',
                    dataIndex: 'mitronymo',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                },
                {
                    xtype: 'checkcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.IsLegal',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.IsLegal',
                    stateId: 'app-desktop-akinita-idioktitesgrid-nomiko',
                    dataIndex: 'nomiko',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                },
                {
                    xtype: 'gridcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Address',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Address',
                    stateId: 'app-desktop-akinita-idioktitesgrid-dieuthinsi',
                    dataIndex: 'dieuthinsi',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                },
                {
                    xtype: 'gridcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.City',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.City',
                    stateId: 'app-desktop-akinita-idioktitesgrid-polh',
                    dataIndex: 'polh',
                    width: ePandektis.util.Common.isTablet() ? 150 : 120
                }
            ]
        },
        {
            localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Group.Operations',
            columns: [
                {
                    xtype: 'templatecolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.TaskCode',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.TaskCode',
                    tpl: '<a href="javascript:void(0);" onclick="openEntityEnergeia(event, this, {kwdikosErgasias}, true);">{kwdikosErgasias}</a>',
                    dataIndex: 'kwdikosErgasias',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.ActionType',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.ActionType',
                    dataIndex: 'eidosEnergeias',
                    flex: 1
                },
                {
                    xtype: 'datecolumn',
                    format: 'd/m/Y',
                    localizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Date',
                    tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.IdioktitesGridPanel.Column.Date',
                    dataIndex: 'imerominiaAnathesis',
                    flex: 1
                }
            ]
        }
    ]
});