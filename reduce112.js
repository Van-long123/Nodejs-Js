//truonwfg hopjw nafy laf cos truyefn initiavalue
// Array.prototype.reduce2=function(callback,initiavalue){
//     for(let i=0;this.length;i++){
//         initiavalue=callback(initiavalue,this[i],i,this)
//     }
//     return initiavalue;
// }
// const numbers=[1,2,3,4,5]

// // thằng dưới này là hai tham số 1 là function hai là initiavalue 
// const result=numbers.reduce2(function(total, number){
//     // biến tích chữ total này sẽ là kết quả đc return ra ngoài 
//     return total+number
// },0)
// // 0 laf initiavalue 
// console.log(result)
// console.log('long')


//trường hợp kotruyeenf 
// trong 1 function có ảgument   ảgument.length để biết đối số người ta có truyền hay ko
// thì tức là mình muốn biết người ta có truyền ododsi số thứ hai hay ko 
Array.prototype.reduce2 = function (callback, initiavalue) {
    // tức là ko truyền initiavalue vì truyền là bằg 2
    let i = 0
    if (arguments.length < 2) {
        //    khi ko truyền  initiavalue thì biến tích chữ là phần tử đầu tiên 
        i = 1;
        initiavalue = this[0];
    }
        for (; i<this.length; i++) {
            initiavalue = callback(initiavalue, this[i], i, this)
        }
        return initiavalue;

}
const numbers = [1, 2, 3, 4, 5]

// thằng dưới này là hai tham số 1 là function hai là initiavalue 
// total là initiavalue 
const result = numbers.reduce2(function (total, number) {
    // biến tích chữ total này sẽ là kết quả đc return ra ngoài 
    return total + number
})
// 0 laf initiavalue 
console.log(result)