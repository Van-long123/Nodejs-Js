//tìm kiếm vị trí bắt đâuuf từ 0 ký tự t là 0
// nhiều thằng met nớ thì nó vẫn trả vị trí ở thằng met dâudf tiên
/**
 * để tìm thằng met thứ 2 thì phải bỏ vị trí vào và vị trí
 *  nớ pải sau met thứ nhất
 * còn vị tris của thằng met ở cuối cùng thì dùng lastIndexOf
 */
//nếu mà ko tìm đc nó sẽ trar về -1-
var a="tao met Met met lam";
var va=a.split(' ');
console.log(va)
console.log(a.indexOf('met',5));
console.log(a.lastIndexOf('met'));
/*ngoài cú pháp indexOf ra còn có search thì thằng này chỉ tìm đc
 thằng đầu tiên thôi 

máy thằng ngoài sau có giống thằng thứ nhất thì nó vâẫn láy 
thằg thứ nhát
*/
console.log(a.search('met'));
//cắt chuỗi cắt cần biết vị trí cắt đầu và vị trí cuối của thằng cần cắt
var b='tao met lam con cho lay';

console.log(b.slice(4,7))
console.log(b.slice(11,15))
// muôns cắt từ thằng vị trí só 4 đến hết thì
console.log(b.slice(4))
// cắt ngược thì 0 đến -1 -2 ...
console.log(b.slice(-4,-1))
//ghi đè
var c='Tao met lam met met con cho LAY ';
console.log(c.replace('met','mệt'));
//thì cái trên nó chỉ đổi đc một cái đầu met còn muốn đổi hết
// nó sẽ đổi những thằng có chuỗi met 
console.log(c.replace(/met/g,'mệt'));
//viết hoa tất cả 
console.log(c.toUpperCase())
//viết thuơngf tất cả
console.log(c.toLowerCase()) 

//trim loại bỏ các khoảng trắng thừa
var d='  con cho lay ';
console.log(d.trim())
// cách để biết có mất khoảng trắng chưa dùng length

// split
// cắt chuỗi thanhf array và phải tìm điểm chung
// h sẽ chuyển thằng này thành array
//điểm chung của thằng này là dấu ,
var languages='JS, PHP, Ruby';
console.log(languages)
console.log(languages.split(', '))
// cách để biến mỗi ký tự của ruby thành chỗi
var languages1='Ruby';
console.log(languages1)
console.log(languages1.split(''))
console.log(languages1.split(' '))
//CÁCH ĐỂ CHUYỂN NUMBER THÀNH STRING
var age=18;
console.log(age.toString())
console.log(typeof age.toString())
// nó sẽ làm tròn trên 5
//cách làm tròn số thập phân và khi gọi tofixed thì nó sẽ về kiểu String
var pi=3.14412412
console.log(pi.toFixed(5))
console.log(pi.toFixed())
// còn mà muốn để lại bao nhiêu số đằg sau dáua . thì thêm sôa vào tofixed
console.log(pi.toFixed(4))
//lấy ký tự bằng index(vị trí)
var ten='pham long';
// ko tồn tại ký tự trả về chuỗi rỗng 
console.log( ten.charAt(1))
// ko tồn tại ký tự(là nó vượt quá index) trả về undefined
console.log( ten[20])


function isNumber(value) {
    return typeof value === 'number';
  }
  
  console.log(isNumber(123));    // true
  console.log(isNumber('abc'));  // false


  function isNumber(value){
    return !isNaN(value)
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false


// Viết hàm tại đây
// ý nó là dù có thây đổi mảng thì nó vẫn lấy thằng cuối nên ko hackcode 
function getLastElement(animals){
  return animals.slice(-1).toString();
}
// slice(-1) kiểu -1 này là nó sẽ lấy từ -1 đến 0 
// còn slice(-2) nó sẽ lấy từ vị trí thứ -2 là sau tiger đến 0 là ngu ngôc 

// còn slice(0) là nó sẽ lấy hết nó sẽ lấy từ 0 đến hết
// slice(1) nó sẽ lấy từ vị trí thứ 1 đến thằng cuối 


// Ví dụ sử dụng
var animals = ['amen','Monkey', 'Tiger', 'Elephant','ngu ngốc'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


console.log(isNaN(NaN));      // false, vì 123 là một số hợp lệ
isNaN('456');    // false, vì '456' có thể được chuyển đổi thành một số
isNaN('abc');    // true, vì 'abc' không phải là một số hợp lệ
isNaN('NaN');    // true, vì 'NaN' được coi là một chuỗi không phải là số
isNaN(true);     // false, vì true được chuyển đổi thành số 1
isNaN(false);    // false, vì false được chuyển đổi thành số 0