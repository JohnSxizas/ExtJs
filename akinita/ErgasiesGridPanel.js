Ext.define('ePandektis.view.desktop.akinita.ErgasiesGridPanel', {
    extend: 'ePandektis.view.common.BaseDetailIndex',
    requires: [
        'ePandektis.view.common.BaseDetailIndex',
        'ePandektis.store.akinita.AkinitaErgasiesStore'
    ],
    xtype: 'app-desktop-akinita-ergasiesgrid',
    storeClassName: 'ePandektis.store.akinita.AkinitaErgasiesStore',
    localizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Title',
    stateful: true,
    stateId: 'app-desktop-akinita-ergasiesgrid-stateId',
    height: 150,
    columns: [
        {
            text: 'show my columnheaders', //show column headers 
            xtype: 'templatecolumn',
            dataIndex: 'serverId',
            stateId: 'app-desktop-akinita-ergasiesgrid-serverId',
            localizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.ID',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.ID',
            tpl: '<a href="javascript:void(0);" onclick="openEntityEnergeia(event, this, {serverId}, true);">{serverId}</a>',
            width: ePandektis.util.Common.isTablet() ? 150 : 120
        },
        {
            xtype: 'datecolumn',
            format: 'd/m/Y',
            localizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.Date',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.Date',
            stateId: 'app-desktop-akinita-ergasiesgrid-imerominia',
            dataIndex: 'imerominia',
            width: ePandektis.util.Common.isTablet() ? 150 : 120
        },
        {
            xtype: 'gridcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.TaskType',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.TaskType',
            stateId: 'app-desktop-akinita-ergasiesgrid-energeia',
            dataIndex: 'energeia',
            width: ePandektis.util.Common.isTablet() ? 150 : 120
        },
        {
            xtype: 'gridcolumn',
            localizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.Affiliate',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.Affiliate',
            stateId: 'app-desktop-akinita-ergasiesgrid-sinergatis',
            dataIndex: 'sinergatis',
            width: ePandektis.util.Common.isTablet() ? 150 : 120
        },
        {
            xtype: 'filterrowtemplatecolumn',
            dataIndex: 'ypothesiId',
            stateId: 'app-desktop-akinita-ergasiesgrid-ypothesiId',
            localizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.CaseID',
            tooltipLocalizerKey: 'ePandektis.view.desktop.akinita.ErgasiesGridPanel.Column.CaseID',
            tpl: '<a href="javascript:void(0);" onclick="openEntityYpothesi(event, this, {ypothesiId});">{ypothesiId}</a>',
            width: ePandektis.util.Common.isTablet() ? 150 : 120
        }
    ]
});