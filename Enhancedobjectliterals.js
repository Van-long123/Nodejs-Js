// Enhanced object literals\
// nos giusp lafm những việc sau 
// 1.định nghĩa key:value cho object cho nó ngắn gọn hơn
//2.định nghĩa (khai báo) method cho object 
//3.định nghĩa key cho object dưới dạng biến

var name='JS'
var price =1000;

var course={
    Name:name,
    Price:price
}
console.log(course)

// chú ý 
// Enhanced object literals\ mó giúp bạn viết ngắn gọn hơn trogn trường gợp định nghĩa key
//  và value là một biến và hai cái name này nó trùng nhau kiểu key và lue cùng tên biến với nhau              
// 1.định nghĩa key:value cho object cho nó ngắn gọn hơn
var name1='JS'
var name12='name'

var price1 =1000;

var course1={
    name1,
    price1,
    [name12]:'amen',
    // này là viết bình thường 
    getName:function(){
        return name1;
    },
    //2.định nghĩa (khai báo) method cho object 
    // bỏ luôn function chỉ cần getprise1() là xong 
    getprice1(){
        return price1;
    }
}
console.log(course1)
console.log(course1.getprice1())

//3.định nghãi key cho object dưới dạng biến
// này là viết bt 
// key của object nó sẽ được lấy ra từ fieldName và fieldPrice
var fieldName='new-name';
var fieldPrice='price';
const Course={
    // bình thương ko ai khai báo từ cái biến nếu mà khai báo trực tiếp  như  name:'ame', thì cứ khai báo trực tiếp như này 
    // đây là cách bt chỉ định nó là name
    name:'ame',
    // đây là cách dùng từ cái biến còn này là lấy ra value từ cái biến
    // tùy vào giá trị của biến mà mình lấy ra value tương ứng của cái object thì mới dùng cách như này 
    [fieldName]:'Js',
    [fieldPrice]:1099
}
console.log(Course)

