"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
var RoomManager_1 = require("../manager/RoomManager");
var Bill = /** @class */ (function (_super) {
    __extends(Bill, _super);
    function Bill(staffName, guestName, startTime, endTime, idBill, toTal) {
        var _this = _super.call(this) || this;
        _this._staffName = staffName;
        _this._guestName = guestName;
        _this._startTime = startTime;
        _this._endTime = endTime;
        _this._idBill = idBill;
        _this._toTal = toTal;
        return _this;
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
}(RoomManager_1.RoomManager));
exports.Bill = Bill;
