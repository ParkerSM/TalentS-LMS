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
const core_1 = require("@angular/core");
const web_service_1 = require("../web.service");
const router_1 = require("@angular/router");
let AuthGuard = class AuthGuard {
    constructor(webService, router, route) {
        this.webService = webService;
        this.router = router;
        this.route = route;
        this.currentUser = {
            fullName: '',
            dob: '',
            education: '',
            ssn: '',
            gender: '',
            mobile: '',
            fatherMobile: '',
            location: '',
            photo: '',
            bloodType: '',
            interest: '',
            bio: '',
            facebook: '',
            twitter: '',
            instagram: '',
            lang: ['English'],
            email: '',
            groupid: '',
            password: ''
        };
    }
    canActivate() {
        var ssn;
        this.webService.getUser(ssn).subscribe(res => {
            this.currentUser = res;
            console.log("guard:" + this.currentUser.password.length);
            if (this.currentUser.password.length <= 0)
                this.router.navigate(['/user']);
        });
        return true;
    }
    canActivateChild() {
        console.log('checking child route access');
        return true;
    }
};
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.Router, router_1.ActivatedRoute])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard-service.js.map