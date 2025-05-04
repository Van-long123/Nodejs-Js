// nó là cách thức mà website được truyền tải qua internet 
// mở một tab mới trên trình duyệt là http://fullstack.edu.vn/ sau đó bấm enter thì website
// nó sẽ tải ra và hiện thị như trên và điều nó xảy ra khi gõ vào và bấm enter
// thì trình duyệt gửi đi 1 yêu cầu website này ko lưu ở mấy tính chúng ta mà lưu trữ ở 
// cái máy chủ ghi gõ yêu càu trên vào thì yêu cầu đc gửi lên máy chủ và những hình ảnh
// dòng chữ đc lưu ở cơ sỡ dữ liệu yêu cầu gửi lên dựa vào url trên mấy chủ biết nên trả về cái gì
// trong trường hợp này nó trả về 1 cái trang chủ nó sẽ gửi về mã html nó gửi ngược về source
// của ta khi enter vào thì mấy chủ sẽ gửi cho chúng ta chuột phải xem nguồn trang này 
// từ đó trình duyệt đọc cái mã code này trình duyệt xử lý và hiểnthij ra giao diện 


// tab header nó sẽ nói về thông tin gửi đi và thông tin nhận về nó gioóng như kiểu là
// nhận đc phong bì thư ở đay nó chỉ nói cho ta những thông tin bên ngoai bên trong phòng bì ko nìn đc ở đây
// Remote Address là địa chỉ máy chủ của chúng ta đang là [2606:4700:20::681a:3f8]: sau dấu hai chấm
// là port nó chỉ đích thị luôn vào nơi đang lưu trữ website của mình ở trên data center

//Response Header có nghĩa là phản hôig là cái sau khi mà server máy chủ của bạn trả về dữ 
// liệu thì cái RH mới có thôngtin 

// Request Header chính là cái thông tin của yêu cầu gửi đi tức là khi bấm enter trình duywwtj 
// trình duyệt gửi đi request lên trên cái địa chỉ url thì lúc đố Request header đã có thông tin rồi 
// thàngwa Response Header ko có thôngtin 
// equest Header gửi đi thông tin dưới dạng key value
// tùy vào tốc độ mạng nhanh hay chậm nó gửilaij ta cái phản hồi khi đó Response Header này mới có

//bên trong phòng bì nó nằm ở bên tab Response 
// tab Response này sẽ nhận đc duẽ liệu khi mà thằg server nó trả lại dữ liệu
// tab Response sẽ nhận được dữ liệu đồng thời với Response Header 
// tab Response nhận được mã html chính là mã code để hiển thị ra website 
// ông trình duyệt đọc mẫ này và xử lý cả js để in ra giao diện 


// Get để lấy dữ liệu về 
// Post gửi dữ liệu lên server như form đăng ký đang nhập 
//
// khi bôi đên ủl bấm enter request gửi đi ta nhìn thấy giao diện này là thực ra response được trả về
//và trình duyệt đọc được response ấy và nó render ra nó chạy js nữa mới ra cái giao diện này
// thực tế trình duyệt nhận đc ko phải giao diện này nó nhận đc source code thôi nó chỉ là văn
// bản thuần túy thôi 

// đầu 1xx là đầu thông tin tức là server trả về cho chúng ta 1 thôngtin gì đó để nó nói có điều gì đó đang xẩy ra
// chứ nó ko phải là gửi dữ liệu h


// conf 2xx là thành công ví dụ như 200,201.. nhưng mà mang ý nghĩa khác coi ở dấu trang khác 

// đầu 3xx là sự điều hướng nó liên quan đến sự chuyển hưóng ví dụ như lần đầu tiên vào web là 200 thành công 
// và sau đó request lần thứ hai ko có cái gì khác cả là mã304 lúc đấy nó sẽ ko cần tải lại mọi thứ như làn đầu tiên 

// đầu 4xx là lỗi client là phía trình duyệt của ta dùng máy tính vào website thì máy tính của ta laf client
// client là đầu khách hnafg 
// khi mà có một tài nguyên ko tồntaij hoặc tim thấy ở trên server thì nó trả về 404(not found)

//đầu 5xx là lỗi server do ta code lỗi   hay là servit ở trên server bị lỗi 

