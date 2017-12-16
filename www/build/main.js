webpackJsonp([9],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeDeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WelcomeDeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomeDeliveryPage = (function () {
    function WelcomeDeliveryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomeDeliveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomeDeliveryPage');
    };
    WelcomeDeliveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome-delivery',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\welcome-delivery\welcome-delivery.html"*/'<!--\n  Generated template for the WelcomeDeliveryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>WelcomeDelivery</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\welcome-delivery\welcome-delivery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomeDeliveryPage);
    return WelcomeDeliveryPage;
}());

//# sourceMappingURL=welcome-delivery.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_user_2_welcome_user_2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_maping_maping__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomeUserPage = (function () {
    function WelcomeUserPage(navCtrl, navParams, camera, MapingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.MapingProvider = MapingProvider;
        this.userInfo = {
            lname: '',
            fname: '',
            email: '',
            phone: ''
        };
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.userInfo.lname = this.navParams.get('lname');
        this.userInfo.fname = this.navParams.get('fname');
        this.userInfo.email = this.navParams.get('email');
        this.userInfo.phone = this.navParams.get('phone');
    }
    WelcomeUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomeUserPage');
    };
    WelcomeUserPage.prototype.CompleteSignup = function () {
        this.postUser();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_user_2_welcome_user_2__["a" /* WelcomeUser_2Page */], { lname: this.userInfo.lname, fname: this.userInfo.fname });
    };
    WelcomeUserPage.prototype.postUser = function () {
        this.MapingProvider.postUser('http://localhost:3000', this.userInfo);
    };
    WelcomeUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome-user',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\welcome-user\welcome-user.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>WelcomeUser</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header style="font-size: large" margin-bottom="20px">Complete My informations</ion-list-header>\n  <ion-item>\n      <ion-label color="gray" floating>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="userInfo.fname"></ion-input>\n  </ion-item>\n    <ion-item>\n        <ion-label color="gray" floating>Last Name</ion-label>\n        <ion-input type="text" [(ngModel)]="userInfo.lname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="gray" floating>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="userInfo.email" ></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="gray" floating>Phone number</ion-label>\n        <ion-input type="tel" [(ngModel)]="userInfo.phone" ></ion-input>\n    </ion-item>\n      <ion-item>\n          <ion-input type="file" [(ngModel)]="userInfo.image"></ion-input>\n\n      </ion-item>\n  </ion-list>\n    <div align="right" margin-right="20px">\n        <button ion-button (click)="CompleteSignup()">Continue</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\welcome-user\welcome-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_maping_maping__["a" /* MapingProvider */]])
    ], WelcomeUserPage);
    return WelcomeUserPage;
}());

//# sourceMappingURL=welcome-user.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_maping_maping__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Form1Page = (function () {
    function Form1Page(navCtrl, navParams, MapingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.MapingProvider = MapingProvider;
        this.totalPrices = 0.00;
        this.items = [];
        this.chosenitems = [];
    }
    Form1Page.prototype.ionViewDidLoad = function () {
        this.getProducts();
        console.log(this.items);
    };
    Form1Page.prototype.getProducts = function () {
        this.MapingProvider.getProducts('http://localhost:3000/Product', this.items);
    };
    Form1Page.prototype.addToCart = function (data) {
        if (this.chosenitems.length == 0) {
            this.chosenitems.push({
                title: data.title,
                price: data.price,
                quantity: 1,
            });
            this.totalPrices += data.price;
        }
        else {
            var i = 0;
            while (i < this.chosenitems.length && this.chosenitems[i].title != data.title)
                i++;
            if (i == this.chosenitems.length) {
                this.chosenitems.push({
                    title: data.title,
                    price: data.price,
                    quantity: 1
                });
                this.totalPrices += data.price;
            }
            else {
                this.chosenitems[i].quantity += 1;
                this.totalPrices += data.price;
            }
        }
    };
    Form1Page.prototype.removeItem = function (data) {
        var i = this.chosenitems.length - 1;
        while (this.chosenitems[i].title != data.title) {
            i--;
        }
        this.chosenitems.splice(i, 1);
        this.totalPrices -= data.price * data.quantity;
    };
    Form1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form1',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\form1\form1.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Shopping Cart</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>Compose your Shopping Cart by adding shopping elements from the list</ion-list-header>\n        <ion-item  *ngFor="let item of items[0]">\n            <h2>{{item.title}}</h2>\n            <h3>Price:{{item.price}}DH</h3>\n            <button ion-button item-right (click)="addToCart(item)">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n            <ion-item *ngFor="let chosenitem of chosenitems">\n                <h2>{{chosenitem.title}}</h2>\n                <h3>Quantity : {{chosenitem.quantity}}</h3>\n                <h4>Price : {{chosenitem.quantity *chosenitem.price}}</h4>\n                <button ion-button item-right (click)="removeItem(chosenitem)">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n            </ion-item>\n            <ion-item>\n                <div align="right"> Total price :{{totalPrices}}DH</div>\n            </ion-item>\n    </ion-list>\n    <ion-fab bottom right>\n        <button ion-fab color="primary" (click)="viewCart()"><ion-icon name="cart"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\form1\form1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_maping_maping__["a" /* MapingProvider */]])
    ], Form1Page);
    return Form1Page;
}());

