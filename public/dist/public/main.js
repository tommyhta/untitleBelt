(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _newmovie_newmovie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newmovie/newmovie.component */ "./src/app/newmovie/newmovie.component.ts");
/* harmony import */ var _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newreview/newreview.component */ "./src/app/newreview/newreview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: "full", redirectTo: '/movies' },
    { path: 'movies', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], children: [
            { path: 'new', component: _newmovie_newmovie_component__WEBPACK_IMPORTED_MODULE_4__["NewmovieComponent"] }
        ] },
    { path: 'movies/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"], children: [
            { path: 'review', component: _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_5__["NewreviewComponent"] }
        ] },
    { path: '**', pathMatch: "full", redirectTo: '/movies' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h1>\n        <a href=\"/\"><img width=\"70\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"></a>\n      {{ title }}</h1>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Squishy Tomatoes';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _newmovie_newmovie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newmovie/newmovie.component */ "./src/app/newmovie/newmovie.component.ts");
/* harmony import */ var _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newreview/newreview.component */ "./src/app/newreview/newreview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"],
                _newmovie_newmovie_component__WEBPACK_IMPORTED_MODULE_9__["NewmovieComponent"],
                _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_10__["NewreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin: 20px 10px 20px 70px;\n    width: 60%;\n    padding: 20px;\n    display: inline-block;\n    position: relative;\n    vertical-align: top;\n\n}\n.outlet{\n    width: 25%;\n    padding: 20px;\n    display: inline-block;\n    margin: 20px;\n    vertical-align: top;\n\n}\n.table{\n    margin: 10px 10px 10px 50px;\n}\nth, td{\n    border: 1px solid silver;\n    padding: 5px;\n}\n.name{\n    width: 100px;\n}\n.rating{\n    width: 20px;\n}\n.content{\n    width: 300px\n}\n.addbutton{\n    position: absolute;\n    right: 10px;\n    top: 50px;\n}"

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Reviews for {{movie['name']}} </h2>\n  <div class=\"addbutton\">\n    <button (click)=\"deleteMovie(movie._id)\" >Delete {{movie['name']}}</button>\n  \n    <button [routerLink]=\"['review']\" >Write Review</button>\n  </div>\n  <table class=\"table\">\n    <tr>\n      <th class=\"name\">Reviewer</th>\n      <th class=\"rating\">Stars</th>\n      <th class=\"content\">Reviews</th>\n      <th>Action</th>\n    </tr>\n    <tr *ngFor=\"let i of movie['reviews']\" >\n      <td>{{i['name']}}</td>\n      <td>{{i['rating']}}</td>\n      <td>{{i['content']}}</td>\n      <td><button (click)=\"deleteReview(i._id)\">Delete</button></td>\n    </tr>\n  </table>\n</div>\n<div class=\"outlet\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.checkRoute();
    };
    DetailComponent.prototype.checkRoute = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var obs = _this._httpService.getOneFromServer(params['id']);
            obs.subscribe(function (data) {
                if (data['ServerMessage'] == "Error") {
                    _this.goHome();
                }
                else {
                    _this.movie = data['Items'];
                }
            });
        });
    };
    DetailComponent.prototype.goHome = function () {
        this._router.navigate(['/movies']);
    };
    DetailComponent.prototype.deleteReview = function (id) {
        var obs = this._httpService.deleteReviewToServer(this.movie['_id'], id);
        obs.subscribe();
        this.checkRoute();
    };
    DetailComponent.prototype.deleteMovie = function (id) {
        var obs = this._httpService.deleteToServer(id);
        obs.subscribe();
        this.goHome();
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addbutton{\n    position: absolute;\n    right: 10px;\n    top: 50px;\n}\n.container{\n    margin: 20px 10px 20px 70px;\n    width: 60%;\n    padding: 20px;\n    display: inline-block;\n    position: relative;\n    vertical-align: top;\n\n}\n.outlet{\n    width: 25%;\n    padding: 20px;\n    display: inline-block;\n    margin: 20px;\n    vertical-align: top;\n\n\n}\n.table{\n    margin: 10px 10px 10px 50px;\n}\n.title{\n    width: 250px;\n}\n.action{\n    width: 138px;\n}\nth, td{\n    border: 1px solid silver;\n    padding: 5px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button class=\"addbutton\" [routerLink]=\"'new'\" >Add a new Movie</button>\n  <h2>Movie List</h2>\n  <table class=\"table\">\n    <tr>\n      <th class=\"title\">Movie Title</th>\n      <th class=\"action\">Available Action</th>\n      <th>Average Rating</th>\n    </tr>\n    <tr *ngFor=\"let movie of movies\">\n      <td>{{movie['name']}}</td>\n      <td><a href=\"/movies/{{movie['_id']}}\"><button>Details</button></a>  <a href=\"/movies/{{movie['_id']}}/review\"><button>Write Review</button></a></td>\n      <td>{{movie['averageRating']}}</td>\n    </tr>\n\n  </table>\n</div>\n<div class=\"outlet\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
        this.movies = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    HomeComponent.prototype.getMovies = function () {
        var _this = this;
        var obs = this._httpService.getAllFromServer();
        obs.subscribe(function (data) {
            if (data['ServerMessage'] == "Success") {
                _this.movies = data['Items'];
                _this.averRating();
            }
        });
    };
    HomeComponent.prototype.averRating = function () {
        var mov = this.movies;
        for (var _i = 0, mov_1 = mov; _i < mov_1.length; _i++) {
            var i = mov_1[_i];
            var rating = 0;
            for (var _a = 0, _b = i['reviews']; _a < _b.length; _a++) {
                var x = _b[_a];
                rating += x['rating'];
            }
            var aveR = rating / i['reviews'].length;
            i.averageRating = aveR;
        }
        this.movies = mov;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllFromServer = function () {
        return this._http.get('/item');
    };
    HttpService.prototype.getOneFromServer = function (id) {
        return this._http.get('/item/' + id);
    };
    HttpService.prototype.updateToServer = function (id, item) {
        return this._http.put('/item' + id, item);
    };
    HttpService.prototype.deleteToServer = function (id) {
        return this._http.delete('/item/' + id);
    };
    HttpService.prototype.createNewToServer = function (item) {
        return this._http.post('/item', item);
    };
    HttpService.prototype.createComentToServer = function (id, comment) {
        return this._http.post('/item/' + id + '/comment', comment);
    };
    HttpService.prototype.deleteReviewToServer = function (id, cid) {
        return this._http.delete('/item/' + id + '/comment/' + cid);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/newmovie/newmovie.component.css":
/*!*************************************************!*\
  !*** ./src/app/newmovie/newmovie.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\n    width: 120px;\n}\n.textbox{\n\n}\ntextarea{\n    width: 127px;\n    height: 30px;\n    resize: none;\n    border: 1px solid silver;\n}\n.rightA{\n    text-align: right;\n}\n.error{\n    height: 100px;\n}\np{\n    margin: 0;\n    color: red;\n    font-size: 14px;\n}\n.longer{\n    width: 200px;\n}"

/***/ }),

/***/ "./src/app/newmovie/newmovie.component.html":
/*!**************************************************!*\
  !*** ./src/app/newmovie/newmovie.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Submit a movie and your review</h2>\n  <div class=\"error\">\n    <ul>\n      <li *ngFor=\"let i of errors\" >{{i}}</li>\n    </ul>\n  </div>\n  <form (submit)=\"createMovie()\">\n    <table>\n        <tr>\n          <td>Movie Title:</td>\n          <td><input type=\"text\" \n            name=\"mname\" \n            required\n            minlength=\"2\"\n            [(ngModel)]=\"newMovie.name\"\n            #mname=\"ngModel\"\n          ></td>\n          <td class=\"longer\" *ngIf=\"mname.errors\">\n            <p *ngIf=\"mname.errors['required']\">required</p>\n            <p *ngIf=\"mname.errors['minlength']\">  {{mname.errors['minlength']['actualLength']}}/{{mname.errors['minlength']['requiredLength']}} required characters.</p>\n          </td>\n        </tr>\n        <tr>\n          <td>Your Name:</td>\n          <td><input type=\"text\" \n            name=\"name\" \n            required\n            minlength=\"2\"\n            [(ngModel)]=\"newMovie.reviews.name\"\n            #name=\"ngModel\"\n            ></td>\n            <td class=\"longer\" *ngIf=\"name.errors\">\n                <p *ngIf=\"name.errors['required']\">required</p>\n                <p *ngIf=\"name.errors['minlength']\">  {{name.errors['minlength']['actualLength']}}/{{name.errors['minlength']['requiredLength']}} required characters.</p>\n              </td>\n        </tr>\n        <tr>\n          <td>Rating:</td>\n          <td>\n            <select \n            name=\"rating\" \n            required\n            [(ngModel)]=\"newMovie.reviews.rating\" \n            #rating=\"ngModel\"\n            >\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n            </select>\n          </td>\n          <td class=\"longer\" *ngIf=\"rating.errors\">\n              <p *ngIf=\"rating.errors['required']\">required</p>\n            </td>\n        </tr>\n        <tr>\n          <td>Your Review:</td>\n          <td class=\"textbox\"><textarea \n            name=\"content\" \n            required\n            minlength=\"5\"\n            [(ngModel)]=\"newMovie.reviews.content\"\n            #content=\"ngModel\"\n            ></textarea></td>\n            <td class=\"longer\" *ngIf=\"content.errors\">\n                <p *ngIf=\"content.errors['required']\">required</p>\n                <p *ngIf=\"content.errors['minlength']\">  {{content.errors['minlength']['actualLength']}}/{{content.errors['minlength']['requiredLength']}} required characters.</p>\n              </td>\n        </tr>\n        <tr>\n          <td class=\"rightA\" (click)=\"goHome()\" ><button>Cancel</button></td>\n          <td class=\"rightA\"><button\n            [disabled]=\"mname.errors || name.errors || rating.errors || content.errors\"\n            >Submit</button></td>\n        </tr>\n      </table>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/newmovie/newmovie.component.ts":
/*!************************************************!*\
  !*** ./src/app/newmovie/newmovie.component.ts ***!
  \************************************************/
/*! exports provided: NewmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewmovieComponent", function() { return NewmovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewmovieComponent = /** @class */ (function () {
    function NewmovieComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.errors = [];
        this.newMovie = {
            name: '',
            reviews: {
                name: '',
                rating: '',
                content: ''
            }
        };
    }
    NewmovieComponent.prototype.ngOnInit = function () {
    };
    NewmovieComponent.prototype.createMovie = function () {
        var _this = this;
        var obs = this._http.createNewToServer(this.newMovie);
        obs.subscribe(function (data) {
            if (data['ServerMessage'] == "Error") {
                _this.errors = [];
                if (typeof (data['Error']) == 'string') {
                    _this.errors.push(data['Error']);
                }
                else {
                    for (var key in data['Error']['errors']) {
                        _this.errors.push(data['Error']['errors'][key]['message']);
                    }
                }
            }
            else {
                _this.newMovie = {
                    name: '',
                    reviews: {
                        name: '',
                        rating: '',
                        content: ''
                    }
                };
                _this.goHome();
            }
        });
    };
    NewmovieComponent.prototype.goHome = function () {
        this._router.navigate(['/movies']);
    };
    NewmovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newmovie',
            template: __webpack_require__(/*! ./newmovie.component.html */ "./src/app/newmovie/newmovie.component.html"),
            styles: [__webpack_require__(/*! ./newmovie.component.css */ "./src/app/newmovie/newmovie.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewmovieComponent);
    return NewmovieComponent;
}());



/***/ }),

/***/ "./src/app/newreview/newreview.component.css":
/*!***************************************************!*\
  !*** ./src/app/newreview/newreview.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\n    width: 120px;\n}\n.textbox{\n\n}\ntextarea{\n    width: 127px;\n    height: 30px;\n    resize: none;\n    border: 1px solid silver;\n}\n.rightA{\n    text-align: right;\n}\n.error{\n    height: 100px;\n}\np{\n    margin: 0;\n    color: red;\n    font-size: 14px;\n}\n.longer{\n    width: 200px;\n}\n.nameD{\n    width: 50px;\n}\n.inputD{\n    width: 100px;\n}"

/***/ }),

