var courses=[
    {
        id:1,
        nam:'JS',
        coin:680,
        // tương trưng cho người hc viên đã hc xong này hay chưa nếu =true là đã hc xxong
        isFinish:true
    },
    {
        id:2,
        nam:'HTML,Css',
        coin:860,
        isFinish:false
    },
    {
        id:3,
        nam:'Ruby',
        coin:980,
        isFinish:false
    },
   
]
console.log('some')
// bài toán kiểm tra xem người hc viên đã học xong tối thiểu mộtk khóa hc hay chưa
var somecouse=courses.some(function(cource,index){
    console.log(index)
    return cource.isFinish===false;
})
console.log(somecouse)

// định nghĩa 
Array.prototype.some2=function(callback){
    var output=false;
    for(var key in this){
        if(this.hasOwnProperty(key)){
            var result=callback(this[key],key)
            // true nó mơi hoạt đọng trong if  false thì ko
            if(result){
                return true;
                // or 
                // output =true; break; 
            }
        }
    }
    //return false
    return output;
}
var somecouse1=courses.some2(function(cource,index){
    return cource.isFinish===true;
})
console.log(somecouse1)
