// sử dụng phương thứuc map khi mà muốn chỉnh sửa thay đổi element của một array
var courses=[
    {
        id:1,
        nam:'JS',
        coin:250
    },
    {
        id:2,
        nam:'HTML,Css',
        coin:0
    },
    {
        id:3,
        nam:'Ruby',
        coin:0
    },
    {
        id:4,
        nam:'PHP',
        coin:400
    },
    {
        id:5,
        nam:'ReactJS',
        coin:500
    },
    {
        id:6,
        nam:'Ruby',
        coin:10
    },
]

// bài toán thây đổi tất cả cái tên của phân tử trong courses
//  thêm là  nam:'Khoa hoc:JS', và một coinText :'Gia:0'
//map() là phương thức
// đôi tượng courses PT map này nó sẽ trả về mảng mới có tên newcourses 
//trong thằng map thực hiện vòng lặp nó lặp từng phần tử mỗi lần lặp nos sẽ gọi lại cái function()
// var coursehadler=function(course){
//     console.log(course)
// }
// var newcourses= courses.map(coursehadler)


// nó sẽ lặp từng phần tử và lưu vào course lặp lần thứu 1 thằng pt
//  thứ nhất đc lưu vào couse in ra xong tới thằg tiếp theo 
// originArray này nó sẽ trả về array gốc ko có cũng đc
var newcourses= courses.map(function(course,index,originArray){
    console.log(course)
    // thì nó sẻ trả về mảng mới đc lấy dữ liệu từ course
    // return course;//1
    // nó sẽ lặp phần tử thứ nhất xong nó trả về newcourses vào mảng thứ 0 
    return {//2
        
        index:index,
        id:course.id,
        nam:`Khoa Hoc:${course.nam}`,
        coin:course.coin,
        cointext:`Gia:${course.coin}`,
        originArray:originArray,
        // nãy cũng giống ở trên,
        originArray1:course
    }
    // nếu return 123; thì mảng mới là [123,123 ...]
    // tóm lại nếu nó return về cái gif thì mảng nó sẽ nhân đc cái đó
});
var newcouser=courses.map(function(course,index){
    // trar về một object 
    return {nam:` <h2>${course.nam}</h2>`};
})
console.log(newcouser)//2

// console.log(newcourses)//1
 console.log(newcourses)//2

//  bài toán tiếp theo láy ra tất cả các tên của khóa học lưu vào mảng mới 
console.log("BÀI TOÁN")
var newcourses1= courses.map(function(course,index){
    // return course.nam;
    // này dùng để kết hợp với html css 
    // biến thằng này thành String dùng join để nối 
    return `<h2>${course.nam}</h2>`
    // return {
    //     nam:`Khoa Hoc:${course.nam}`,
    // }
});
// console.log(newcourses1)
// nối chuuỗi rỗng nó sẽ tạo ra String 
// biến dấu phảy thành '' 
// sẽ ra một mã html bình thường nên dùng mã này dùng để hiển thị ra view người dùng nhìn trên website 
console.log(newcourses1.join(''))


