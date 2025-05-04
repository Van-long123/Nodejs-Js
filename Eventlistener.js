// var btn=document.querySelector('#btn');
var btn=document.getElementById('btn');
console.log(btn)

//xử lý nhiều việc khi event xảy ra 
//lắng nghe/hủy bỏ lắng nghe

// dom event 
// khi nhấn 1 cái nó sẽ xử lý ba việc cùng lúc 
// ghi mà gửi một bình luận lên fb thì 
// việc đầu tiên là gửi đi thứ hai là ẩn đi giao diện bình luận thứ 3 hiện thị comment lên web 
// làm rất nhiều việc xảy ra gửi thông báo khi comment trên fb 
// dom event xử lý nhiều việc 
// và tiêp theo là hủy bỏ lắng nghe làm cho một thằng ko hoạt động 
// btn.onclick=function(){
//     console.log('việc 1')
//     console.log('việc 2')
//     console.log('việc 3')
// }
// khi trang web này đc tải thì 3s đầu tiên click vào ko có gì xẩy ra cả 
// sau 3 s nó mới hoạt động 
// 3s đầuu nhấn chi nhấn cũng sẽ ko hoạt động sau 3s kia mới đc
// setTimeout(function(){
//     btn.onclick=function(){
//         console.log('việc 1')
//         console.log('việc 2')
//         console.log('việc 3')
//     }
// },3000)


// //tiếp theo đây là kiểu ban đầu nó sẽ họat động click bình thường nhưng sau 3s thì nó ko
btn.onclick=function(){
        console.log('việc 1')
        console.log('việc 2')
        console.log('việc 3')
    }
// vì sau 3s thằng dưới này trong function ko làm gì cả 
// ghi đè 
    setTimeout(function(){
    btn.onclick=function(){
    }
},3000)


//2
// trên là domevent  dưới đây là EventListener 

// lắng nghe sự kiện click và in ra console.log bất kỳ 
// nhận hai đối số -click và callback khi mà event này xảy ra
btn.addEventListener('click',viec1)
function viec1(){
    console.log('viêc 1')
}
function viec2(){
    console.log('viêc 2')
}
function viec3(){
    console.log('viêc 3')
}

// tiếp theo muốn làm nhiều việc 

// thì addevent nhiều lần lắng nghe nhiều lần
// thêm nhiều lần ,mà ko bị ghi đè còn thằng domevent thì bị ghi đè 
// nó sẽ gọi và thực thi thằng nào ghi ở trên nó 
btn.addEventListener('click',viec2)
btn.addEventListener('click',viec3)


// tiếp theo hủy bỏ lắng nghe 
//nếu muốn xóa bỏ từng thằng nên dùng addevent còn tahwfng kia hủy cái là hủy hết ko có hủy từngthafng
// sau 3s xóa đi việc 1 
setTimeout(() => {
    // truyên cái event ko muốn lắng nghe 
    btn.removeEventListener('click',viec1)
}, 3000);



/**trường hợp khi xử lý nhiều việc
sử dụng domevent trong những trường hợp đơn giản là lắng nghe sự kiện nào đó 
 * và ko có nhu cầu gở bỏ nó đi vì khi bỏ là phải bỏ đi hết 
 */

/**
 * xử lý nhiều việc khi mà event nó xảy ra dùng event này cho nó đỡ rối 
 * lợi ích 1 sự kiện diễn ra nhưng muốn hủy bỏ lắng nghe sự kiện đó trong trường hợp nào đó
 *  
 */



