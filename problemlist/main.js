(self["webpackChunkproblemlist"] = self["webpackChunkproblemlist"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);
/* harmony import */ var _problem_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./problem-list.service */ 39650);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topbar/topbar.component */ 24989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _problem_list_table_problem_list_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./problem-list-table/problem-list-table.component */ 62999);








function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Pulling list of problems");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppComponent_app_problem_list_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-problem-list-table");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(activatedRoute, mPage, problemDS) {
        this.activatedRoute = activatedRoute;
        this.mPage = mPage;
        this.problemDS = problemDS;
        this.currentApplicationVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Grab any parameters in the URL (Used in Cerner Components)
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.mPage.personId = params['personId'] ? parseInt(params['personId']) : _this.mPage.personId;
            _this.mPage.encntrId = params['encounterId'] ? parseInt(params['encounterId']) : _this.mPage.encntrId;
            _this.mPage.prsnlId = params['userId'] ? parseInt(params['userId']) : _this.mPage.prsnlId;
        });
        // Perform MPage Initialization
        setTimeout(function (e) {
            _this.mPage.setMaxInstances(2, true, 'CHART');
            _this.mPage.putLog("MPage Initialized " + _this.mPage.personId + " " + _this.mPage.encntrId + " " + _this.mPage.prsnlId + " " + _this.mPage.inMpage);
            console.log('MPage Initialized');
            console.log('MPage Service:', _this.mPage);
            console.log('Mpage Service: inMpage: ', _this.mPage.inMpage);
            // Add your initialization code here - do not place outside setTimeout function
            if (_this.mPage.inMpage === true) {
                _this.problemDS.loadPreferences();
            }
            else {
                _this.problemDS.localLoadProblems();
            }
        }, 0);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_6__.mPageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_problem_list_service__WEBPACK_IMPORTED_MODULE_1__.ProblemListService)); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[4, "ngIf"], [1, "separator"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-gradient-to-tr", "from-blue-400", "to-red-600", "animate-spin"], [1, "h-5", "w-5", "rounded-full", "bg-white"], [1, "font-sans"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_div_1_Template, 6, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_app_problem_list_table_2_Template, 1, 0, "app-problem-list-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mpage-log-component");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.problemDS.problemsLoaded);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.problemDS.problemsLoaded);
        } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_6__.mPageLogComponent, _problem_list_table_problem_list_table_component__WEBPACK_IMPORTED_MODULE_3__.ProblemListTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ 63737);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _problem_list_table_problem_list_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./problem-list-table/problem-list-table.component */ 62999);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar/topbar.component */ 24989);















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
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__.MatMomentDateModule,
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _problem_list_table_problem_list_table_component__WEBPACK_IMPORTED_MODULE_2__.ProblemListTableComponent,
        _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__.TopbarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.NoopAnimationsModule,
        _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__.ClinicalOfficeMpageModule,
        _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__.MatMomentDateModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule] }); })();


/***/ }),

/***/ 62999:
/*!********************************************************************!*\
  !*** ./src/app/problem-list-table/problem-list-table.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProblemListTableComponent": function() { return /* binding */ ProblemListTableComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _problem_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../problem-list.service */ 39650);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);



var _c0 = function () { return { paginator: false, columnFilter: false }; };
var _c1 = function () { return { label: "Add Comment" }; };
var _c2 = function (a0) { return [a0]; };
var ProblemListTableComponent = /** @class */ (function () {
    function ProblemListTableComponent(problemDS, cdr) {
        this.problemDS = problemDS;
        this.cdr = cdr;
    }
    ProblemListTableComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.problemDS.refreshed_data) {
            setTimeout(function () {
                _this.problemDS.refreshed_data = false;
            });
            this.cdr.detectChanges();
        }
    };
    ProblemListTableComponent.prototype.ngOnInit = function () {
    };
    ProblemListTableComponent.ɵfac = function ProblemListTableComponent_Factory(t) { return new (t || ProblemListTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_problem_list_service__WEBPACK_IMPORTED_MODULE_0__.ProblemListService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
    ProblemListTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProblemListTableComponent, selectors: [["app-problem-list-table"]], decls: 1, vars: 9, consts: [[3, "tableData", "columnConfig", "toolbar", "params", "contextMenu", "columnConfigChange"]], template: function ProblemListTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mpage-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("columnConfigChange", function ProblemListTableComponent_Template_mpage_table_columnConfigChange_0_listener($event) { return ctx.problemDS.columnConfigProblemList = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData", ctx.problemDS.problems)("columnConfig", ctx.problemDS.columnConfigProblemList)("toolbar", false)("params", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0))("contextMenu", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1)));
        } }, directives: [_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_2__.MpageTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ibGVtLWxpc3QtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
    return ProblemListTableComponent;
}());



/***/ }),