/***/ "./src/app/newreview/newreview.component.html":
/*!****************************************************!*\
  !*** ./src/app/newreview/newreview.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Submit a movie and your review</h2>\n  <div class=\"error\" >\n    <ul *ngIf=\"errors.length > 0\">\n      <li *ngFor=\"let i of errors\" > {{i}} </li>\n    </ul>\n  </div>\n  <form (submit)=\"createReview()\">\n    <table>\n      <tr>\n        <td class=\"nameD\">Your Name:</td>\n        <td class=\"inputD\"><input \n          type=\"text\" \n          name=\"name\" \n          required\n          minlength=\"2\"\n          [(ngModel)]=\"newReview.name\"\n          #name='ngModel'\n          ></td>\n          <td class=\"longer\" *ngIf=\"name.errors\">\n            <p *ngIf=\"name.errors['required']\">required</p>\n            <p *ngIf=\"name.errors['minlength']\">  {{name.errors['minlength']['actualLength']}}/{{name.errors['minlength']['requiredLength']}} required characters.</p>\n          </td>\n      </tr>\n      <tr>\n        <td>Rating:</td>\n        <td>\n          <select name=\"rating\" required [(ngModel)]=\"newReview.rating\" #rating=\"ngModel\">\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n          </select>\n        </td>\n        <td class=\"longer\" *ngIf=\"rating.errors\"><p *ngIf=\"rating.errors['required']\">required</p></td>\n      </tr>\n      <tr>\n        <td>Review:</td>\n        <td><textarea \n          name=\"content\"\n          required\n          minlength=\"5\"  \n          [(ngModel)]=\"newReview.content\"\n          #content='ngModel'\n          ></textarea></td>\n          <td class=\"longer\" *ngIf=\"content.errors\">\n              <p *ngIf=\"content.errors['required']\">required</p>\n              <p *ngIf=\"content.errors['minlength']\">  {{content.errors['minlength']['actualLength']}}/{{content.errors['minlength']['requiredLength']}} required characters.</p>\n          </td>\n      </tr>\n      <tr>\n          <td class=\"rightA\" (click)=\"goHome()\" ><button>Cancel</button></td>\n          <td class=\"rightA\" ><button [disabled]=\"name.errors || content.errors || rating.errors\">Submit</button></td>\n        </tr>\n    </table>\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/newreview/newreview.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newreview/newreview.component.ts ***!
  \**************************************************/
