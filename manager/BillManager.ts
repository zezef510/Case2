import {Bill} from "../entity/Bill";

 export class BillManager {
    listBills : Bill[] = []

    show(){
        console.table(this.listBills)
    }


    addNewBill( staffName : string, guestName : string, startTime : number, endTime : number, idBill : number,toTal : number){
        let addBill = new Bill(staffName,guestName,startTime,endTime,idBill,toTal)
        this.listBills.push(addBill)

    }






}