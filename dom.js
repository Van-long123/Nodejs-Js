//HTML DOM (Document object Model) là tiêu chuẩn của w3c đưa ra 
// Khi một trang web được tải, trình duyệt sẽ tạo một mô hình D ocument O bject M của trang.
/* Dom cos 3 thành phần  : element(máy cái thẻ tab) ,Attribute , Text 
element VÍ dị <h1>element<h1> máy cái thẻ 
Attribute <h1 class="">element<h1>
    <a href=""></a>    
class href="" chính là Attribute 

Text là phần chữ nằm trong thẻ tab
*/
//Node  là điểm giao nhau hoạc gôf lên
// sử dụng javascript truy cập vào DOM để chúng ta có thể thay đổi được 3 thành phần trên 
// chung quy là cả website được tạo từ 3 thành phần này vì thế thay đổi qua thằng này là có thể tạo ra sự thây đổi trên webste
 //dùng dom có thể thay đổi cả website 
//  sử dụng dom có thể lấy ra chỉnh sửa thêm vào xóa phần tử HTML
//HTML DOM ko phải của javascript

//--------------------
//javascript ung cấp bộ phương tiện truy xuất HTML DOM
//JS cung cấp bộ cung cụ chọc vào HTML DOM
//javascript chạy ở browser(trình duyệt như gg cốc cốc) | sever(là backend) (nodejs)
// browser : cần viết mã cho browser nó hiểu đọc HTML->DOM->DOM API(chỉ tông tại trong môi trường chạy web ví dụ như chương trình duyệt nó láy vị trí(location thuộc một API) vào các website nó hiện lên bạn có muốn cung cápa vị trí hay ko,)(application programing interface)
                                                // tạonên  browser cần access vào DOM nên cần DOM Api
// DOM nằm trong webAPI 
// javascript ko hề có DOM tại sao chạy trên browser lại có DOM bởi vì trên browser có webapi mà thằg này cung cấp dom 

//DOM Document Object trong Javascript
// Document đứng ở đầu (trong word)  suy ra tất cả element(máy cái thẻ tab) ,Attribute , Text  đều là thành phần nhỏ hơn của ông ấy vì thế ông này là đại diện cho cả website
// khi trình duyệt đọc code bên html thì nó bắt đầu tạo ra một Document object Model thì nó sẽ lưu hết vào biến Document 
// để truy cập được element(máy cái thẻ tab) ,Attribute , Text thì phải lluoon luôn đi qua đối tượng Document
//Document được tích hợp sẵn trong webapi của  JS khi chạy trên trình duyệt
//gg côc cốc ... thì nó sẽ hỗ trợ việc hightlight đối tượng khi hover vào nó
// thì khi đưa vào document ở bên console.log thì nó sẽ hightlight toàn bộ website chứng tỏ documet đại diện cho toàn bộ website
// .muốn truy xuát vào các element(máy cái thẻ tab) ,Attribute , Text thì phải đi qua document
console.log(document);

//nó sẽ ghi vào giao diện website nó sẽ ghi vào trong phần body và ghi vào sau cùng
document.write('HELLO guys')
document.write('HELLO guys1')





