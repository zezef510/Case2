export class Room {
    private _id : number;
    private _nameRoom : string;
    private _price : number;
    private _status : `Ready` | `EmptyRoom` | `Fixing`
    private _toiletNumber : number;
    private _numberOfBedrooms : number

    constructor(id: number, nameRoom: string, price: number, status: "Ready" | "EmptyRoom" | "Fixing", toiletNumber: number, numberOfBedrooms: number) {
        this._id = id;
        this._nameRoom = nameRoom;
        this._price = price;
        this._status = status;
        this._toiletNumber = toiletNumber;
        this._numberOfBedrooms = numberOfBedrooms;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameRoom(): string {
        return this._nameRoom;
    }

    set nameRoom(value: string) {
        this._nameRoom = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get status(): "Ready" | "EmptyRoom" | "Fixing" {
        return this._status;
    }

    set status(value: "Ready" | "EmptyRoom" | "Fixing") {
        this._status = value;
    }

    get toiletNumber(): number {
        return this._toiletNumber;
    }

    set toiletNumber(value: number) {
        this._toiletNumber = value;
    }

    get numberOfBedrooms(): number {
        return this._numberOfBedrooms;
    }

    set numberOfBedrooms(value: number) {
        this._numberOfBedrooms = value;
    }
}
