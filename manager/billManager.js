"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillManager = void 0;
var bill_1 = require("../entity/bill");
var BillManager = /** @class */ (function () {
    function BillManager() {
        this.listBills = [];
    }
    BillManager.prototype.show = function () {
        console.table(this.listBills);
    };
    BillManager.prototype.addNewBill = function (staffName, guestName, startTime, endTime, idBill, toTal) {
        var exitZ = this.listBills.filter(function (item) { return item.idBill == idBill; });
        if (exitZ.length > 0) {
            console.log("ID hoa don da bi trung");
        }
        else {
            var addBill = new bill_1.Bill(staffName, guestName, startTime, endTime, idBill, toTal);
            this.listBills.push(addBill);
        }
    };
    BillManager.prototype.editBill = function (idBill, edit) {
        for (var i = 0; i < this.listBills.length; i++) {
            if (this.listBills[i].idBill === idBill) {
                this.listBills[i] = edit;
            }
        }
        this.listBills.push(edit);
    };
    BillManager.prototype.toTal = function () {
        var total = 0;
        for (var i = 0; i < this.listBills.length; i++) {
            total += this.listBills[i].toTal;
        }
        console.log("Tong tien khach san VipProMaxPowerPlus thu duoc la ".concat(total));
    };
    BillManager.prototype.deleteBill = function (idBill) {
        var newList = this.listBills.filter(function (delte) { return delte.idBill !== idBill; });
        if (newList.length === this.listBills.length) {
            console.log("Ko ton tai ");
        }
        else {
            this.listBills = newList;
            console.log("Xoa thanh cong ");
        }
    };
    return BillManager;
}());
exports.BillManager = BillManager;
