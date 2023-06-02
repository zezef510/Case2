"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(id, nameRoom, price, status, toiletNumber, numberOfBedrooms) {
        this._id = id;
        this._nameRoom = nameRoom;
        this._price = price;
        this._status = status;
        this._toiletNumber = toiletNumber;
        this._numberOfBedrooms = numberOfBedrooms;
    }
    Object.defineProperty(Room.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "nameRoom", {
        get: function () {
            return this._nameRoom;
        },
        set: function (value) {
            this._nameRoom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "toiletNumber", {
        get: function () {
            return this._toiletNumber;
        },
        set: function (value) {
            this._toiletNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "numberOfBedrooms", {
        get: function () {
            return this._numberOfBedrooms;
        },
        set: function (value) {
            this._numberOfBedrooms = value;
        },
        enumerable: false,
        configurable: true
    });
    return Room;
}());
exports.Room = Room;