/*! exports provided: NewreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewreviewComponent", function() { return NewreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewreviewComponent = /** @class */ (function () {
    function NewreviewComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.newReview = {
            name: '',
            rating: '',
            content: ''
        };
        this.errors = [];
    }
    NewreviewComponent.prototype.ngOnInit = function () {
        this.getID();
    };
    NewreviewComponent.prototype.createReview = function () {
        var _this = this;
        var obs = this._http.createComentToServer(this.movieID, this.newReview);
        obs.subscribe(function (data) {
            _this.errors = [];
            if (data['ServerMessage'] == "Error") {
                for (var key in data['Error']['errors']) {
                    _this.errors.push(data['Error']['errors'][key]['message']);
                }
            }
            else {
                _this.newReview = {
                    name: "",
                    rating: "",
                    content: ""
                };
                _this.goHome();
            }
        });
    };
    NewreviewComponent.prototype.getID = function () {
        var _this = this;
        this._route.parent.params.subscribe(function (params) { return _this.movieID = params['id']; });
    };
    NewreviewComponent.prototype.goHome = function () {
        this._router.navigate(['/movies/' + this.movieID]);
    };
    NewreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newreview',
            template: __webpack_require__(/*! ./newreview.component.html */ "./src/app/newreview/newreview.component.html"),
            styles: [__webpack_require__(/*! ./newreview.component.css */ "./src/app/newreview/newreview.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewreviewComponent);
    return NewreviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tommy/Documents/Codes/Assignment/MEAN/JavaScript/untitled/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map