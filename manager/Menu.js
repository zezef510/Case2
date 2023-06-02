"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountManager_1 = require("./AccountManager");
var RoomManager_1 = require("./RoomManager");
var Room_1 = require("../entity/Room");
var BillManager_1 = require("./BillManager");
// @ts-ignore
var input = require("readline-sync");
var acc = new AccountManager_1.AccountManager();
var room = new RoomManager_1.RoomManager();
var bill = new BillManager_1.BillManager();
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
        var userLogin = acc.login(Username, Pass);
        if (userLogin == undefined) {
            console.log("Khong co thong tin ban vua nhap ");
            console.log("Vui long nhap tai khoan moi");
        }
        else {
            console.log("Dang nhap thanh cong ");
            var choice2 = -2;
            while (choice2 != 0) {
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
                    acc.show();
                }
                if (choice2 == 2) {
                    var nameUser = input.question("Nhap Username ban muon kiem tra");
                    acc.check(nameUser);
                }
                if (choice2 == 3) {
                    var choice3 = -3;
                    while (choice3 != 0) {
                        console.log("====Quan ly phong === " +
                            "\n  1.Hien thi danh sach phong " +
                            "\n  2.Tim kiem phong con trongtheo gia  " +
                            "\n  3. Kiem tra  trang thai 1 phong trong khoang thoi gian " +
                            "\n  4.Them phong " +
                            "\n  5. Sua phong " +
                            "\n  6. Tinh tien  phong " +
                            "\n  0. Thoat ");
                        choice3 = input.question("Vui long lua chon (1-5) ");
                        if (choice3 == 0) {
                            break;
                        }
                        if (choice3 == 1) {
                            room.showRoom();
                        }
                        if (choice3 == 2) {
                            var minPrice = input.question("Vui long nhap khoang gia tu : ");
                            var maxPrice = input.question("Den: ");
                            room.findEmptyRoomByPrice(minPrice, maxPrice);
                        }
                        if (choice3 == 3) {
                        }
                        if (choice3 == 4) {
                            var newID = input.question("Ma id phong moi");
                            var newNameRoom = input.question("Ten phong moi ");
                            var price = input.questionInt("Gia cua phong moi ");
                            var toiletNumber = input.questionInt("So nha ve sinh cua phong ");
                            var numberBedrooms = input.questionInt("So phong ngu cua phong ");
                            room.addRoom(newID, newNameRoom, price, "Ready", toiletNumber, numberBedrooms);
                        }
                        if (choice3 == 5) {
                            var idEdit = input.question("Nhap id muon sua ");
                            var NameRoomEdit = input.question("Sua ten thanh ");
                            var price = input.questionInt("Sua gia thanh ");
                            var status_1 = input.question("Sua trang thai thanh => Ready, EmptyRoom hoac Fixing ");
                            var toiletNumber = input.questionInt("Sua  so phong toilet thanh ");
                            var numberBedrooms = input.questionInt("Sua so phong ngu thanh ");
                            var edit = new Room_1.Room(idEdit, NameRoomEdit, price, status_1, toiletNumber, numberBedrooms);
                            room.editRoom(idEdit, edit);
                        }
                        if (choice3 == 6) {
                            var idTotal = input.question("nhap id phong muon tinh tien");
                            var startTime = input.question("Ngay bat dau thue phong co chuoi dinh dang YYYY-MM-DD");
                            var endTime = input.question("Ngay ket thuc  thue phong co chuoi dinh dang YYYY-MM-DD");
                            room.calculateTotalPrice(idTotal, startTime, endTime);
                        }
                    }
                }
                if (choice2 == 4) {
                    var choice4 = -4;
                    while (choice4 != 0) {
                        console.log("=====Quan ly hoa don===== " +
                            "\n 1.Hien thi hoa don " +
                            "\n 2.Them hoa don moi " +
                            "\n 3.Sua hoa don " +
                            "\n 0. Thoat ");
                        choice4 = input.question("Lua chon tu 0 den 3 ");
                        if (choice4 == 0) {
                            break;
                        }
                        if (choice4 == 1) {
                            bill.show();
                        }
                        if (choice4 == 2) {
                            var KH = input.question("Vui long nhap ten khach hang muon thanh toan");
                            var NV = input.question("Vui long nhap ten nhan vien ");
                            var ID = input.question("Vui long nhap ID hoa don");
                            var idRoom = input.question("Vui long nhap id cua phong muon thanh toan ");
                            var startTime = input.question("Vui long nhap thoi gian bat dau thue phong");
                            var endTime = input.question("Vui long nhap thoi gian ket thuc thue phong");
                            bill.addNewBill(NV, KH, startTime, endTime, ID, room.calculateTotalPrice(idRoom, startTime, endTime));
                        }
                    }
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
        acc.registration(nameAcc, pass, phone, address, email, age, name_1);
        if (age < 18) {
            console.log("Ban can tren 18 tuoi de dang ky tai khoan");
        }
        if (!checkEmail(email)) {
            console.log('Địa chỉ email không hợp lệ. Vui lòng nhập lại.');
        }
    }
}
