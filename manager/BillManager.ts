import {Bill} from "../entity/Bill";

 export class BillManager {
    listBills : Bill[] = []

    show(){
        console.table(this.listBills)
    }


    addNewBill( staffName : string, guestName : string, startTime : number, endTime : number, idBill : number,toTal : number){
        const exitZ = this.listBills.filter(item => item.idBill == idBill)
        if ( exitZ.length > 0 ){
            console.log(`ID hoa don da bi trung`)
        }else {
            let addBill = new Bill(staffName, guestName, startTime, endTime, idBill, toTal)
            this.listBills.push(addBill)
        }
    }
    editBill(idBill,edit:Bill){
        for (let i = 0; i < this.listBills.length; i++) {
            if (this.listBills[i].idBill === idBill){
                this.listBills[i] = edit

            }
        }
        this.listBills.push(edit)
    }
}