
    class Room {
        id : string ;
        name : string;
        price : number;
        status : `sẵn sàng`|`còn trống` | `đang sửa`;
        num_bedrooms : number;
        num_bathrooms : number
        constructor(id, name, price, status, num_bedrooms, num_bathrooms) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.status = status;
            this.num_bedrooms = num_bedrooms;
            this.num_bathrooms = num_bathrooms;
        }

    }

    const roomList = [
        new Room(1, 'Phòng 1', 1000000, 'sẵn sàng', 2, 1),
        new Room(2, 'Phòng 2', 1500000, 'còn trống', 1, 1),
        new Room(3, 'Phòng 3', 2000000, 'đang sửa', 3, 2),
        new Room(4, 'Phòng 4', 1200000, 'sẵn sàng', 2, 1),
        new Room(5, 'Phòng 5', 1800000, 'sẵn sàng', 1, 2),
        new Room(6, 'Phòng 6', 900000, 'còn trống', 1, 1),
        new Room(7, 'Phòng 7', 1300000, 'sẵn sàng', 2, 1),
        new Room(8, 'Phòng 8', 1900000, 'đang sửa', 3, 2),
        new Room(9, 'Phòng 9', 1100000, 'còn trống', 1, 1),
        new Room(10, 'Phòng 10', 1700000, 'sẵn sàng', 2, 2)
    ];
    const sortedRoomList = roomList.sort((a, b) => {
        if (a.status === 'sẵn sàng' && b.status !== 'sẵn sàng') {
            return -1;
        } else if (a.status === 'còn trống' && b.status === 'đang sửa') {
            return -1;
        } else if (a.status === 'đang sửa' && b.status !== 'đang sửa') {
            return 1;
        } else {
            return 0;
        }
    });

    console.table(sortedRoomList.map(({name, price, status}) => ({name, price, status})));


