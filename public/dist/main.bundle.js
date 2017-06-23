webpackJsonp([1],{

/***/ "../../../../../../node_modules/angular2-cookie/services/base-cookie-options.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
/** @private */
var CookieOptions = (function () {
    function CookieOptions(_a) {
        var _b = _a === void 0 ? {} : _a, path = _b.path, domain = _b.domain, expires = _b.expires, secure = _b.secure;
        this.path = this.isPresent(path) ? path : null;
        this.domain = this.isPresent(domain) ? domain : null;
        this.expires = this.isPresent(expires) ? expires : null;
        this.secure = this.isPresent(secure) ? secure : false;
    }
    CookieOptions.prototype.merge = function (options) {
        return new CookieOptions({
            path: this.isPresent(options) && this.isPresent(options.path) ? options.path : this.path,
            domain: this.isPresent(options) && this.isPresent(options.domain) ? options.domain :
                this.domain,
            expires: this.isPresent(options) && this.isPresent(options.expires) ? options.expires :
                this.expires,
            secure: this.isPresent(options) && this.isPresent(options.secure) ? options.secure :
                this.secure,
        });
    };
    CookieOptions.prototype.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    return CookieOptions;
}());
exports.CookieOptions = CookieOptions;
/** @private */
var BaseCookieOptions = (function (_super) {
    __extends(BaseCookieOptions, _super);
    function BaseCookieOptions(baseHref) {
        _super.call(this, { path: baseHref || '/' });
        this.baseHref = baseHref;
    }
    BaseCookieOptions = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()),
        __param(0, core_1.Inject(common_1.APP_BASE_HREF)), 
        __metadata('design:paramtypes', [String])
    ], BaseCookieOptions);
    return BaseCookieOptions;
}(CookieOptions));
exports.BaseCookieOptions = BaseCookieOptions;



/***/ }),

