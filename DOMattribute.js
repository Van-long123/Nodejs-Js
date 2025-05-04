// attribute laf nhanhs cuar element
var headingelement=document.querySelector('h1')
console.log(headingelement)
// cách để thêm attribute vào elememt này 
// <h1 title='amen'>heading</h1> c1 been html 
//c2
// headingelement.title='amen'
headingelement.id='heading'
headingelement.className='heading'

var aelement=document.querySelector('a')
console.log(headingelement)
// href là attribute của thẻ a nên mấy thằng kia ko dùng đc  
aelement.href='https://poe.com/ChatGPT';
// tất cả máy thằng tên ta ddang dùng   seter tức là gán 

// tiếp theo là phương thứuc 
// href lầ thuộc tính của a thằng h1 ko dùng đc 
// tuy nhiên attribute ko nhất thiết phải hợp lệ với element đó
// bây h muốn thêm href vào thẻ h1 thì ko dùng cách trên đc ta sử dụng phương thức
headingelement.setAttribute('href','concholay')


// casch hai -
headingelement.setAttribute('class','concholay')
headingelement.setAttribute('id','concholay')

// cách lấy ra được giá trị của attribute 

console.log(headingelement.getAttribute('class'))

var heading2element=document.querySelector('h2')
console.log(heading2element)
console.log(heading2element.getAttribute('class'))
console.log(heading2element.getAttribute('title'))
// cách lấy giá trị của attribute 
// và phải hợp lệ thet a là href thẻ img laf src 
// cosn getAttribute setAttribute thì nó ko cần phải hợp lệ thì nó vẫn thêm vẫn lấy đc 
alert(headingelement.className)


// console.log(heading2element.className='amen')