"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManager = void 0;
var account_1 = require("../entity/account");
var AccountManager = /** @class */ (function () {
    function AccountManager() {
        this.listAccount = [];
        //  checkEmail(email) {
        //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     return regex.test(email);
        // }
    }
    AccountManager.prototype.registration = function (nameAccount, pass, numberPhone, address, email, age, username) {
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].nameAccount == nameAccount) {
                console.log("Dang ky khong thanh cong ");
                return;
            }
        }
        var newAcc = new account_1.Account(nameAccount, pass, numberPhone, address, email, age, username);
        this.listAccount.push(newAcc);
        console.log("Them thanh cong bay gio ban hay dang nhap ");
    };
    AccountManager.prototype.login = function (nameAcc, password) {
        var userLogin;
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].nameAccount === nameAcc && this.listAccount[i].pass === password) {
                userLogin = this.listAccount[i];
            }
        }
        return userLogin;
    };
    AccountManager.prototype.show = function () {
        console.table(this.listAccount);
    };
    AccountManager.prototype.check = function (nameAccount) {
        var arrShow = [];
        this.listAccount.map(function (item) {
            if (item.nameAccount == nameAccount) {
                arrShow.push(item);
            }
        });
        if (arrShow.length === 0) {
            console.log("Ko co tai khoan ban can tim");
        }
        else {
            console.table(arrShow);
        }
    };
    return AccountManager;
}());
exports.AccountManager = AccountManager;
