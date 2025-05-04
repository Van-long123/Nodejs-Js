// sử dụng để lấy dưx liệu từ backend trả về

//  mở ra api để lưu trữ dữ liệu lại  
// dữ liệu là backend còn fontend xét css 

// fetch nó gọi lên API để lấy nội dung đc lưu trữ ở backend và fontend 
// sẽ nhận nội dung và đưa lên trình duyệt 
// API ->Application programing interface laf coonrg giao tiếp giữa các phần mềm
// phần mèm ở đây là ông backend xây dựng ra 1 cái source  = php or ngôn ngữ gì đó =backend
// vaf để ông backend này mang theo cơ sỡ dữ liệu và các ông khác có thể giao tiếp với ông backend này
//  thì kỹ thuật viên backend mở ra 1 API hiểu đơn giản nó chỉ là cái url thì ủl này nó sẽ cung capas trang gì đó .com/ cái gì đó vầ nó trả lại các dữ liệu (các giá trị trên ủl như php])
// và từ dữ liêuj đó hiển thị ra người dùng 

// 89-90%  tất cả backend mở api ra đều trả về json ngoài ra còn trả xml mà thông dụng nhất là json
//trả về  từ API sử dụng fetch để gọi lên api lấy dữ liệu và sau khi lấy được fetch xong nhận đc dữ liệu là json 
//backend->  API (URL)  -> fetch  ->  json
//->JSON.parse ->JS type ->render ra giao diện với html
// kiểu là sau khi nhận đc JS type ta lặp qua rồi in ra giao diện 

// lấy API ở https://jsonplaceholder.typicode.com/
var postAPI = 'https://jsonplaceholder.typicode.com/posts'
// thằg fetch sử dụng promise nó là hàm đc dựng sẵn tuy nhiên nó ở bên trong 
//fetch trả lại 1 cái stream cứ hiểu đơn giản nó là 1 cái luồng dữ liệu trả về 
// khi có đc cái stream bỏ nó vào response .then(function(response) đặt tên stream hay gọi là response
// cái response này lại là chính promise 
// và  chúng ta muốn nhận đc cái json 
// Hàm response.json() trả về một promise mới, đại diện cho dữ liệu đã được chuyển đổi thành đối tượng JavaScript. 
// Chúng ta có thể sử dụng .then() tiếp tục để xử lý dữ liệu này. */
fetch(postAPI)
    .then(function (response) {
        // nó sẽ trả lại 1 promise 
        // casi PROMISE NÀY  CÓ tác dụng là khi khi nó resolve nó sẽ trả về cái nó sẽ làm việc
        //JSON.parse nó sẽ đổi thành kiểu js cho ta luôn nó parse cái response trả về 
        // nên cái việc nhận posts ở then dưới là danjg JS type luôn 
        return response.json()
    })
    // lấy mà thất bại nó sẽ lọt vào case thất bại khi sai cái url api
    .then(function(posts){
        console.log(posts);
        var htmls=posts.map(function(post){
            // ở đây chỉ hiện thị ra title thôi 
            return `
                <h2>${post.title}</h2>
                <li>${post.body}</li>
                
            `
        })
        var html =htmls.join('');
        document.getElementById('post-block').innerHTML=html;
    })
/**hàm response.json() trả về một promise, và promise này sẽ được giải quyết (resolve) thành một giá trị. Trong trường hợp này, giá trị đó là dữ liệu từ phản hồi API được chuyển đổi thành đối tượng JavaScript.

Khi gọi response.json(), promise này sẽ chờ cho đến khi dữ liệu từ phản hồi API được hoàn thành và chuyển đổi thành đối tượng JavaScript. Nếu quá trình này thành công, promise sẽ được giải quyết (resolve) và trả về đối tượng JavaScript tương ứng với dữ liệu. */
// oở trong code dùng fetch để gọi lên dùng sau đó nhận đc response từ thằng này json ra 1 promise
// posts này là js và dùng js lặp qua và render ra giao diện cách để hiện thị ra


.catch(function(err) {
    console.log('co loi'+err);
})


/**Biến response trong đoạn mã của bạn là một object đại diện cho phản hồi (response) từ API. Nó không phải là một Promise.

Tuy nhiên, khi bạn gọi phương thức response.json(), nó trả về một Promise. 

việc sử dụng response.json() trả về một promise và chuyển đổi dữ liệu JSON thành đối tượng JavaScript để bạn có thể làm việc với nó dễ dàng trong mã của bạn.
Promise này đại diện cho quá trình chuyển đổi dữ liệu JSON từ phản hồi API thành đối tượng JavaScript.*/