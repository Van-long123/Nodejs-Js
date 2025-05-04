//1. kiểu void 
// void một hàm ko return về giá trị 
// const hello=(fullName:string):string=>{
//     return fullName
// }
// const helloA=hello("Le Van A");
// console.log(hello('Anh Long'))


// const hello=(fullName:string):void=>{
//     console.log(fullName)
// }
// hello("Le Van A");

//2. generics
// ví dụ 1: ko dùng generics 
// ví dụ 1.1 return về kiểu number 
// const reverseArray=(array:number[]):number[]=>{
//     const newArray=array.reverse();//là đổi ngược vị trí lại
//     return newArray
// }
// console.log(reverseArray([1,2,3,4,5,6,7,8,9,0]))


// ví dụ 1.2 return về kiểu string 
// const reverseArray1=(array:string[]):string[]=>{
//     const newArray=array.reverse();//là đổi ngược vị trí lại
//     return newArray
// }
// console.log(reverseArray1(['a','b','c']))

// sau khi xong ta thấy code 1.1 1.2 như nhau chỉ khác kiểu dữ liệu  
// h ta muốn nó linh động nhận vào mảng các chuỗi thì nó là :string và ngược lại
// thì ta áp dụng generic

// ví dụ 1: có dùng generics 

//kiểu dữ liêụ tổng quá là test khi gọi hàm truyền vào kiểu dữ liệu là gì thì biến T sẽ là kiểu dữ liệu đó
// const reverseArray=<T>(array:T[]):T[]=>{
//     const newArray=array.reverse();//là đổi ngược vị trí lại
//     return newArray
// }
// console.log(reverseArray(['a','b','c'])) //thì nó sẽ ngầm định kiểu dữ liệu là gì
// console.log(reverseArray([1,2,3,4,5,6,7,8,9])) //thì nó sẽ ngầm định kiểu dữ liệu 
// console.log(reverseArray(['a','b','c',7])) //thì nó sẽ ngầm định kiểu dữ liệu 


// const reverseArray1=(array:(string|number)[]):(string|number)[]=>{
//     const newArray=array.reverse();//là đổi ngược vị trí lại
//     return newArray
// }
// console.log(reverseArray1(['a','b','c'])) //thì nó sẽ ngầm định kiểu dữ liệu 


// 3. Union type 
// ● Kết hợp nhiều kiểu dữ liệu để tạo thành 1 kiểu dữ liệu mới.
// interface Product{
//     id:string,
//     title:string,
//     price:number,
//     //có nghĩa là có thể là number hoặc string

//     //2 thằng dưới này là Union
//     rating:number | string ,
//     // status này người ta chỉ cho chọn 1 trong 3 sự lựa chịn này thôi 
//     status:"active" |"inactive" | "locked"
// }

// const product:Product={
//     id:'string',
//     title:'string',
//     price:123,
//     // rating:true,//lỗi vì ko phải number hoặc string 
//     rating:1,
//     // status:"active2"//sẽ báo lỗi vì nó ko nằm trong 3 thằng đó 
//     status:"active"
// }

// 4.type alias 
// cho phép tạo ra tên tùy chỉnh để đặt tên cho các kiểu dữ liệu
// type RatingType=number | string
// interface Product{
//     id:string,
//     title:string,
//     price:number,
//     rating:RatingType,
//     status:"active" |"inactive" | "locked"
// }
// interface Artical{
//     id:string,
//     title:string,
//     rating:RatingType,
//     status:"active" |"inactive" | "locked"
// }


//5. Intersection type 
// hợp 2 interface thành 1 
// interface Account{
//     readonly id:string,
//     fullName:string,
//     age?:number
// }
// interface Contact{
//     hotline:string,
//     email?:string
// }
// interface Social{
//     zalo?:string,
//     fb?:string
// }

// type AccountContact=Account & Contact
// const infoUser:AccountContact={
//     id:'string',
//     fullName:'string',
//     hotline:'string',
// }

//6. Declaration merging (hợp hai interface trùng teen thành 1)
// mặc định trong typescript đặt tên trùng nhau thì nó tự động gộp thành 1 interface 
// interface User{
//     readonly id:string,
//     fullName:string,
// }
// interface User{
//     email:string,
//     phone:string,
// }

// const user:User={
//     id:'string',
//     fullName:'string',
//     email:'string',
//     phone:'string',
// }


// 7.1 partial <Type> 
// thay đổi tất cả thuộc tính của đối tượng thành tùy chọn (optional)

// interface User{
//     readonly id:string,
//     fullName:string,
//     phone:string
// }
// const user:User = {
//     id:'string',
//     fullName:'string',
//     phone:'string'
// }

// // h ta tạo 1 user mà ko bắt buộc phone 
// // như vậy thì tất cả key trong interface đều dạng optional ko nhập cũng đc 
// const user2:Partial<User>={

// }


// 7.2 required <Type> 
// thay đổi tất cả thuộc tính của đối tượng thành bắt buộc
// interface Product{
//     id:string,
//     title:string,
//     price?:number,
//     decription?:string, 
// }
// const product1:Product={
//     id:'string',
//     title:'string',
// }
// const product2:Required<Product>={
//     id:'string',
//     title:'string',
//     price:123,
//     decription:'string', 
// }

// 7.3 omit <Type,key> 
// xóa 1 hoặc nhiều thuộc tính ra khỏi đối tượng 
// interface Product{
//     id:string,
//     title:string,
//     price?:number,
//     decription?:string, 
//     discout?:number
// }
// const product1:Product={
//     id:'string',
//     title:'string',
//     price:123,
//     decription:'string', 
//     discout:20
// }
// // const product2:Omit <Product,'discout'>={
// const product2:Omit <Product,'discout'|'price'>={
//     id:'string',
//     title:'string',
//     // price:123,
//     decription:'string', 
//     // discout:20
// }

// 7.4  Pick <Type,key> 
// xóa tất cả thuộc tính ra khỏi đối tượng,ngoại trừ thuộc tính muốn giữ lại
// interface Product {
//     id: string;
//     title: string;
//     price?: number;
//     decription?: string;
//     discout?: number;
// }
// // 'id' | 'title' key ta muốn giữ lại
// const product2: Pick <Product, 'id' | 'title'> = {
//     id: 'string',
//     title: 'string',
//     // decription: 'string',
// };


// 7.5  readOnly <Type> 
//tất cả thuộc tính trong đối tượng đổi thành trạng thái đọc , ko sửa được

interface Product {
    id: string;
    title: string;
    price?: number;
    decription?: string;
    discout?: number;
}

const product2: Readonly <Product> = {
    id: 'string',
    title: 'string',
    decription: 'string',
};
// product2.id="đá" //ko sửa đc










