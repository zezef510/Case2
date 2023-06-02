import {Room} from "../entity/Room";

export class RoomManager {
 listRooms : Room[] = [new Room(1, 'Phòng 1', 1000000, 'Ready', 2, 1),
     new Room(2, 'Phòng 2', 1500000, 'EmptyRoom', 1, 1),
     new Room(3, 'Phòng 3', 2000000, 'Fixing', 3, 2),
     new Room(4, 'Phòng 4', 1200000, 'Ready', 2, 1),
     new Room(5, 'Phòng 5', 1800000, 'Ready', 1, 2),
     new Room(6, 'Phòng 6', 900000, 'EmptyRoom', 1, 1),
     new Room(7, 'Phòng 7', 1300000, 'Ready', 2, 1),
     new Room(8, 'Phòng 8', 1900000, 'Fixing', 3, 2),
     new Room(9, 'Phòng 9', 1100000, 'EmptyRoom', 1, 1),
     new Room(10, 'Phòng 10', 1700000, 'Ready', 2, 2)
 ];
    showRoom(){
        const sortedRoomList = this.listRooms.sort((a, b) => {
            if (a.status === 'Ready' && b.status !== 'Ready') {
                return -1;
            } else if (a.status === 'EmptyRoom' && b.status === 'Fixing') {
                return -1;
            } else if (a.status === 'Fixing' && b.status !== 'Fixing') {
                return 1;
            } else {
                return 0;
            }
        });

        console.table(sortedRoomList.map(({nameRoom, price, status}) => ({nameRoom, price, status})));
    }
    findEmptyRoomByPrice(minPrice : number, maxPrice:number){
        let arrFind = []
        let count = 0
        for (let i = 0; i < this.listRooms.length; i++) {
            if (this.listRooms[i].status  === "EmptyRoom" && this.listRooms[i].price >= minPrice && this.listRooms[i].price <= maxPrice){
                arrFind.push(this.listRooms[i])
                count++
            }
        }
        if (arrFind.length == 0){
            console.log(`Ko co phong trong khoang gia ban muon tim `)
        }
        if (minPrice > maxPrice){
            console.log(`Min Price lon hon Max Price ! `)
            console.log(` Vui long nhap lai`)
        }
        console.log(`Trong khoang tien ban muon tim co ${count} phong `)
        console.table(arrFind)
    }
    addRoom (idRoom : number ,nameRoom : string,price : number,status :`Ready` | `EmptyRoom` | `Fixing`,toiletNumber : number, numberOfBedrooms){
        let check = false
        for (let i = 0; i < this.listRooms.length; i++) {
            if ( this.listRooms[i].nameRoom == nameRoom && this.listRooms[i].id === idRoom){
                check = true
                console.log(`Da ton tai phong `)
            }
        }
        const addRoom = new Room(idRoom,nameRoom,price,status,toiletNumber,numberOfBedrooms)
        this.listRooms.push(addRoom)
        console.log(`Tao phong moi thanh cong `)
    }
    editRoom (id : number ,edit : Room){
        for (let i = 0; i < this.listRooms.length; i++) {
            if (this.listRooms[i].id === id){
                this.listRooms[i] = edit

            }
        }
        this.listRooms.push(edit)

    }
    calculateTotalPrice(idTotal: number, startTime: string, endTime: string) {
        let arrTotal = []
        for (let i = 0; i < this.listRooms.length; i++) {
            if (this.listRooms[i].id == idTotal) {
                arrTotal.push(this.listRooms[i])
            }
        }
        if (arrTotal.length != 1 ){
            console.log(`Ko ton tai phong voi id ban muon tim`)
            return
        }
        const startDate = new Date(startTime);
        const endDate = new Date(endTime);
        const durationInDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        let A = Math.round(durationInDays * arrTotal[0].price);
        console.log(`Tong tien phai thanh toan cua phong la ${A} VND : `)
        return A


    }

}
