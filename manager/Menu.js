"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {Account} from "../entity/Account";
var accountManager_1 = require("./accountManager");
var roomManager_1 = require("./roomManager");
var room_1 = require("../entity/room");
var billManager_1 = require("./billManager");
var bill_1 = require("../entity/bill");
// @ts-ignore
var input = require("readline-sync");
var acc = new accountManager_1.AccountManager();
var room = new roomManager_1.RoomManager();
var bill = new billManager_1.BillManager();
var choice = -1;
function checkEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function validatePhoneNumber(phoneNumber) {
    // Kiểm tra số điện thoại chỉ chứa các ký tự là số và có độ dài từ 10 đến 11
    var phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}
while (choice != 0) {
    console.log("=======Menu=======" +
        "\n  1.Dang nhap " +
        "\n  2.Dang ky ");
    choice = input.question("Vui long lua chon : (1-2) ");
    if (choice == 1) {
        console.log("Nhap thong tin dang nhap cua ban");
        var Username = input.question("Ten dang nhap : ");
        var Pass = input.question("Mat khau : ");
        var userLogin = acc.login(Username, Pass);
        if (userLogin == undefined) {
            console.log("Khong co thong tin ban vua nhap ");
            console.log("Vui long nhap tai khoan moi");
        }
        else {
            console.log("Dang nhap thanh cong ");
            var menu = -2;
            while (menu != 0) {
                console.log("======Menu======" +
                    "\n 1. Xem thong tin tai khoan" +
                    "\n 2. Kiem tra cac tai khoan" +
                    "\n 3. Quan ly phong " +
                    "\n 4. Quan ly hoa don " +
                    "\n 5. Thong ke doanh thu " +
                    "\n 0. Thoat ");
                menu = input.question("Vui long lua chon (1-3) : ");
                if (menu == 0) {
                    break;
                }
                if (menu == 1) {
                    acc.show();
                }
                if (menu == 2) {
                    var nameUser = input.question("Nhap Username ban muon kiem tra");
                    acc.check(nameUser);
                }
                if (menu == 3) {
                    var menuRoom = -3;
                    while (menuRoom != 0) {
                        console.log("==== Quan ly phong ==== " +
                            "\n  1. Hien thi danh sach phong theo trang thai " +
                            "\n  2. Tim kiem phong con trongtheo gia  " +
                            "\n  3. Kiem tra  trang thai 1 phong trong khoang thoi gian " +
                            "\n  4. Them phong " +
                            "\n  5. Sua phong " +
                            "\n  6. Tinh tien  phong " +
                            "\n  7. Hien thi danh sach phong theo ten " +
                            "\n  8. Xoa phong " +
                            "\n  0. Thoat ");
                        menuRoom = input.question("Vui long lua chon (0-7) ");
                        if (menuRoom == 0) {
                            break;
                        }
                        if (menuRoom == 1) {
                            room.showRoom();
                        }
                        if (menuRoom == 2) {
                            var minPrice = input.question("Vui long nhap khoang gia tu : ");
                            var maxPrice = input.question("Den: ");
                            room.findEmptyRoomByPrice(minPrice, maxPrice);
                        }
                        if (menuRoom == 3) {
                            console.log("Hehe ban da bi lua");
                        }
                        if (menuRoom == 4) {
                            var newID = input.question("Ma id phong moi : ");
                            var newNameRoom = input.question("Ten phong moi : ");
                            var price = input.questionInt("Gia cua phong moi : ");
                            var toiletNumber = input.questionInt("So nha ve sinh cua phong : ");
                            var numberBedrooms = input.questionInt("So phong ngu cua phong : ");
                            room.addRoom(newID, newNameRoom, price, "Ready", toiletNumber, numberBedrooms);
                        }
                        if (menuRoom == 5) {
                            var idEdit = input.question("Nhap id muon sua : ");
                            var NameRoomEdit = input.question("Sua ten thanh : ");
                            var price = input.questionInt("Sua gia thanh : ");
                            var status_1 = input.question("Sua trang thai thanh => Ready, EmptyRoom hoac Fixing : ");
                            var toiletNumber = input.questionInt("Sua  so phong toilet thanh : ");
                            var numberBedrooms = input.questionInt("Sua so phong ngu thanh : ");
                            var edit = new room_1.Room(idEdit, NameRoomEdit, price, status_1, toiletNumber, numberBedrooms);
                            room.editRoom(idEdit, edit);
                        }
                        if (menuRoom == 6) {
                            var idTotal = input.question("nhap id phong muon tinh tien ");
                            var startTime = input.question("Ngay bat dau thue phong co chuoi dinh dang YYYY-MM-DD ");
                            var endTime = input.question("Ngay ket thuc  thue phong co chuoi dinh dang YYYY-MM-DD ");
                            room.calculateTotalPrice(idTotal, startTime, endTime);
                        }
                        if (menuRoom == 7) {
                            room.showRoomName();
                        }
                        if (menuRoom == 8) {
                            var idDelete = input.questionInt(" Vui long nhap vao id phong ban muon xoa : ");
                            room.deleteRoom(idDelete);
                        }
                    }
                }
                if (menu == 4) {
                    var menuBill = -4;
                    while (menuBill != 0) {
                        console.log("=====Quan ly hoa don===== " +
                            "\n 1.Hien thi hoa don " +
                            "\n 2.Them hoa don moi " +
                            "\n 3.Sua hoa don " +
                            "\n 4.Xoa hoa don " +
                            "\n 0. Thoat ");
                        menuBill = input.question("Lua chon tu 0 den 3 ");
                        if (menuBill == 0) {
                            break;
                        }
                        if (menuBill == 1) {
                            bill.show();
                        }
                        if (menuBill == 2) {
                            var KH = input.question("Vui long nhap ten khach hang muon thanh toan : ");
                            var NV = input.question("Vui long nhap ten nhan vien : ");
                            var ID = input.question("Vui long nhap ID hoa don : ");
                            var idRoom = input.question("Vui long nhap id cua phong muon thanh toan : ");
                            var startTime = input.question("Vui long nhap thoi gian bat dau thue phong chuoi dinh dang YYYY-MM-DD : ");
                            var endTime = input.question("Vui long nhap thoi gian ket thuc thue phong chuoi dinh dang YYYY-MM-DD : ");
                            bill.addNewBill(NV, KH, startTime, endTime, ID, room.calculateTotalPrice(idRoom, startTime, endTime));
                        }
                        if (menuBill == 3) {
                            var idEdit = input.question("Vui long nhap vao ten id muon chinh sua : ");
                            var nameKH = input.question("Vui long nhap ten khach hang muon sua : ");
                            var nameNV = input.question("Vui long nhap ten nhan vien muon sua :");
                            var timeStart = input.question("Vui long nhap thoi gian bat dau muon sua chuoi dinh dang YYYY-MM-DD :");
                            var timeEnd = input.question("Vui long nhap thoi gian ket thuc muon sua chuoi dinh dang YYYY-MM-DD :");
                            var total = input.question("Vui long nhap vao tong tien muon thay doi");
                            var edit = new bill_1.Bill(nameNV, nameKH, timeStart, timeEnd, idEdit, total);
                            bill.editBill(idEdit, edit);
                        }
                        if (menuBill == 4) {
                            var idDeleteBill = input.questionInt("Vui long nhap vao ID Bill muon xoa");
                            bill.deleteBill(idDeleteBill);
                        }
                    }
                }
                if (menu == 5) {
                    bill.toTal();
                }
            }
        }
    }
    var phone = "";
    var email = "";
    var age = void 0;
    var count = 0;
    if (choice == 2) {
        console.log("===== Tao tai khoan moi =====");
        var nameAcc = input.question("Username : ");
        var pass = input.question("Password : ");
        do {
            phone = input.question("NumberPhone : ");
            count++;
            if (!validatePhoneNumber(phone) && count >= 1) {
                console.log(" Ban phai nhap dung 10 so , vui long thu lai");
            }
        } while (!validatePhoneNumber(phone));
        var address = input.question("Address : ");
        do {
            email = input.question("Email : ");
        } while (!checkEmail(email));
        do {
            age = input.questionInt("Age : ");
        } while (age < 18);
        var name_1 = input.question("YourName : ");
        acc.registration(nameAcc, pass, phone, address, email, age, name_1);
    }
}
