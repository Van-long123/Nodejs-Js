/**
 * ===,!== là kiểu nó sẽ so sánh giá trị với kiểu dưx liệu nữa
 * còn == thì nó chỉ có so sánh giá trị thôi
 * 
 * 
 */
// var a=1;
// var b=1;
// console.log(a===b);
// bôi đen bấm ctrl d nó sẽ sửa một lần những giá trị cùng nhau
// var a=1;
// var b='1';
// console.log(a===b);
// // chuỗi
// var fullname="tao là \"siêu nhân\"";
// var a=`tao ${fullname} là \"siêu\" nhân`
// var ok='ok chưa';
// // cách xem độ dài chuỗi
// console.log(fullname.length);
// console.log(fullname+' '+ok);
// // thây vì côngj với biến thì dùng này  
// console.log(`zalo ${fullname} ${ok}`)
// console.log(`${ok} tao met ${fullname}`)



// setTimeout(() => {
//     alert('done')
// }, 2000);

// var a=setInterval(() => {
//     console.log('done');
// }, 1000);
// function stopInterval(){
//     clearInterval(a);
// }
// setTimeout(() => {
//     stopInterval();
// }, 4000);






var myinfor= {
    name:'JS',
    age:18,
    address:'ruby'
}
for(var i in myinfor){
    // mảng nó sẽ in ra số còn object nó sẽ in ra key
    console.log(myinfor[i]);
    // console.log(lg[i]);
}
// nó sẽ trả về một mảng (3) ['name', 'age', 'address']
console.log(Object.keys(myinfor));
var languages= [
    'JS',
    'PHP',
    'ruby'
]
for(var i of languages){
    // mảng nó sẽ in ra số còn object nó sẽ in ra key
    // console.log(i);
    console.log(`hoc ${i}`);
}

let a=10;
if(true){
    console.log(a);
}
// Tong();đc
// tong(); ko đc 
function Tong(){
 console.log('success');
}
var tong=function(){
    console.log('success1');
}
// Tong();  đc
// tong();đc