var courses=[
    {
        id:1,
        nam:'JS',
        coin:680,
        // tương trưng cho người hc viên đã hc xong này hay chưa nếu =true là đã hc xxong
        isFinish:false
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
        isFinish:true
    },
   
]
// bài toán là tất cả học viên phải hc hết 3 khóa hc trên là tất cả phai true 
console.log('every')
var everycouse=courses.every(function(cource,index){
    console.log(index)
    return cource.isFinish;
})
console.log(everycouse)



Array.prototype.every2=function(callback){
    var output=true;
    for(var key in this){
        if(this.hasOwnProperty(key)){
            var result=callback(this[key],key)
            // true nó mơi hoạt đọng trong if  false thì ko
            // if(result){
            //     output=true;
            // }
            // else{
            //     return false;
            // }
            // or đăng cấp hơn 
            if(!result){
                output=false;
                break;
            }
        }
    }
    return output;
}
var everycouse1=courses.every2(function(cource,index){
    return cource.isFinish===true;
    // ttaats cả khóa hc lớn hơn 500
    // return cource.coin>500;
    //riêng trường hợp này thì như  return cource.isFinish; này cũng đc
})
console.log(everycouse1)




