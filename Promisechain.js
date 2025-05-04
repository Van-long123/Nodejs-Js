// // trong bài này chúng ta sẽ cùng hc tính chất giúp promise này giải tquyeest các vấn đề khi sử dụng callback đó là callback hell 
// // callback hell có ngjaix là thàng ở trong nó phải chờ thằng phía ngoài nó phụ vào vì nó cần giữ liệu của thằng phía ngoài thằng bên ngoài chạy xong có giữ liệu thằng thứ hai này lấy giữ liệu mới chậy tiếp đc 

// // với ông promise có những thao tác phụ thuộc nhau cũng là cùng bài toán những cách viêtxs promise cung cấp một cách viết ko bị đi dần dần xuống nó chỉ chạy song song   nên nó giải quyết đc nỗi đâu trình bày code với thằng callback 


// // tính chất chuỗi (chain)
var promise = new Promise(
    function (resolve, reject) {
        resolve(1)
        // reject()
    }
);
// // khối code nối nhau như thế này thì đây chính là cái chuỗi tính chất chuỗi
// // khi mà trên resolve() thì nó in ra succes nhưng với tính chất chuỗi của promise thì khi resolve() thì
// // nó có thẻ có nhiều cái chuỗi .then 
// // khi resolce xong thì nó thực thi callback trong then thứ nhất in succes xong nó đến thực thi từng thằng /vẫn chưa giúp giải đc callback hell nhưng ta phải biết them là 
// // cái chuỗi thằng thứ nhất callback trong thằng then thứ nhát nó return cái gì thì nhận cái value đó ở thằng then thứ 2 
// // kết quả tra về của function đằng trước lại là tham số đầu vào của function đằng sau ví dụ ở chỗ love
// .then(function () {
//     console.log('1')
// })
// .then(function () {
//     console.log('2')
// })
// .then(function () {
//     console.log('3')
// })
// .catch(function () {
//     console.log('fail')

// })
// .finally(function () {
//     console.log('done')

// })

// // love 
// // sau đay là đọc code chạy vào ông đầu tiên ko in ra gì cả nhưng trả về 1 xong cái lọt vào ông then bên dưới in ra 1 trả về 2 
// // đúng với bài toán callback ông đằng sau caafn cái value của ông đằng trước đẻ  thực thi
// // và hàng trăm cái .then thì nó cũng chỉ chạy dọc thôi giống callback hell
// // mà ông promise này dễ nhìn dễ đc hơn 
// promise
// .then(function () {
//         // return 1; //nếu thằng này ko return gì cả thì thằng sau là undifined một function phải return
//         //trong cái function callback của thằng then này nếu nó ko return một promise thì nó sẽ chạy ngay thằng ở dưới
//         // return 1; này ko phải là return một Promise nên nó sẽ chạy ngay xuống dưới 
//         // nhưng nếu mà reutủn ra một promise thì nó sẽ chờ promise này giải quyét thì thằng dưới mới đc chạy và in ra undifined vì resolve thằng này
//         //  ko tra rveef dữ liệu gì
//         // kiểu đợi 3s sau thì thằng then kế tiếp phải chờ thằng Promise đàng trước đc giải quyết thì nó mới lọt vào 
        
//         // kiểu nó giống như promise nó lồng với nhau thôi thì thằng này vẫn có thể  .then
//         return new Promise(function(resolve,reject){
//             // setTimeout(resolve,3000)
//             // nó sẽ chờ 3s xong nó mới đi tới thằng tiếp theo còn bình thường 
//             // là nó sẽ in thừang khác xong 3s sau mới tới nó keieur bất đồng bộ
//             setTimeout(function(){
//                 resolve([1,2,3]);// nó réolve thành công và thằng dưới nhận dữ liêuh này 
//             },1000)

//         });
//     })
//     // thằng thứ nhất return 1 thì thàng đằng sau nhận 1 ở tham số console ra 1
//     .then(function (data) {
//         console.log(data)
//         return 2 
//     })
//     // ông đằng sau nhận cái data là 2 in ra là 2
//     .then(function (data) {
//         console.log(data)
//         return 3
//     })

//     .catch(function () {
//         console.log('fail')
    
//     })
//     .finally(function () {
//         console.log('done')
    
//     })



// bài táon in ra 1 sau 1s in ra 2 và 1s in ra số 3 
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve();// nó réolve thành công và thằng dưới nhận dữ liêuh này 
        },ms)
    })
}
// // var Promise1=new Promise(function(resolve,reject){
// //     resolve();
// // })
    
// // nó sẽ trả về một Promise nên .then
sleep(1000)
.then(function(){
    console.log(1)
    // nếu mà return ra một promise thì then liền kề phải chờ promise được giải quyết thì nó mới chạy nên là promise này ngủ mất một s
    //   nên .then đăng sau này phải mất 1s nó mới lọt vào
    return sleep(1000)
})
.then(function(){
    console.log(2)
    // nếu mà return ra một promise thì then liền kề phải chờ promise được giải quyết thì nó mới chạy 
    return sleep(1000)
})
.then(function(){
    console.log(3)
    // nếu mà return ra một promise thì then liền kề phải chờ promise được giải quyết thì nó mới chạy 
})

console.log('amen')

// // Callback hell:
// // Callback hell (địa ngục callback) là một tình huống xảy ra khi có nhiều tác vụ bất đồng bộ phụ thuộc vào nhau và sử dụng các callback 
// để xử lý kết quả. Khi có quá nhiều tác vụ và các callback lồng nhau, mã JavaScript có thể trở nên khó đọc, khó hiểu và khó bảo trì.
//  Callback hell thường xảy ra khi sử dụng các hàm bất đồng bộ như setTimeout, setInterval, hoặc các hàm gửi yêu cầu bất đồng bộ như XMLHttpRequest.
// // Promise giúp giải quyết vấn đề callback hell bằng cách sử dụng mô hình lập trình dựa trên Promise. 
//  Promise cung cấp một cách để xử lý các tác vụ bất đồng bộ một cách tuần tự và dễ đọc hơn.
// // // Promise giúp giải quyết vấn đề callback hell bằng cách sử dụng mô hình dựa trên Promise, giúp mã trở nên dễ đọc,
//  dễ hiểu và dễ quản lý hơn khi xử lý tác vụ bất đồng bộ.
// // // Callback Hell và Promise không giải quyết vấn đề đồng bộ, nhưng chúng giúp xử lý tác vụ bất đồng bộ một cách tuần tự 
// và tránh chặn luồng chính của JavaScript.