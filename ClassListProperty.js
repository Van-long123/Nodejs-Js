// nó chỉ tương tac đc với elementnode 
var boxElement=document.querySelector('.box')
//hojc veef classList
// trar về mộ đối tượng DOMTokenList
console.log(boxElement.classList)

// đầu tiene là add là thêm class vào element 
/**
 * contains kiểm tra một class có nằm trong element hay ko
 * remove xóa bỏ một class khỏi element 
 * toggle nếu đang có class trong element gọi tới phương thứuc này nó sẽ cóa bỏ class đó
 *  nếu ko có class đó ở element thì gọi tới thằng này nó sẽ thêm vào 
 */

console.log(boxElement.classList[0])
console.log(boxElement.classList.length)


// thằng này nó sẽ trả về một cái chuôix attribute bên html nó trả về value trong class
console.log(boxElement.classList.value)

// đề bài là add thêm class .red bên html nớ vào trong div .box 
// thêm nhiều class phải cách nhau bàng dáu phảy 
boxElement.classList.add('red');


// kiểm tra class có tồn tại trong element ko 
// có trả về true 
console.log(boxElement.classList.contains('red'))

//xóa class red chữ lại thành màu đen 
// boxElement.classList.remove('red')

// sau 3s nó  sẽ xóa nếu có class red nó mới xóa cnf ko có class thì ko xóa 
setTimeout(function(){
    boxElement.classList.remove('red')
},3000)

//toggle
// khi cái đoạn mã này đc chạy nó sẽ kiểm tra element này có class là red hay ko
// nếu  có nó sẽ gở bõ class red của mình đi nếu ko có thì nó thêm vào
boxElement.classList.toggle('font')


setInterval(() => {
    // sau 1s nó thêm xong 1s tiếp nó xóa cái thêm s
    boxElement.classList.toggle('red')
    
}, 1000);



