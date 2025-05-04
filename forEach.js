// var courses=[
//     'JS',
//     'ruby',
//     'HTML'
// ];
// // thì nó cũng chạy có 3 lần thôi 
// // courses.length=1000;
// courses.forEach(function(course,index,array){
//     console.log(course,index,array)
// })

// // định nghĩa foreach()

// // courses.length=1000;

// Array.prototype.forEach2=function(callback){
//     // for in ko chỉ duyệt qua các element trong mảng à duyệt qua các element nằm trong proto
//     // khi định nghĩa cho tahwfng Array forEach2 nằm trong proto

//     //vấn đề là khi giải quyết là phải bỏ qua thằng foreach2
//     // trong object cung cấp một phương thứuc kiểm tra xem index nó có phải là index của thằng gần nhất hay ko
//     // tức là ko nằm trong proto đó là this.hasOwnProperty();
//     // console.log(this.hasOwnProperty())

//    for(var key in this){
//         //nó ko chỉ có phần tử trong mảng còn có tên phương thứuc định nghĩa 
//         // nó trả về true nếu nó gần nhất còn qua tới proto là false 
//         // console.log(index,this.hasOwnProperty(key))
//         // if(this.hasOwnProperty(key)===true){
//         if(this.hasOwnProperty(key)){
//             // this chính là cái tahwfng gọi đến nó 
//             // console.log(this[key])
//             callback(this[key],key,this)
//         }
        
//     }

//     // nếu mà dùng for này thì nó chạy thêm máy 997 lần nữa tại length mảng này=1000;
//     // for(var key=0;key<this.length;key++){
//     //     if(this.hasOwnProperty(key)){
//     //         // this chính là cái tahwfng gọi đến nó 
//     //         // console.log(this[key])
//     //         callback(this[key],key,this)
//     //     }
//     // }
// }



// // in ra thì nó chỉ có 3 phâfn tử nhưng khi định nghĩa Array.prototype.forEach2 thì nó sẽ in ra một element ở trong prototype 
// // nữa là foreach2 duyệt ở trong prototype nữa 
// console.log("#")

// console.log(courses)

// courses.forEach2(function(course,index,array){
//     console.log(course,index)
// }) 

// // mở rộng thêm 
// // tại sao một cái array lại gọi được .push . map ... 
// //courses được tạo từ Array contructor nên nó kế thừa lại các phương thức đinhj nghĩa sẵn nằm trong prototype của thằng Array contructor
//  // thế nên nó mới dùng đc những phương thứuc map

//  /**bởi vì  Array contructor đã được định nghĩa trong prototype sẵn những phương thứuc  nên khi
//   * tạo những cái array thì nó sẽ đuọcư tạora từ Array contructor này nên nó kế thừa đc cả những phương thứucs đó nên mới gọi tớidc
//   * 
//   * ngoài Array.prototype còn có Number.prototype
//  */
// console.log(Array.prototype)


// courses.forEach(function(course){
//     console.log(course)
// })
// Array.prototype.forEach1=function(callback){

//     console.log(this)
//     for(var key in this){
//         if(this.hasOwnProperty(key)){
//             callback(courses[key],key)
//         }
//     }
// }   
// var ketqua=courses.forEach1(function(course,index){
//     console.log(course)
// })


// const sum = (array) => {
//     return array.reduce((total, num) => total + num, 0);
//   };
  
  const sum = (array)=>{
    return array.reduce((total,num)=>{
        return total+num;
    },0)
  }
  
  const getTotalPrice = (array) => {
    const arrayTotal=array.map((item)=>{
        return item.quantity * item.price;
    })
    
    return sum(arrayTotal);
  };
  
  
  const test1 = "bug"
  console.log(test1[0]);//b
  console.log(test1[1]);//u
  






