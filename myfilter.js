var courses=[
    {
        id:1,
        nam:'JS',
        coin:680
    },
    {
        id:2,
        nam:'HTML,Css',
        coin:860
    },
    {
        id:3,
        nam:'Ruby',
        coin:100
    },
    {
        id:4,
        nam:'PHP',
        coin:200
    },
    {
        id:5,
        nam:'Ruby',
        coin:480
    },
]
// for(var key in courses){
//     console.log(courses[key].coin)
    
// }
// for(var value of courses){
//     console.log(value)
// }
// find() sẽ trả về phần tử đầu tiên tìm đc còn filter() trả về tất cả element thõa mản điều kiện và đưa vào một mảng mới
// dùng for này ko dùng for kia vì nếu nó có một 100 phần tử mà chỉ có 5 phần tử thực thì thằng for(var i=0) này thì nó ssex duyệt 100 lần     // còn thằng dưới này chỉ duyêtj qua những phần tử thực
    //   this chính là thàng gọi tới
Array.prototype.filter2=function(callback){
    var a=[];
    for(var key in this){
        // dùng để lấy những phàn tử gần nhất ko là nó láy key củafilter2 trong protoype  
        if(this.hasOwnProperty(key)){
            var result=callback(this[key],key)
        if(result){
            a.push(this[key]);
        }
        }
    }
    return a;
}
var filtercourse=courses.filter2(function(course,index){
    return course.coin > 700;
})
console.log(filtercourse)

var filtercourse1=courses.filter2(function(course,index){
    return course.coin > 700;
})
console.log(filtercourse1)




Array.prototype.filter12=function(callback)
{
    var output=[];
    for(var key in this){
        var result=callback(this[key])
        if(this.hasOwnProperty(key)){
            if(result===true){
                output.push(this[key])
            }
        }
    }
    return output;
}
var filter=courses.filter(function(cource){
    return cource.coin>700
})
console.log(filter)




