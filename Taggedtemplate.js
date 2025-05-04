// Tagged template bieest sủ dụng thằng này có thể làm code html bát chước react

// này sẽ sử dụng function có thể gọi function đó qua cú pháp Tagged template 

// đưa một giá trị trị chuỗi vào và có thể tyu ý bôi đạm chữ đó lên 
// [first,second,...strings] có 3 tham số mà bỏ vào mảng thì nó sẽ lấy tham số đầu tiên 
function hightlight([first,...strings],...value){
    // này nó truyền tận ba tham số luôn còn bên Destructin thì truyền 1 tham số 
    console.log(first)
    console.log(strings)
    console.log(value)
    return value.reduce((acc,curr)=>{
        // ...acc là spread nó sẽ bỏ ngoạc vuông đi 
        // strings.shift() là nó xóa đi thàng đầu và nó in thằng xóa ra 
        // lượt đầu tiên là nó trả về [Học lập trình, <span>JS</span>, tại] gán cho acc 
        // lượt thứ hai [...acc]=[Học lập trình, <span>JS</span> ,tại <span>Long</span> ,!]
        return [...acc,`<span>${curr}</span>`,strings.shift()];
    },[first])
    // .join('')
    // sử dụng redue với biến value để  biến nó thành một kết quả khác 
// Học lập trình <span>JS</span> tại <span>Long</span> ! 
}
// ...rest này thi nó laasy hết nội suy đồ luôn 
// rest này thif nó lấy mỗi chuỗi 
// function hightlight(...rest){
//     console.log(rest)
    
// }
// bôi đạm js và Long lên 
var brand='Long'
var course='JS'
var course1='JS'

// function hightlight này và viết  template dính sau như này nó sẽ gọi đến function 
// hightligh và nó truyền `Học lập trình ${course} tại ${brand}` này vào hightlight và xử lý trong hàm đó 
// trong  trường hợp truyền ba tham số vào cho hàm 
// tham số thứ nhất chứa chuỗi ko có phần nội suy ${} nó sẽ một cái mảng chứa nó
// tham số thứ 2,3 là thằng nội suy 
// và sau đây muốn highlight chữ trong nội suy này lên và mong muốn output của function này trả lại một  cái chuỗi như này và biến nội suy nằm trong span
const html=hightlight`Học lập trình ${course} tại ${brand}! `;

console.log(html)
console.log(html.join(''))
// var html =['Học lập trình ', '<span>JS</span>', ' tại ', '<span>Long</span>', '! '] ;
// console.log(html.join(''))

// var a=document.getElementById('output')
// console.log(a.innerHTML=html)
// var b=document.getElementsByTagName('span')
// for(var i=0; i<b.length; i++){
//     console.log(b[i].style.color='red')
// }

var brand='Long'
var course='JS'
function a([first,...strings],...params){
    console.log(a)
    console.log(params)
    return params.reduce(function(acc, val){
        return [...acc ,`<span>${val}</span>`,strings.shift()];
    },[first])
}
// Học lập trình <span>JS</span> tại <span>Long</span> ! 
// truyeèn vào với ba tham só là (array,'js','long')
var html1=a`Học lập trình ${course} tại ${brand}! `
console.log(html1)