// json là một định dạng dữ liệu nó ko phải một kiểu dữ liệu nó là chuỗi 
// json(JavaScrit Object Notation)
// tátt cả các ngôn ngữ lập trình đều hỗ trợ json vì nó trở thành một tiêu chuẩn rồi 
// json có dạng dữ liệu ào rong js 
// JSON:dạng Number,bôlean,Null,Array,Object ,String

// từ những kiểu dữ liệu này  Number,bôlean,Null,Array,Object trở thành json được 
// là ngược lại cho những chuỗi json thì biến ngược lại kiểu dữ liệu trên đc thì đó gọi la

// Stringify / parse 

// Stringify là chuyển đổi nó sang kiểu dữ liệu khac bảng mã khác 
// từ bộ bảng mã đó dịch ngucowj lại nó thì ncó thuật ngữ là parse

// Stringify khi chuyển đổi sang Json đọc Json vẫn hiểu 
// và sau đó muốn trả lại kiểu dữ liệu ban đầu dùng parse để nó trở lại ban đầu 


// json là chuỗi và chuỗi này có một cú pháp đã đucowj định nghĩa ra rồi 
// đay chính là chuỗi json thể hiện một số 1 
// var json='1';
// đay chính là chuỗi json thể hiện kiểu dữ liệu boolean là truehoặc false
// var json='true';
// đay chính là chuỗi json thể hiện null
// var json='null';
// đay chính là chuỗi json thể hiện mảng ngăn cách các phần tử bằng dấu , và nằm ở ngoạc kép
// var json='["JS","PHP"]';
// đay chính là chuỗi json thể hiện một object key của nó phải nằm trong dấu ngoặc kép
// var json='{"name":"LONG","age":18}';
// từu json chuyển đội lại js 

// Stringify từ js type->JSON
// parse từ JSON ->jS type
// var a='1';
// // in ra 1 và 1 là number 
// console.log( JSON.parse(a))

// var a='true';
// //nó sẽ là boolean
// console.log(JSON.parse(a))

// var a='tadasfarue';
// //viết linh ta linh tinh ko giống kiểu dữ liệu ở trên la lỗi ngay và muốn json bieest nó là chuõi thì phải thêm dấu nháy
// console.log(JSON.parse(a))

// var a='"tadasfarue"';
// //này là string 
// console.log(JSON.parse(a))


// var json='["JS","PHP"]';
// // trả về mảng của js và object tương tự
// console.log(JSON.parse(json))

// var json='{"name":"LONG","age":18}';
// var object=JSON.parse(json);
// console.log(object)


// trên là parse dưới đây là Stringify 
// thì nó sẽ thành là chuỗi dùng typesò để kiêm tra với lại chữ màu đen là string
console.log(JSON.stringify([
    // dùng nháy đơn thì khi in nó sẽ in ra nháy kép nên dùng dấu nháy kép
    'JS','PHP'
]))
console.log(JSON.stringify({
    // dùng nháy đơn thì khi in nó sẽ in ra nháy kép nên dùng dấu nháy kép
    name:"Son Dang",
    age:17,
    // đưa class đưa function vào nó sẽ ko thể hiện ra vì ko nằm trong kiểu dữ liệu trên 
    Text:function(){

    }
}))

// Json giúp thể hieenj kiểu dữ liệu đơn giản là số chuỗi đungs sai
// console.log(c.replace(/met/g,'mệt'));
// var lo='long \'lanh\''
// console.log(lo)

// khi làm fontend thì sẽ nhận chuỗi json nhận về từ backend và dùng parse để nó thành js để hiển thị ra website 


// client khi trình duyệt thực thi đoạn mã gọi lên API trả lại Json trong json là những giá trị khi trả về sever trar về dưới dạng là json /
// thì phía client dùng json . parse để biến json mình nhận về qua API trở thành object aray trong js lúc đó có thể dễ dàng in ra giao diện




// Server backend nhận yêu cầu từ client và xử lý nó. Điều này có thể bao gồm kiểm tra quyền truy cập, xử lý dữ liệu và tương tác với cơ sở dữ liệu.
// Backend server trả về một phản hồi HTTP cho client. Phản hồi này thường chứa các thông tin như mã trạng thái (status code) để chỉ ra thành công hoặc lỗi, và dữ liệu phản hồi (nếu có).

