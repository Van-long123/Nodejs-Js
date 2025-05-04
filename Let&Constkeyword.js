// Let & Const hai từ khóa này sinh ra trong bảng ES6 với mục đích thay thế từ khóa var
// hiện nay tất cả các trình duyệt chưa hỗ trợ đầy đủ ES6 vì vậy thây thế hoàn toàn là ko thể

//1.Var / Let,Const
// khác nhau ở phạm vi chi cập (Scope),Hosting
// điểm khác nhau của const / var,let là Assignment chính là việc gán lại giá trị cho các biến 

// ví dụ đầu tiên là var/let,const 
// ở Scope định nghĩa một biến với từ khóa khac nhau trong code block và bên code block khac nhau như thế nào
// Code block:if else,loop,{}...;


// if(true){
//     // điểm giống nhau cả khai thằng đều dùng để khai báo biến 
//     // khai biến bằg var trong if và loop thì bên ngoại in nó đc 
//     // var course='JS';
//     // dùng let và const thì khai báo trong Codeblock {} thì nó chỉ in giá trị trong Codeblock 
//     // nó chỉ truy cập đc bên trong block 
//     let course='JS';
// }
// console.log(course)

if(true){
    let course='JS';
    // let course=123;// khai báo ở đây sẽ bị lỗi
    {
        // let course='JS';// ko bị lỗi ko bị trùng nếu định nghĩa thằng ccourse hai lần thì sẽ bị lỗi var cũng như thế
        {
            let course='J1';// ko bị lỗi
            // nó sẽ ưu tiên thằng khai báo biến ở cái block gần nhất 
            // let course='JS';
            console.log(course)
        }
    }
}


// tiếp théo là hosting đưa lên trên 
var a=1; //thì từ khóa var đc hỗ trợ hosting khi trình duyệt nó đoc nó sẽ thông dịch hostring nó sẽ 
// đưa lên đầu nó sẽ viết lại cái đoạn mã là var a; a=1;
// nó nhấc định nghĩa biến lên trên đầu và nó sẽ nhất lên những thằng nào đc hỗ trợ hosting thôi 
// var đc hỗ trợ hai thằng kia ko 
// ví dụ dưới đây ko hề có lỗi vì thàng thông dịch nó sẽ nhấc thằng định nghĩa biến lên trên đầu
// var a 
a=1;
var a;
console.log(a)

// thằng này ko đc hỗ trợ hosting nên lỗi ngay đúng thì phải khởi tạo trươc rồi mới gán giá trị
// b=1;
// let b;
// console.log(b)


// tiếp theo là khác nhau của const / var,let 
// ví dụ 
var bien=1

// kiểu mới đầu bien =1 ta gán lại giá trị trên đường tới console thì nóe sẽ thây đổi giá trị 
// var và let giống nhau trong trường hợp này 
bien=10;
console.log(bien)


// thằng const thì ko gán lại giá trị lần hai cho nó 
//  Uncaught TypeError: Assignment to constant variable.
// TypeError là lỗi về kiểu và đang gặp cái lỗi khi Assignment cho một cái biến dưới danggj constant
// ko thể sử dụng toán tử gán tới lần thứu hai của nó 

// const bien1=1
// bien1=1000;
// console.log(bien1)

const a1={
    name:'JS'
}
// const là thằng ko gán được đúng nhưng trong trường hợp này đâu có gán lại thằng a1
// ở đây là đang gán lại thuộc tính name của cái object gán cho thằng a chớ ko gán lại thằng a1
// nào mà a1='long' thì se lỗi thay đổi thuộc tínhcuar nó đc ko lỗi
a1.name='long'
console.log(a1.name)


//var truy cập đc ngoài scope còn hai thằng kia truy cập đc trong scope ở ngoài scope ko đc
// và trong thực tế thì khi nào dùng const let và var  

//code thuần(code thẳng js ko qua thư viên ko qua thông dịch nào khác  ) :var
// trong trường trườnghopjw có sử dụng thư viện Babel thid sử dụng const,let
// khi nào dùng let và const khi định nghĩa biến và ko gán lại biến đó dùng const 
// trong trường hợp khi gần gán lại giá trị chi biến dùng let 
// ví dụ 
// Let iSucces=false;
// xử lý gì đó trong () của if thì gán lại =true
// if(...a){
//     iSucces=true;
// }


// // Babel  được sử dụng để biên dịch mã JavaScript hiện đại (ES6/ES7/ES8) thành phiên bản tương thích với 
//các trình duyệt và môi trường chạy JavaScript 
// hiện tại.
// // Mục đích chính của Babel là cho phép bạn sử dụng các tính năng mới của JavaScript mà không cần lo 
// lắng về việc hỗ trợ của các trình duyệt hoặc môi trường chạy. Điều này giúp bạn viết mã hiện đại, dễ 
// đọc và dễ bảo trì mà không cần lo ngại về việc không tương thích với các phiên bản trình duyệt cũ.