//# sourceMappingURL=form1.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_user_2_welcome_user_2__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, afAuth, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loginData = {
            email: '',
            password: ''
        };
        console.log(this.navParams.get('nom'));
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password).then(function (auth) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_user_2_welcome_user_2__["a" /* WelcomeUser_2Page */]);
        }).catch(function (err) {
            var toast = _this.toastCtrl.create({
                message: err.message,
                duration: 1000
            });
            toast.present();
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */], { email: this.loginData.email });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>E-Mail</ion-label>\n      <ion-input type="email" [(ngModel)]="loginData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="loginData.password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button full ion-button (click)="Login()">Login</button>\n  <div padding-top="20px">\n    <a href="#" (click)="signup()">Don\'t have an account ?</a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_delivery_welcome_delivery__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_user_welcome_user__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, afAuth, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.signupData = {
            email: '',
            password: '',
            passwordRetyped: '',
            type: ''
        };
        this.signupData.email = this.navParams.get('email');
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.signupData.password !== this.signupData.passwordRetyped) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                message: 'The passwords do not Match',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password).then(function (auth) {
            var alert = _this.alertCtrl.create({
                title: 'Success',
                message: 'Done',
                buttons: ['OK']
            });
            alert.present();
            if (_this.signupData.type === 'Normal')
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_user_welcome_user__["a" /* WelcomeUserPage */]);
            else
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_delivery_welcome_delivery__["a" /* WelcomeDeliveryPage */]);
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SignupPage.prototype.onChange = function (SelectedValue) {
        this.signupData.type = SelectedValue;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Sign up As</ion-label>\n      <ion-select  [(ngModel)]="aaaa" (ionChange)="onChange(aaaa)">\n        <ion-option  value="Normal">Normal User</ion-option>\n        <ion-option  value="Delivery">Delivry Man</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>E-Mail</ion-label>\n      <ion-input type="email" [(ngModel)]="signupData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="signupData.password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Re-Enter Password</ion-label>\n      <ion-input type="password" [(ngModel)]="signupData.passwordRetyped"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button full ion-button (click)="signup()" [disabled]="!signupData.email || !signupData.password || !signupData.passwordRetyped">Signup</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/form1/form1.module": [
		475,
		8
	],
	"../pages/form2/form2.module": [
		474,
		7
	],
	"../pages/home/home.module": [
		476,
		6
	],
	"../pages/login/login.module": [
		481,
		5
	],
	"../pages/signup/signup.module": [
		477,
		4
	],
	"../pages/test/test.module": [
		482,
		3
	],
	"../pages/welcome-delivery/welcome-delivery.module": [
		478,
		2
	],
	"../pages/welcome-user-2/welcome-user-2.module": [
		479,
		1
	],
	"../pages/welcome-user/welcome-user.module": [
		480,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Form2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Form2Page = (function () {
    function Form2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Form2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Form2Page');
    };
    Form2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form2',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\form2\form2.html"*/'<!--\n  Generated template for the Form2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>form2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\form2\form2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Form2Page);
    return Form2Page;
}());

