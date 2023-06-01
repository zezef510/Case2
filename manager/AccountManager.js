"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManager = void 0;
var Account_1 = require("../entity/Account");
var AccountManager = /** @class */ (function () {
    function AccountManager() {
        this.listAccount = [];
    }
    AccountManager.prototype.registration = function (nameAccount, pass, numberPhone, address, email, age, username) {
        var check = false;
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].nameAccount == nameAccount) {
                check = true;
                return;
            }
        }
        if (check) {
            console.log("Da ton tai ten dang nhap nay");
            return;
        }
        var newAcc = new Account_1.Account(nameAccount, pass, numberPhone, address, email, age, username);
        this.listAccount.push(newAcc);
        console.log("Them thanh cong hay dang nhap ");
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
    AccountManager.prototype.search = function () {
    };
    return AccountManager;
}());
exports.AccountManager = AccountManager;
