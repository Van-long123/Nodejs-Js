//FOR/IN
// dùng vòng lặp này lấy ra key của đối tương
var myInfo={
    name:'pham long',
    // 'name':'pham long',
    age:18,
    address:'hoi an '
}

// object  có bao nhiêu key thf vòng for chạy bấy nhiêu lần 
// mỗi lần chạy gán giá trị key vào i dưới dạng chuôix 
// nếu mà gán giá trị phải là myInfo[i] 
for(var i in myInfo){
    console.log(i);
    // console.log(typeof i);
    console.log(myInfo[i]);
}

//array
var lg=[
    'JS',
    'PHP',
    'ruby'
]

for(var i in lg){
    // mảng nó sẽ in ra số còn object nó sẽ in ra key
    console.log(i);
    console.log(lg[i]);
}
// for(var i=0;i<lg.length;i++){
//     console.log(lg[i]);
// }


//string 

// console.log(myString.indexOf('a'))
// console.log(myString[1])
// console.log('\n\n');
// for(var i in myString){
//     console.log(i);

//     console.log(myString[i]);
// }




//FOR/OF 
// dùng đẻ lấy phần tử của một mảng ko sử dụng đc với object muốn biến mổ chút 
console.log('FOR/OF')

var languages= [
    'JS',
    'PHP',
    'ruby'
]

for(var value of languages){
    console.log(value)
}
//chuỗi
var languages1='Javasript';

for(var value of languages1){
    console.log(value)
}

//object
var myinfor= {
    name:'JS',
    age:18,
    address:'ruby'
}
// nó sẽ báo lỗi cách để sử dụng khác thằg này để lấy ra một giá trị của object
// for(var value of myinfor){
//     console.log(value)
// }

// cách đây
// nó sẽ trả về một mảng 
console.log(Object.keys(myinfor));

// như này console nó sẽ in ra name và age 
for(var value of Object.keys(myinfor)){
    console.log(value)
    console.log(myinfor[value])
}

// đơn giản hơn nữa 
// nó sẽ trả về một mảng các value 
console.log(Object.values(myinfor));
// nó sẽ trả vêf value luôn 
for(var value of Object.values(myinfor)){
    console.log(value)

}


function run(object) {
    var result=[];
    for(var value in object){
        result.push(`Thuộc tính ${value} có giá trị ${object[value]}`)
    }
    return result;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]