//# sourceMappingURL=form2.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_maping_maping__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, navParams, MapingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.MapingProvider = MapingProvider;
        this.result = {
            id: '',
            nom: '',
            prenom: '',
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.Login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.getData = function () {
        this.MapingProvider.getUser('http://localhost:3000', this.result);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\home\home.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>welcome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-card>\n    <img src="../../assets/imgs/Login.png"/>\n    <ion-card-content>\n      <ion-card-title align="center">\n        T9edali\n      </ion-card-title>\n      <p align="center">\n        La 1ére interface Marocaine pour commander vos courses sans bouger de votre canapé\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card-content>\n    <ion-card-title align="center">\n\n    </ion-card-title>\n    <p align="center">\n      Assemble your shopping cart adding different items you want to purchase\n    </p>\n  </ion-card-content>\n\n  <img src="../../assets/imgs/Shop.png"/>\n  <ion-card-content>\n    <ion-card-title align="center">\n\n    </ion-card-title>\n    <p align="center">\n      Get delivred by one of our trusted delivery men\n    </p>\n  </ion-card-content>\n\n  <div align="center" padding-top="1px">\n\n    <img src="../../assets/imgs/Livreur.png"/>\n  </div>\n\n  <ion-card-content>\n    <ion-card-title align="center">\n\n    </ion-card-title>\n    <p align="center">\n      Pay your delivery man the amount of your shopping items and the delivery fee\n    </p>\n  </ion-card-content>\n\n  <img src="../../assets/imgs/money.png" full="true"/>\n  <ion-card-content>\n    <ion-card-title align="center">\n\n    </ion-card-title>\n    <p align="center" margin-top="50px">\n        Click the Login button below and start shoping\n    </p>\n  </ion-card-content>\n    <div align="center" padding-top="1px" >\n        <button ion-button color="primary" full="true"  (click)="Login()">Login</button>\n    </div>\n  <div align="center" padding-top="1px">\n      <ion-label>Follow us</ion-label>\n  </div>\n  <div align="center" padding-top="1px" >\n\n    <a href="https://web.facebook.com/zouhair.ettouhami">\n      <ion-icon name="logo-facebook"></ion-icon>\n    </a>\n    <a href="https://twitter.com/realDonaldTrump" margin-left="50px">\n      <ion-icon  name="logo-twitter" ></ion-icon>\n    </a>\n    <a href="https://www.instagram.com/realdonaldtrump/?hl=fr" margin-left="50px">\n      <ion-icon  name="logo-instagram" isActive="false"></ion-icon>\n    </a>\n    <button ion-button (click)="getData()">click Me a Zabi</button>\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_maping_maping__["a" /* MapingProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        this.DisplayMap();
    };
    TestPage.prototype.DisplayMap = function () {
        var location = new google.maps.LatLng('33.983784', '-6.867710');
        var options = {
            center: location,
            zoom: 10,
            streetViewControl: false,
            mapTypeId: 'roadmap'
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
    };
    TestPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TestPage.prototype, "mapRef", void 0);
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\test\test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\test\test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(317);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_welcome_user_2_welcome_user_2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_welcome_user_welcome_user__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_welcome_delivery_welcome_delivery__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_maping_maping__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_form1_form1__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_form2_form2__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_test_test__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var config = {
    apiKey: "AIzaSyB_LY5muPliTgT9j1czRylH6M8-qr8RK5A",
    authDomain: "projet-c27af.firebaseapp.com",
    databaseURL: "https://projet-c27af.firebaseio.com",
    projectId: "projet-c27af",
    storageBucket: "projet-c27af.appspot.com",
    messagingSenderId: "886541375204"
};
__WEBPACK_IMPORTED_MODULE_16_firebase__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_welcome_user_welcome_user__["a" /* WelcomeUserPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_welcome_delivery_welcome_delivery__["a" /* WelcomeDeliveryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_welcome_user_2_welcome_user_2__["a" /* WelcomeUser_2Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_form1_form1__["a" /* Form1Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_form2_form2__["a" /* Form2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_test_test__["a" /* TestPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/form2/form2.module#Form2PageModule', name: 'Form2Page', segment: 'form2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form1/form1.module#Form1PageModule', name: 'Form1Page', segment: 'form1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-delivery/welcome-delivery.module#WelcomeDeliveryPageModule', name: 'WelcomeDeliveryPage', segment: 'welcome-delivery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-user-2/welcome-user-2.module#WelcomeUser_2PageModule', name: 'WelcomeUser_2Page', segment: 'welcome-user-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-user/welcome-user.module#WelcomeUserPageModule', name: 'WelcomeUserPage', segment: 'welcome-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_welcome_user_welcome_user__["a" /* WelcomeUserPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_welcome_delivery_welcome_delivery__["a" /* WelcomeDeliveryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_welcome_user_2_welcome_user_2__["a" /* WelcomeUser_2Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_form1_form1__["a" /* Form1Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_form2_form2__["a" /* Form2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_test_test__["a" /* TestPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__providers_maping_maping__["a" /* MapingProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_user_2_welcome_user_2__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, afAuth, statusBar, splashScreen) {
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_user_2_welcome_user_2__["a" /* WelcomeUser_2Page */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the MapingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MapingProvider = (function () {
    function MapingProvider(http) {
        this.http = http;
        console.log('Hello MapingProvider Provider');
    }
    MapingProvider.prototype.getUser = function (url, result) {
        console.log(url);
        this.http.get(url).subscribe(function (data) {
            result = data;
            console.log(result);
        });
    };
    MapingProvider.prototype.postUser = function (url, formInfo) {
        this.http.post(url, formInfo).subscribe();
    };
    MapingProvider.prototype.postOrder = function (url, formInfo) {
        this.http.post(url, formInfo).subscribe();
    };
    MapingProvider.prototype.getProducts = function (url, result) {
        this.http.get(url).subscribe(function (data) {
            result.push(data);
        });
    };
    MapingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MapingProvider);
    return MapingProvider;
}());

//# sourceMappingURL=maping.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeUser_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form1_form1__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_maping_maping__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomeUser_2Page = (function () {
    function WelcomeUser_2Page(navCtrl, navParams, MapingProvider, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.MapingProvider = MapingProvider;
        this.menu = menu;
        this.orderInfo = {
            market: '',
            location: '',
            phoneNumber: '',
            latitude: '',
            longitude: ''
        };
        this.orderInfo.location = this.navParams.get("userInfo.location");
        this.orderInfo.phoneNumber = this.navParams.get("userInfo.phoneNumber");
        this.menu.enable(true, 'menu1');
    }
    WelcomeUser_2Page.prototype.ionViewDidLoad = function () {
        this.DisplayMap(this.orderInfo);
    };
    WelcomeUser_2Page.prototype.DisplayMap = function (info) {
        var location = new google.maps.LatLng('33.983784', '-6.867710');
        var map = new google.maps.Map(this.mapRef.nativeElement, {
            center: location,
            zoom: 15
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true,
            clickable: true
        });
        google.maps.event.addListener(marker, 'dragend', function () {
            info.latitude = marker.getPosition().lat();
            info.longitude = marker.getPosition().lng();
        });
    };
    WelcomeUser_2Page.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    WelcomeUser_2Page.prototype.CompleteInfo = function () {
        this.postOrder();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__form1_form1__["a" /* Form1Page */], this.orderInfo);
    };
    WelcomeUser_2Page.prototype.postOrder = function () {
        this.MapingProvider.postOrder('http://localhost:3000/Order', this.orderInfo);
    };
    WelcomeUser_2Page.prototype.onChange = function (SelectedValue) {
        this.orderInfo.market = SelectedValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WelcomeUser_2Page.prototype, "mapRef", void 0);
    WelcomeUser_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome-user-2',template:/*ion-inline-start:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\welcome-user-2\welcome-user-2.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list id="1" style="visibility: visible">\n        <ion-list-header>Shopping Info   </ion-list-header>\n        <ion-item margin-top="40px">\n            <ion-label>Select your Market</ion-label>\n            <ion-select  [(ngModel)]="orderInfo.market" (ionChange)="onChange(orderInfo.market)">\n                <ion-option value="Acima">Acima</ion-option>\n                <ion-option value="Aswal Assalam">Aswak Assalam</ion-option>\n                <ion-option value="Marjane">Marjane</ion-option>\n                <ion-option value="Carrefour">Carrefour</ion-option>\n                <ion-option value="Bim">BIM</ion-option>\n            </ion-select>\n        </ion-item >\n        <ion-item margin-top="40px">\n            <ion-label>Phone number</ion-label>\n            <ion-input type="text"[(ngModel)]="orderInfo.phoneNumber"></ion-input>\n        </ion-item>\n  </ion-list>\n    <ion-item>\n        <ion-label>choose location</ion-label>\n    </ion-item>\n    <div #map id="my-app"></div>\n    <div align="right" margin-right="20px" margin-top="40px">\n        <button ion-button (click)="CompleteInfo()">Continue</button>\n    </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Zouhair\WebstormProjects\IonicProjects\Projet_S5\src\pages\welcome-user-2\welcome-user-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_maping_maping__["a" /* MapingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], WelcomeUser_2Page);
    return WelcomeUser_2Page;
}());

//# sourceMappingURL=welcome-user-2.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map