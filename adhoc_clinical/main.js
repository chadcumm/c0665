(self["webpackChunkadhoc_clinical"] = self["webpackChunkadhoc_clinical"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 508:
/*!**************************************************!*\
  !*** ./src/app/allergies/allergies.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllergiesComponent": function() { return /* binding */ AllergiesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);


var AllergiesComponent = /** @class */ (function () {
    function AllergiesComponent(allergyService) {
        this.allergyService = allergyService;
    }
    AllergiesComponent.prototype.ngOnInit = function () {
    };
    AllergiesComponent.ɵfac = function AllergiesComponent_Factory(t) { return new (t || AllergiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_1__.AllergyService)); };
    AllergiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllergiesComponent, selectors: [["app-allergies"]], decls: 5, vars: 1, consts: [[1, "component-container"]], template: function AllergiesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Allergies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.allergyService.toString());
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxlcmdpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AllergiesComponent;
}());



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);
/* harmony import */ var _appointment_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment-data.service */ 99636);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);








function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading Component Details.....");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mpage-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_ng_container_3_Template_mpage_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.prompts.provider = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.prompts.provider)("physicianInd", true)("searchable", true);
} }
function AppComponent_div_1_ng_container_6_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "The new encounter has been created. Click to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_ng_container_6_div_4_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r8.openEncounter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Change to Encounter (FIN:", ctx_r6.newFIN, ")");
} }
function AppComponent_div_1_ng_container_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New Encounter creation in progress. Please Wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_div_1_ng_container_6_div_4_Template, 5, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_div_1_ng_container_6_div_5_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.encounterCreated);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.encounterInProcess);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mpage-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_Template_mpage_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.prompts.org_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mpage-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_Template_mpage_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.prompts.encounter_type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_1_ng_container_3_Template, 2, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.createEncounter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Create Encounter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_div_1_ng_container_6_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.prompts.org_name)("searchable", false)("searchLimit", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.prompts.encounter_type)("searchable", false)("searchLimit", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.ready);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.encounterRunOnce);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.encounterCreated || ctx_r1.encounterInProcess);
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(activatedRoute, mPage, personService, appointmentDS, maButton, encntrService, PM) {
        this.activatedRoute = activatedRoute;
        this.mPage = mPage;
        this.personService = personService;
        this.appointmentDS = appointmentDS;
        this.maButton = maButton;
        this.encntrService = encntrService;
        this.PM = PM;
        this.currentApplicationVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
        this.isReady = false;
        this.referringProvider = [];
        this.clinicEncounter = [];
        this.newEncntrID = 0;
        this.newPersonID = 0;
        this.newFIN = "Error Creating new Encounter. Contact Support.";
        this.prompts = {
            org_name: '',
            provider: 0,
            provider_name: '',
            user_id: 0,
            encounter_type: ''
        };
        this.encounterCreated = false;
        this.encounterInProcess = false;
        this.encounterRunOnce = false;
    }
    //title: string = "adhoc_clinical"
    AppComponent.prototype.createEncounter = function (event) {
        this.mPage.putLog("createEncounter Clicked");
        this.encounterInProcess = true;
        this.encounterRunOnce = true;
        //this.mPage.putLog(JSON.stringify(this.prompts))
        this.callCreateEncounter();
        /*
        this.encounterCreated = false;
        setTimeout(() => {
          //this.mPage.putLog(this.PM.get("adhoc_clinical").newEncntrId)
          this.encounterCreated = true;
        }, 1000)
        */
    };
    AppComponent.prototype.openEncounter = function (event) {
        var el = document.getElementById('applink');
        // @ts-ignore
        el.href = 'javascript:APPLINK(0,"Powerchart.exe","/PERSONID=' + this.newPersonID + ' /ENCNTRID=' + this.newEncntrID + '")';
        // @ts-ignore
        el.click();
    };
    //APPLINK(0,'Powerchart.exe','/PERSONID='+ this.newPersonID + '/ENCNTRID=' + this.newEncntrID);
    AppComponent.prototype.callCreateEncounter = function () {
        var _this = this;
        this.prompts.user_id = this.mPage.prsnlId;
        this.PM.load({
            customScript: {
                script: [
                    {
                        name: 'cov_co_add_encntr:dba',
                        run: 'pre',
                        id: 'adhoc_clinical',
                        parameters: this.prompts
                    }
                ]
            }
        }, undefined, (function () {
            _this.newEncntrID = _this.PM.get("adhoc_clinical").newEncntrId;
            _this.newPersonID = _this.PM.get("adhoc_clinical").personId;
            _this.newFIN = _this.PM.get("adhoc_clinical").newFin;
            _this.PM.executeDmInfoAction('paramDefaults', 'w', [
                {
                    infoDomain: 'Adhoc_Encounter_Clinical',
                    infoName: 'paramDefault',
                    infoDate: new Date(),
                    infoChar: JSON.stringify(_this.prompts),
                    infoNumber: 0,
                    infoLongText: '',
                    infoDomainId: _this.mPage.prsnlId
                }
            ]);
            if (_this.newEncntrID > 0) {
                _this.encounterInProcess = false;
                _this.encounterCreated = true;
            }
        }));
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Grab any parameters in the URL (Used in Cerner Components)
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.mPage.personId = params.personId ? parseInt(params.personId) : _this.mPage.personId;
            _this.mPage.encntrId = params.encounterId ? parseInt(params.encounterId) : _this.mPage.encntrId;
            _this.mPage.prsnlId = params.userId ? parseInt(params.userId) : _this.mPage.prsnlId;
        });
        // Perform MPage Initialization
        setTimeout(function (e) {
            _this.mPage.setMaxInstances(2, true, 'CHART');
            //this.ready = true;
            //this.prompts.org_name = "Covenant Neurohospitalists - Trustee Tower"
            // Add your initialization code here - do not place outside setTimeout function
            _this.encntrService.load({
                payload: {
                    encounter: {
                        includeCodeValues: true,
                        aliases: true,
                        encounterInfo: true,
                        prsnlReltn: true,
                        locHist: false
                    }
                }
            });
            _this.personService.load({
                payload: {
                    person: {
                        includeCodeValues: true,
                        aliases: true,
                        personInfo: true,
                        prsnlReltn: true
                    }
                }
            });
        }, 0);
    };
    AppComponent.prototype.useStoredDefaults = function () {
        if (this.PM.isLoaded('paramDefaults')) {
            this.prompts = JSON.parse(this.PM.get('paramDefaults').dmInfo[0].infoChar);
            this.mPage.putLog(JSON.stringify(this.prompts));
            this.mPage.putLog(this.prompts.encounter_type);
        }
    };
    Object.defineProperty(AppComponent.prototype, "ready", {
        get: function () {
            var _this = this;
            if (!this.isReady && this.personService.isLoaded()) {
                this.isReady = true;
                this.prompts.provider = this.personService.getPrsnlReltn('PCP')['personId'];
                this.prompts.provider_name = this.personService.getPrsnlReltn('PCP')['nameFullFormatted'];
                this.mPage.putLog(JSON.stringify(this.prompts));
                this.PM.executeDmInfoAction('paramDefaults', 'r', [
                    {
                        infoDomain: 'Adhoc_Encounter_Clinical',
                        infoName: 'paramDefault',
                        infoDate: new Date(),
                        infoChar: '',
                        infoNumber: 0,
                        infoLongText: '',
                        infoDomainId: this.mPage.prsnlId
                    }
                ], function () { _this.useStoredDefaults(); });
            }
            return this.isReady;
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__.mPageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__.PersonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_appointment_data_service__WEBPACK_IMPORTED_MODULE_1__.AppointmentDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__.EncounterService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__.CustomService)); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 3, consts: [[4, "ngIf"], [1, "separator"], [1, "smallHidden"], ["label", "Clinic", "script", "cov_co_cmg_select:group1", 1, "clinic_list", 3, "ngModel", "searchable", "searchLimit", "ngModelChange"], ["label", "Encounter Type", "script", "cov_co_encntr_type_select:group1", 1, "clinic_list", 3, "ngModel", "searchable", "searchLimit", "ngModelChange"], ["mat-raised-button", "", 3, "disabled", "click"], ["label", "Referring Provider", "hintLabel", "Referring Provider will default to current PCP if not specified", 1, "referring_search", 3, "ngModel", "physicianInd", "searchable", "ngModelChange"], ["href", "#", 3, "click"], ["href", "#", "id", "applink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 7, 9, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mpage-log-component");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.ready);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ready);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" v", ctx.currentApplicationVersion, " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__.mPageLogComponent, _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__.MpageSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], styles: [".referring_search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7QUFBUiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmZXJyaW5nX3NlYXJjaCAgIHtcbiAgICBpbnB1dCAgIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgIH1cbn0iXX0= */"] });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ 63737);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _allergies_allergies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allergies/allergies.component */ 508);
/* harmony import */ var _appointment_summary_appointment_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-summary/appointment-summary.component */ 85906);















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler, useClass: _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__.ErrorHandlerService },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE] },
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_FORMATS, useValue: {
                    parse: {
                        dateInput: ['l', 'LL'],
                    },
                    display: {
                        dateInput: 'MM-DD-YYYY',
                        monthYearLabel: 'MMM YYYY',
                        dateA11yLabel: 'LL',
                        monthYearA11yLabel: 'MMMM YYYY',
                    }
                }
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.NoopAnimationsModule,
                _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__.ClinicalOfficeMpageModule,
                _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__.MatMomentDateModule
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _allergies_allergies_component__WEBPACK_IMPORTED_MODULE_2__.AllergiesComponent,
        _appointment_summary_appointment_summary_component__WEBPACK_IMPORTED_MODULE_3__.AppointmentSummaryComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.NoopAnimationsModule,
        _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__.ClinicalOfficeMpageModule,
        _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__.MatMomentDateModule] }); })();


