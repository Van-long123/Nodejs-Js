// attribute và text phụ thuộuc vào element vì có element mới viết ra tụi hén 
// học xong hết máy cái này qua coi bài lap 6  js
//element :lấy qua ID,class,tag name(máy cái thẻ),CSS selector,HTML collection

// di từ document chọc tới h1 
// có chức năng lấy đối tượng (node) trong HTML có id là "heading" và gán nó cho biến
// "headingNode" để bạn có thể truy cập vào các thuộc tính và phương thức của đối tượng đó trong JavaScript
// một website ko nên trùng ID
// mà ví dụ như mà có ba thằng trung ID thì nó chỉ lấy thằng đầu tiên  
var headingNode=document.getElementById('heading')
// nó hiểu headingNode này là của thẻ h1 nó hiển thị luôn thẻ h1 cho mình dễ nhìn
console.log(headingNode)
//đưa vào mảng và object thif ko còn 
console.log([headingNode])
// đưa vào object 
console.log({
    element:headingNode
})

// hỗ trọ lấy ra nhiều phần tử 
var headingNodes=document.getElementsByClassName('heading')

// trả về 2 cái thẻ h1 có class là heading giống cái mảng(nhưng nó ko có các phuogw thức map 
// reduce ...) dùng for để lặp

// dù thằng class nó có một thì nó vẫn trả về htmlcollection muốn truy cập thì cũng phải dùng
//  vòng lặp để chỉnh sửa thêm bớt
// còn getElementById trả về trực tiếp nên ko cần dùng for
console.log(headingNodes)

// lấy qua tag 
// nó sẽ lấy qua cái tên của cái thẻ 
// nó sẽ trả về hết những thằng có thẻ là h1 
var headingNode12=document.getElementsByTagName('h1')
console.log(headingNode12)

//lấy qua CSS selector
// bình thương muốn css thì phải .class . id bên style 
// muốn tới hrading2 thì .heading2 ko thì .box .hreading2
var photo=document.querySelector('.photo')
console.log(photo.innerText)

//cách lấy class heading đầu tiên 
//lấy thằng số hai thì .box .heading2:nth-child(2)
// nó sẽ lấy thằng tương ứng nếu như cos thằng tương ứng với thằg này thì nó sẽ lấy thằng đầu tiên 
// còn muốn lấy hết nhưng thằg giống .box .heading2:first-child này thì 
// var photo1=document.querySelectorAll('.box .heading2:first-child ')
//thì querySelectorAll nó sẽ tra trảveef một sanh sachs NodeList giống htmlcollection co điểm khác nhau cứ coi nó là cái mảngdùng vòng lặp để lặp qua
// console.log(photo1[0])  // nó giống như mảng thôi cách láy

// laasy thằng đối tương khớp với thằng truyền vào 
var photo1=document.querySelector('.box .heading2:first-child ')

// trả về thể thẻ element attribute text
console.log(photo1)






//HTML collection
// thây vì getElementById thì ta chọc thẳng vào form
// trả về HTML collection(2) có độ dài là 2 
// làm như này nó sẽ trả về form của chúng ta
console.log(document.forms)
// cách trả về forms đầu tiên mà làm như này nó ko chính xác bởi vì nhiều form mà cứ 0 12  thì làm gì biết là thằng nào hoặc đan xen vào giữa thì sao
console.log(document.forms[0])
//nó có một cái key đặt trùng tên của form là tên id của form
console.log(document.forms['form_2'])
//cách 2
console.log(document.forms.form_2)
console.log(document.forms.textForm)


// nó sẽ trả về tất cả các thẻ a có attribute là name 
//tìm hiểu thêm về  HTML collection ít khi sử dụng tahwfng này và tag name nên éo cần tìm hiểu

console.log(document.anchors)
// console.log(document.images)



console.log('amen')


var photo1=document.querySelector('.box .heading2:first-child ')
var a=document.querySelector('.box .heading2:nth-child(2)')

console.log(a)




// Object.assign(a.style,{
//     color:'red'
// })