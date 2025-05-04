// kiểu dữ liệu nguyên thủy nos sẽ luư giá trị vào vùng nhớ và ko cho phép sửa và nếu gán lại giá trị khác thì nó sẽ lưu vào vùng nhớ khác
var a=1;
a=2;
// để kiểm tra kiểu dữ liệu ta dùng như sau
console.log(typeof a);
// undefined type
// cos nghĩa là khai báo nó nhưng ko gán giá trị cho nó

function chane(){
    alert('yameta')
}
chane();
var chane1=function(){
    alert('yameta1')
}
chane1();
var age;
console.log(age);

// NULL
var isNull=null;
//Sympol
//unique duy nhất
var id=Symbol('id');
var id1=Symbol('id');
// nó sẽ khác nhau ra false
console.log(id===id1);

//function
var myfunctiom=function(){
    alert('hello con gasi');
}
// myfunctiom();

// //Object types
// key: value
var myObject={
    name:'son dang',
    age:18,
    adress:'ha noi',
    myfunctiom: function(){

    }
};
console.log('myobject',myObject);
var myArray=[
    'javascript',
    'PHP',
    'Ruby'
];
console.log(myArray);
