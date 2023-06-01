"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountManager_1 = require("./AccountManager");
// @ts-ignore
var input = require("readline-sync");
var z = new AccountManager_1.AccountManager();
var choice = -1;
function checkEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
while (choice != 0) {
    console.log("=======Menu=======" +
        "\n  1.Dang nhap  " +
        "\n  2.Dang ky ");
    choice = input.question("Vui long lua chon : (1-2)");
    if (choice == 1) {
        console.log("Nhap thong tin dang nhap cua ban");
        var Username = input.question("Ten dang nhap");
        var Pass = input.question("Mat khau ");
        var userLogin = z.login(Username, Pass);
        if (userLogin == undefined) {
            console.log("Khong co thong tin ban vua nhap ");
            console.log("Vui long nhap tai khoan moi");
        }
        else {
            var choice2 = -2;
            while (choice2 != 0) {
                console.log("Dang nhap thanh cong ");
                console.log("======Menu======" +
                    "\n 1. Xem thong tin tai khoan" +
                    "\n 2. Kiem tra cac tai khoan" +
                    "\n 3. Quan ly phong " +
                    "\n 4. Quan ly hoa don " +
                    "\n 5. Thong ke doanh thu " +
                    "\n 0. Thoat ");
                choice2 = input.question("Vui long lua chon (1-3)");
                if (choice2 == 0) {
                    break;
                }
                if (choice2 == 1) {
                    z.show();
                }
            }
        }
    }
    if (choice == 2) {
        console.log("Tao tai khoan moi");
        var nameAcc = input.question("Username");
        var pass = input.question("Password");
        var phone = input.questionInt("NumberPhone");
        var address = input.question("Address");
        var email = input.question("Email");
        var age = input.questionInt("Age");
        var name_1 = input.question("Yourname");
        z.registration(nameAcc, pass, phone, address, email, age, name_1);
        if (!checkEmail(email)) {
            console.log('Địa chỉ email không hợp lệ. Vui lòng nhập lại.');
        }
        if (age < 18) {
            console.log("Ban can tren 18 tuoi de dang ky tai khoan");
        }
    }
}
