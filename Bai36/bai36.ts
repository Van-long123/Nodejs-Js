// var hello='hello'
// console.log(hello)

// // phân 3 
// let a:number=10;
// let b:number=10.5;
// // a="ads";// sẽ lỗi vì a là number gán string sẽ báo lỗi đó là lý do dùng typescript //nó vẫn biên dịch qua js và chạy bt
// a=12;
// console.log(a,b)

// let fullName:String="Long"
// fullName='12';


// let deleled:Boolean=false;
// console.log(deleled)
// // deleted="true"; //báo lỗi


// 04 kiểu object 
// const user={
//     fullName:"da"
// }

// // user.fullName = 10 ; //ko cần định nghĩa nó vẫn báo lỗi 

// const user1:{
//     //định nghĩa kiểu dữ liệu 
//     fullName:string
// }={
//     fullName:"da",
//     // phone:123// sẽ bị lỗi vì chưa khai báo key đó trong {} trên
//  }

// 05 interface

// định nghĩa cái cấu trúc như vậy để cho người ta khỏi sữa thêm 1 cái key mà ta ko muốn vào

// interface User {
//     fullName:string,
//     age:number
// }
// const user2:User={
//     fullName:"string",
//     age:12,//này ko có nó cũng báo lỗi phải đủ 2 key
//     // phone:123 //sẽ bị lỗi vì chưa khai báo key đó trong interface
// }

// ví dụ tiếp theo là fullName ,email bắt buộc,age ko bắt buộc

// interface User {
//     fullName:string,
//     age?:number,//thêm ? vào thì ko bắt buộc
//     socials?:{
//         zalo?:string,
//         fb?:string,
//     }
// }

// interface Social{
//     zalo?:string,
//     fb?:string,
// }
// interface User {
//     fullName:string,
//     age?:number,//thêm ? vào thì ko bắt buộc
//     socials?:Social
// }
// const user2:User={
//     fullName:"string",
//     age:17,
//     socials:{
//         zalo:"string",
//         fb:"string",
//     }
// }
// const user3:User={
//     fullName:"string",
//     socials:{
//         zalo:"string",
//     }
// }

// 6. extend interface
// interface Account{
//     fullName:string,
//     phone:string,
//     email:string,
//     password:string,
// }
// interface AccountAdmin extends Account{
//     roleId:string
// }
// interface AccountUser extends Account{
//     cartId:string
//     score:number,
// }
// const admin:AccountAdmin={
//     fullName:"string",
//     phone:"string",
//     email:"string",
//     password:'string',
//     roleId:'ds'
// }
// const user1:AccountUser={
//     fullName:"string",
//     phone:"string",
//     email:"string",
//     password:'string',
//     score:900,
//     cartId:'string'
// }

// 7.Array
// const array=[];

// array.push(1)
// array.push('3')
// array.push(2)
// console.log(array)

// ta muốn mảng trên là chứa các number 
// const arrayNumber:number[]=[];

// arrayNumber.push(1)
// // arrayNumber.push('3')//báo lỗi 
// arrayNumber.push(2)
// console.log(arrayNumber)


// const arrayString:string[]=[];

// arrayString.push('1')
// // arrayString.push(3)//báo lỗi 
// arrayString.push('2')
// console.log(arrayString)

// const infoUser:(string | number)[]=[
//     "phạm văn long",
//     14,
//     "long@gmail.com"
// ]
// console.log(infoUser)

// ví dụ 
// interface User{
//     fullName:string,
//     email:string,
//     age?:number,
// }
// // const userList:number[]=[]; //sẽ lỗi vì user là object ko phải number
// const userList:User[]=[]; //để kiểu User thì các phần tử thì nó luôn tuân thủ các key và kiểu và chỉ push đc object

// const user:User={
//     fullName:"user", 
//     email:"user@gmail.com",
//     age:18,
// }
// const user1:User={
//     fullName:"user1",
//     email:"user1@gmail.com",
//     age:18,
// }
// userList.push(user);
// userList.push(user1);

// 8. Tuple
// giống mảng nhưng số lượng phần tử cố định 
// kiểu các phần tử trong mảng đc chỉ định trước ko cần giống nhau 
// let infoUser:[string,number,boolean];
// infoUser=[
//     'user',
//     15,
//     true
// ]

// let clock:[number,number,number];
// const [hour,minute,second]=clock
// clock=[7,27,28];

// 9. readonly 
// ko thể đc gán lại sau khi đó đc khởi tạo  thường đc dùng cho object

