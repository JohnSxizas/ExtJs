Ext.define('ePandektis.controller.AkinitoEntityController', {
    extend: 'ePandektis.controller.FormControllerBase',
    mainPanelXType: ePandektis.util.Common.isTablet() ? 'app-tablet-akinito-main' : 'app-desktop-akinito-main',
    entityLockType: ePandektis.util.Globals.EntityLockTypes.Pessimistic,
    indexPanelClassName: 'ePandektis.view.desktop.akinita.Main',
    stores: [
		'ePandektis.store.akinito.AkinitoDetailsStore',
        'ePandektis.store.lookups.TyposIdioktisiasStore',
        'ePandektis.store.lookups.TyposPosostouStore',
        'ePandektis.store.lookups.NomoiStore',
        'ePandektis.store.lookups.EidosTautotitasStore',
        'ePandektis.store.lookups.EidosKyriotitasStore',
        'ePandektis.store.lookups.TyposVarousStore',
        'ePandektis.store.lookups.SeiraStore',
        'ePandektis.store.lookups.NomismaStore',
        'ePandektis.store.lookups.TyposYperStore',
        'ePandektis.store.lookups.YpothikofylakeiaStore',
        'ePandektis.store.lookups.KtimatologikaGrafeiaStore',
        'ePandektis.store.lookups.DimoiStore',
        'ePandektis.store.lookups.CitiesStore',
        'ePandektis.store.lookups.OrofoiStore'
    ],
    init: function () {
        this.control({
            'app-desktop-akinito-main': {
                beforerender: this.beforeEntityPanelRender,
                afterrender: this.afterEntityPanelRender,
                beforeclose: this.beforeTabClose,
                close: this.afterTabClose,
                saveData: this.onSaveData,
                typosIdioktisiasClicked: this.onTyposIdioktisiasClicked,
                nomosClicked: this.onNomosClicked,
                dimosClicked: this.onDimosClicked,
                polhClicked: this.onPolhClicked
            },
            'app-desktop-akinito-detail-menu': {
                orofoiClicked: this.onDetailOrofoiClicked,
                idioktitesClicked: this.onDetailIdioktitesClicked,
                parartimataClicked: this.onDetailParartimataClicked,
                varhClicked: this.onDetailVarhClicked
            },
            'app-desktop-akinito-OrofoiGridPanel': {
                beforerender: this.onOrofoiGridBeforeRender,
                addRecord: this.onOrofoiAddRecord,
                deleteRecord: this.onOrofoiDeleteRecord,
                itemdblclick: this.onOrofoiEditRecord
            },
            'app-desktop-akinito-IdioktitesGridPanel': {
                beforerender: this.onIdioktitesGridBeforeRender,
                addRecord: this.onIdioktitesAddRecord,
                deleteRecord: this.onIdioktitesDeleteRecord
            },
            'app-desktop-akinito-ParartimataGridPanel': {
                beforerender: this.onParartimataGridBeforeRender,
                addRecord: this.onParartimataAddRecord,
                deleteRecord: this.onParartimataDeleteRecord
            },
            'app-desktop-akinito-VarhGridPanel': {
                beforerender: this.onVarhGridBeforeRender,
                connect: this.onVarhConnect,
            },
            'app-desktop-akinito-KathwnGridPanel': {
                //beforerender: this.onKathwnGridBeforeRender,
                deleteRecord: this.onKathwnDeleteRecord
            },
            'app-desktop-akinito-VarhPeiraiwsGridPanel': {
                beforerender: this.onVarhPeiraiwsGridBeforeRender,
                addRecord: this.onVarhPeiraiwsAddRecord,
                deleteRecord: this.onVarhPeiraiwsDeleteRecord
            },
            'app-tablet-akinito-main': {
                beforerender: this.beforeEntityPanelRender,
                afterrender: this.afterEntityPanelRender,
                beforeclose: this.beforeTabClose,
                close: this.afterTabClose,
                saveData: this.onSaveData,
                typosIdioktisiasClicked: this.onTyposIdioktisiasClicked,
                nomosClicked: this.onNomosClicked,
                orofoiClicked: this.onDetailOrofoiClicked,
                idioktitesClicked: this.onDetailIdioktitesClicked,
                parartimataClicked: this.onDetailParartimataClicked,
                varhClicked: this.onDetailVarhClicked,
                masterClicked: this.onMasterClicked,
                dimosClicked: this.onDimosClicked,
                polhClicked: this.onPolhClicked
            },
        });
    },
    createNewEntityRecord: function () {
        return Ext.create('ePandektis.model.akinito.AkinitoModel', {
            clientId: '-1'
        });
    },
    formLoadRecord: function (panel, record) {
        if (!record)
            return;

        panel.loadRecord(record);

        this.retrieveEntityDetailGrid(panel, 'app-desktop-akinito-OrofoiGridPanel', record.orofoi());
        this.retrieveEntityDetailGrid(panel, 'app-desktop-akinito-IdioktitesGridPanel', record.idioktites()); 
        this.retrieveEntityDetailGrid(panel, 'app-desktop-akinito-ParartimataGridPanel', record.parartimata()); 
        this.retrieveEntityDetailGrid(panel, 'app-desktop-akinito-VarhGridPanel', record.varh()); 
        this.retrieveEntityDetailGrid(panel, 'app-desktop-akinito-KathwnGridPanel', record.kathwn()); 
        this.retrieveEntityDetailGrid(panel, 'app-desktop-akinito-VarhPeiraiwsGridPanel', record.peiraiws()); 
    },
    formUpdateRecord: function (panel) {
        panel.updateRecordFromUser();
    },
    getAkinitoDetailPanel: function (source) {
        var detailPanel = source.up('app-desktop-akinito-main');
        if (detailPanel)
            return detailPanel.down('app-desktop-akinito-detail');

        return source;
    },
    onMasterClicked: function (detailMenuPanel) {
        this.getAkinitoDetailPanel(detailMenuPanel).activateMaster();
    },
    onDetailOrofoiClicked: function (detailMenuPanel) {
        this.getAkinitoDetailPanel(detailMenuPanel).activateOrofoiPanel();
    },
    onDetailIdioktitesClicked: function (detailMenuPanel) {
        this.getAkinitoDetailPanel(detailMenuPanel).activateIdioktitesPanel();
    },
    onDetailParartimataClicked: function (detailMenuPanel) {
        this.getAkinitoDetailPanel(detailMenuPanel).activateParartimataPanel();
    },
    onDetailVarhClicked: function (detailMenuPanel) {
        this.getAkinitoDetailPanel(detailMenuPanel).activateVarhPanel();
    },
    onDetailAccountsClicked: function (detailMenuPanel) {
        this.getDikigorosDetailPanel(detailMenuPanel).activateAccountsPanel();
    },
    onOrofoiGridBeforeRender: function (panel) {
        this.checkReadOnly(panel);
        var entityRecord = this.getEntityRecord(panel);
        this.retrieveEntityDetailGrid(panel, null, entityRecord ? entityRecord.orofoi() : null);
    },
    onOrofoiAddRecord: function (panel) {
        this.addDetailGridRecord(panel, 'ePandektis.model.akinito.AkinitoOrofoiGridModel', 'ePandektis.view.desktop.akinito.OrofoiEditPanel.Title');
    },
    onOrofoiDeleteRecord: function (panel) {
        this.deleteDetailGridRecord(panel);
    },
    onOrofoiEditRecord: function (grid, record, item, index) {
        this.editDetailGridRecord(grid, record, 'ePandektis.view.desktop.akinito.OrofoiEditPanel.Title');
    },
    onIdioktitesGridBeforeRender: function (panel) {
        this.checkReadOnly(panel);
        var entityRecord = this.getEntityRecord(panel);
        this.retrieveEntityDetailGrid(panel, null, entityRecord ? entityRecord.idioktites() : null);
    },
    onIdioktitesDeleteRecord: function (panel) {
        this.deleteDetailGridRecord(panel);
    },
    onParartimataGridBeforeRender: function (panel) {
        this.checkReadOnly(panel);
        var entityRecord = this.getEntityRecord(panel);
        this.retrieveEntityDetailGrid(panel, null, entityRecord ? entityRecord.parartimata() : null);
    },
    onParartimataDeleteRecord: function (panel) {
        this.deleteDetailGridRecord(panel);
    },
    onVarhGridBeforeRender: function (panel) {
        this.checkReadOnly(panel);
        var entityRecord = this.getEntityRecord(panel);
        this.retrieveEntityDetailGrid(panel, null, entityRecord ? entityRecord.varh() : null);
    },
    onVarhConnect: function (panel) {
        
    },
    onKathwnGridBeforeRender: function (panel) {
        this.checkReadOnly(panel);
        var entityRecord = this.getEntityRecord(panel);
        this.retrieveEntityDetailGrid(panel, null, entityRecord ? entityRecord.kathwn() : null);
    },
    onKathwnDeleteRecord: function (panel) {
        this.deleteDetailGridRecord(panel);
    },
    onVarhPeiraiwsGridBeforeRender: function (panel) {
        this.checkReadOnly(panel);
        var entityRecord = this.getEntityRecord(panel);
        this.retrieveEntityDetailGrid(panel, null, entityRecord ? entityRecord.peiraiws() : null);
    },
    onVarhPeiraiwsAddRecord: function (panel) {
        panel.getStore().add(Ext.create('ePandektis.model.akinito.AkinitoVarhPeiraiwsGridModel'));
    },
    onVarhPeiraiwsDeleteRecord: function (panel) {
        this.deleteDetailGridRecord(panel);
    },
    onTyposIdioktisiasClicked: function (panel, field) {
        this.openEntitySelectionWindow(panel, 'ePandektis.view.desktop.common.TyposIdioktisiasSingleSelectionWindow', field);
    },
    onNomosClicked: function (panel, field) {
        this.openEntitySelectionWindow(panel, 'ePandektis.view.desktop.common.NomosSingleSelectionWindow', field);
    },
    onDimosClicked: function (panel, field) {
        this.openEntitySelectionWindow(panel, 'ePandektis.view.desktop.common.DimoiSingleSelectionWindow', field);
    },
    onPolhClicked: function (panel, field) {
        this.openEntitySelectionWindow(panel, 'ePandektis.view.desktop.common.CitiesSingleSelectionWindow', field);
    }
});