import {Account} from "../entity/Account";

 export class AccountManager {
    listAccount : Account[] = []

    registration(nameAccount: string, pass: string, numberPhone: string, address: string, email: string, age: number, username: string){
        for (let i = 0; i < this.listAccount.length; i++) {
            if(this.listAccount[i].nameAccount == nameAccount){
                console.log(`Da ton tai ten dang nhap nay`)
                return;
            }
        }
        const newAcc = new Account(nameAccount,pass,numberPhone,address,email,age,username)
        this.listAccount.push(newAcc)
        console.log(`Them thanh cong bay gio ban hay dang nhap `)
    }
    login(nameAcc : string, password : string){
        let userLogin ;
        for (let i = 0; i < this.listAccount.length; i++) {
            if ( this.listAccount[i].nameAccount === nameAcc && this.listAccount[i].pass === password ){
                userLogin = this.listAccount[i]
            }
        }
        return userLogin
    }
    show(){
            console.table(this.listAccount)
    }
    check(nameAccount : string ){
        let arrShow = []
         this.listAccount.map(item =>{
             if  (item.nameAccount == nameAccount){
                 arrShow.push(item)
             }
             })
        if ( arrShow.length === 0){
            console.log(`Ko co tai khoan ban can tim`)
        }else {
            console.table(arrShow)
        }
    }
     //  checkEmail(email) {
     //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     //     return regex.test(email);
     // }
    search(){

    }
}