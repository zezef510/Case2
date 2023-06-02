"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
var Bill = /** @class */ (function () {
    function Bill(staffName, guestName, startTime, endTime, idBill, toTal) {
        this._staffName = staffName;
        this._guestName = guestName;
        this._startTime = startTime;
        this._endTime = endTime;
        this._idBill = idBill;
        this._toTal = toTal;
    }
    Object.defineProperty(Bill.prototype, "staffName", {
        get: function () {
            return this._staffName;
        },
        set: function (value) {
            this._staffName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "guestName", {
        get: function () {
            return this._guestName;
        },
        set: function (value) {
            this._guestName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "idBill", {
        get: function () {
            return this._idBill;
        },
        set: function (value) {
            this._idBill = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "toTal", {
        get: function () {
            return this._toTal;
        },
        set: function (value) {
            this._toTal = value;
        },
        enumerable: false,
        configurable: true
    });
    return Bill;
}());
exports.Bill = Bill;
