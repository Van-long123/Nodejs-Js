// <!-- spread(...) gọi nó là toán tử giải  -->
// để hợp nhất 2 cái mảng 2  cái spread 
var array1=['JS','Ruby','PHP']
var array2=['ReactJS','Dark']

// bài tập hàỹ tạo ra một array 3 nối array 1 và 2
// đây là code  bt 
// var array3=array2.concat(array1)
// console.log(array3)

// giải theo cách dùng spread 
 
// toán tử spread khi giải thằng này trước array or object thì nó sẽ bỏ đi dấu ngoặc 
// thif dấu ... nằm ở trước mảng hoặc object 
// nối nhưng đối tượng array2 đứng trước 
// var array3=[...array2];nó sẽ mất ngoặc [] của mảng array2 tương đương với var array3=['ReactJS','Dark'];
var array3=[...array2,...array1];// ttuonwg đương array3=['ReactJS','Dark','JS','Ruby','PHP'];

console.log(array3);
// thì trên là trong trường hợp nối mảng  còn có thể thống nhất hai object lại với nhau



var object1={name:'JS'}
var object2={price:1000}
var object3={...object1,...object2}
console.log(object3)
// ví dụ thực tếating
// suwr dungj api để lấy dữ liệu của hai trang khác nhau tức là hai địa chỉ khác nhau 
// một là lấy kháo hc ở 1 địa chỉ khac còn phần bài tập là lấy ở address khác 
// hầu hết trong trang của f8 đều dùng defaultConfig để gọi apiurrl để lấy thông tin khóa học 
// nhưng phần bàoi tapaj lại ở một đianj chit khác
var defaultConfig={
    apiURL:'http://domain-trang-khoa-hoc',
    apiCersion:'V1',
    other:'orther'
}
// và muốn thừa hưởng lại tất cả cònig của thằng defaultConfig vì nó giống nhau hai trang giống nhau nhưng khác api chắc vậy
// nhưng khác apiURL vì nó đc gán lại
var exerciseConfig={
    ...defaultConfig,
    apiURL:'http://domain-trang-bai-tap',
}

// trường hợp cuối cùng dùng toán tử spread truyền thma số cho hàm 

var a=['JS','PHP','Ruby']
// dùng thằng rest ở tham số là lấy những thằng còn lại 
function logger(...rest){
    // trả về 1 cái mảng 
    for(var i =0;i<rest.length;i++){
        console.log(rest[i])
    }
    console.log(rest)
}
// cách bình thưường 
// logger(1,2,3)
// dùng spread 
logger(...a)

// // hai thằng cùng tên thì nó sẽ lấy thằng đc định nghĩa sau 
// function a(){
//     console.log('amen')
// }
// function a(){
//     console.log('a')
// }
// console.log(a)

// khi dùng rest khi dùng Destructuring và tham số
// còn spread trong đối số và dùng nó giải một cái array,object thì đó là spread