// h ta muốn gán lần đầu tiên fullname là user và sẽ ko gán lại lần 2 được
// interface User{
//     readonly fullName:string,
//     email:string,
//     age?:number,
// }
// const user:User={
//     fullName:"user", 
//     email:"user@gmail.com",
//     age:18,
// }
// // user.fullName='Anh long'ko thể gán lại đc
// user.email='long@gmail.com'
// console.log(user)

// 10. function
// declaration function
// function sum(a,b){

// function sum(a:number,b:number):number{
//     // và ta muốn kết quả trả về là number thì :number{
//     // return `${a}${b}` //này sẽ báo lỗi vì nó trả về string 
//     return a+b
// }
// console.log(sum(4,4)) //8   
// // console.log(sum(4,'4'))//tính toán thì ko như này đc 44 vì thế tham số ta thêm :number thì thằng nãy sẽ báo lỗi

// //expression function 
// // const sum1=function(a:number,b:number){
// // }

// // arrow function 
// // const sum2 =(a:number,b:number)=>{
// // }

// 11 default parameter 
// const sum = (a:number=0,b:number=0):number=>{
//     return a+b
// }
// sum()

// 12 rest parameter
// có nghĩa là các giá trị còn lại chưa khai báo trong tham số 
// number:number[] tất cả phần tử trong number là number
// const sum=(a,b,...number:number[]):number=>{
//     const total=number.reduce((sum,item)=>{
//         return sum+item
//     })
//     return total
// }
// console.log(
// sum(1,2,3,4,5,6,7)
// )

// 13 enum
// để liệt kê 1 nhóm các giá trị constant
// người dùng gửi lên 1 status ko tồn tại thì họ vẫn lưu đc vào db 
// thì enum liệt kê  5 giá trị status  khi font gửi lên thì status đó phải trong enum mới đc

// const statusCurrent:number=0
// switch (statusCurrent) {
//     case 0:
//         console.log('đang khởi tạo')
//         break;
//     case 1:
//         console.log('đang active')
//         break;
//     case 2:
//         console.log('dừng active')
//         break;
//     default:
//         break;
// }

// // thì enum nó ngầm định thằng đầu là 0 
// // làm như vậy để dễ nhận bt 
// 0 -->INITIAL
// 1 -->ACTIVE
// 2 -->INACTIVE

// enum Status{
//     INITIAL,//0
//     ACTIVE,//1
//     INACTIVE//2
// }

// const statusCurrent:number=0
// switch (statusCurrent) {
//     case Status.INITIAL:
//         console.log('đang khởi tạo')
//         break;
//     case Status.ACTIVE:
//         console.log('đang active')
//         break;
//     case Status.INACTIVE:
//         console.log('dừng active')
//         break;
//     default:
//         break;
// }


// thì enum nó ngầm định thằng đầu là 0 
// làm như vậy để dễ nhận bt 
// 'initital' -->INITIAL
// 'active' -->ACTIVE
// 'inactive' -->INACTIVE

// enum Status{
//     INITIAL='initital',
//     ACTIVE='active',
//     INACTIVE='inactive'
// }

// const statusCurrent:string='active'
// switch (statusCurrent) {
//     case Status.INITIAL:
//         console.log('đang khởi tạo')
//         break;
//     case Status.ACTIVE:
//         console.log('đang active')
//         break;
//     case Status.INACTIVE:
//         console.log('dừng active')
//         break;
//     default:
//         break;
// }

// 14 kiểu any
// giúp thay đổi linh hoạt kiểu dữ liệu của 1 biến 

// var a=12//khi gán a =12 thì kiểu sẽ number vì thế gán lại chuỗi sẽ báo lỗi 
// a='sad';

// let a:any='a'
// a=12;
// a={
//     fullname:'d'
// }

// kiểu unknown
// giống kiểu any nhưng 

// tương tự kiểu any 
// let a:unknown='a'
// a=12;
// a={
//     fullname:'d'
// }

// an toàn hơn any 
// chuỗi.length sẽ trả về 
// số.length thì sẽ lỗi dùng any nó sẽ ko báo lỗi xem ở word 

// let a:any='long'
// a.length

// let b:unknown='long';
// (b as string).length //ko ép kiểu là nó báo lỗi
// // (b as string) ép kiểu

// let a1:any=1
// a1.length //ko báo lỗi 

// let b1:unknown=2
// b1.length //báo lỗi





