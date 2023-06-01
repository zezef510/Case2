import {Room} from "./Room";

 export class Bill extends Room{
    startTime : number
    endTime : number


    constructor(id: number, nameRoom: string, price: number, toiletNumber: number, numberOfBedrooms: number, startTime: number, endTime: number) {
        super(id, nameRoom, price, toiletNumber, numberOfBedrooms);
        this.startTime = startTime;
        this.endTime = endTime;
    }

}