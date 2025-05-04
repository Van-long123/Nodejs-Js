/**
 * // sau này lập trình viên fontend phaỉ chờ backend họ viết xong API  thì mới bắt đầu 
// ghép giao diện với API việc ghép giao diện với API làcua lập trình viên fontend
// thông thường API của backend chưa làm xong thì phải chờ họ nhưng ở đầy chúng ta ko phải chờ
// mà vẫn đẩy nhanh tiến độ thì chúng ta sử dụng API server fake 
// làm việc với api fake ko khác gì làm việc với api thật 
// bài hc này ta học postman để giúp ta làm việc với api 1 cách nhân chóng 
// api server nó là 1 cái để giúp ta có thể láy ra những cái giữ liệu của website cũng như 
// việc thêm sửa xóa dữ liệu nó nằm ở trên hết viêcj thêm xửa xóa ở api 
// 4 hành động thao tác với dữ liệu là crUD 
 gọi lên qpi với hnahf vi là Create để tạo mới dữ liệu 
 còn khi hiện thị cacs thông tin văn bản ảnh gọi lên api với hành vi là read
// -Create:tạo mới (ví dụ nhue bấm nút bình luận )
read:lấy dữ liệu 
update :chỉnh sửa (cí dụ như có 1 cái bình luận thì khi gửi bài lên trên giao diện ta bấm sửa và nhập giá trị cần sửa 
    gọi lên serer với 1 cái api với hành vi update để sửa và truyền nội dung sửa lên   )
delete:xóa
tất cả hành vi vừa rồi đều gửi lên server 1 api
công cụ postman có thể giúp ta gửi đi đc 4 hành đọng này mà ko cần phải code
 ví dụ như mình phải code xong thì mới gửi đc chức năng bình luận nhung ở đây trong cái lúc mình làm việc 
 ấy khi chưa code ra giao diện và để chắc chắn qpi hoạt đọng đúng ý của mình thì cần dùng 
 postman để test trước đến khi nào ngon rồi ta mới code mình mới sử dụng hàm fetch để 
 tạo ra 4 hành động 
 4 hành vi này thì với tiêu chuẩn rest 
 thằng json server đâng tuân theo tiêu chuẩn gọi là rest APi tạo ra 1 facke rest qpi
 Rest api những hành động dựa trên phương thức của giao thức http
 giao thức http cung cấp cho ta  để tạo dữ liệu là dùng pt post
 lấy là get sửa dùng phương thức put/patch
 xóa là DELETE

 protocol laf giao thức 
 http protocol laf giao thức http
 khi try cập vào website dữ liệu sẻ truyền tải dữ liệu qua internet hầu hết đều đi qua giao thức ttp
 \trong http có rất nhiều phương thức thì có 4 phương thức liẹt kê ở trên 
 thì ta start json server  lên sau khi start ta thu đc url
 bay giờ ta tải postman thì ta có thể làm điều tương tự như thằng trình duyệt nhưng se đa dạng hơn
 

 Collection choinhs là phần giúp chúng ta tạo ra gioóng như 1 thư mục để ta luuw trữ có thể ghi chú
 là api nào là tạo sửa xóa để dẽ quản lý 
 dấu cộng bênphải oveview là để tạo ra 1 khu vục làm việc mới 
 và ta thấy có cái để chọn pương thức của giao thức http cop url của json-sẻver đưa vào url
 bấm send với phuomngw thức get nó sẽ trả về giữ liệu giống như trình duyệt 
 thực tế khi gõ url vào trình duyệt chỉ gửi đi đc phương thức get thooi 
 nếu bay giờ muốn tạo thêm khóa học nữa  thì ko thể tạo đc trong trình duyệt
 là phải đi code js sử dụng fetch để ta có thể làm đc
 nhưng ở đây có postman ta tuân theo đúng tiêu chuẩn là tạo mới (create) dùng post
 sang postman đổi thành phương thức post xong bấm sang thằg body xong nhấn x-www-form-ủlencode
 h ta thêm một khóa mới là 
 name: xay dụng ưeb với node js
 description:xay dụng web thực tế với node js
 và nói thêm là database được luuw trong json-server  trong file db.json
 khi ta thêm mới đc liệu thì nó sẽ tự động luwu vào đây thêm một cái object như trên nữa
 và id tự tăng lên là 2 
 và khi reset lại trinh duyệt thì nó sẽ trả giá trị như những gì ta thêm vào 
 nó cứ đọc từ database thì cái việt ta  đang làm giống như việc ta l;à m với api thật 
 h là xóa ta phải xác định xóa thằng nào và để phân biệt đc thì nó có id 
 va cái url ta / và truyền id mà ta muôbns xóa http://localhost:3000/courses ta http://localhost:3000/courses/
http://localhost:3000/courses/3

 h ta đi sửa ông số hai và cũng truyền id số nớ lên như delete
 tất cả website thì đều them sửa xoas tất cả càc hành đôngj trên website đều là them sủa xóa
 làm các chức năng nào cũng sem sêm nhau 
 ví dụ để gửi thông báo cho các bạn ta phải làm gì thif ta phải làm một hành động đó là thêm thông báo 
 và thông báo đc gửi đến cho chung ta là chúng ta đang đọc nó là hành động read
 khi sửa thông bâo là update khi cóa là delete
 khóa học đio
  để nó hiện thị ra đc khóa học thì phải thêm khóa họ mình u=dùng hành động tạo mới create với trường hình ảnh 
  tên mô tả sau đó thì khi thích xoias là delete
 thứ chúng ta đang nhìn thấy là read
  tiếp fb có chứuc năng kết bạn
giả dụ gửi yêu cầu kết bạn với người khác bấm vào gửi thì hành đọng gửi là creat
khi mà đòng ý kết bạn là update laà sửa khi hủy là delete khi thấy là read

 */



