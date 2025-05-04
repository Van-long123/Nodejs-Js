//input/select dùng onchange oninput
//key up/down sử lý về abfn phím
// radio như checkbox thôi  dùng onchangeoninput
// bài táon láy ra đc value của cá thẻ input này 
// đầu tiên là input text 


var inputElement=document.querySelector('input[type="text"]')
// console.log(inputElement)

// function ma(){
//     var a=inputElement.value;
//     console.log(a)
// }

// headingelement.id='heading'
// inputElement.onblur=function(){
//     var a=inputElement.value;
//     console.log(a)
// } 


// // lắng nghe sự kiện 
// // chir goij khi mà value của thẻ input ban đầu khac với value sau khi nhập 
// //  ban đầu ko có sô sau đó nhập 123 thì 123 khác với ko có số 
// // nó sẽ chạy khi bỏ chuột ra ngoài (onblur)
// inputElement.onchange=function(e){
//     // lấy ra đc cáci element của cái input này 
//     console.log(e.target.value)
// }
// var inputValue;

// // còn muốn gõ đến đâu lấy đến đó thì /
// inputElement.oninput=function(e){
//     //target lấy ra đc cáci element của cái input này 
//     console.log(e.target.value)
//     // inputValue=e.target.value
// }


// //qua checkbox

var inputCElement=document.querySelector('.test')
// console.log(inputCElement)
// inputCElement.onchange=function(e){
//     // nó trả về 1 event 
//     console.log(e)
//     //để lấy ra element ta gọi 
//     console.log(e.target)
//     console.log(e.target.checked)
// }

// // tiếp theo ông select 

// var inputSElement=document.querySelector('select')
// console.log(inputSElement)
// inputSElement.onchange=function(e){
//     // nó trả về 1 event 
//     console.log(e)
//     //để lấy ra element ta gọi 
//     console.log(e.target)
//     // nó sẽ in ra cái value bên html 
//     console.log(e.target.value)
// }

// //key up/down
// // khi nhắc phím lên thì nó sẽ thực thi 
// // còn keydown thì phải đặt phím xuống 
// inputElement.onkeyup=function(e){
//     // nó trả về KeyboardEvent 
//     // bấm phím vào thẻ input nó tra về which là cáci mã code bạn ừa nhấn ví dụ a là 65
//     // console.log(e)
//     // chuyeen qua tiếng anh nhập lf ko có 229 
//     console.log(e.which)

//     // console.log(e.target)
//     // console.log(e.target.value)

//     switch(e.which){
//         // đó là cách xác định trên máy tính 
//         // thif khi nhaasn ESC treên bàn phím thì nó 27 nên nó sẽ in ra và dừng 
//         case 27:
//             console.log('Exit')
//             break;
        
//     }
// } 


// // onkeyup và onkeydown sử dụng để sử lý các bài toán 
// // trên là lắng nghe đối tượng input 
// // dưới đây lắng nghe hẳng đối tượng docment 
// // ko nhất thiết phải bấm vào input hay cái gì đó thì sự kiện vẫn đc kích hoạt 
// // lắng nghe cả website 
// // down up là lấy giá trị từ bàn phím quy ra số 
// // keydown khi dis xuoongs up laf nhắc lên còn press là khi nhấn thôi 
// // // onkeypress khác là nhána giữ yên nó vẫn chạy và nhấn là chạy còn thằng up là nhắc lên còn down là nhát xuống
inputCElement.onkeypress=function(e){
    // ctrl c là 67 dùng máy thnawfg này để sử lý thôi
    console.log(e.which)
    switch(e.which){
        case 27:
            console.log('Exit')
            break;
        case 13:
            console.log('send chat')
            break;
    }
    //bài toán bấm enter là chat 
}






