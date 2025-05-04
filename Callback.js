//laf hàm được truyền qua đối số 
//khi được gọi lại
// có hai điều kiện 
// 1 là hàm
//2 được tuyền qua đối số
function myfunction(param){
    //typeof sẽ là function 'function'
    console.log(typeof param)
    // kiểm tra chắc chắn param là function thì mới thưucj thi 
   //phải kiểm tra nó phải function hay ko tại vì param(học lập trình) này là một function mà lỡ nó truyền một số một chuỗi .. thì nó sẽ bị lỗi
    if(typeof param==='function'){
    param('học lập trình');
        
    }
};
function mycallback(value){
    console.log( 'value:',value)
    
};
// thay vì gọi như này ta gọi thằng qua bên function myfunction
// mycallback(123)
// h mycallback tahwfng này la callback 
myfunction(mycallback) 

// phần 2
console.log('phần 2')
var courses=[
    'JS',
    'PHP',
    'Ruby'
]
// map() là một function foreach every reduce... cũng thế
// function myfunction(course){

// }
// courses.map(myfunction)
var  newcoursehtml=courses.map(function(course){
    return `<h2>${course}</h2>`;
})
console.log(newcoursehtml.join(''))

var tra=courses.map(function(course){
    return `<h2>${course}</h2>`
})
console.log(tra.join(''))
// function map(){

// }
// var map=function(){

// }
Array.prototype.map1=function(callback){
    var output=[];
    for(var i in this){
        // if(this.hasOwnProperty(i)){
            var result=callback(courses[i],i)
            output.push(result);
        // }
        
    }
    return output;
}
var htmlss=courses.map1(function(course,index){
    return `<h2>${course}</h2>`
})
console.log(htmlss.join(''))
// tự định nghĩa map 
/**Đoạn mã này định nghĩa một phương thức mới có tên map2 cho đối tượng Array.prototype. 
 * Việc định nghĩa phương thức này sẽ cho phép ta sử dụng phương thức map2() trên bất kỳ 
 * đối tượng nào là một mảng.

    map nó sẽ lặp qua các phần tử của array và mỗi lần lặp qua nó sẽ gọi lại phương thức đc truyền vào
*/
Array.prototype.map2=function(callback){
    // đây là cách để trả về html1 
    var output=[];
    // this chính là cái thừang gọi tới phương thức này 
    console.log(this);
    for(var i=0;i<this.length;i++){
        var result=callback(this[i],i);
        console.log('result',result)
        //output.push(result)
        output=output.concat(result)
    }
    return output;
}

var courses1=[
    'JS',
    'PHP',
    'Ruby'
]
var html1=courses1.map2(function(course,index){
    // console.log(index,course)
    // nhưng nó phải trả về thawfng html1 này còn h nó trả  lên lại ở trên pt map2
    return `<h2>${course}</h2>`;
});
console.log(html1.join(' '))




