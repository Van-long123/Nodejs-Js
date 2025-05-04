// //includes method
// // có sẵn trong String và array 
// // ví dụ
// var title='responsive responsive web   design';
// // dùng phương thứuc includes để kiểm tra xem nó có chứa tưf đó ko 
// console.log(title.includes('responsive'))
// // có là in ra true ko là false

// // thằng tham số thứ 2 nớ là 1 là nó dùng để tìm kiếm thằng responsive sau 1 
// console.log(title.includes('responsive',1))

// // sử  dụng nó với array /
// var courses=[
//     'JS',
//     'PHP',
// 'DART'
// ];
// // bỏ vào ko tứ là nó sẽ tìm từ vị trí 0 trở đi 
// console.log(courses.includes('PHP',2))
// // nếu mà truyền số âm thì lấy độ dài của mảng là 3 +-1=2 nó sẽ bắt đâù tìm ở vị trí thứ 2
// // trở đi 
// console.log(courses.includes('PHP',-1))

// // 3+-4=-1 thì nếu mà nó nhỏ hơn 1 thì mặc đinhj nó là 0
// console.log(courses.includes('PHP',-4))



// //  POLYFILL
// // người dùng mà dùng trình duyệt cũ mà đoạn code có sử dụng include thì phaỉ thêm cái dưới vào 
// // sẽ có một số trình duyệt cũ sẽ ko hỗ trợ ko có cái includes nên phải add cái này vào 
// // đoạn mã mà có sử dụng phương thức include với thằng string sẽ gặp lỗi 
// // bởi vì những trình duyệt đó ko tồn tại phương thức đó 

// // kiểm tra xem có tồn tại includes trong prototype cua đối tượng ko nếu ko tồn tại thì chạy đoạn 
// // mã bên trong 
// if (!String.prototype.includes) {
//     // v đoạn mã tìm kiếm start vị trí bắt đầu tìm kiếm 
//     String.prototype.includes = function (search,start) {
//       'use strict';
//     //   kiểm tra xem có lỗi ko chưa hc nên néo nó ljt vào đây nos sẽ in ra lỗi trong console.log
//       if(search instanceof RegExp){
//         throw TypeError('first  ahrument must no be a RegExp')
//       }
//     //   nếu mà ko truyền vào thì nó mặt định là 0 
//       if(start===undefined){start=0}
//       //nếu tìm đc nó sẽ trả về true ko là false
//       return this.indexOf(search,start)!==-1;
//     };
//   };

//   var title='javascript course';
// //   javascript.include()
// // ví dụ đây là trình duyệt cũ và nó ko hỗ trợ phương thức includes này thì nó sẽ lọt vào hàm ở trên 
// // thằng this nớ là thằng nào gọi đến includes đó là  javascript course này 
// title.includes('javascript',0);


// function countDown(number){
//     console.log(number)
//     if(number>0){
//         // console.log(number)
//         return countDown(number-1)
//     }
//     return number
// }
// // console.log(countDown(3))
// countDown(3)
// const test=Array(3)
// console.log(test.join('--'))