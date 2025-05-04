var boxelement=document.querySelector('.box')
// khi in ra nó là một element object tuy nhien  trên web tự hiển thị như trên
// nó là đối tượng nên nó có phương thức và thuộc tính 

console.log([boxelement])
console.log(typeof boxelement)

console.log(boxelement.className)
console.log(boxelement.innerHTML)

// dô trong trình duyệt timf những thuộc tính cần dùng tìm ở đây  console.log([boxelement]) dô console tìm
// cần cái gì để giải thóa nào đó mà ko đủ để giải bài toán thì biết cần gì rồi đi tìm 
// clientLeft là trục ngang
// clienttop là trục dọc(y)/

// attribute:nameNodeMap đối tượng này giôngs qrray là thuốc tính của elementnodenode
// kiểu bên thằng div nớ có một class thì tahwfng này nó sẽ ghi nhận 1 class mà có thêm id thì nó sẽ hiện có 1 id /


/**
 * element có innertext innerhtml outerhtml attribute ko có 
 * element cos textcontent Textnode cũng có 
 * firstChild có trong element và textnode
 */

// autofocú làm con trỏ chuột nó nháy 
/**baseURI là cái địa chỉ minnhf đang dùng */

// childelementconut đếm phần tử con ở bên trong là element

// childNodes là những node con bao gồm cả element node và textnode
// nodevalue cũng là nội dung content của textnode 


//chilren nó sẽ trả về  HTMLcollection chứa  những element bên trong

// firstChild nó lấy ra node đầu tiên nằm trong .box là xuống hàng (/n) khoảng trắng là một text
// nhìn data 
console.log(boxelement.firstChild)

// firstelemenchild chỉ là elementnode đầu tiên thôi  


// lastchild là nde con cuối cùng của .box cũng là khoảng trắng xuống hàng 

// localname chính là name element ta lấy về của chúng ta 


// nextElementsibling tức là nó sẽ trả về element đúng sau thằng ta láy về (tahwfng ta lấy về là box)

// nextSibling nó trả về node tiếp theo textnode hoặc element node 

//textnode nodetype=3 ,attribute nodetype=2 ,element nodetype=1

console.log(boxelement.nodeType)

// offsetParent coi thử thằng ta lấy về nằm trong thằg cha nào 

// ownerDocument nó sẽ tả về document thằng này chính là document 
console.log(boxelement.ownerDocument===document)


// spellcheck dùng để check chính tả 


var a = '1';
var b = 2;

var c = typeof a;
var d = typeof b;
var e = typeof d;

console.log(c, d, e) // Output: ?