/***/ }),

/***/ 99636:
/*!*********************************************!*\
  !*** ./src/app/appointment-data.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentDataService": function() { return /* binding */ AppointmentDataService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);


var AppointmentDataService = /** @class */ (function () {
    function AppointmentDataService(customService) {
        this.customService = customService;
        this.loading = false;
        this.columnConfig = { columns: [], columnSort: [], freezeLeft: 0 };
    }
    AppointmentDataService.prototype.loadAppointments = function () {
        var _this = this;
        this.loading = true;
        this.customService.load({
            customScript: {
                script: [
                    {
                        name: '1trn_appt_mp:group1',
                        run: 'pre',
                        id: 'appointments'
                    }
                ]
            }
        }, undefined, (function () { _this.loading = false; }));
    };
    Object.defineProperty(AppointmentDataService.prototype, "appointments", {
        // Returns the appointments data
        get: function () {
            return this.customService.get('appointments').appointments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppointmentDataService.prototype, "appointmentsLoaded", {
        // Determine if appointments have been loaded
        get: function () {
            return this.customService.isLoaded('appointments');
        },
        enumerable: false,
        configurable: true
    });
    AppointmentDataService.ɵfac = function AppointmentDataService_Factory(t) { return new (t || AppointmentDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_1__.CustomService)); };
    AppointmentDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppointmentDataService, factory: AppointmentDataService.ɵfac, providedIn: 'root' });
    return AppointmentDataService;
}());



