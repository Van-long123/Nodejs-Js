var lg=[
    'JS',
    'ruby',
    'JS',
    'HTML',
    null,
    undefined,
    function(){

    },
    123
];
console.log(lg );
console.log(lg.length);
// cách lấy giá theo vị trí
console.log(lg[2]);

//cách kiểm tra nó có phải array hay ko
console.log(Array.isArray(lg));
console.log(Array.isArray([]));
console.log(Array.isArray(new Array));
console.log({});
// kiểm tra độ dài
// dùng typeof thì array nó sẻ trả về object còn thừang object({}) thì nó sẽ trả về object
console.log(typeof lg);
console.log(typeof {});


//chuooix
console.log('bai moi')
var lg1=[
    'JS',
    'ruby',
    'HTML'
];
//biến mảng thành chuỗi thì hai thàng dưới đều biến đôir như nhau
console.log(lg1.toString());
// ngoài ra thằng join này còn dùng để thay thế dấu phẩy
console.log(lg1.join());
console.log(lg1.join(' '));

//pop sẽ xóa đi phần tử ở cuối mảng  vả trả lại cái phần tử đã xóa
// khi mà xóa hết phần tử nó sẽ hiện ra undefined
console.log(lg1.pop());
console.log(lg1);
//them ở cuối và trả vè độ dài mới cua mảng
console.log(lg1.push('dark'))
console.log(lg1.push('HTML'))
console.log(lg1);


// Shift xóa đi phần  ở đâu mảng
console.log(lg1.shift());
console.log(lg1)

//unshift thêm phần tử ở đầu mảng
console.log(lg1.unshift('dark','java'))
console.log(lg1)

// splicing
console.log('splicing');
// đếm xem thử muốn xóa index ở đâu khi mà nó chạy thì nó sẽ trỏ đến cái vị tris mà mình muốn xóa 
//đặt là thì tjif nó trỏ đế thằng có vị trí thứ nhất
// tham số thứ thâyys là số lươngj muốn xóa đưa 2 vào nó sẽ xóa đi hai phần tử
// thừ vị trí thứ 1 (tham số) đến xóa hai thừag tiếp theo
// muốn ko xá thì thằg nào cả thì tham số thứu hai là 0  lg1.splice(1,0);
lg1.splice(1,2);
console.log(lg1)


// chèn
console.log('chèn')
// 1 là vị trí them
//0 là ko xóa thằng nào
lg1.splice(1,0,'jaava');
console.log(lg1)
// vừa xóa và vừa chèn
// xóa thằng ở vị trí sôs 1 và thêm amen vào vị trí đó
lg1.splice(1,1,'amen');
console.log(lg1)

// xóa hai phần tử them hai phần tử là
lg1.splice(1,2,'zalo','zahu');
console.log(lg1);


//Concat là thằg nối array
var array1=[
    'anh',
    'ko',
    'thich'
];
var array2=[
    'em',
    'ok'
];
var array3=array1.concat(array2)
var array4=array2.concat(array1)
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4)

//slicing dùng để cắt phần tử của mảng
// tham số đầu tiên là index tham số thứ hai là vị trí để ngừng lại việt cắt
var anh=[
    '0ngon-3',
    '1do-2',
    '2qua-1',
    '3di0'

];
// nó sẽ cắt từ vị trí số 0 và cắt tới vị trí số 3 là dừng lại/
var anh2=anh.slice(0,1)
console.log(anh.slice(0,3));
console.log(anh2);
// ngoài rra còn cắt để láy vị trí âm nữa 0 -1 -2 ..
console.log(anh.slice(-3,-2));




var anh1=[
    'nau',
    'ngon',
    'lam',
    'a',
    'nghe'
]
console.log(anh1.slice(-2,-1))
console.log(anh1)

// console.log(anh1.splice(3,0,'a'))
console.log(anh1.splice(1,2,'amen'));
console.log(anh1)
const pi=4.32;
// const  pi=3.2;
 console.log(pi);