// Destructuring là phân rã sử fungj ở object và array 
var array=['JS','rubty','PHP']
//  đây là cách là bt 
var a=array[0]
var b=array[1]
var n=array[2]
console.log(a,b,n)


// sau đay là Destructuring laf phân rã lấy trực tiếp lêmnt bên trong mà ko cần phải đi qa thằng aray như trên kia
// array dùng ngoặc vuông 
var [q,ư,r]=array;
console.log(q,ư,r)
// kiểu h muốn lấy đầu và cuối bỏ thằng ở giữa  
var [t,,y]=array;
console.log(t,y)
var [,,y]=array;
console.log(y)
// sau đây là hc Rest có nghĩa là laasy ra những phần còn lại
// bây giừo lấy g rồi là lấy ra thằng đầu tien rồi bay giờ muốn lấy nốt những thằg còn lại trừ JS
// ta sử dụng toán tử ba dấu ... 
var [g,]=array;
console.log(g)
var [l, ...rest]=array;
var [l,b, ...rest1]=array;
console.log(rest)
console.log(rest1)
// h xoas thằng rubty làm ko ddc chỉ áp dụng cho thằng object
var [,b, ...newob]=array;
console.log(newob)


var course={
    name:'js',
    price:1000,
    image:'anh'
}
// object phải gọi đúng muốn lấy name phải gọi name còn nếu đưa thằng kho có vào 
// hoặc ko đúng với key thì trả về undifined
// muốn lấy image thì phải thêm vào var {name,price,ame,image }=course
var {name,price,ame,image}=course
console.log(name,price,ame,image)



//rest lấy ra những thằng còn lại ngoài name
// var {name, ...rest} thì nó sẽ lấy thằng name ,rest nó lấy phần còn l;ại của trừ name khi console của name là nó in ra JS còn của rest thif nó in ra ~ thằng còn lại 
console.log(name)
var {name, ...rest}=course;
console.log(rest)


// hãy xóa 1 key của object mà ko dùng delete h xoa thằng name
// delete course.name
// console.log(course)

var {name, ...newObject}=course;
console.log(newObject)
// xoa thằng price 
var {price, ...newObject1}=course;
console.log(newObject1)

// khi object có 1 object con 
// h làm thế nào lấy ra đc thằng name của thàng child này 
var course1={
    name:'js',
    price:1000,
    image:'anh',
    child:{
        name:'PHP'
    },
    desciption:'value'
}
// var {name,child}=course1;
// // c1 
// console.log(child)
// console.log(child.name)

// để đổi tên ta dùng dấu : và đổi tên thằng này child:{name} là child:{name:ngu} khi đổi
//  rồi mà dùng name thì sẽ ko đc in ra unddifined
var {name:parentName,child:{name}}=course1;
// c2
console.log(parentName)
console.log(name)


// và tuy nhiên ông dessciption này ko có trong object kia
// khi mà desciption ko có trong object thì nó sẽ lấy giá trị dèault 
// desciption này khi nó có thì nó sẽ lấy thằng trong  pbject
var {name,desciption='dèault desciption'}=course1
// ta sẽ nhận về một undifined 
// và bay h chúng ta muốn khi ko có thì chúng ta lại có giá trị mặc định cách làm là dùng dấu = ở dòng trên 
console.log(desciption)

// th1 là sử dụng với Destructuring thì toán tử 3 chấm ấy là toán tửu Rest parameters
//th2 khi sử dụng trong việc định nghĩa tham số nó là toán tửu rest còn nhũng trường hợp khác là spreed
function logger(...params){
    // params nhận ra một cái array có số lượng phần tử tương ứng với đối só truyền vào
    console.log(params);
}
// thì a sẽ là số 1 còn params là những thằng còn lại 
// function logger(a,...params){
//     // params nhận ra một cái array có số lượng phần tử tương ứng với đối só truyền vào
//     console.log(params);
// }
// thì a sẽ là số 1 ba là số 2 còn params là những thằng còn lại 
// function logger(a,b,...params){
//     // params nhận ra một cái array có số lượng phần tử tương ứng với đối só truyền vào
//     console.log(params);
// }
console.log(logger(1,2,3,4,5,6,7,8,9));



// có thể dùng Destructuring với hàm 

// function logger1(obj){
//     // params nhận ra một cái array có số lượng phần tử tương ứng với đối só truyền vào
//     // viết như nầy khi có nhiều tham số sẽ luôn là obj. mấy cái đó thì sử dụng ngay Destructuring
//  trong tham số 
//     console.log(obj);
//     console.log(obj.name);
//     console.log(obj.price);
//     console.log(obj.desciption);
// }

// function logger1({name,price}){
// lấy ra nhưng phần conf lại thêm ,... tên biến 
function logger1({name1,long}){
    // params nhận ra một cái array có số lượng phần tử tương ứng với đối só truyền vào
    // viết như nầy khi có nhiều tham số sẽ luôn là obj. mấy cái đó thì sử dụng ngay Destructuring trong tham số 
    console.log(name1);
    console.log(long);
   
}
logger1({
    name1:['js'],
    long:'long'
    // price1:1000,
    // desciption:'desciption'
})
function logger12([name1,...rest]){
    // params nhận ra một cái array có số lượng phần tử tương ứng với đối só truyền vào
    // viết như nầy khi có nhiều tham số sẽ luôn là obj. mấy cái đó thì sử dụng ngay Destructuring trong tham số 
    console.log(rest);
    console.log(name1);
   
}
logger12(['long','ne'])

// mảng tường tự 
// function logger1([a,b,...rest]){
//     console.log(rest);
//     console.log(a);
//     console.log(b);
   
// }
// logger1(['js',1000,'desciption']
// )


// nếu array thì bỏ ...rest vào [] object thì P{} còn bt thì kocần 



// function test({name})