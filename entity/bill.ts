import {Room} from "./room";
import {RoomManager} from "../manager/roomManager";

 export class Bill {
    private _staffName : string
    private _guestName : string
    private _startTime : number
    private _endTime : number
    private _idBill : number
    private _toTal : number

     constructor(staffName: string, guestName: string, startTime: number, endTime: number, idBill: number, toTal: number) {
         this._staffName = staffName;
         this._guestName = guestName;
         this._startTime = startTime;
         this._endTime = endTime;
         this._idBill = idBill;
         this._toTal = toTal;
     }

     get staffName(): string {
         return this._staffName;
     }

     set staffName(value: string) {
         this._staffName = value;
     }

     get guestName(): string {
         return this._guestName;
     }

     set guestName(value: string) {
         this._guestName = value;
     }

     get startTime(): number {
         return this._startTime;
     }

     set startTime(value: number) {
         this._startTime = value;
     }

     get endTime(): number {
         return this._endTime;
     }

     set endTime(value: number) {
         this._endTime = value;
     }

     get idBill(): number {
         return this._idBill;
     }

     set idBill(value: number) {
         this._idBill = value;
     }

     get toTal(): number {
         return this._toTal;
     }

     set toTal(value: number) {
         this._toTal = value;
     }
 }