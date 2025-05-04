// sự kiện của người dùng như bôi đên kéo lên xuống 
//chẳng hạn như ngươif dung muốn nhấn chuông hì thực hiện click vào chuông chúng ta phải làm sự kiện cho nó
// để nó hiện thông tin ra 

// click dùng khi  Một phần tử được nhấp vào

/**change 
 * copy khi thực hiện copy trên website
 * dbclick khi nhấy đúp vào phần tử
 * drag làm nhưngx cái ứng dụng kéo thả 
 * focus khi tập trung con trỏ chuột vào button or vào the input nào đó
 * keydown khi mà bấm nút xuóng trên bàn phím
 * keyup khi mà bấm nút lên trên bàn phím
 * mouseover là cái thằng hover bên css là hành vi đưa con chuột vào 
 * còn mouseout  là hành vi đưa con chuột ra khỏi hành vi hover
 * mouseup khi click con chuột lên
 * resize khi mà thay đổi cái kích thước của trình duyệt hoặc elemnet ta có thể lắng nghe đc
 * scroll khi mà lăn con chuột lên xuống
 * 
 * 
 * học event click trước
*/
// học hết rồi coi bài tapaj bên js trên trường 
// bài toán click vào dom event thì nó sẽ in ra dãy số ngãu nhiên 

function random(){
    console.log(Math.random())
}

// như này trả về một element thì đc còn dùng máy thangwf kia(querySelectorALL byclassname tagname) thì nó trả về một htmlcolection ỏ nodelist 
// nó chỉ tra về thằng đầu tiên 
var h1element=document.querySelector('h3')
console.log(h1element) 


// element nào đang được đinhj nghĩa nó đang được khai báo để lắng nghe cái sự kiện này
// thì khi click vào elemeent đó  thì code mới đc thực thi 
// queryselector chỉ lấy một thằng trong dom thôi 
// này nó giống callback khi click vào thì nó gọi lại onclick /và trẻ về Pointerevent 
h1element.onclick=function(e){
    // console.log(Math.random())
    console.log(e)
    console.log(e.target)


}
// cách để láy ra đc element node mà a click vào 
// client x y là trả về vị trí của element con chuột mà ta click vào 
// altKey l;à ta  bấm giữ nút alt xong click vào thằng h1element bnafy thì trở nên true
//ctrlkey cũng thế nhấn giữ nút ctrl

// quan trọng là nó trả về thằng target nó sẽ trả về chính element đang lắng nghe dom event này


//bài toaasn khi  nhấn vào tahwnfg nào thì nó sẽ in ra thằng đó
// onclick vào nó sẽ diễn ra sau khi vòng for này đc chạy 
// coi lại thằng này 
//vongf for chayj xong thif i laf 3 rooif bởi vì nó chạy qua 3 thẻ h1
// kiểu nó chạy qua 3 thẻ h1 rồi khi click vào nó mới hiện ra console.log
// Khi sự kiện click xảy ra và hàm xử lý sự kiện được gọi, giá trị của biến i đã là giá trị cuối cùng (h1element.length) do vòng lặp đã chạy qua hết các phần tử.
var h1element=document.querySelectorAll('h3')
console.log(h1element.length) 
for(var i=0;i<h1element.length;i++){
    h1element[i].onclick=function(e){
        console.log(i)
        // chinhs laf element ta click vafo 
        console.log(e.target)
        // console.log(e.target.innerText)

    }
}
// tử h3 được chọn bằng phương thức querySelectorAll('h3'), và mỗi phần tử h3 sẽ có một hàm xử lý sự kiện onclick được gán.
// Tuy nhiên, hàm xử lý sự kiện onclick không được gọi ngay khi vòng lặp for thực thi. Thay vào đó, khi bạn click vào một phần tử h3, nó sẽ gọi hàm xử lý sự kiện tương ứng với phần tử đó.
/**Vì vậy, vòng lặp for sẽ chạy qua tất cả các phần tử h3 và gán hàm xử lý sự kiện onclick cho mỗi phần tử. Nhưng đến khi bạn click vào một phần tử h3, hàm xử lý sự kiện onclick mới được gọi và in ra giá trị của biến i, cũng như phần tử mà sự kiện đã xảy ra trên (phần tử được nhắm tới) thông qua console.log(i) và console.log(e.target).

Vì vậy, khi bạn chạy đoạn mã này, vòng lặp for sẽ thực thi ngay lập tức, nhưng hàm xử lý sự kiện onclick chỉ được gọi khi bạn click vào một phần tử h3 cụ thể. */
// hành vi click vào diễn ra sau khi vòng for này đc chạy khi đó i là bằng 3 rồi
// nếu mà dùng h1element[i] thì nó sẽ là vị trí thứ 3 rồi nên nó là undifined
var h=0;
for( h=0;h<3;h++){
    console.log(h)
    // h++; h tăng ở dưới nên khi tới thằng thứ hai nó sẽ tăng thêm một lần nữa rồi kiểm tra đúng điều kiện
}
console.log(h)



/**, trong đoạn mã JavaScript này, vòng lặp for sẽ chạy qua tất cả các phần tử h3 được chọn bằng phương thức querySelectorAll('h3'). Mỗi lần lặp, một hàm xử lý sự kiện onclick mới sẽ được gán cho phần tử h3 tại vị trí tương ứng.

Khi vòng lặp for chạy, nó sẽ gán một hàm xử lý sự kiện onclick cho mỗi phần tử h3. Điều này có nghĩa là sau khi vòng lặp kết thúc, mỗi phần tử h3 sẽ có một hàm xử lý sự kiện onclick riêng.

Khi bạn click vào một phần tử h3 cụ thể, hàm xử lý sự kiện onclick tương ứng với phần tử đó sẽ được gọi. Điều này cho phép bạn xử lý sự kiện click cho từng phần tử h3 một cách riêng biệt.

Vì vậy, sau khi chạy đoạn mã này, mỗi phần tử h3 sẽ có một hàm xử lý sự kiện onclick riêng, và khi bạn click vào từng phần tử, hàm xử lý sự kiện onclick tương ứng sẽ được gọi. */






