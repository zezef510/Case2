import {Account} from "../entity/Account";
import {AccountManager} from "./AccountManager";
// @ts-ignore
let input = require(`readline-sync`)
let  z =  new AccountManager()
let choice = -1
function   checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



while (choice != 0 ){
   console.log(`=======Menu=======` +
    `\n  1.Dang nhap  ` +
    `\n  2.Dang ky `
   )
    choice = input.question(`Vui long lua chon : (1-2)`)
    if ( choice == 1 ){
        console.log(`Nhap thong tin dang nhap cua ban`);
        const Username = input.question(`Ten dang nhap`)
        const Pass = input.question(`Mat khau `)
        let userLogin = z.login(Username,Pass)
        if ( userLogin == undefined){
            console.log(`Khong co thong tin ban vua nhap `)
            console.log(`Vui long nhap tai khoan moi`)
        }else  {
            console.log(`Dang nhap thanh cong `)
            let choice2 = -2
            while (choice2 != 0 ){
                console.log(`======Menu======`+
                `\n 1. Xem thong tin tai khoan`+
                `\n 2. Kiem tra cac tai khoan`+
                `\n 3. Quan ly phong `+
                `\n 4. Quan ly hoa don `+
                `\n 5. Thong ke doanh thu `+
                `\n 0. Thoat `);
                choice2 = input.question(`Vui long lua chon (1-3)`)
                if (choice2 ==  0){
                    break
                }
                if (choice2 == 1 ){
                    z.show()
                }
                if (choice2 == 2){
                    let nameUser = input.question(`Nhap Username ban muon kiem tra`)
                    z.check(nameUser)
                }
            }
        }

    }
    if ( choice == 2){
        console.log(`Tao tai khoan moi`)
        let nameAcc  = input.question(`Username`)
        let pass = input.question(`Password`)
        let phone  = input.questionInt(`NumberPhone`)
        let address  = input.question(`Address`)
        let email = input.question(`Email`)
        let age = input.questionInt(`Age`)
        let name = input.question(`Yourname`)
        z.registration(nameAcc,pass,phone,address,email,age,name)
        if (age < 18){
            console.log(`Ban can tren 18 tuoi de dang ky tai khoan`)
        }
            if (!checkEmail(email)) {
               console.log('Địa chỉ email không hợp lệ. Vui lòng nhập lại.');
            }

        }


}