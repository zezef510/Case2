"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(nameAccount, pass, numberPhone, address, email, age, username) {
        this._nameAccount = nameAccount;
        this._pass = pass;
        this._numberPhone = numberPhone;
        this._address = address;
        this._email = email;
        this._age = age;
        this._username = username;
    }
    Object.defineProperty(Account.prototype, "nameAccount", {
        get: function () {
            return this._nameAccount;
        },
        set: function (value) {
            this._nameAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "pass", {
        get: function () {
            return this._pass;
        },
        set: function (value) {
            this._pass = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "numberPhone", {
        get: function () {
            return this._numberPhone;
        },
        set: function (value) {
            this._numberPhone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
