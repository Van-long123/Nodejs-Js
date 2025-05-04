// PreventDefault 
// StopPropagation loại bỏ sự kiện nổi bọt 
// hành vi mặc định của thẻ a là nhấn là ó sẽ tới một trang web 
// muốn hành vi này ko diễn ra thì dùng 
// bài táon nếu mà cái link mà click vào nếu nó chưa f8.udn.vn nó mới chuyẻn trang ko chưa ko làm gì cả
// lấy ra tất cả thẻ a 
// var aElements=document.querySelectorAll('a')
// có name thid nó sẽ lọt vào
// var aElements=document.anchors
// ta lấy bằng links 

// var aElements=document.links;
// console.log(aElements)
// for(var i=0;i<aElements.length;i++){
//     aElements[i].onclick=function(e){
//         // để lấy ra url 
//         // nó sẽ hiện thị ra và nó chuyển trang 
//         console.log(e.target.href)
//     }
// }

// bài táon nếu mà cái link mà click vào nếu nó chưa f8.udn.vn nó mới chuyẻn trang ko chưa ko làm gì cả


var aElements=document.links;
console.log(aElements)
for(var i=0;i<aElements.length;i++){
    aElements[i].onclick=function(e){
        // nó kiểm tra xem giá trị của thuộc tính href có chuỗi "https://f8.edu.vn" ở đầu hay không.
        // nếu mà ko phải https://f8.edu.vn thì bỏ đi hành vi mặc địn của thẻ a này
//thuộc tính href mà ko chưa 'https://f8.edu.vn' thì sẽ ngăn chạn hành vi ămcj định của a
// nếu mà nó co thằng này thì là true bị đổi thành false còn false thành true         
if(!e.target.href.startsWith('https://f8.edu.vn')){
            e.preventDefault()
        }
    }
}


// khi maf focus vào input thì nó hiện còn bấm ra thì ko 
// h muốn bấm dô hiện mà bám ra thì ko 
var ulElement=document.querySelector('ul')
// kiểu khi focus vào hiện ra ul bấm vào ul mà bấm vào chưa nhắc chuột lên đã mất thì dùng 
// onmousedown là khi mình bấm chuột xuống nó sẽ thực thi lệnh và ngăn chặn hành vi mặc định của thằng ul 
// mất luôn focus khi nhấn vào ul thì mất luôn display:block và focus bấm thằng khác ngoài ul thì nó trở lại bình thường
ulElement.onmousedown=function(e){
    console.log(e.target.innerText)
    e.preventDefault()
}
// ulElement.onclick=function(e){
//     // sẽ ko laays ra đuọcư tại vì khi focus vào input thì hiện ko focus vào thì nó sẽ mất /
//     console.log(e.target)
// }

// tiép theo ngăn chạn hnhaf vi nổi bọt 

document.querySelector('div').onclick=function(e){
    console.log('DIV')
}

document.querySelector('div button').onclick=function(e){
    console.log('click me')
    e.stopPropagation()

}



