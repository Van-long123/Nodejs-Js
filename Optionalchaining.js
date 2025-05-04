// Optionalchaining (?.)
// Optional chaining (?.) là một cú pháp trong JavaScript cho phép truy cập an toàn vào các thuộc tính và phương thức của một đối tượng mà không cần kiểm tra null hoặc undefined.\

const obj = {
    name: 'optional',
    cat: {
        name: 'diana',
        cat1: {
            name: 'diana1',
            cat2: {
                name: 'diana2'
            }
        }
    },
    func: function () {
        console.log('optional')
    }

}
// h muốn lấy thằng name ra 
// console.log(obj.cat.name)
console.log(obj.name)

// ví dụ nếu mà cái dữ liệu obj này nhận từ database về hoặc ta ko tự tạo ra thì ta ko chắc chắn đc liệu cái obj này có phải là object ko
// liệu nó tồn tại cái key là cat hay ko ví dụ dữ liệu nhận về thiếu thằng cat này thì nó lỗi vì nó có đâu mà lấy 

// để fix lỗi này thì kiểm tra 
if (obj.cat) {
    console.log(obj.cat.name)

}
// trong thực tế nó ko đơn giản như thế này trong cat có cat 2 có cat 3 thì sao
// ta tự viết thì ko lo lỗi nếu ta nhận dữ diệu từ data về chúng ta ko chắc chắn thì xử lý thì ta check cả ba thằng
// này code rất là xấu và xử lý cồng kềnh 
// if ( obj.cat && obj.cat.cat1 && obj.cat.cat1.cat2) {
//     console.log(obj.cat.cat1.cat2.name)

// }
// cho nên thằng Optionalchaining (?.) sinh ra để giải quyết vấn đề này 
// muốn in được thằng name trong cat2 thìobj.cat obj.cat.cat1 obj.cat.cat1.cat2 cả ba thằng này phải tồn tại 
// khi chúng ta nghi ngờ một cái key nào đó của object ko tồn tại hảy thêm dấu ? vào đằg trước  
// ?.cat ko tin thằng cat này tồn tại thêm ? tiếp theo /... 
// nếu mà object ta tự viết ra thì mình chắcchawsn là trong obj sẽ có mấy thằng đó thì ko cần phải check
// Optionalchaining dùng khi ta ko thực sự chắc chắn key đó có tồn tại ko 
// ví dụ cả object ta chỉ nghi ngờ thằng cat1 thôi thì thêm ? từ cat1 vì cat1 ko tồn tại gọi cat2 sẽ lỗi trở đi obj.cat.cat1?.cat2
// kiểu nghi ngờ thằng nào ko phải ko tônf tại thì thêm ? vào đằng sau nó 
// obj['cat']?.['cat1']['cat2']
if (obj?.cat?.cat31?.cat2) {
    console.log(obj.cat.cat1.cat2.name)
}
// có tồn tại thì đi qua kiểm tra tiếp còn ko tồn tại tra về undifined 
console.log(obj.cat?.cat1.cat2)

// nhiều thằng mới dùng ? còn mà object . một cai key mà key nớ ko có con thì nó sẽ trả về undifined hoặc value 
if (obj.func) {
    obj.func();
}

// sau đay ví dụ về function 
const obj1 = {
    // ở  Enhanced object literals
    // getName(){

    // }
    getName: function (value) {
        console.log(value);
    },
    array:[
        'long1',
        'ngu'
    ]
}

// obj1.getName('long');
// và ko chắc chắn rằng getName có phải là function nó có tồn tại trong object hay ko 
// h nếu key getName này lo có thì obj1.getName('long'); bị lỗi cách thứ nhất bỏ trong if cachs thứ hai
// dùng Optionalchaining  

// if(obj1.getName){
//     obj1.getName('long');
// }

// cách thứ hai 
// cái nào mà nghi ko tồn tại thì đặt ?sau nó riêng thằng này có thêm . 
obj1.getName?.('long')
// obj1.array?.[index]  
if(obj1.array?.[0]){
    console.log(obj1.array?.[0])
}






function linh(fa) {
    console.log(fa);
  }

// const linh = (fa) => {
//     console.log(fa);
// };



// kiểm tra xem function linh co tồn tại ko 
linh?.('long nè')




function printMagicIndex(arr) {
    console.log(arr?.[2]);
  }
  
  printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
//   printMagicIndex(); // undefined; if not using ?., this would throw


// const object = {};
// object?.property = 1; // SyntaxError: Invalid left-hand side in assignment



// This does not throw, because evaluation has already stopped at
// the first optional chain


