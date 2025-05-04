// cách này là chúng ta sử dụng promise để chúng ta lấy dữ liệu nó phụ thuộc nhau 
// còn trong thực tế người thiết kế api người ta trả về duữ liệu cho các bạn cả comments bao gồm cả onng user 
// thì lúc đó ko cần làm giống như ở dưới chẳng qua để chúng ta hinhf dung ra cách dùng thực tế của promise 
// khi mà phụ thuộc nhau nhưng 
// call back thì có callback hell 
// thì promise cũng có promise hell 
/**
 * getComments()
    .then(function (comments) { đây là promise brrn ngoài 
        đây là  return getUsersByIds(userids)
            // ko có thằng này thì nó trả về new promisevaf lọt vào .then ở phía ngoài 
            .then(function (users) {
                // khi return thì thằng .then bên  dưới nhận thằng này 
                // khi gặp return nó sẽ nhảy xuống then tiếp theo 
                return {
                    users: users,
                    comments: comments
                };
            }) bên trong 
            chúng ta có thể return thằng này đằng sau vì nó là chuỗi có nghãi là tạo thêm 1 then nữa ở ngoài nhận một giá trị từ hàm getgetUsersByIds và bỏ đi .then sau nó cho khỏi bị hell
            thằng then ngoài nhận và return về {
                    users: users,
                    comments: comments
                };
                như này nó sẽ ko bị đi sau vào nếu mà cố đii sau sau vào thì dính vào promise hell
 */
// sau chúng ta sẽ học về khái niệm async await thì khi học cú pháp này nó sẽ ko bị lồng nhau như trên nữa
// nó sẽ viết theo kiểu từng dòng như tuần từ từ trên xuống dưới nó sẽ gọn hơn rất là nhiều gọn hơn cả promise
var users = [
    {
        id: 1,
        name: 'Kien dam',
    },
    {
        id: 2,
        name: 'Sơn',
    },
    {
        id: 3,
        name: 'Long',
    },
    //...
];
var comments = [
    // trong mảng gồm những nơi để lưu trữ dữ liệu 
    // làm sao để phân biệt được cái bình luận nào của user đương nhiên là ko bởi vì cấu trúc dữ liệu
    // như này thì làm sao mà phân biệt nên ta phải thêm một trường dữ liệu là user-id vào thì nó sẽ đối chiếu ông nào ở trên
    // users có id:1 nên ta sẽ biết đc bl của ông nào
    {
        id: 1,
        user_id: 1,
        content: 'sao anh chưa ra:((',
    },
    {
        id: 4,
        user_id: 1,
        content: 'anh ơi!',
    },
    {
        id: 2,
        user_id: 2,
        content: 'vừa ra xong em ơi!',
    },
    {
        id: 3,
        user_id: 1,
        content: 'cảm ơn anh!',
    },
]
// và sau khi có dữ liệu thì làm sao để ông backend load lấy ra đc dữ liệu kể cả fontend vẫn phải lấy 
// ra dữ liệu như này ông backend trả về url thì fontend tự gọi lên lấy dữ liệu ví dụ ổng trả về 
// 2 cái url(thật ra url là api) cái ủl thứ nhất là để lấy được nội dung comment lấy được cái này 
// xong vẫn ko hề biét đc ông nào là ông thực hiênj comment vì nó chỉ thể hiện id ko thể hiện tên
// laays comments để thể hiện ra fontend là chưa đủ chúng ta phải lấy ra đc cái tên Sơn kiên Dam
// cái ủl thứ hai là users 

// bước 1 gội lên API để lấy comments  
//bước 2 từ comments lấy ra user_id
// từ used_id lấy ra user tương ứng bằg cách truy cập vào api backend trả về để lấy users này
// và lọc ra đúng hai cái user_id mà ta lấy đucowj qua bước 1 là 1 và 2 thì bước hai ta chọc vào users này lọc ra đúng hai 
// user tường ứng trong users là Kien và Son ko lấy ông Long 


// h ta sẽ là Fake API là làm giả API 
// là mô phỏng một cái hàm để thưc hiện gọi qua ủl mà backend trả về cho ta lấy đc dữ liệu 

function getComments() {
    // tại vì sao hc promise tại vì sau này hành động mà các banj lấy đươc dữ liệu qua api(url
    // thì nó sẽ là hành đọng xử lý bất đồng bộ trong js nên dungf promise 
    return new Promise(function (resolve) {
        // để mô phỏng internet bị chậm ta sẽ dùng setimout bởi vì lấy dữ liệu qua mạng nên có khi bị chậm
        setTimeout(function () {
            // hàm này hàm getComments nên ta resolve comments thằg này cũng mô phỏng
            resolve(comments)
        }, 1000)
    })
}
function getUsersByIds(userids) {
    return new Promise(function (resolve, reject) {
        var result = users.filter(function (user) {
            // nó sẽ kiểm tra thằng user.id này cos trong mảng userids này hay ko 
            return userids.includes(user.id)
        })
        setTimeout(function () {
            resolve(result)
        }, 1000)
    })
};

// để lấy dđc tên user thì ta bắt buộc phải lấy comments trước sau khi laays đc comments ta sẽ lấy được 
// user_id và từ ông này ta mới chọc vào users để lấy ra đc tên của user nên khi dùng calllback là nó lồng nhau
// dùng promise cũng lồng nhau trong trường hợp này 
getComments()
    .then(function (comments) {
        // thif như này vẫn còn thiếu tên mà như promise là việt thứ hai phải đợi việc 1 chạy xong và lấy giá trị của việc 1 để làm việc 2
        console.log(comments)
        var userids = comments.map(function (comment) {
            return comment.user_id;
        })
        // và bay giờ nhận đc cái mảh này ta sẽ viết ra 1 hàm để chọc vào ông users này và lấy ra đúng những cái ông user có cái id nằm trong cái list là 
        // userids là 1 và t2 thôi
        console.log(userids)
        return getUsersByIds(userids)
            // ko có thằng này thì nó trả về new promisevaf lọt vào .then ở phía ngoài 
            .then(function (users) {
                // khi return thì thằng .then bên  dưới nhận thằng này 
                // khi gặp return nó sẽ nhảy xuống then tiếp theo 
                console.log(users)
                console.log(comments)
                return {
                    users: users,
                    comments: comments
                };
            })
    })

    .then(function (data) {
        console.log(data)
        // và kết quả cuối cùng phải nhận đc dữ liệu bao gồm cả comment và tên 

        var commentBlock = document.getElementById('comment-block')
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });
            console.log(user)
            html += `<li>${user.name} : ${comment.content}</li> </br>`
        });
        commentBlock.innerHTML = html;
    })

// test thử có đc ko
// getUsersByIds([1])
// .then(function(users) {
//     console.log(users)
// })