// thêm element vào element trong dom ví dụ <p><span></span></p>


// h là làm sao thêm thẻ h1 vào trong div .box 

var boxelement=document.querySelector('.box')
console.log(boxelement)

// dungf cái này thêm vào trong div .box thì nó vẫn hiểu là text 
// boxelement.innnerText='<h1>heading</h1>'
// cách để nó thêm vào trong .box là một html là 
// innerHTML ,outerHTML 
// thêm một elementnode vào trong .class và nó cả textnode 
// innerHTML nó sẽ hiểu này là html nên nó sẽ thêm dưới dạng là element 
boxelement.innerHTML='<h1>new heading</h1>'
var heading=document.querySelector('.box h1')
console.log(heading)
console.log(heading.innerText)
// innerHTML dùng để thêm một element,attribut ,text vào element ví dụ ở dưới
// boxelement.innerHTML='<h1 title="heading">new heading</h1>'
// lấy text của h1 
console.log(heading.innerText)
// lấy đoạn html đc thêm vào trong .box và nó dạng chuỗi
console.log(boxelement.innerHTML)

// lăn chuột đến đâu tự tải nội dung tới đó là nhờ thằng innerHTML
// inner ở bên trong outer ở bên ngoài 

var box1element=document.querySelector('.box1')
// nó sẽ lấy ra thẻ h1 innertext lấy nội dụng trong element còn innerHTML dùng thêm element vào trong element và lấy element trong đó
// inner là bên trong nó lấy nội dung bên trong .box1 nó sẽ lấy ra hết những thể ở bên trong .box1
console.log(box1element.innerHTML)

// outerHTML nól lấy luôn thẻ chứa luôn 
console.log(box1element.outerHTML)


// h mà thêm mới thàng này thì nó sẽ ghi đè hai thằng bên html 
box1element.innerHTML='<span>texts</span>'
// còn mà dùng outerHTML thì nó sẽ ghi đè chính thằng chưa luôn thằng mà đc lấy qua bên này là .box1
// sau khi dùng outerHTML thì class='.box' ko còn nữa nhưng hẫy in ra thử
box1element.outerHTML='<span>texts</span>'
// thật ra biến v này được lấy ra ở var box1element=document.querySelector('.box1') đây 
// nên nó vẫn còn thật ra nó còn ở đaya là nó còn trong bộ nhớ thôi lưu trong bộ nhớ thì cái 
// nên nó vẫn còn nó vãn trả về tuy nhiên trong dom(trên html ở duyệt web(elements)) thật ko còn nũa
// còn ở đây nhưng ko get nội dung ra đc chỉ lấy ra đucowj nội dung trong bộ nhớ còn nội dung thực ko lấy ra đc 

console.log(box1element)
// này là nó nằm trong bộ nhớ của nó 
console.log(box1element.innerHTML)

// từu giây phút mà dùng outerHTML thì ko còn thằng .box1 nữa chỉ có <span>texts</span>
// ít khi sử dụng outerHTML 