/***/ "../../../../../../node_modules/angular2-cookie/services/cookies.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.6
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var base_cookie_options_1 = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/base-cookie-options.js");
var CookieService = (function () {
    function CookieService(_defaultOptions) {
        this._defaultOptions = _defaultOptions;
    }
    Object.defineProperty(CookieService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    CookieService.prototype.get = function (key) {
        return this._cookieReader()[key];
    };
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    CookieService.prototype.getObject = function (key) {
        var value = this.get(key);
        return value ? JSON.parse(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    CookieService.prototype.getAll = function () {
        return this._cookieReader();
    };
    /**
     * @name CookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.put = function (key, value, options) {
        this._cookieWriter()(key, value, options);
    };
    /**
     * @name CookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.putObject = function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    CookieService.prototype.remove = function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    CookieService.prototype.removeAll = function () {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key);
        });
    };
    CookieService.prototype._cookieReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var that = this;
        var cookieArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    name = that._safeDecodeURIComponent(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (this.isBlank(lastCookies[name])) {
                        lastCookies[name] = that._safeDecodeURIComponent(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    CookieService.prototype._cookieWriter = function () {
        var that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    };
    CookieService.prototype._safeDecodeURIComponent = function (str) {
        try {
            return decodeURIComponent(str);
        }
        catch (e) {
            return str;
        }
    };
    CookieService.prototype._buildCookieString = function (name, value, options) {
        var cookiePath = '/';
        var path, expires;
        var defaultOpts = this._defaultOptions || new base_cookie_options_1.CookieOptions({ path: cookiePath });
        var opts = this._mergeOptions(defaultOpts, options);
        expires = opts.expires;
        if (this.isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (this.isString(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too \n      large (" + cookieLength + " > 4096 bytes)!");
        }
        return str;
    };
    CookieService.prototype._mergeOptions = function (defaultOpts, providedOpts) {
        var newOpts = defaultOpts;
        if (this.isPresent(providedOpts)) {
            return newOpts.merge(new base_cookie_options_1.CookieOptions(providedOpts));
        }
        return newOpts;
    };
    CookieService.prototype.isBlank = function (obj) {
        return obj === undefined || obj === null;
    };
    CookieService.prototype.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    CookieService.prototype.isString = function (obj) {
        return typeof obj === 'string';
    };
    CookieService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [base_cookie_options_1.CookieOptions])
    ], CookieService);
    return CookieService;
}());
exports.CookieService = CookieService;



/***/ }),

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Classes/topic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
var Topic = (function () {
    function Topic() {
    }
    return Topic;
}());

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_dash_component__ = __webpack_require__("../../../../../src/app/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'dash', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__dash_dash_component__["a" /* DashComponent */] },
    { path: 'topic/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__["a" /* TopicComponent */] },
    { path: 'user/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__dash_dash_component__["a" /* DashComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n    font-family: \"Helvetica Neue\", Arial, sans-serif;\n    margin: 0px;\n    padding: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<html>\n  <head></head>\n  <body>\n    <div class=\"wrapper\">\n      <router-outlet></router-outlet>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dash_dash_component__ = __webpack_require__("../../../../../src/app/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__topic_form_topic_form_component__ = __webpack_require__("../../../../../src/app/topic-form/topic-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dash_dash_component__["a" /* DashComponent */],
            __WEBPACK_IMPORTED_MODULE_11__topic_topic_component__["a" /* TopicComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_13__topic_form_topic_form_component__["a" /* TopicFormComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/classes/answer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer() {
        this.text = "";
        this._user = "";
        this._topic = "";
        this._voteup = [];
        this._votedown = [];
    }
    return Answer;
}());

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ "../../../../../src/app/classes/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
        this.text = "";
        this._user = "";
        this._answer = "";
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/classes/topic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
var Topic = (function () {
    function Topic() {
        this._id = "";
        this.title = "";
        this.topic_text = "";
        this.category = "";
        this._user = "";
        this._answers = [];
    }
    return Topic;
}());

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.username = "";
        this._topics = [];
        this._answers = [];
        this._comments = [];
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/dash/dash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, td, tr, th {\n    margin: 5px;\n    text-align: center;\n    padding: 10px;\n}\ntable, td, th, tr {\n    border: 1px dotted black;\n}\ntable {\n    border-collapse: collapse;\n}\nbutton {\n    float: right;\n}\na {\n    text-decoration: none;\n    color: steelblue;\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dash/dash.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Welcome, {{user}}!\n  <button (click)=\"logout()\">logout</button>\n</h3>\n<table>\n  <tr>\n    <th>Category</th>\n    <th>Topic</th> \n    <th>Username</th>\n    <th>Posts</th>\n  </tr>\n  <tr *ngFor=\"let topic of topics\">\n    <td>{{topic.category}}</td>\n    <td>\n      <a [routerLink]=\"['/topic', topic._id]\">\n        {{topic.title}}\n      </a>\n    </td> \n    <td>\n      <a [routerLink]=\"['/user', topic._user._id]\">\n      {{topic._user.username}}\n      </a>\n    </td>\n    <td>{{topic._answers.length}}</td>\n  </tr>\n</table>\n<app-topic-form (refreshTopics)=\"refreshTrigger()\"></app-topic-form>"

/***/ }),

/***/ "../../../../../src/app/dash/dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashComponent = (function () {
    function DashComponent(_cookieService, _router, _httpService) {
        this._cookieService = _cookieService;
        this._router = _router;
        this._httpService = _httpService;
        this.user = this._cookieService.get('username');
    }
    DashComponent.prototype.ngOnInit = function () {
        var cookie = this._cookieService.get('username');
        console.log(cookie);
        if (cookie == undefined) {
            this._router.navigate(['/']);
        }
        this.getUsers();
        this.getTopics();
    };
    DashComponent.prototype.logout = function () {
        console.log('logout');
        this._cookieService.removeAll();
        this._router.navigate(['/']);
    };
    DashComponent.prototype.getUsers = function () {
        var _this = this;
        this._httpService.findUsers()
            .then(function (users) {
            console.log('users found');
            _this.users = users;
        })
            .catch(function (error) { console.log('error finding users'); });
    };
    DashComponent.prototype.getTopics = function () {
        var _this = this;
        this._httpService.findTopics()
            .then(function (topics) {
            console.log('users found');
            _this.topics = topics;
        })
            .catch(function (error) { console.log('error finding users'); });
    };
    DashComponent.prototype.refreshTrigger = function () {
        this.getUsers();
        this.getTopics();
    };
    return DashComponent;
}());
DashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dash',
        template: __webpack_require__("../../../../../src/app/dash/dash.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dash/dash.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object])
], DashComponent);

var _a, _b, _c;
//# sourceMappingURL=dash.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //CRUD - talk to back end
    /*users*/
    //add user to the database
    HttpService.prototype.addUser = function (user) {
        console.log('reached addUser - user:', user);
        return this._http.post('/new_user', { username: user })
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find users
    HttpService.prototype.findUsers = function () {
        console.log('reached findUsers');
        return this._http.get('/users')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find user by id
    HttpService.prototype.findUser = function (id) {
        console.log('reached findUser(id)');
        return this._http.get('/find_user/' + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    /*topics*/
    //add topic to database
    HttpService.prototype.addTopic = function (topic) {
        console.log('reached addTopic - topic:', topic);
        return this._http.post('/new_topic', topic)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find topics
    HttpService.prototype.findTopics = function () {
        console.log('reached findTopics');
        return this._http.get('/topics')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //find topic by id
    HttpService.prototype.findTopic = function (id) {
        console.log('reached findTopic(id)');
        return this._http.get('/find_topic/' + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    /* posts/answers */
    //add answer
    HttpService.prototype.addAnswer = function (answer) {
        console.log('reached addAnswer()');
        return this._http.post('/new_answer', answer)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //upvote answer
    HttpService.prototype.upVote = function (info) {
        console.log('reached upVote()');
        return this._http.post('/vote_up', info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //downvote answer
    HttpService.prototype.downVote = function (info) {
        console.log('reached downVote()');
        return this._http.post('/vote_down', info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    /* add comment */
    HttpService.prototype.addComment = function (comment) {
        console.log('reached addComment()');
        return this._http.post('/new_comment', comment)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Hello!</p>\n<p>Please enter your name to join and share your ideas.</p>\n<form (submit)=\"submitForm(login)\" #login=\"ngForm\">\n  <input type=\"text\" \n    name=\"username\"\n    required\n    [(ngModel)]=\"user\"\n    #username=\"ngModel\">\n  <!--error message:-->\n  <div *ngIf=\"username.errors && (login.submitted || username.touched)\" class=\"error\">\n    <p [hidden]=\"!username.errors.required\" class=\"error\">\n      Username required.\n    </p>\n  </div>\n  <input type=\"submit\" value=\"Enter\" [disabled]=\"!login.form.valid\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = (function () {
    function LandingComponent(_cookieService, _router, _httpService) {
        this._cookieService = _cookieService;
        this._router = _router;
        this._httpService = _httpService;
    }
    LandingComponent.prototype.ngOnInit = function () {
        console.log(this._cookieService.get('username'));
    };
    LandingComponent.prototype.submitForm = function (form) {
        this._cookieService.put('username', this.user);
        console.log(this._cookieService.get('username'));
        this.addUser(this.user);
        form.resetForm();
        this._router.navigate(['dash']);
    };
    LandingComponent.prototype.addUser = function (user) {
        console.log('reached landingcomponent/addUser() - user:', user);
        this._httpService.addUser(user)
            .then(function (user) { console.log('user added'); })
            .catch(function (error) { console.log('error'); });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object])
], LandingComponent);

var _a, _b, _c;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic-form/topic-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic-form/topic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add a New Topic:</h3>\n<form (submit)=\"submitTopic(topicform)\" #topicform=\"ngForm\">\n  <label for=\"title\">Topic:</label>\n  <!--topic title-->\n  <input type=\"text\" \n    name=\"title\"\n    required\n    [(ngModel)]=\"newtopic.title\"\n    #title=\"ngModel\"><br>\n    <!--error message:-->\n    <div *ngIf=\"title.errors && (topicform.submitted || title.touched)\" class=\"error\">\n      <p [hidden]=\"!title.errors.required\" class=\"error\">\n        Topic title is required\n      </p>\n    </div>\n  <!--topic description-->\n  <label for=\"description\">Description:</label><br>\n  <textarea \n    name=\"description\" \n    rows=\"4\" cols=\"50\" \n    required\n    [(ngModel)]=\"newtopic.topic_text\"\n    #description=\"ngModel\"></textarea><br>\n    <!--error message:-->\n    <div *ngIf=\"description.errors && (topicform.submitted || description.touched)\" class=\"error\">\n      <p [hidden]=\"!description.errors.required\" class=\"error\">\n        Description is required\n      </p>\n    </div>\n  <!--topic category-->\n  <label for=\"category\">Category:</label>\n  <select \n    name=\"category\"\n    required\n    [(ngModel)]=\"newtopic.category\"\n    #category=\"ngModel\">\n    <option value=\"HTML\">HTML</option>\n    <option value=\"Python\">Python</option>\n    <option value=\"Mongo\">Mongo</option>\n    <option value=\"Angular\">Angular</option>\n    <option value=\"Django\">Django</option>\n    <option value=\"other\">Other</option>\n  </select><br>\n  <!--error message:-->\n    <div *ngIf=\"category.errors && (topicform.submitted || category.touched)\" class=\"error\">\n      <p [hidden]=\"!category.errors.required\" class=\"error\">\n        Please choose a category\n      </p>\n    </div>\n  <input type=\"submit\" value=\"Submit\" [disabled]=\"!topicform.form.valid\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/topic-form/topic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Classes_topic__ = __webpack_require__("../../../../../src/app/Classes/topic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Router } from "@angular/router";
var TopicFormComponent = (function () {
    function TopicFormComponent(_cookieService, _httpService) {
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.newtopic = new __WEBPACK_IMPORTED_MODULE_1__Classes_topic__["a" /* Topic */]();
        this.refreshTopics = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TopicFormComponent.prototype.triggerRefresh = function () {
        this.refreshTopics.emit();
    };
    TopicFormComponent.prototype.ngOnInit = function () {
    };
    TopicFormComponent.prototype.submitTopic = function (form) {
        console.log('here');
        this.addTopic(form);
    };
    TopicFormComponent.prototype.addTopic = function (form) {
        var _this = this;
        this.newtopic._user = this._cookieService.get('username');
        console.log('reached topic-formcomponent/addTopic() - topic:', this.newtopic);
        this._httpService.addTopic(this.newtopic)
            .then(function (user) {
            console.log('topic added');
            _this.triggerRefresh();
            form.resetForm();
            _this.newtopic = new __WEBPACK_IMPORTED_MODULE_1__Classes_topic__["a" /* Topic */];
        })
            .catch(function (error) { console.log('error'); });
    };
    return TopicFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TopicFormComponent.prototype, "refreshTopics", void 0);
TopicFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topic-form',
        template: __webpack_require__("../../../../../src/app/topic-form/topic-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic-form/topic-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], TopicFormComponent);

var _a, _b;
//# sourceMappingURL=topic-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment {\n    margin-left: 20px;\n}\n.green {\n    color: green;\n    float: right;\n    margin: 0px 10px;\n}\n.red {\n    color: red;\n    margin: 0px 10px;\n    float: right;\n}\nbutton {\n    float: right;\n}\na {\n    text-decoration: none;\n    color: steelblue;\n    font-weight: bold;\n}\n.error {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <a [routerLink]=\"['/user', topic._user._id]\">\n    {{topic._user.username}}\n  </a> \n  posted a topic:\n  <button (click)=\"logout()\">Logout</button>\n  <button (click)=\"dashboard()\">Dashboard</button>\n</p>\n<h3>{{topic.title}}</h3>\n<p>{{topic.topic_text}}</p>\n<p><b>Post your answer here...</b></p>\n<form (submit)=\"submitPost(postform)\" #postform=\"ngForm\">\n  <textarea name=\"post\"\n    rows=\"4\" \n    cols=\"50\" \n    required\n    [(ngModel)]=\"newpost.text\"\n    #post=\"ngModel\"></textarea><br>\n  <!--error message:-->\n  <div *ngIf=\"post.errors && (postform.submitted || post.touched)\" class=\"error\">\n    <p [hidden]=\"!post.errors.required\" class=\"error\">\n      Please type a response\n    </p>\n  </div>\n  <input type=\"submit\" value=\"Post\" [disabled]=\"!postform.form.valid\">\n</form>\n<hr>\n\n<div *ngFor=\"let answer of topic._answers\">\n  <p>\n    <a [routerLink]=\"['/user', answer._user._id]\">\n      {{answer._user.username}}:\n    </a> {{answer.text}}\n    <span class=\"red\">{{answer._votedown.length}}</span>\n    <button (click)=\"downVote(answer)\">v</button>\n    <span class=\"green\">{{answer._voteup.length}}</span>\n    <button (click)=\"upVote(answer)\">^</button>\n  </p>\n\n  <div *ngFor=\"let comment of answer._comments\" class=\"comment\">\n    <p><a [routerLink]=\"['/user', comment._user._id]\">{{comment._user.username}}:</a> {{comment.text}}</p>\n  </div>\n\n  <form (submit)=\"submitComment(answer, comment.value)\" #commentform=\"ngForm\">\n  <textarea name=\"comment\"\n    rows=\"2\" \n    cols=\"50\" \n    required\n    #comment\n    ></textarea><br>\n  <input type=\"submit\" value=\"Comment\" [disabled]=\"!commentform.form.valid\">\n  </form>\n  <hr>\n</div>"

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_answer__ = __webpack_require__("../../../../../src/app/classes/answer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_topic__ = __webpack_require__("../../../../../src/app/classes/topic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_comment__ = __webpack_require__("../../../../../src/app/classes/comment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TopicComponent = (function () {
    function TopicComponent(_cookieService, _router, _activatedRoute, _httpService) {
        this._cookieService = _cookieService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._httpService = _httpService;
        this.user = this._cookieService.get('username');
        this.topic = new __WEBPACK_IMPORTED_MODULE_5__classes_topic__["a" /* Topic */];
        this.newpost = new __WEBPACK_IMPORTED_MODULE_4__classes_answer__["a" /* Answer */];
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cookie = this._cookieService.get('username');
        console.log(cookie);
        if (cookie == undefined) {
            this._router.navigate(['/']);
        }
        this._activatedRoute.params.subscribe(function (param) {
            console.log(param.id);
            _this.param = param.id;
            _this.getTopic(_this.param);
            console.log("this.topic:", _this.topic);
        });
    };
    TopicComponent.prototype.getTopic = function (id) {
        var _this = this;
        this._httpService.findTopic(id)
            .then(function (data) {
            console.log('success');
            _this.topic = data;
            console.log("this.topic:", _this.topic);
        })
            .catch(function (error) {
            console.log('fail');
        });
    };
    TopicComponent.prototype.submitPost = function (form) {
        var _this = this;
        this.newpost._user = this.user;
        this.newpost._topic = this.topic._id;
        console.log("this.newpost:", this.newpost);
        this._httpService.addAnswer(this.newpost)
            .then(function (data) {
            _this.getTopic(_this.param);
            console.log('post added');
            form.resetForm();
        })
            .catch(function (error) {
            console.log('fail adding post');
        });
    };
    TopicComponent.prototype.submitComment = function (answer, comment) {
        var _this = this;
        var newcomment = new __WEBPACK_IMPORTED_MODULE_6__classes_comment__["a" /* Comment */];
        newcomment._user = this.user;
        newcomment._answer = answer._id;
        newcomment.text = comment;
        console.log("this.newcomment:", newcomment);
        console.log("comment:", comment);
        this._httpService.addComment(newcomment)
            .then(function (data) {
            _this.getTopic(_this.param);
            console.log('comment added');
        })
            .catch(function (error) {
            console.log('fail adding comment');
        });
    };
    TopicComponent.prototype.upVote = function (answer) {
        var _this = this;
        console.log('upVote()');
        console.log(answer);
        var info = {
            answer: answer._id,
            user: this.user
        };
        console.log("info:", info);
        this._httpService.upVote(info)
            .then(function (data) {
            _this.getTopic(_this.param);
            console.log('upvote added');
        })
            .catch(function (error) {
            console.log('upvote error');
        });
    };
    TopicComponent.prototype.downVote = function (answer) {
        var _this = this;
        console.log('downVote()');
        console.log(answer);
        var info = {
            answer: answer._id,
            user: this.user
        };
        console.log("info:", info);
        this._httpService.downVote(info)
            .then(function (data) {
            _this.getTopic(_this.param);
            console.log('upvote added');
        })
            .catch(function (error) {
            console.log('upvote error');
        });
    };
    TopicComponent.prototype.dashboard = function () {
        this._router.navigate(['/dash']);
    };
    TopicComponent.prototype.logout = function () {
        console.log('logout');
        this._cookieService.removeAll();
        this._router.navigate(['/']);
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__("../../../../../src/app/topic/topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/topic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _d || Object])
], TopicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=topic.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Username: {{user.username}}\n  <button (click)=\"logout()\">Logout</button>\n  <button (click)=\"dashboard()\">Dashboard</button>\n</h3>\n<p>Posted...</p>\n<ul>\n  <li>{{user._topics.length}} Topic</li>\n  <li>{{user._answers.length}} Posts</li>\n  <li>{{user._comments.length}} Comments</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../../../node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(_cookieService, _router, _activatedRoute, _httpService) {
        this._cookieService = _cookieService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._httpService = _httpService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_user__["a" /* User */];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cookie = this._cookieService.get('username');
        console.log(cookie);
        if (cookie == undefined) {
            this._router.navigate(['/']);
        }
        this._activatedRoute.params.subscribe(function (param) {
            console.log(param.id);
            _this.userparam = param.id;
            _this.getUser(_this.userparam);
        });
        console.log(this.user);
    };
    UserComponent.prototype.getUser = function (id) {
        var _this = this;
        this._httpService.findUser(id)
            .then(function (data) {
            console.log('success');
            _this.user = data;
            console.log("this.topic:", _this.user);
        })
            .catch(function (error) {
            console.log('fail');
        });
    };
    UserComponent.prototype.dashboard = function () {
        this._router.navigate(['/dash']);
    };
    UserComponent.prototype.logout = function () {
        console.log('logout');
        this._cookieService.removeAll();
        this._router.navigate(['/']);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map