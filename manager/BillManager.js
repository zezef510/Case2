"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillManager = void 0;
var Bill_1 = require("../entity/Bill");
var BillManager = /** @class */ (function () {
    function BillManager() {
        this.listBills = [];
    }
    BillManager.prototype.show = function () {
        console.table(this.listBills);
    };
    BillManager.prototype.addNewBill = function (staffName, guestName, startTime, endTime, idBill, toTal) {
        var addBill = new Bill_1.Bill(staffName, guestName, startTime, endTime, idBill, toTal);
        this.listBills.push(addBill);
    };
    return BillManager;
}());
exports.BillManager = BillManager;
