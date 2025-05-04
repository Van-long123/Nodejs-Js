// Promise 

// muốn hiểu đc nó cần phải biết 
//Sync(đồng bộ)
//Async(bất đồng bộ)
//nỗi đau
//lý thuyết, cách hoạt động 
//thực hành,ví dụ

// bài này hc Sync Async
// JS là ngôn ngữ đồng bộ nhưng nó lại có thao tác bất đồng bộ
// nó là ngôn ngữ đơn luồng nó sẽ chạy theo kiểu từ trên xuống nhưng lại có những cái bất đồng bộ
//khóa nâng cao sẽ hc

// đồng bộ là thằng phía trước chạy trước thằg sau chạy sau 
// in ra 1 rồi tới 2 
console.log(1)
console.log(2)

// bất đồng bộ 
// thằng 4 in ra trước xong in ra 3 là bất đồng bộ 
// theo tư diuy đồng bộ thằng nào in ra trước thì đúng?
// thằng số 3 in ra trước là  tư diuy đồng bộ
//sleep khi chạy đến đây thì sleep sau 1s in ra 3 sau đó in ra 4 đó là tư duy đồng bộ
setTimeout(function(){
    console.log(3)
},1000)
console.log(4)


// trong js có những thằng bất đồng bộ Asyns là setTimeout setinterval,fetch(gọi cái yêu cầu qua
//  internet qua mạng nên ko biết nào gửi xong vì do mạng sẻver kkhi nào xong đc js cung cấp phương 
//  pháp mấy thằng ngoài sau cũng vậy khi nào xong thì js sẽ cung caaps một cái khái niệm là callback 
//    ),XMLHttpRequest,đọc file(trong word) như() ,reques animation frame khi sử dụng mấy thằng này sẽ
//     bij bất đồng bộ
// setTimeout có function(){
//     console.log(3)
// },1000) này là call back đây
// nếu mà ko có callback thì chúng ta biết nó xong ở đâu  thằng ở trên thì nó chạy sau 1s nó sẽ thực thi callback nên 
// chúng ta biết nếu ko có thì sao làm đc sau 1s nó in ra
// nên js có callback để xử lý thao tác bất đồng bộ /
// sang video sau sẽ hc nỗi đâu của việc sử dụng callback này để hiểu đc promise sinh ra để giải quyết vaanx đề gì/
// js có những sxuwr lý bất đồng bộ vị vậy sử dungj callback để xử lý những thao tác bất đồng  bộ

// và function(){
//     console.log(3)
// },1000) thao tác bất đôgf bộ này hiện nay nó đang sử dụng callback có thể tạo ra một vấn đề nào đó nên phải hc promise để giải quyết




// nỗi đau là callback hell và Pyramif of doom(tổng quan khiviết code)
// callback hell(search mạng là biết) có nghĩa là callback lồng callback vif thế nên nó sinh ra promise để giải quyết
//   bài toán 1s sinh ra số 1 1s sinh ra số 2 và 1s sinh ra số 3 ko sử dụng setinterval


// nếu gặp vấn dềduxw liệu nó ràng buộc nhau sinh ra callbackhell nên là ông promise giải quết nỗi đâu này 
setTimeout(function(){
    // kiểu đợi 1s in thằg 1 xong đọc tói thằng tiếp theo đợi 1s in thằg 2 
    //hãy tưởng tượng để chạy việc thứ 2 cần dữ lieeuj trả về tứ viêc 1 trả về
    console.log('1');// việc 1 //chạy việc 1 xong lấy dữ liệu việc 1 dùng trong viẹc 2
    setTimeout(function(){//kiểu đòi hỏi việc 1 xong thì lấy giữ liệu việc 1 dùng ở trong viec 2
        console.log('2');// việc 2 kiểu việc 2 này xong thì lấy giữ liệu việc 2 dùng ở trong viec 3
    
     // và thằng số 3 chạy đc lại phải cần dự liệu trả về từ thằng thứ hai thằng thứ 2 /
     setTimeout(function(){
        console.log('3');
},1000)
},1000)
   
},1000)

// dưới này sẽ lỗi là sau 1 s nó sẽ in ra cùng một lúc 3 thằng /
// setTimeout(function(){//kiểu đòi hỏi việc 1 xong thì lấy giữ liệu việc 1 dùng ở trong viec 2
//     console.log('1');// việc 2 kiểu việc 2 này xong thì lấy giữ liệu việc 2 dùng ở trong viec 3
// },1000)
// setTimeout(function(){//kiểu đòi hỏi việc 1 xong thì lấy giữ liệu việc 1 dùng ở trong viec 2
//     console.log('1');// việc 2 kiểu việc 2 này xong thì lấy giữ liệu việc 2 dùng ở trong viec 3
// },1000)
// setTimeout(function(){//kiểu đòi hỏi việc 1 xong thì lấy giữ liệu việc 1 dùng ở trong viec 2
//     console.log('1');// việc 2 kiểu việc 2 này xong thì lấy giữ liệu việc 2 dùng ở trong viec 3
// },1000)



