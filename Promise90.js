// Promise là 


// Promise đây chính là một object contructor 
// callback nếu ko gặp hell thì dùng nó rất gọn gàng khi nào mà hell rồi thì mới dùng promise để gọn gàng
// tạo ra một đối tượng Promise từ object contructor  gán vào promeise
// promise truyển vào một function 

//bước 1 new Promise
//2 tạo ra thằng  Executor trong thằng này phải gọi 1 trong hai thằng resolve reject nếu mà ko gọi thì Promise sẽ bị treo nó sẽ ko thành công và ko thất bại nên nó sẽ  treo
// nên sinh ra một ván đề là Memory leak


//thằng Promise có ba trạng thái 
// thứ 1.pendding (là nó đang chờ thành công hay thất bại ko reselve ko reject thì nó ở trạng thái này trạng thái này đang rò rỉ bộ nhớ nếu nó  cué chạy mãi   )
// còn nếu mà có gọi là resolve() thì nó là trạng thái thứu 2 .fullfilled     nó ở trạng thái thănhf công nó lọt vào then và finally
//nếu nó ở trạng thái reject thì nó là trạng thái thứu 3.Rejected


//khi tạo một chuỗi hoặc một số cần phair truyền vào một contructor của đối tượng của object contructor một cái value gì đó trường hợp này là hàm
// nếu là số thì var promise = new Number(1) còn chuỗi thì truyền vào chuỗi
// var promise123 = new Number(1) 
// new promise number string thì đc còn mà new một thàng mà ta tự đặt tên thì nó sẽ báo lỗi qua bên objectcontructor coi 
var promise = new Promise(
    //Executor có nghĩa là function này sẽ đc thực thi khi gọi tới Promise 
    // có nghĩa là khi gọi new Promise thì ngày lập tức gọi function này nó gọi tới function này trước ngay cả khi 
    // nhận được đối ượng Promise tại thằng promise này 
    //trả veef hai tham sôs đều là hàm
    
    function (resolve, reject) {
        //logic
        //khi thành công gọi tới resolve() giải quyết đc vấn đề  (chấp thuận)
        //     thất bại           reject                  ko giải quêyst đc vấn đề (từ chối)


        //fake callapi muoons hiển thị một cái gì đó nó gọi lên  url và url đó trả về nhưng giuẽ liệu từ những giữ liêu đó ta resolve  dữ liệu đó
        // ví dụ như nhận về 1 object khóa hc ta resolve về mảng đó               
        resolve()
        // reject()
    }
);
console.log(promise)
var a=new Number(1)
console.log(a)
// cách sử dụng nó như sau promise nó sẽ trả về ba phương thức thường hay sử dụng là 
// .then(function(){

// })   
// .catch(function(){

// })   
// .finally(function(){

// }) //ba tahwfng này đều  nhận một callback
// và khi nào thì callback của những thàng này thực thi 

// đầu tiên trong cái Executor này nếu mà resolve được gọi thì callback cảu thằg then này đc gọi 
// khi mà reject này được gọi thì callback của catch sẽ đc gọi 

// và khi một trong resolve hoặc reject đc gọi thì callback của finally này đc gọi 

// xét về mặt ý nghĩa thằng promise sinh ra với ttuw tưởng giải quyết 1 vấn đề nào đó trong quá trinhg lập trình bất đồng bộ

//nếu chấp thuận thì nó thành công thì lọt vào then còn từ chối thì lọt vào catch và khi có lỗi xẩy ra là khi ông reject thất bại thì trả về cái lỗi trong cặp ngoặc reject() này
// thì catch sẽ bắt đc trạng thái lỗi và ta sẽ xử lý thông báo lỗi cho người dùng

// khi load một cái gì đố thì để cột loading quay trước khi thực hiện promise này thì ta show loading quay còn finally này khi xong ko cần biết thành công hay thất bại 
//    thì ta sẽ ẩn cái loading 



promise
    .then(function () {
        console.log('succes')
    })
    .catch(function () {
        console.log('fail')

    })
    .finally(function () {
        console.log('done')

    })


// cách trả dữ liệu từ Executor ra thằng then catch này 
var promise1 = new Promise(
    //Executor có nghĩa là function này sẽ đc thực thi khi gọi tới Promise 
    // có nghĩa là khi gọi new Promise thì ngày lập tức gọi function này nó gọi tới function này trước ngay cả khi nhận được đối ượng Promise tại thằng promise này 
    //trả veef hai tham sôs đều là hàm
    function (resolve, reject) {
        //logic
        //khi thành công gọi tới resolve() giải quyết đc vấn đề  (chấp thuận)
        //     thất bại           reject                  ko giải quêyst đc vấn đề (từ chối)



        // resolve()
        // reject()
        //fake callapi muoons hiển thị một cái gì đó nó gọi lên  url và url đó trả về nhưng giuẽ liệu từ những giữ liêu đó ta resolve  dữ liệu đó
        // ví dụ như nhận về 1 object khóa hc ta resolve về mảng đó               
        // resolve({
        //     id: 1,
        //     name: 'JS'
        // })

        reject('có lỗi');
    }
);

promise1
    .then(function (course) {
        console.log(course)
    })
    // Uncaught (in promise) có lỗi 
    //nếu mà ko bắt lỗi thì hiênh lỗi này ít nhất khi sử dụng omise phải có then và catch
    .catch(function (erro) {
        console.log(erro)

    })
    .finally(function () {
        console.log('done')

    })



    // tiêps theo hc cách trả lời khi phỏng vấn 
    // ví em có nắm về khí niệm promise ko :thứ nhất promise là khái niệm sinh ra để xử lý các thao tác bất đồng bộ trước 
    // khi có promise ta thường sử dụng callback và callback sẽ xảy ra một vấn đề là callback hell thì code nó sẽ bị khó nhìn bị
    //  rối dùng promise để khắc phục tình trạng callbackhell
    // giúp ta viét code dễ đọc dễ hiểu hơn 
    // để tạo ra một promise sử dụng từ khóa new với Promise và trong contructor của nó truyền vào một Excute function 
// trong excute nhận hai tham số dạng hàm là reject và resolve 
// sử dungj qua những phương thức then catch  hai thằng nhận mọt callback pfunction thực thi thất bại hoặc thành công 

var a = new Promise(
    function(resolve,reject) {
        setTimeout(() => {
            reject('long');
        }, 2000);
    }
)

a
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log('amen')
})

