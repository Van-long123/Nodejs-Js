// trường hợp dùng thằng này là nhận về một giá trị duy nhất 
var courses=[
    {
        id:1,
        nam:'JS',
        coin:100
    },
    {
        id:2,
        nam:'HTML,Css',
        coin:200
    },
    {
        id:3,
        nam:'Ruby',
        coin:220
    },
    {
        id:4,
        nam:'PHP',
        coin:200
    },
    {
        id:5,
        nam:'ReactJS',
        coin:480
    },
    
]
// bài toán tính tổng số tiền của tất cả các khóa hc 
//biến lưu trữ
var t=0;
// C1 
// for(var i=0;i<courses.length;i++){
//     t+=courses[i].coin;

// }

// C2 
for(var course of courses){
    t+=course.coin;
}
console.log(t)
// tất cả vòng lặp đều làm đc vậy tạo sao lại dùng reduce 
// bỏi vì cung cấp cho cách viết ngăns gọn đơn giản hơn 
// trong mấy thằng map every ... trong nó đều có vòng for dùng để lặp qua các phần tử 
// accumulator là biến lưu trữ
//currentValue là giá trị hiện tại mỗi khi reduce gọi lại function thì nó đang ở vị trí nào đó giả
//  sử đang ở vị trí id:2 thì nó trả về cả object
// currentIndex dùng để chỉ mục của thằng currentValue
// originArray này nó sẽ trả về mảng gốc của thằng nào gọi reduce()
var i=0;

// trong cái function này function này return nó sẽ lưu trữ cái đó  
function coinHandler(accumulator,currentValue,currentIndex,originArray){
i++;
var total=accumulator+currentValue.coin
// nó sẽ in ra 1-->6 lần chứng tỏ reduce gọi đến function này 6 lần  
console.table({
    'Lươt chạy':i,
    // thì thàg đầu tiên accumulator nầy đc gán giá trị =0 trong lần chạy đâuf tiên
    'Biến tich chữ':accumulator,
    'giá khoa hoc:':currentValue.coin,
    'Tích chữ được:':total
}) 
//   return 100 nó gán cho accumulator 
// ở lượt chạy số 1 return cái gì thì cái thằng lượt chạy thứ hai accumulator nó sẽ là thứu đó 
// trả về một phần tử thứ nhất trong mảng  
console.log(currentValue)   
// để thực hiện lưu trữ dùng return nó return cái gì thì nó lưu trữ cái đó
return total;
// saukhi kết thúc những lânf lặp thì cái giá trị cuối cùng nó sẽ return ngược rangoai 
// sau khi chạy 5 lần thì reduce sẽ return cuối cùng và gán vào tatal 
}  
// đối số thứ hai là giá trị khởi tạo  tùy vào bài tóan có thể là sô là chữ mảng object
// đối là 0 nó giống như biến lưu trữ =0 ,0 là giá trị khởi tạo được gán cho accumulator 

var total=courses.reduce(coinHandler, 0)
console.log(total)

