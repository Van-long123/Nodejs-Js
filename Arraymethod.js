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
var a={
    nam:'ngo ko'
}
// sử dụng để duyệt qua từng phần tử của mảng 
// này đc gọi là callback /
courses.forEach(function(cource,index){
    console.log(index,cource)
});



//every()
// dùng để kiểm tra tất cả các phần tử của một mảng phải thõa mãn một điêu kiện gì đó/
// bài toán kiểm tra xem tất cả các phần tử có phải là khóa hc miễn phí hay ko 
// nó sẽ về boolean 
// nếu tất cả các khóa học đêù miễn phí thì nó sẽ trả về true 
// và nó sẽ lặp qua từng phân tử của mảng mỗi lần lặp qua một phần tử thì nó sẽ gọi lại cái hàm ta tryền vào 
//và nó truyeenf cho hàm tham số cource phần tử 
var isfree=courses.every(function(cource,index){
    // thằg phânn tử đầu tiên có giá nên trả về false và ngừng lại
    //thằndg đầu tiên mà đúng(true) thì nó mới kiểm tra thằng tiếp theo
    return cource.coin===0;
});
console.log(isfree)

//some() ngược lại với every
// chỉ cần một phần tử trong mảng thõa mản điều kiện thì tra về đúng(true)
// nó sẽ dừng vòng lặp ngay khi nó thỏa điều kiện 
var isfree1=courses.some(function(cource,index){
    console.log(index)
    // nó tới vị trí thưs 3 thì nó thấy điều kiện đúng nên nó dugw luôn 
    return cource.coin===400;
});
console.log(isfree1)


//find() nếu có nó sẽ trả về phần tử 
// nó sẽ lặp qua từng phần tử và mỗi lần lặp sẽ gọi tới cái hàm này và nó trả về phần tử 
var isfree2=courses.find(function(cource,index){
    // console.log(index)
    // phần tử nào return true nó sẽ lấy phần tử đó và gán lại vào isfree2 và khi nó tìm thấy nó sẽ ngưng lại
    // ko có ông nào thõa mãn thì nó trả về undefined
    // giống như trong danh bạ nhập tên vào thì nó sedx hện ra số điênj thoại /
    // find này nó sẽ trả về một phần tử thôi vì khi tói phần tử mà thõa mãn điều kiện nó sẽ trả phần tử về và dừng timf mặc dù dưới nó có một thằng Ruby khác
    return cource.nam==='Ruby';
});
console.log(isfree2)

var dung=courses.filter(function(course,index){
    return course.nam==='Ruby'
})
console.log(dung)

// filter() nó giống thằng find khác là nó sẽ trả về tất cả những phần tư thoax mãn

console.log('filter')


var isfree21=courses.filter(function(cource,index){
    // nó sẽ về thằng nào thõa mãn điều kiện có nam là Ruby 
    // nó sẽ tìm kiếm hết danh sách 
    return cource.nam==='Ruby';
});
console.log(isfree21)
