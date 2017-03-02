"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var firebase_service_1 = require("./services/firebase.service");
var AppComponent = (function () {
    function AppComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getBusinesses()
            .subscribe(function (businesses) {
            console.log(businesses);
            _this.businesses = businesses;
        });
        this._firebaseService.getCategories()
            .subscribe(function (categories) {
            console.log(categories);
            _this.categories = categories;
        });
    };
    AppComponent.prototype.changeState = function (state, key) {
        console.log('changing state to ' + state);
        if (key) {
            console.log('changing key to: ' + key);
            this.activeKey = key;
        }
        this.appState = state;
    };
    AppComponent.prototype.filterCategory = function (category) {
        this._firebaseService.getBusinesses(category);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [firebase_service_1.FirebaseService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
