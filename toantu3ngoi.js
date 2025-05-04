/** 
// Terary operator 
var khoahoc={
    name:'JS',
    gia:250
};
if(khoahoc.gia>0){
    console.log(`${khoahoc.gia} Coin`)
}
else{
    console.log('mien phí')
}

var objeta={
    name:'js',
    gia:0
}
var ketqua=objeta.gia>0?`${objeta.gia} Coin`:'mien phis'
console.log(ketqua);

// tiếp theo sử dụng toán tử 3 ngôi nhìn code sẽ ngắn gọn hơn 

// vế thứ nhất khoahoc.gia>0 này là điều kiện 
// vế thưs hai là kết quả đucowj in ra nếu gia >0 
// vé cuối nếu giá ko lớn hơn ko thì in ra mien phi/
// viết mấy thằng này với điều kiện đơn giản thôi 
var result=khoahoc.gia>0?`${khoahoc.gia} Coin` :'mien phí'
console.log(result);

var a=1;
var b=2;

// nếu mà true thì nó in vế thứ hai ko thì ngược lại in vế thứ 3 
var resulet1=a>b?`${a}>${b}`:`${a}<${b}`
console.log(resulet1);

console.log(typeof NaN); // 'number'




function isNumber(value) {
    if(value.toString()==='NaN') {
        return false;
    }
    else{
        return typeof value === 'number';
    }
    
    
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false
console.log((100 / 'abc'))
 
*/


function Name(a, b) {
    this.a = a;
    this.b = b;
  }
//   window là một đối tượng toàn cục trong trình duyệt và chứa tất cả các biến và đối tượng toàn cục. Khi bạn tham chiếu đến window.a, nó đề cập đến thuộc tính a của đối tượng window
  const me = Name("Vuong", "Nguyen");
  console.log(window.a.length)
  console.log(!(a.length - window.a.length));

