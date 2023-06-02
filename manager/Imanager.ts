// Định nghĩa một interface để lưu trữ thông tin về ngày bắt đầu và kết thúc thuê phòng.
interface RentInfo {
    startDate: Date;
    endDate: Date;
}

// Tính số ngày giữa 2 ngày.
function getDaysBetween(startDate: Date, endDate: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; // Số mili giây trong 1 ngày.
    const diffInTime = endDate.getTime() - startDate.getTime(); // Khoảng cách thời gian giữa 2 ngày (dưới dạng mili giây).
    return Math.round(diffInTime / oneDay); // Làm tròn và trả về số ngày.
}

// Tính tổng tiền phải trả dựa trên giá phòng và số ngày thuê.
function calculateRentFee(rentInfo: RentInfo, roomPrice: number): number {
    const days = getDaysBetween(rentInfo.startDate, rentInfo.endDate);
    return days * roomPrice;
}

// Ví dụ sử dụng:
const rentInfo: RentInfo = {
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-06-05'),
};
const roomPrice = 50;
const totalFee = calculateRentFee(rentInfo, roomPrice); // totalFee = 200
