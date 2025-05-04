var r=[
    'a',
    'd'
]
console.log(r.concat(1))
var courses=[
    {
        id:1,
        nam:'JS',
        coin:100
    },
    {
        id:2,
        nam:'HTML,Css',
        coin:200
    },
    {
        id:3,
        nam:'Ruby',
        coin:220
    },
    {
        id:4,
        nam:'PHP',
        coin:200
    },
    {
        id:5,
        nam:'ReactJS',
        coin:480
    },
    
]
var i=0;
// course (currentValue) này lặp lần đầu tiên nó sẽ tra về phàn tử thứ nhất và thứ hai thì tra pt thứu 2 ..
function coinhandler(total,course){
    i++;
    console.log(i,total,course)
    return total+course.coin
}

//thằng tham số thứ hai là 0 nó không bắt buộc
// nếu mà ko có tham số 0 nó sẽ trả về 1 object khi mà ko t=có initial value là 0 đó thì nó sẽ trả về phần tử đầu tiên của mảng để  nó làm giá trị khởi tạo của mảng
// thì lúc đố course (currentValue) sẽ là giá trị phần ử thứ hai
// trong lần đầu tiên thì nó chỉ lấy đc 1 phần tử nhưng trong trươngf hợp này thì lần đauaf tiên trả về hai phần tử đầu tiên  thì nó sẽ giảm một lần chạy của functoin
//nó clặp có 4 lần còn có tham số 0 thì nó chạy 5 lần tại vì lần đầu tiên có tham số 0 thì thằng lần lặp đầu tiên nó chỉ lấy một phần tử đầu conf ko có tham số thì nó lấy hai 
//tính tổng coin nó là number mà ko có tham số nó trả về object nên phải truyền tham số number vào 
// vì thế tùy trường hợp mà truyền tham số 
var total=courses.reduce(coinhandler)
console.log(total)

// tiếp theo bài toán ko sử dụng tham số 0 
// bài toán tính tổng thằng này =reduce 
var numbers=[100,200,220,200,480]
var total1=numbers.reduce(function(total,number){
    // ko có tham số thì total nó sẽ trả về thằng đầu tiên là 100 
    console.table({
        'total':total,
        'number':number
    })
    return total+number;
}) //có tham số hay ko cúng ra đúng tại vì ko co tham số thì nó vẫn tra veef một number mảng là number ko như ở trên mảng là object
console.log(total1)


//Flat -"làm phẳng " mảng từ Depth array-"mảng sau"
// phân tử 0 là 1 1là2 2là[3,4] 5là6
// flat dùng để đưa tất cả các phần tử thành một mảng 
var depthArrray=[1,2,[3,4],5,6,[7,8,9]];
var a=[];
for (var i = 0; i < depthArrray.length; i++) {
    a=a.concat(depthArrray[i])
}
console.log(a)
var b=[];
for(var i=0;i<depthArrray.length; i++){
    if(Array.isArray(depthArrray[i])){
        for(var j=0;j<depthArrray[i].length; j++){
            b.push(depthArrray[i][j])
        }
    }
    else{
        b.push(depthArrray[i])
    }
    
}
console.log(b)


var flat=depthArrray.reduce(function(flatOutput,depthitem){
    return flatOutput.concat(depthitem)
},[])
// dùng reduce
// nếu mà ko sử dụng tham số thì nó lấy thằng đầu tiên của mảng làm giá trị khouwr tạo mà thằng đầu tiên nó là số ko đúng với bài toán là nhận về một mảng

var flatarray=depthArrray.reduce(function(flatOutput,depthitem){
    // console.log(depthitem)

    
    return flatOutput.concat(depthitem);
},[])
console.log(flatarray)

//bài tập láy ra các khóa hc đưa vào mộu mảng mới
var topics=[
    {
        topic1:'Front-end',
        courses:[
            {
                id:1,
                title:'HTML,CSS'
            },
            {
                id:2,
                title:'Javascript'
            }
        ]
    },
    {
        topic1:'Back-end',
        courses:[
            {
                id:1,
                title:'PHP'
            },
            {
                id:2,
                title:'NodeJS'
            }
        ]
    }
];
var newcourses=topics.reduce(function(courses,topic){
    return courses.concat(topic.courses)
},[])

// topic nayf trar veef phần tử qua mỗi lần lặp 
var c=0;
var newCourses=topics.reduce(function(courses,topic){
    c++;
    console.log(c)
    return courses.concat(topic.courses) ;
},[])
console.log(newCourses)
// for(var titlee of newCourses){
//     console.log(titlee.title)
// }
// for(var i=0;i<newCourses.length;i++){
//     console.log(newCourses[i].title)
// }
var htmls=newCourses.map(function(course){
    return `
        <div>
        <h2>${course.title}</h2>
        <p>ID:${course.id}</p>
        </div>
    `
})
// nó sẽ trả về cái mảng nên phải dùng join 
console.log(htmls)
console.log(htmls.join(''))
