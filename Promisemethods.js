// trong bài này hc chuỗi sẽ bị reject trong đoạn .then 
// còn bay giờ thì tất cả các thằng ở duói đều resolve vì slepp mặc định để resolve 
// nên h mình reject ở giưax đường thử 

// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve();// nó réolve thành công và thằng dưới nhận dữ liêuh này 
//         }, ms)
//     })
// }
// var a=new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve();// nó réolve thành công và thằng dưới nhận dữ liêuh này 
//     }, ms)
// })
// sleep(1000)
//     .then(function () {
//         console.log(1)

//         return sleep(1000)
//     })
//     .then(function () {
//         console.log(2)
//         // thì nó sẽ in 1 xong tới 2 và gặp lỗi Uncaught (in promise) undefined lỗi  này là chưa có thằng catch chưa bắt lỗi
//         //nếu mà  trong quas trình thực hiện công viêch này gặp promise bị reject ko chạy cuống mấy thằng còn lại
//         //và khi nó bị reject như vậy nó lọt vào thằng catch ở chuỗi bên ngoài
//         return new Promise(function (resolve, reject) {
//             reject('có lỗi ')
//         })
//     })
//     .then(function () {
//         console.log(3)
//         return sleep(1000)
//     })
//     .then(function () {
//         console.log(4)
//     })
//     .catch(function (erro) {
//         console.log(erro)

//     })





// var promise=new Promise(function(resolve,reject){
//     // resolve('succes')
//     reject('lỗi')
// })

// promise
// .then(function(result){
//     console.log(result)
// })
// .catch(function(result){
//     console.log(result)
// })


// chúng ta sẽ hc thêm promise.resolve, promise.reject, promise.all 
//thư viên để làm 1 việc gì đó thì nó có 1 qui ước rồi là đầu ra của nó output nó luôn luôn là một promise
// khi bạn sử dụng cách viết new Promise thì có Logic ở trong này tức là có những xử lý logic ở trong này
//và h nếu có một promise xác đinh nó thành công hay thất bại luôn thì ko cần new promise
// có thể tạo nhanh bẳng cách 

// Promise.resolve() tra về một promise ở trạng thais thành công luôn luôn thyanfh công 
//  như thằg này thì ko bao giừo chạy vào catch chừ khi trong thằng then này return ra một promise bị reject thì nó mới lọt vào thôi 
// var promise=Promise.resolve('succes');


// var promise = Promise.resolve('lỗi');
// promise
//     .then(function (result) {
//         console.log(result)
//         // thằng này trả về một cái gì đó thì thằng thứ hai mới lấy và thực thi 
//         // nếu trra về một thằng ko phải promise thì nó xuống ngày thằng dưới còn trả về một promise thì nó thực thi xong rồi mới xuống thưanfg dưới /
//         return 'amen'
//     })
//     .then(function (result) {
//         console.log(result)
//     })
//     .catch(function (result) {
//         console.log(result)
//     })


// Promise.all giúp chạy song song các promise 
// giả sử các logic nó đều là bất đồng bộ nhưng ko phụ thuộc nhau nên chũng ta chạy song song
// ví dụ cáci luồng thú nhất nó chạy  luồng thứu hai chạy nhưng ko phụ thuộc với nhau tuy nhiên 
// muốn lấy kết quả thằng thứ nhất thằng thứ hai

// để là một cái viêcj gì đó thì chạy song song cả hai thằng và cùng nhận kết quả làm một việc
//  gì đó chung thì dùng promise.all này

// nếu bay giờ chạy tuàn tự chạy nối đuôi nhau thì mất tổng là 7s chayj cungf một thời điểm thì
//  mất 5s


// var promise1=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([1])
//     },2000)
// })
// .then(function (result) {
//             console.log(result)
//         })

// var promise2=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([2,3])
//     },5000)
// });
// promise2
// .then(function (result) {
//     console.log(result)
// })


// bài toán là hợp nhất 2 cái mảng này lại là [1] và [2,3] hợp nhất thành cái mảng cuối cùng output

var promise1=new Promise(function(resolve){
    setTimeout(function(){ 
        resolve([1])
    },2000)
})
var promise2=new Promise(function(resolve){
    setTimeout(function(){
        resolve([2,3])
    },5000)
})
// // và lỡ như có một tahwfng promise ko thành công thì sao 
// // chỉ cần một promise bị lỗi thì tất cả promise ở trong all cho dù promise xong hayko xong
//  thì nó cũng ko care nữa nó sẽ lọt vào catch của thằng promise.all chỉ cần một thằng reject nó sẽ
//   hỏng hết việc  
// // chúng ta có thể tận dụng nó là đồng thời có nhiều thao tác tuy nó ko phụ thuộc  nhau nhưng 
// nó cần tất cả cùng xong thì nó mới làm việc đó nên tận dụng promise.all này chỉ cần một thằng promise 
// này reject thì chúng ta sẽ ko làm việc đó nữa và thông báo lỗi ra                                                            
// var promise2=Promise.reject('có lỗi')


// // rất hữu dụng để chạy song sonmg promise và nhận đồng thời kết quả trả về 
// // kiểu nó trả song song cùng lúc khi thằng 2s xong đợi tiếp thằng 5s xong mới chạy vào then 
// // thằng này nos sẽ trả về một promise 
// //trả về một cái mảng và trong mảng chứa những kết quả tương ứng với promise1 và promise2
// Promise.all([promise1,promise2])
// // // kết quả nhận đc thằng .then này laf mảng khi mà cả hai tahwfng promise đều xong khi mà tất cả promise trong cái mảng đầu vào của thằng .all này xong mới lọt vào .then           
// .then(function(result){
//     var result1=result[0]
//     var result2=result[1]

//     console.log(result)
//     console.log(result1)
//     console.log(result1.concat(result2)) 
// })
// // cách viết nhanh hơn của ES 6
// // .then(function([result1,result2]){
// //     console.log(result1.concat(result2)) 
// // })

// .catch(function(eror){
//     console.log(eror)
// })







var a=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve([1])
    }, 0.1);
})
var b=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve([2,3])
    }, 0.1);
})
Promise.all([a,b])
.then(function(result){
    var a=result[0];
    var b=result[1];
    var c=a.concat(b)
    console.log(a)
    console.log(b)
    console.log(c)
})
.catch(function(ero){
    console.log(ero)
})