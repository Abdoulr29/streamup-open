webpackJsonp([2],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside bg-light dk hidden-xs\" id=\"sidebar\">\n  <section class=\"vbox animated fadeInUp\">\n    <section class=\"scrollable hover\">\n      <div class=\"wrapper profile\">\n        <div class=\"text-center m-b m-t\">\n          <a href=\"#\" class=\"thumb-md thumb-custom\">\n            <img src=\"./assets/images/user.jpg\" class=\"img-circle\">\n          </a>\n          <div>\n            <div class=\"h4 m-t-sm\">{{user}}</div>\n\n          </div>\n          <button class=\"btn btn-circle btn-success btn-sm custom-icon-edit\"><i class=\"fa fa-camera\"></i></button>\n        </div>\n        <!-- ````````````````````` Profile tabs ```````````````` -->\n        <header class=\"panel-heading\">\n          <ul class=\"nav nav-tabs nav-justified\">\n            <li><a id=\"neutral\" href=\"#home\" data-toggle=\"tab\">Profile</a></li>\n            <li><a id=\"neutral\" href=\"#profile\" data-toggle=\"tab\">My Activities</a></li>\n          </ul>\n        </header>\n      </div>\n      <div class=\"wrapper details\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane active\" id=\"home\">\n            <div class=\"col-md-6 text-center custom-grid-left\">\n              <p>Shared Files</p>\n              <h5 class=\"custom-text\">{{file_shared}}</h5>\n            </div>\n            <div class=\"col-md-6 text-center custom-grid-right\">\n              <p>Connections</p>\n              <h5 class=\"custom-text\">{{connections}}</h5>\n            </div>\n            <div class=\"col-md-6 text-center custom-grid-left\">\n              <p>IntegratedApps</p>\n              <h5 class=\"custom-text\">7</h5>\n            </div>\n            <div class=\"col-md-6 text-center custom-grid-right\">\n              <p>Hosted</p>\n              <h5 class=\"custom-text\">5</h5>\n            </div>\n            <div class=\"col-md-12\" style=\"margin-top:30px;\">\n              <div class=\"inline\">\n                <div class=\"easypiechart\" data-percent=\"40\" data-line-width=\"10\" data-track-color=\"#ccc\" data-bar-color=\"#28f5fb\" data-scale-color=\"#1cc1fb\"\n                  data-size=\"188\">\n                  <div>\n                    <span class=\"h2 m-l-sm step\">0</span>%\n                    <span>of 2GB</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-pane\" id=\"profile\">\n          </div>\n        </div>\n      </div>\n\n    </section>\n  </section>\n</aside>\n"

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" class=\"app\">\n\n<head>\n  <meta charset=\"utf-8\" />\n  <title>StreamUpBox | Online Drive</title>\n  <!--<ng-md-icon icon=\"close\" style=\"fill: pink\" size=\"64\"></ng-md-icon> -->\n  <meta charset=\"utf-8\" name=\"title\" content=\"StreamUpBox\">\n  <meta charset=\"utf-8\" name=\"Author\" content=\"Muragijimana Richard\">\n  <meta charset=\"utf-8\" name=\"twitter\" content=\"https://twitter.com/strimup\">\n  <meta charset=\"utf-8\" name=\"description\" content=\"A file Storage Made for Education and Big companies\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" />\n  <script src=\"assets/js/e-design.js\"></script>\n  \n  <style>\n    body {\n      font-family: 'Maitree', serif;\n    }\n  </style>\n\n</head>\n<section class=\"vbox\" >\n  <header class=\"header header-md navbar navbar-fixed-top-xs\" id='header'>\n\n    <div class=\"navbar-header aside bg-info dk nav-xs\">\n      <a class=\"btn btn-link visible-xs\" data-toggle=\"class:nav-off-screen,open\" data-target=\"#nav,html\">\n        <i class=\"icon-list\"></i>\n      </a>\n      <a  class=\"navbar-brand text-lt\" id='logo' (click)=\"openSettingModal()\">\n        <i class=\"icon-settings\"></i>\n        <img src=\"img/logo.png\" alt=\".\" class=\"hide\">\n        <span class=\"hidden-nav-xs m-l-sm\">StreamUp Box</span>\n      </a>\n      <a class=\"btn btn-link visible-xs\" data-toggle=\"dropdown\" data-target=\".user\">\n        <i class=\"icon-settings\"></i>\n      </a>\n    </div>\n    \n    <div class=\"flex\">\n      <div class=\"search-box\">\n        <!--<input type=\"text\" class=\"form-control  sliding round right\" style=\"width:60%;margin-left:26%;margin-top:1%\">-->\n\n      </div>\n      <div class=\"menu\">\n\n          <ul class=\"nav navbar-nav m-n hidden-xs nav-user user\">\n              <label class=\"switch\" style=\"margin-top:20%;\">\n                  <input type=\"checkbox\" checked>\n                  <div class=\"sliding round\"></div>\n              </label>\n          </ul>\n\n      </div>\n\n    </div>\n  </header>\n  <section>\n    <section class=\"hbox stretch\">\n      <!-- .aside -->\n      <!--<aside class=\"bg-dark dk nav-xs aside hidden-print\" id=\"nav\" >\n        <section class=\"vbox\">\n          <section class=\"w-f-md\">\n            <div class=\"slim-scroll\" data-height=\"auto\" data-disable-fade-out=\"true\" data-distance=\"0\" data-size=\"10px\" data-railOpacity=\"0.2\">\n\n              <nav class=\"nav-primary hidden-xs\">\n                <ul class=\"nav bg clearfix\">\n                  <li class=\"hidden-nav-xs padder m-t m-b-sm text-xs text-muted\">\n                    Discover\n                  </li>\n                  <li>\n                    <a href=\"#/Files\">\n                      <i class=\"icon-home icon\"></i>\n                      <span >Home</span>\n                    </a>\n                  </li>\n\n                  <li>\n                    <a href=\"javascript:void(0)\">\n                      <i class=\"icon-share icon\"></i>\n                      <b class=\"badge bg-primary pull-right\"  ng-if=\"numof_shared != '0'\">{{file_shared}}</b>\n                      <span>Shared</span>\n                    </a>\n                    <ul class=\"nav bg clearfix\">\n                      <li>\n                        <a href=\"#sharedsend/\">\n                          <i class=\"icon-reply icon\"></i>\n                          <span >Sent</span>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"#sharedreceived/\">\n                          <i class=\"icon-reply icon\"></i>\n                          <span >Received</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li>\n                    <li>\n                      <a href=\"#\" id=\"upload\">\n                        <i class=\"icon-plus icon\"></i>\n                        <span>Add New</span>\n                      </a>\n                      <ul class=\"nav bg clearfix\">\n                        <li>\n                          <a id=\"upload\" href=\"javascript:void(0)\">\n\n                            <span>Files</span>\n                          </a>\n                        </li>\n                        <li id='createfolder'>\n                          <a href=\"javascript:void(0)\">\n                            <span>Folder</span>\n                          </a>\n                        </li>\n                      </ul>\n                    </li>\n\n                    <li>\n                      <a href=\"#/bins\">\n                        <i class=\"fa fa-recycle\"></i>\n                        <span>Recycle Bin</span>\n                      </a>\n                    </li>\n                    <li>\n                        <a href=\"#/Upgrade\">\n                            <i class=\"fa fa-paypal\"></i>\n                            <span>Upgrade</span>\n                        </a>\n                    </li>\n\n\n                    <li>\n                      <a id=\"bugReport\" href=\"#\">\n                        <i class=\"fa fa-bug\"></i>\n                        <span >Report bug</span>\n                      </a>\n                    </li>\n                    <li class=\"m-b hidden-nav-xs\"></li>\n                </ul>\n              </nav>\n\n            </div>\n          </section>\n        </section>\n      </aside>-->\n\n      <section id=\"content\">\n        <section class=\"vbox\">\n          <section class=\"w-f-md\" id=\"bjax-target\">\n            <section class=\"hbox stretch\">\n\n              <aside class=\"aside bg-light dk hidden-xs\" id=\"sidebar\"  *ngIf=\"isAsideTaggled\">\n                <section class=\"vbox animated fadeInUp\">\n                  <section class=\"scrollable hover\">\n                    <div class=\"wrapper profile\">\n                      <div class=\"text-center m-b m-t\" style=\"min-height:40px\">\n                          <!--extra files and folder option-->\n                      </div>\n                     \n                     \n                    </div>\n                    \n                   \n                  </section>\n                </section>\n              </aside>\n        \n              <section>\n                  <!--left empty for the purpose-->\n              </section>\n            </section>\n          </section>\n          \n        </section>\n        \n      </section>\n      \n      <!--ui-view here-->\n      <section>\n          <div class=\"col-md-12\" style=\"margin-top:120px;margin-left:-17%;\">\n            \n          <div class=\"inline\" (click)=\"openDir()\">\n            <div class=\"easypiechart\" data-percent=\"40\" data-line-width=\"10\" data-track-color=\"#ccc\" data-bar-color=\"#28f5fb\" data-scale-color=\"#1cc1fb\"\n\n              data-size=\"188\">\n              <div>\n                <span class=\"h2 m-l-sm step\">0</span>%\n                <span>of 2GB</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n\n    </section>\n  </section>\n\n</section>\n\n<!--<section >\n  <p style=\"text-align:center;font-size:20px;\">is not isAuthenticated</p>\n  <button style=\"margin-left:45%;\" class=\"btn btn-info\" (click)=\"authenticateNow()\" >Authenticate now</button>\n</section>-->\n\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 81;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(5);
var platform_browser_dynamic_1 = __webpack_require__(109);
var app_module_1 = __webpack_require__(89);
var environment_1 = __webpack_require__(94);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(28);
var core_1 = __webpack_require__(5);
var forms_1 = __webpack_require__(108);
var http_1 = __webpack_require__(67);
var sync_component_1 = __webpack_require__(93);
var aside_component_1 = __webpack_require__(90);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            sync_component_1.SyncComponent,
            aside_component_1.AsideComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        providers: [],
        bootstrap: [sync_component_1.SyncComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(5);
var AsideComponent = (function () {
    function AsideComponent() {
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    return AsideComponent;
}());
AsideComponent = __decorate([
    core_1.Component({
        selector: 'app-aside',
        template: __webpack_require__(105),
        styles: [__webpack_require__(99)],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], AsideComponent);
exports.AsideComponent = AsideComponent;
//# sourceMappingURL=aside.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var os = __webpack_require__(187);
var fs = __webpack_require__(64);
var Mkdir = (function () {
    function Mkdir() {
    }
    Mkdir.prototype.create = function (dir) {
        setTimeout(function (res) {
            var newDir = os.homedir() + '/' + dir;
            fs.exists(newDir, function (params, status) {
                var newDir = os.homedir() + '/' + dir;
                fs.exists(newDir, function (params, status) {
                    if (status !== true) {
                        fs.mkdir(newDir, function (_, t) { });
                        fs.chmod(newDir, '777', function (_, t) {
                        });
                    }
                    else {
                        fs.chmod(newDir, '777', function (_, t) {
                        });
                    }
                });
            });
        }, 0);
    };
    return Mkdir;
}());
exports.Mkdir = Mkdir;
//# sourceMappingURL=mkdir.js.map

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(5);
var http_1 = __webpack_require__(67);
__webpack_require__(57);
var HttpClientService = (function () {
    function HttpClientService(http) {
        this.http = http;
    }
    HttpClientService.prototype.createAuthorizationHeader = function (headers) {
        //don't use this key get your own! on streamupbox.com and change URL from localhost to https://streamupbox.com
        // tslint:disable-next-line:max-line-length
        // headers.set('application/json','text/javascript');
        headers.set('authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRiZjA1YTI4NGFmMmMwMGE2OWYzMWZjNjBiNjVjOGY5ZmE2M2E2MjEwY2FiNjI5M2VhZjdhMjdjMDVlMmU0NWNmODFjM2Y4N2JkZmY0YmQzIn0.eyJhdWQiOiIzIiwianRpIjoiNGJmMDVhMjg0YWYyYzAwYTY5ZjMxZmM2MGI2NWM4ZjlmYTYzYTYyMTBjYWI2MjkzZWFmN2EyN2MwNWUyZTQ1Y2Y4MWMzZjg3YmRmZjRiZDMiLCJpYXQiOjE0OTcyNDY4MjQsIm5iZiI6MTQ5NzI0NjgyNCwiZXhwIjoxODEyNzc5NjI0LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.CE_2uW2hzPOkocBd6-DdLM1h2u8muwX8bCGz060NiYQJ3C5LOvrxXvtjqaUequO9BXj7b-4iNhherjuYstbHIrA6vv3TI0nxyWXF53ehCQp1DAeA1lvV4Zx_U6iR4TfEWsmdCIikf2tSSRjm0iSHWSDzmorIzpdigvFOJXDb_4kxJofqzZzLJ8AcB8l_neFQjbCVx5n8QtdD0BGet4NwORgfjP3nLPLnFh436GjlTsLSnppVPQ-R8p2ojUu3GeEyPqdM778iJRwWVUROqD9HocW6aRTSVTh6LR1PBCkWIfiHxvgmJuP1hvVN5YzPzVWNYjmKXw2SlKRJlVMUlj0MgpS1TVoLyGoC54FuIMrJsLG8KRcrKOLG9Mgn6PeDf2ECTjJIPcUYgxxuOm7dcZkEtVLEota_SjoWYExy509glb3vaB4-5zAwX1C8zQoB4-Vj98S6uXDcQOT_dN92tfMhF1t35sEAGZ0i-T7zWPVLhsLkulaOuMab82Y1fPaKV33_Zz5mwE17UVQ0ey1k3YSKABhD5nTo6jwV0r6xQ16lDjxcwWr6KPrSeXOXSHgq0_dHmmqYslVal4zRGzotVNp-70xEZj01T8bKmK8EPOKxQMX0xKNZJnoiXeBhgVj1Y-yfJ4LAs_LbEO-xIL627dFb_0x-PLNL0X0piz41qNKqoII');
    };
    HttpClientService.prototype.getUser = function () {
        return this.get('http://localhost:8000/api/users')
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.get = function (url) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpClientService.prototype.post = function (url, data) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpClientService.prototype.getFolders = function () {
        return this.get('http://localhost:8000/api/folders/list?parent_id=0')
            .map(function (res) { return res.json(); });
    };
    HttpClientService.prototype.getPath = function (childId) {
    };
    return HttpClientService;
}());
HttpClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], HttpClientService);
exports.HttpClientService = HttpClientService;
var _a;
//# sourceMappingURL=http-client.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_client_service_1 = __webpack_require__(92);
var mkdir_1 = __webpack_require__(91);
var core_1 = __webpack_require__(5);
var electron = __webpack_require__(82);
var ipcRenderer = electron.ipcRenderer;
var ipc = __webpack_require__(82).ipcRenderer;
var SyncComponent = (function () {
    function SyncComponent(http) {
        this.http = http;
        this.isDarkTheme = false;
        this.isAsideTaggled = false;
        this.selectDirBtn = document.getElementById('select-directory');
        this.isAsideTaggledCss = 'margin-left:-15%';
        this.isAuthenticated = false;
        this.dir = new mkdir_1.Mkdir();
        this.getUser();
        this.copyFolders();
    }
    SyncComponent.prototype.openDir = function () {
        ipc.send('open-file-dialog');
    };
    SyncComponent.prototype.authenticateNow = function () {
        this.isAuthenticated = (this.isAuthenticated === true ? false : true);
    };
    SyncComponent.prototype.openSettingModal = function () {
        ipc.send('openSettingModal');
    };
    SyncComponent.prototype.copyFolders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.http.getFolders()
                    .subscribe(function (res) {
                    console.log(res);
                    res.data.forEach(function (folder) {
                        if (folder.parent === 0) {
                            if (folder.has_copy === false) {
                                console.log(folder.name);
                                _this.createFolder(folder.name);
                            }
                            else if (folder.has_copy === 0) {
                                _this.createFolder(folder.name);
                            }
                        }
                        else {
                            //implement creating subFolder here
                        }
                    });
                    resolve();
                });
            }, 0);
        });
    };
    SyncComponent.prototype.download = function (uri, filename, callback) {
    };
    SyncComponent.prototype.ngOnInit = function () {
        // (localStorage.getItem("isAuthenticated") !=null)?ipc.send("isNotAuthenticated"):return;
        //show login modal
        this.dir.create('Sbox');
        // this.copyFolders().then((res) => {}).catch((error) => {});
        // this.downloadFiles();
        // this.download('http://localhost:8000/api/downloads/fileApi/3/0', 'name.png', function () {
        //     console.log('we have done downloading file');
        // });
    };
    SyncComponent.prototype.downloadFiles = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function (res) {
            }, 0);
        });
    };
    SyncComponent.prototype.isAutoSync = function (toggle) {
        return toggle = !toggle;
    };
    SyncComponent.prototype.autoFetch = function () {
    };
    SyncComponent.prototype.createFolder = function (name) {
        console.log('crreated dir' + name);
        this.dir.create('Sbox/' + name);
    };
    SyncComponent.prototype.getUser = function () {
        var _this = this;
        this.http.getUser().subscribe(function (res) {
            return _this.user = res.name;
        });
    };
    SyncComponent.prototype.getDiskUsage = function () {
        return this.percent = 40;
    };
    SyncComponent.prototype.getFileShared = function () {
        return this.file_shared = 80;
    };
    SyncComponent.prototype.getConnections = function () {
        return this.connections = 400;
    };
    SyncComponent.prototype.getFolders = function () {
    };
    return SyncComponent;
}());
SyncComponent = __decorate([
    core_1.Component({
        selector: 'app-sbox',
        styles: [__webpack_require__(100)],
        encapsulation: core_1.ViewEncapsulation.None,
        template: __webpack_require__(106),
        providers: [http_client_service_1.HttpClientService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_client_service_1.HttpClientService !== "undefined" && http_client_service_1.HttpClientService) === "function" && _a || Object])
], SyncComponent);
exports.SyncComponent = SyncComponent;
var _a;
//# sourceMappingURL=sync.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

},[190]);
//# sourceMappingURL=main.bundle.js.map