/***/ }),

/***/ 85906:
/*!**********************************************************************!*\
  !*** ./src/app/appointment-summary/appointment-summary.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentSummaryComponent": function() { return /* binding */ AppointmentSummaryComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _appointment_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appointment-data.service */ 99636);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);



var AppointmentSummaryComponent = /** @class */ (function () {
    function AppointmentSummaryComponent(appointmentDS) {
        this.appointmentDS = appointmentDS;
    }
    AppointmentSummaryComponent.prototype.ngOnInit = function () {
    };
    AppointmentSummaryComponent.ɵfac = function AppointmentSummaryComponent_Factory(t) { return new (t || AppointmentSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_appointment_data_service__WEBPACK_IMPORTED_MODULE_0__.AppointmentDataService)); };
    AppointmentSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppointmentSummaryComponent, selectors: [["app-appointment-summary"]], decls: 1, vars: 2, consts: [[3, "tableData", "toolbar"]], template: function AppointmentSummaryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mpage-table", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData", ctx.appointmentDS.appointments)("toolbar", true);
        } }, directives: [_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_2__.MpageTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBvaW50bWVudC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
    return AppointmentSummaryComponent;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    appVersion: __webpack_require__(/*! ../../package.json */ 4147).version + '-dev',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 62275,
	"./af.js": 62275,
	"./ar": 90857,
	"./ar-dz": 11218,
	"./ar-dz.js": 11218,
	"./ar-kw": 14754,
	"./ar-kw.js": 14754,
	"./ar-ly": 66680,
	"./ar-ly.js": 66680,
	"./ar-ma": 92178,
	"./ar-ma.js": 92178,
	"./ar-ps": 42060,
	"./ar-ps.js": 42060,
	"./ar-sa": 56522,
	"./ar-sa.js": 56522,
	"./ar-tn": 95682,
	"./ar-tn.js": 95682,
	"./ar.js": 90857,
	"./az": 70164,
	"./az.js": 70164,
	"./be": 79774,
	"./be.js": 79774,
	"./bg": 60947,
	"./bg.js": 60947,
	"./bm": 21832,
	"./bm.js": 21832,
	"./bn": 89650,
	"./bn-bd": 74477,
	"./bn-bd.js": 74477,
	"./bn.js": 89650,
	"./bo": 66005,
	"./bo.js": 66005,
	"./br": 98492,
	"./br.js": 98492,
	"./bs": 70534,
	"./bs.js": 70534,
	"./ca": 52061,
	"./ca.js": 52061,
	"./cs": 84737,
	"./cs.js": 84737,
	"./cv": 61167,
	"./cv.js": 61167,
	"./cy": 77996,
	"./cy.js": 77996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 14540,
	"./de-at": 49430,
	"./de-at.js": 49430,
	"./de-ch": 67978,
	"./de-ch.js": 67978,
	"./de.js": 14540,
	"./dv": 83426,
	"./dv.js": 83426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 63816,
	"./en-au.js": 63816,
	"./en-ca": 32162,
	"./en-ca.js": 32162,
	"./en-gb": 83305,
	"./en-gb.js": 83305,
	"./en-ie": 61954,
	"./en-ie.js": 61954,
	"./en-il": 43060,
	"./en-il.js": 43060,
	"./en-in": 59923,
	"./en-in.js": 59923,
	"./en-nz": 13540,
	"./en-nz.js": 13540,
	"./en-sg": 16505,
	"./en-sg.js": 16505,
	"./eo": 41907,
	"./eo.js": 41907,
	"./es": 86640,
	"./es-do": 41246,
	"./es-do.js": 41246,
	"./es-mx": 56131,
	"./es-mx.js": 56131,
	"./es-us": 36430,
	"./es-us.js": 36430,
	"./es.js": 86640,
	"./et": 62551,
	"./et.js": 62551,
	"./eu": 32711,
	"./eu.js": 32711,
	"./fa": 54572,
	"./fa.js": 54572,
	"./fi": 33390,
	"./fi.js": 33390,
	"./fil": 87860,
	"./fil.js": 87860,
	"./fo": 48216,
	"./fo.js": 48216,
	"./fr": 99291,
	"./fr-ca": 98527,
	"./fr-ca.js": 98527,
	"./fr-ch": 58407,
	"./fr-ch.js": 58407,
	"./fr.js": 99291,
	"./fy": 47054,
	"./fy.js": 47054,
	"./ga": 49540,
	"./ga.js": 49540,
	"./gd": 73917,
	"./gd.js": 73917,
	"./gl": 51486,
	"./gl.js": 51486,
	"./gom-deva": 56245,
	"./gom-deva.js": 56245,
	"./gom-latn": 48868,
	"./gom-latn.js": 48868,
	"./gu": 59652,
	"./gu.js": 59652,
	"./he": 89019,
	"./he.js": 89019,
	"./hi": 42040,
	"./hi.js": 42040,
	"./hr": 63402,
	"./hr.js": 63402,
	"./hu": 79322,
	"./hu.js": 79322,
	"./hy-am": 27609,
	"./hy-am.js": 27609,
	"./id": 57942,
	"./id.js": 57942,
	"./is": 98275,
	"./is.js": 98275,
	"./it": 73053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 73053,
	"./ja": 46176,
	"./ja.js": 46176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 92726,
	"./ka.js": 92726,
	"./kk": 72953,
	"./kk.js": 72953,
	"./km": 86957,
	"./km.js": 86957,
	"./kn": 59181,
	"./kn.js": 59181,
	"./ko": 47148,
	"./ko.js": 47148,
	"./ku": 27752,
	"./ku-kmr": 63898,
	"./ku-kmr.js": 63898,
	"./ku.js": 27752,
	"./ky": 65675,
	"./ky.js": 65675,
	"./lb": 41263,
	"./lb.js": 41263,
	"./lo": 65746,
	"./lo.js": 65746,
	"./lt": 11143,
	"./lt.js": 11143,
	"./lv": 38753,
	"./lv.js": 38753,
	"./me": 44054,
	"./me.js": 44054,
	"./mi": 31573,
	"./mi.js": 31573,
	"./mk": 30202,
	"./mk.js": 30202,
	"./ml": 68523,
	"./ml.js": 68523,
	"./mn": 79794,
	"./mn.js": 79794,
	"./mr": 56681,
	"./mr.js": 56681,
	"./ms": 56975,
	"./ms-my": 39859,
	"./ms-my.js": 39859,
	"./ms.js": 56975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 21526,
	"./ne.js": 21526,
	"./nl": 86368,
	"./nl-be": 40076,
	"./nl-be.js": 40076,
	"./nl.js": 86368,
	"./nn": 68420,
	"./nn.js": 68420,
	"./oc-lnc": 51906,
	"./oc-lnc.js": 51906,
	"./pa-in": 94504,
	"./pa-in.js": 94504,
	"./pl": 54721,
	"./pl.js": 54721,
	"./pt": 74645,
	"./pt-br": 54548,
	"./pt-br.js": 54548,
	"./pt.js": 74645,
	"./ro": 71977,
	"./ro.js": 71977,
	"./ru": 26042,
	"./ru.js": 26042,
	"./sd": 78849,
	"./sd.js": 78849,
	"./se": 27739,
	"./se.js": 27739,
	"./si": 50084,
	"./si.js": 50084,
	"./sk": 92449,
	"./sk.js": 92449,
	"./sl": 23086,
	"./sl.js": 23086,
	"./sq": 33139,
	"./sq.js": 33139,
	"./sr": 30607,
	"./sr-cyrl": 30063,
	"./sr-cyrl.js": 30063,
	"./sr.js": 30607,
	"./ss": 40131,
	"./ss.js": 40131,
	"./sv": 21665,
	"./sv.js": 21665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 33622,
	"./ta.js": 33622,
	"./te": 74825,
	"./te.js": 74825,
	"./tet": 48336,
	"./tet.js": 48336,
	"./tg": 39238,
	"./tg.js": 39238,
	"./th": 99463,
	"./th.js": 99463,
	"./tk": 39986,
	"./tk.js": 39986,
	"./tl-ph": 29672,
	"./tl-ph.js": 29672,
	"./tlh": 40043,
	"./tlh.js": 40043,
	"./tr": 51212,
	"./tr.js": 51212,
	"./tzl": 50110,
	"./tzl.js": 50110,
	"./tzm": 80482,
	"./tzm-latn": 38309,
	"./tzm-latn.js": 38309,
	"./tzm.js": 80482,
	"./ug-cn": 42495,
	"./ug-cn.js": 42495,
	"./uk": 54157,
	"./uk.js": 54157,
	"./ur": 80984,
	"./ur.js": 80984,
	"./uz": 64141,
	"./uz-latn": 43662,
	"./uz-latn.js": 43662,
	"./uz.js": 64141,
	"./vi": 12607,
	"./vi.js": 12607,
	"./x-pseudo": 66460,
	"./x-pseudo.js": 66460,
	"./yo": 92948,
	"./yo.js": 92948,
	"./zh-cn": 62658,
	"./zh-cn.js": 62658,
	"./zh-hk": 39352,
	"./zh-hk.js": 39352,
	"./zh-mo": 38274,
	"./zh-mo.js": 38274,
	"./zh-tw": 98451,
	"./zh-tw.js": 98451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"adhoc_clinical","version":"0.0.17","scripts":{"ng":"ng","start":"ng serve","prebuild":"npm --no-git-tag-version version patch","build":"ng build --configuration=development","watch":"ng build --watch --configuration development","test":"ng test","postinstall":"node ./decorate-angular-cli.js"},"private":true,"dependencies":{"@angular-devkit/build-angular":"^12.2.17","@angular/animations":"^12.2.16","@angular/cdk":"^12.2.13","@angular/cli":"^12.2.17","@angular/common":"^12.2.16","@angular/compiler":"^12.2.16","@angular/core":"^12.2.16","@angular/flex-layout":"^12.0.0-beta.35","@angular/forms":"^12.2.16","@angular/material":"^12.2.13","@angular/material-moment-adapter":"^12.2.13","@angular/platform-browser":"^12.2.16","@angular/platform-browser-dynamic":"^12.2.16","@angular/router":"^12.2.16","@clinicaloffice/clinical-office-mpage":">3.1.6","classlist.js":"^1.1.20150312","fast-sort":"^3.2.0","iframe-resizer":"^4.3.6","moment":"^2.29.1","rxjs":"~6.6.0","tslib":"^2.1.0","zone.js":"~0.11.4"},"devDependencies":{"@angular/compiler-cli":"^12.2.16","@nrwl/cli":"12.10.1","@nrwl/nx-cloud":"12.5.4","@nrwl/tao":"12.10.1","@nrwl/workspace":"12.10.1","@types/jasmine":"~3.6.0","@types/node":"^12.20.37","jasmine-core":"~3.7.0","karma":"^6.3.9","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.0.3","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"~1.5.0","typescript":"~4.2.3"}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map