/***/ 39650:
/*!*****************************************!*\
  !*** ./src/app/problem-list.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProblemListService": function() { return /* binding */ ProblemListService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);





var ProblemListService = /** @class */ (function () {
    function ProblemListService(problemListDS, mPage, http, _snackBar) {
        this.problemListDS = problemListDS;
        this.mPage = mPage;
        this.http = http;
        this._snackBar = _snackBar;
        this.columnConfigProblemList = { columns: [], columnSort: [], freezeLeft: 0 };
        this.problemViewPrefs = { MyProblems: true, ActiveProblemsOnly: true };
        this.loading_data = false;
        this.refreshed_data = false;
    }
    ProblemListService.prototype.loadProblems = function () {
        var _this = this;
        this.loading_data = true;
        this.problemListDS.load({
            customScript: {
                script: [
                    {
                        name: 'cov_co_problemlist:group1',
                        run: 'pre',
                        id: 'problemdata'
                    }
                ]
            }
        }, undefined, (function () {
            _this.loading_data = false;
            _this.refreshed_data = true;
            _this.mPage.putLog('Problem Data Loaded and Refreshed');
        }));
    };
    // Load user preferences
    ProblemListService.prototype.loadPreferences = function () {
        var _this = this;
        this.mPage.putLog('loadPreferences for prsnlId: ' + this.mPage.prsnlId + ' this.problemListDS.mpage.prsnlId: ' + this.problemListDS.mpage.prsnlId);
        this.loading_data = true;
        var prefMessage = this.problemListDS.emptyDmInfo;
        prefMessage.infoDomain = 'COV Problem List Preferences';
        prefMessage.infoName = 'view_prefs';
        prefMessage.infoDomainId = this.problemListDS.mpage.prsnlId;
        this.problemListDS.executeDmInfoAction('userViewPrefs', 'r', [prefMessage], function () {
            // Check for user preferences and assign them
            if (_this.problemListDS.isLoaded('userViewPrefs')) {
                var LoadedConfig = JSON.parse(_this.problemListDS.get('userViewPrefs').dmInfo[0].longText);
                _this.problemViewPrefs = LoadedConfig.columnConfig;
                _this._snackBar.open('Prefrences Loaded.', 'Ok', {
                    duration: 1000,
                    horizontalPosition: 'end',
                    verticalPosition: 'top',
                });
                _this.mPage.putLog("Loaded Preferences for " + _this.problemListDS.mpage.prsnlId + " " + JSON.stringify(_this.problemViewPrefs));
            }
            _this.loadProblems();
        });
    };
    ProblemListService.prototype.savePreferences = function () {
        var _this = this;
        this.mPage.putLog("Save Preferences for " + this.problemListDS.mpage.prsnlId + " " + JSON.stringify(this.problemViewPrefs));
        if (this.mPage.inMpage === true) {
            this.problemListDS.executeDmInfoAction('saveUserViewPrefs', 'w', [
                {
                    infoDomain: 'COV Problem List Preferences',
                    infoName: 'view_prefs',
                    infoDate: new Date(),
                    infoChar: '',
                    infoNumber: 0,
                    infoLongText: JSON.stringify({
                        columnConfig: this.problemViewPrefs
                    }),
                    infoDomainId: this.problemListDS.mpage.prsnlId
                }
            ], function () {
                _this._snackBar.open('Saved Preferences.', 'Ok', {
                    duration: 2000,
                    horizontalPosition: 'end',
                    verticalPosition: 'top',
                });
            });
        }
        else {
            this._snackBar.open('Preferences Would Be Saved', 'Close', {
                duration: 2000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
            });
        }
    };
    Object.defineProperty(ProblemListService.prototype, "problems", {
        // Returns the problems data looking at the mPage or local JSON data
        get: function () {
            var _this = this;
            var _a, _b;
            var filteredProblemList = [];
            if (this.problemsLoaded) {
                if (this.mPage.inMpage === true) {
                    filteredProblemList = this.problemListDS.get('problemdata').problemlist;
                }
                else {
                    filteredProblemList = ((_b = (_a = this.localJSONData) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.problemlist) || [];
                }
            }
            if (this.problemViewPrefs.MyProblems) {
                filteredProblemList = filteredProblemList.filter(function (problem) {
                    _this.mPage.putLog("MyProblems Referencing problem: " + problem.hiddenData.responsibleProviderId + " for " + _this.currentUserID);
                    //return problem.hiddenData.responsibleProviderId === this.problemListDS.mpage.prsnlId;
                });
            }
            if (this.problemViewPrefs.ActiveProblemsOnly) {
                filteredProblemList = filteredProblemList.filter(function (problem) {
                    _this.mPage.putLog("ActiveProblemsOnly Referencing problem: " + problem.hiddenData.problemStatus);
                    //return problem.hiddenData.problemStatus === 'Active';
                });
            }
            //log the filteredProblemList to the console 
            this.mPage.putLog('filteredProblemList: ' + JSON.stringify(filteredProblemList));
            return filteredProblemList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProblemListService.prototype, "currentUserID", {
        // create a get function to return the userID from the mPage or local JSON data
        get: function () {
            var _a, _b;
            var user = 0;
            if (this.problemsLoaded) {
                if (this.mPage.inMpage === true) {
                    user = this.problemListDS.get('problemdata').userId;
                }
                else {
                    user = ((_b = (_a = this.localJSONData) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.userId) || '';
                }
            }
            return user;
        },
        enumerable: false,
        configurable: true
    });
    // use this function to load th patient data
    ProblemListService.prototype.MasterLoadProblemData = function () {
        this.mPage.putLog('MasterLoadProblemData');
        if (this.mPage.inMpage === true) {
            this.loadProblems();
        }
        else {
            this.localLoadProblems();
        }
    };
    Object.defineProperty(ProblemListService.prototype, "problemsLoaded", {
        // Determine if patients have been loaded
        get: function () {
            if (this.mPage.inMpage === true) {
                return this.problemListDS.isLoaded('problemdata');
            }
            else {
                return !!this.localJSONData;
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    // load the patient data from a local JSON file.  Useful when doing offline development.  Add the json to a patient_population.json file in the assests/data folder
    // and then run the util/scramle_data.js to scramble the data and create a cov_patient_problems_sample.json file. Delete the patient_population.json file.
    ProblemListService.prototype.localLoadProblems = function () {
        var _this = this;
        this.loading_data = true;
        this.http.get('assets/data/scrambled_patient_problems_sample.json', { responseType: 'text' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(function (response) { return JSON.parse(response); }))
            .subscribe(function (data) {
            _this.localJSONData = [data];
            _this.loading_data = false;
            _this.mPage.putLog(JSON.stringify(_this.localJSONData)); // Convert this.localJSONData to a string
        }, function (error) {
            console.error('Error loading patient population:', error);
            _this.loading_data = false;
        });
    };
    ProblemListService.prototype.toggleMyProblems = function () {
        this.problemViewPrefs.MyProblems = !this.problemViewPrefs.MyProblems;
        this.refreshed_data = true;
        this.mPage.putLog('toggleMyProblems this.problemViewPrefs.MyProblems: ' + this.problemViewPrefs.MyProblems);
    };
    ProblemListService.prototype.toggleActiveProblems = function () {
        this.problemViewPrefs.ActiveProblemsOnly = !this.problemViewPrefs.ActiveProblemsOnly;
        this.refreshed_data = true;
        this.mPage.putLog('toggleActiveProblems this.problemViewPrefs.ActiveProblemsOnly: ' + this.problemViewPrefs.ActiveProblemsOnly);
    };
    Object.defineProperty(ProblemListService.prototype, "isToggleMyProblemsSelected", {
        get: function () {
            return this.problemViewPrefs.MyProblems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProblemListService.prototype, "isToggleActiveSelected", {
        get: function () {
            return this.problemViewPrefs.ActiveProblemsOnly;
        },
        enumerable: false,
        configurable: true
    });
    ProblemListService.ɵfac = function ProblemListService_Factory(t) { return new (t || ProblemListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_2__.CustomService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_2__.mPageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
    ProblemListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProblemListService, factory: ProblemListService.ɵfac, providedIn: 'root' });
    return ProblemListService;
}());

;


/***/ }),

/***/ 24989:
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": function() { return /* binding */ TopbarComponent; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _problem_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../problem-list.service */ 39650);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage */ 2029);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 64106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);










var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(problemListDS, _snackBar, cdr, mPage) {
        this.problemListDS = problemListDS;
        this._snackBar = _snackBar;
        this.cdr = cdr;
        this.mPage = mPage;
        this.currentApplicationVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
    }
    TopbarComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.problemListDS.refreshed_data === true) {
            setTimeout(function () {
                _this.problemListDS.refreshed_data = false;
                _this.mPage.putLog('Problem Table Refreshed-TopBar:ngDoCheck');
                _this.cdr.detectChanges();
            });
        }
    };
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_problem_list_service__WEBPACK_IMPORTED_MODULE_1__.ProblemListService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage__WEBPACK_IMPORTED_MODULE_4__.mPageService)); };
    TopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], decls: 15, vars: 6, consts: [[2, "display", "flex", "justify-content", "space-between", "width", "100%"], [2, "width", "75px"], ["mat-icon-button", "", "title", "Save user preferences", 3, "click"], [2, "width", "200px"], [3, "ngModel", "change"], [2, "flex-grow", "1"], [1, "smallHiddenOff"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_3_listener() { return ctx.problemListDS.savePreferences(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "save");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-slide-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TopbarComponent_Template_mat_slide_toggle_change_7_listener() { return ctx.problemListDS.toggleMyProblems(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-slide-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TopbarComponent_Template_mat_slide_toggle_change_10_listener() { return ctx.problemListDS.toggleActiveProblems(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.problemListDS.isToggleMyProblemsSelected);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.problemListDS.isToggleMyProblemsSelected ? "My Problems Only" : "Showing All Providers", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.problemListDS.isToggleActiveSelected);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.problemListDS.isToggleActiveSelected ? "Active Only" : "Showing All Problems", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" v", ctx.currentApplicationVersion, " (", ctx.problemListDS.currentUserID, ") ");
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel], styles: [".toolbar[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.align-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  \n  color: white;\n  \n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  height: 40px;\n  \n  display: flex;\n  \n  align-items: center;\n  \n  justify-content: space-between;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQTJCLGlFQUFBO0VBQzNCLFlBQUE7RUFBYyxtRkFBQTtBQUdsQjs7QUFBQTtFQUNJLFlBQUE7RUFBYyw2Q0FBQTtFQUNkLGFBQUE7RUFBZSxnQkFBQTtFQUNmLG1CQUFBO0VBQXFCLDRCQUFBO0VBQ3JCLDhCQUFBO0VBQWdDLDRCQUFBO0FBT3BDIiwiZmlsZSI6InRvcGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvb2xiYXIge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmFsaWduLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiByZWQ7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgc3R5bGluZyBmb3IgdGhlIHNlbGVjdGVkIG1hdC1pY29uXG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyAvKiBDaGFuZ2UgdGhpcyB0byB0aGUgY29sb3IgeW91IHdhbnQgd2hlbiB0aGUgYnV0dG9uIGlzIHByZXNzZWQgKi9cbiAgICBjb2xvcjogd2hpdGU7IC8qIENoYW5nZSB0aGlzIHRvIHRoZSBjb2xvciB5b3Ugd2FudCBmb3IgdGhlIHRleHQvaWNvbiB3aGVuIHRoZSBidXR0b24gaXMgcHJlc3NlZCAqL1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICAgIGhlaWdodDogNDBweDsgLyogQWRqdXN0IHRoaXMgdmFsdWUgdG8geW91ciBkZXNpcmVkIGhlaWdodCAqL1xuICAgIGRpc3BsYXk6IGZsZXg7IC8qIFVzZSBGbGV4Ym94ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW1zIHZlcnRpY2FsbHkgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIERpc3RyaWJ1dGUgaXRlbXMgZXZlbmx5ICovXG59XG4iXX0= */"], changeDetection: 0 });
    return TopbarComponent;
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
    appVersion: __webpack_require__(/*! ../../package.json */ 4147).version,
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
module.exports = JSON.parse('{"name":"problemlist","version":"0.0.53","scripts":{"ng":"ng","start":"ng serve","prebuild":"npm --no-git-tag-version version patch","build":"ng build --configuration=production","watch":"ng build --watch --configuration development","test":"ng test"},"private":true,"dependencies":{"@angular-devkit/build-angular":"^12.2.17","@angular/animations":"^12.2.16","@angular/cdk":"^12.2.13","@angular/cli":"^12.2.17","@angular/common":"^12.2.16","@angular/compiler":"^12.2.16","@angular/core":"^12.2.16","@angular/forms":"^12.2.16","@angular/material":"^12.2.13","@angular/material-moment-adapter":"^12.2.13","@angular/platform-browser":"^12.2.16","@angular/platform-browser-dynamic":"^12.2.16","@angular/router":"^12.2.16","@clinicaloffice/clinical-office-mpage":"^3.6.25","classlist.js":"^1.1.20150312","fast-sort":"^3.2.0","iframe-resizer":"^4.3.6","moment":"^2.29.1","rxjs":"~6.6.0","tslib":"^2.1.0","zone.js":"~0.11.4"},"devDependencies":{"@angular/compiler-cli":"^12.2.16","@types/jasmine":"~3.6.0","@types/node":"^12.20.37","autoprefixer":"^10.4.16","jasmine-core":"~3.7.0","karma":"^6.3.9","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.0.3","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"~1.5.0","postcss":"^8.4.32","tailwindcss":"^2.2.19","typescript":"~4.2.3"}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map