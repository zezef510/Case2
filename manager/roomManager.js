"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomManager = void 0;
var room_1 = require("../entity/room");
var RoomManager = /** @class */ (function () {
    function RoomManager() {
        this.listRooms = [new room_1.Room(1, 'Phòng 1', 1000000, 'Ready', 2, 1),
            new room_1.Room(2, 'Phòng 2', 1500000, 'EmptyRoom', 1, 1),
            new room_1.Room(3, 'Phòng 3', 2000000, 'Fixing', 3, 2),
            new room_1.Room(4, 'Phòng 4', 1200000, 'Ready', 2, 1),
            new room_1.Room(5, 'Phòng 5', 1800000, 'Ready', 1, 2),
            new room_1.Room(6, 'Phòng 6', 900000, 'EmptyRoom', 1, 1),
            new room_1.Room(7, 'Phòng 7', 1300000, 'Ready', 2, 1),
            new room_1.Room(8, 'Phòng 8', 1900000, 'Fixing', 3, 2),
            new room_1.Room(9, 'Phòng 9', 1100000, 'EmptyRoom', 1, 1),
            new room_1.Room(10, 'Phòng 10', 1700000, 'Ready', 2, 2)
        ];
    }
    RoomManager.prototype.showRoom = function () {
        var sortedRoomList = this.listRooms.sort(function (a, b) {
            if (a.status === 'Ready' && b.status !== 'Ready') {
                return -1;
            }
            else if (a.status === 'EmptyRoom' && b.status === 'Fixing') {
                return -1;
            }
            else if (a.status === 'Fixing' && b.status !== 'Fixing') {
                return 1;
            }
            else {
                return 0;
            }
        });
        console.table(sortedRoomList.map(function (_a) {
            var nameRoom = _a.nameRoom, price = _a.price, status = _a.status;
            return ({ nameRoom: nameRoom, price: price, status: status });
        }));
    };
    RoomManager.prototype.showRoomName = function () {
        console.table(this.listRooms.map(function (_a) {
            var nameRoom = _a.nameRoom, price = _a.price, status = _a.status;
            return ({ nameRoom: nameRoom, price: price, status: status });
        }));
    };
    RoomManager.prototype.findEmptyRoomByPrice = function (minPrice, maxPrice) {
        var arrFind = [];
        var count = 0;
        for (var i = 0; i < this.listRooms.length; i++) {
            if (this.listRooms[i].status === "EmptyRoom" && this.listRooms[i].price >= minPrice && this.listRooms[i].price <= maxPrice) {
                arrFind.push(this.listRooms[i]);
                count++;
            }
        }
        if (arrFind.length == 0) {
            console.log("Ko co phong trong khoang gia ban muon tim ");
        }
        if (minPrice > maxPrice) {
            console.log("Min Price lon hon Max Price ! ");
            console.log(" Vui long nhap lai");
        }
        console.log("Trong khoang tien ban muon tim co ".concat(count, " phong "));
        console.table(arrFind);
    };
    RoomManager.prototype.addRoom = function (idRoom, nameRoom, price, status, toiletNumber, numberOfBedrooms) {
        var check = false;
        for (var i = 0; i < this.listRooms.length; i++) {
            if (this.listRooms[i].nameRoom == nameRoom && this.listRooms[i].id === idRoom) {
                check = true;
                console.log("Da ton tai phong ");
            }
        }
        var addRoom = new room_1.Room(idRoom, nameRoom, price, status, toiletNumber, numberOfBedrooms);
        this.listRooms.push(addRoom);
        console.log("Tao phong moi thanh cong ");
    };
    RoomManager.prototype.editRoom = function (id, edit) {
        for (var i = 0; i < this.listRooms.length; i++) {
            if (this.listRooms[i].id === id) {
                this.listRooms[i] = edit;
            }
        }
        this.listRooms.push(edit);
    };
    RoomManager.prototype.calculateTotalPrice = function (idTotal, startTime, endTime) {
        var arrTotal = [];
        for (var i = 0; i < this.listRooms.length; i++) {
            if (this.listRooms[i].id == idTotal) {
                arrTotal.push(this.listRooms[i]);
            }
        }
        if (arrTotal.length != 1) {
            console.log("Ko ton tai phong voi id ban muon tim");
            return;
        }
        var startDate = new Date(startTime);
        var endDate = new Date(endTime);
        var durationInDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        var A = Math.round(durationInDays * arrTotal[0].price);
        console.log("Tong tien phai thanh toan cua phong la ".concat(A, " VND : "));
        return A;
    };
    RoomManager.prototype.deleteRoom = function (id) {
        var newList = this.listRooms.filter(function (del) { return del.id !== id; });
        if (newList.length === this.listRooms.length) {
            console.log("Ko ton tai ");
        }
        else {
            this.listRooms = newList;
            console.log("Xoa thanh cong ");
        }
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;
