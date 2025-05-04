// Arrow function ES6
// Arrow là mũi tên ->Arrow function là hàm mũi tên 

// hàm bt 
function logger(log){
    console.log(log)
}
logger('fuck you')

// duới đây là Arrow function 
// biến thằng dưới này thành Arrow function 

// const logger1=function(log){
//     console.log(log)
// }
// mục đích nó sinh ra để viết đc nó ngắn gọn hơn và nó có thể ngắn gọn hơn nữa
const logger1=(log)=>{
    console.log(log)
}
logger1('fuck you')

// viết ngắn gọn hơn bằng cách bỏ ngoặc và return luôn 

// const sum=(a,b)=>{
//     return a+b
// }
// dấu arrow =>,giá trị muốn return  a+b
// viết gì đằng sau > này là return luôn trừ khi là {} thì nó return
const sum=(a,b)=> a+b;
console.log(sum(2,2))

// return ra object 
// c1
// const object=(a,b)=>{
//     return{
//         a:a,
//         b:b
//     }
// }
// c2
// trả về một object mà có dấu ngoặc nên nó ko hiểu là tra về 1 object nên muốn return object bỏ nó vào ngoạc ()
// đằng sau mũi tên khác dấu ngoặc {} nó mới return  
const object=(a,b)=>({ a:a, b:b});
    
console.log(object(2,2))



const amen=(am)=>console.log(am);
amen('amen')
// dưới đaay là cách viết ngắn gọn hon ưbor luôn ngoạc của tham số 
// cos duy nhaast một tham số mới dùng cách này 
const amen1=am=>console.log(am);
amen1('amen')

// tìm hiểu đặc tính của Arrowfunction 
// ví dụ 
const course={
    name:"JS",
    getName:function(){
        // return this.name;
        return this;//this khi nó tồn tại nó đc hiểu là context(khóa nâng cao hc) nhưng thằng Arrowfunction ko có context

    },
    // thí nó sẽ unddifned
    getname:()=>{
        return this;
    }
}
// course chính là this 
console.log(course.getName())
// thí nó sẽ unddifned
console.log(course.getname())


// vaf Arrowfunction ko dùng nó để làm function contuctor đc 
// function bt thì hoạt động đc 


// const course1=function(name,price){
//     this.name=name;
//     this.price=price;
// }
// const jscourse=new course1('Js','2000')
// console.log(jscourse)


// đổi qua Arrowfunction tóm lại Arrowfunction ko dùng hén để làm contuctor
// nhận lỗi  Uncaught TypeError: course1 is not a constructor
const course1=(name,price)=>{
    this.name=name;
    this.price=price;
}
const jscourse=new course1('Js','2000')
console.log(jscourse)