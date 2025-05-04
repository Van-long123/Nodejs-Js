
// console.log('day kla dong logs');
// var fullnam='long';
// // đưa ra cảnh báo
// console.warn(fullnam);
// //đưa ra lỗi trong consle
// console.error(fullnam)
// confirm("ban có đủ tuổi ? ")
// prompt("ban có đủ tuổi ? ")
// //truyền vào một funtion và một khoảng thời gian 1000 là 1 giây
// setTimeout(function(){
//     alert('tao mệt lắm')
// },1000);

// // thám số truyền vào giống setTimeout nhưng nó sẽ thực thi liên tục trong một khoản thời gian
// setInterval(function(){
//     console.log('day la log '+Math.random());
// },1000);

// //alert Cònirm Prompt mở lên cửa sổ hộp thoại   

var a={
    long:"ne",
}
a['name']='sonw dang'
console.log(a);



var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
]
function arrToObj(arr){
    return arr.reduce(function(caculator,arrToObj){
        console.log(caculator[arrToObj[0]]=arrToObj[1])
        
        return caculator
    },{});
}
console.log(arrToObj(arr)) 
// {name:'son dang',age:18}




