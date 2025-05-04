var boxElement=document.querySelector('.box')
console.log(boxElement)
// cách xét css bên js 

console.log(boxElement.style)



// bên css  background-position: been js backgroundPosition

boxElement.style.width='100px'
boxElement.style.height='100px'
boxElement.style.backgroundColor='red'


var h1Element=document.querySelector('h1')
h1Element.style.color='blue'
h1Element.style.fontSize='40px'
Object.assign(h1Element.style,{
    paddingTop:'20px',
    paddingLeft:'2px'

    
})

// ra một vaasn đề là mỗi khi xét lị phải viết thêm dòng mới 
// cách đẻ thêm ngiều css 
Object.assign(h1Element.style,{
    color:'yellow',
    fontSize:'40px'
});

// khi viết máy tahwfng này thì nó sẽ style trong cái thằng lấy về ;à .box dô trình duyệt wb coi 

// cách lấy giá trị xét  lấy giá giá trị thuộc tính css
console.log(boxElement.style.backgroundColor)
console.log(h1Element.style.fontSize)

// mục đích của thằng này là thêm một số thứ thôi còn viết là ciết bêne css 


