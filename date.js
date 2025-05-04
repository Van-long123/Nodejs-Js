// var date=new Date();
// console.log(typeof date)
// // mặc dù nó là object nhưng in nó ra thì nó là String 
// console.log( date)
// //như nhau
// console.log( date.toString())
// var year =date.getFullYear();
// // nos sẽ trá giá trij tự 0 -->11 nên phải +1
// var month=date.getMonth()+1;
// var day=date.getDate();
// var hours=date.getHours();
// var miniuts=date.getMinutes();
// var second=date.getSeconds();
// console.log(`${year}/${month}`)
// // cách khác để lấy chuỗi thời gian hiện tại 
// // trong trường hợp này ko sử dụng biến Date( như lấy năm, ngày ,tháng ) được  và nó ko phải là một đối tuongjw mà nó đối tượng 
// // thì phải thêm new 
// var date1=Date();
// console.log( date1)
// // điểm khác biệt là nó sẽ ra kiểu String 
// console.log(typeof date1)
// var date=new date();


const au=document.querySelector('#audio')
// console.log(au.src)
document.onclick=function(){
    console.log(au.src)
}


au.textContent='amen';
au.src='http://'
console.log(au.src)
