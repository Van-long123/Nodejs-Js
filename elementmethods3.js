// chỉ có lấy id với lấy css selector mới trả về một element(laf nos thaasty luôn <h1>học lâpj trình</h1>) còn mấy thằng lấy tên lấy lớp kia trả về html colection
// h lấy h1 h2 h3 
var h1element=document.querySelector('h1')
var h2element=document.querySelector('section h2')

var h3element=document.querySelector('div h3')
console.log(h1element)
console.log(h2element)
console.log(h3element)


var h4element=document.getElementsByTagName('h1')
console.log(h4element)
// nó tra về một htmlcolection nó giống như mảng cách lấy ra 
console.log(h4element[0])

// dùng để lấy máy thằng trong node list or htmlcolection 
for(var i=0;i<h4element.length;i++){
    console.log(h4element[i])
}


// tìm hiểu thêm về 
// nó sẽ in xuống cuối ta cứ nghĩ nó sẽ in xuống cuối nhưng mà ko phải ddaua
// chỉ do là <script src="elementmethods3.js"></script> nằm ở cuối ở dưới máy thằng code html ở trên
// nên nó nằm ở cuối  
document.write('halo')