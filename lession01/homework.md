Ex1:
Cho đoạn code sau

const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {

}
const obj2 = cloneDeep(obj1)
obj2.x = 10

Hoàn thiện function cloneDeep sao cho sau khi thực hiện chương trình

obj1 = { x: 20, y: 30 }
obj2 = { x: 10, y: 30 }

Trả lời:
const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {
return {...obj};
}
const obj2 = cloneDeep(obj1)
obj2.x = 10

Ex2:
Cho đoạn code sau

const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
const apples = [...macbooks];
apples[0] = 'air';
apples[1].model = 'm1';

console.log(macbooks)
console.log(apples)
Kết quả của macbooks và apples là gì? Giải thích

Trả lời:
console.log(macbooks) // ['macbook2015', { model: 'm1' }, 'macbook2017']
console.log(apples) // ['air', { model: 'm1' }, 'macbook2017']
const apples = [...macbooks]; // Tạo ra mảng apples mới
apples[0] = 'air'; // Thay đổi giá trị phần tử đầu tiên của mảng apples thành 'air'. Vì là chuỗi nên khi khởi tạo đã tạo nên vùng nhớ mới nên không ảnh hưởng tới mảng macbooks.
apples[1].model = 'm1'; // Thay đổi giá trị model thuộc phần tử thứ hai của mảng apples. Vì là object nên khi khởi tạo chỉ tạo ra địa chỉ vùng nhớ mới nên khi thay đổi vùng nhớ ở mảng apples sẽ thay đổi cả trong mảng macbooks.

Ex3:
Cho đoạn code sau

var text = 'outside';
function show() {
console.log(text) //1
var text = 'inside';
}
Kết quả in ra console ở 1 là gì? Giải thích

Trả lời
undefined
console.log(text) sẽ lấy biến text được khai báo trong hàm trước (nếu trong hàm không có sẽ ra bên ngoài tìm), do tính hoisting của var nên biến text sẽ được đưa lên khai báo phía trên nhưng chưa được gán giá trị.

Ex4:
Hoàn thiện 2 hàm inBetween và inArray sao cho đoạn code chạy ra kết quả trong comment

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

Trả lời
let arr = [1, 2, 3, 4, 5, 6, 7];

inBetween = function (condition) {
return condition > 2 && condition < 7;
}

inArray = function (condition) {
return condition < 3;
}

console.log(arr.filter(inBetween)); // 3,4,5,6

console.log(arr.filter(inArray)); // 1,2

Ex5:
Cho đoạn code sau. Kết quả hiện ra là gì? Giải thích

function Counter() {
let count = 0;

this.up = function() {
return ++count;
};
this.down = function() {
return --count;
};
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?

Trả lời
console.log( counter.up() ); // 1
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1
Khi khởi tạo biến counter thì hàm Counter đã tạo ra một môi trường riêng biệt có khai báo biến count và hai hàm up và down. Đồng thời hàm up và down return ra biến count (++ hoặc --). Nên về bản chất counter chính là biến count được trả ra từ hàm Counter. Từ đó biến count đã được lưu ra global từ phạm vi của 1 hàm

Ex6:
Thứ tự message in ra ở đoạn code sau là gì? Giải thích (gợi ý tìm hiểu khái niệm Event loop)

console.log("hello");

setTimeout(() => console.log("world"), 0);

console.log("hi");

Trả lời
hello -> hi -> world
JS chạy code từ trên xuống dưới nên phần console.log bên trong hàm setTimeout sẽ được đưa vào hàng chờ các đoạn code khác chạy xong mới được chạy.
