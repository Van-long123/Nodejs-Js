var array=['a','b','c','a','b','c'] 
// trong javácript nó một thằng set luôn là các phần tử của nó chỉ tồn tại một 
// này là nó sẽ nhận về một cái set chớ ko phải array 
console.log(new Set(array))
// [...] dùng để thế {}
console.log([...new Set(array)])
//tất cả đệ quy đều dùng vòng lập giải đc
// đệ quy là nó sẽ gọi lại chính nó

/**xác định được điểm dừng 
 * tạo điểm dừng 
 */


function cowntDown(num){
    if(num>0){
        console.log(num)
        return cowntDown(num-1);
    }
    else{
        // lúc này đến hết thì num nó là 0 
        return num;
    }

    
}
cowntDown(3)

var array=['JS','RUBY','PHP'] 
function loop (start,end,callback){
    if(start<end){
        callback(start)
        return loop(start+1,end,callback);
    }
        return;
    
    
}
loop(0,array.length,function(index){
    console.log(index,array[index])
});




console.log('giai thừa')
function giaithua(num){
    var output=1;
    for(var  i=num;i>0;i--){
        output=output*i;
    }
    return output;
}
var a=giaithua(5);
console.log(a)

// giải bằng đệ quy 
//xác định điểm dừng là lớn 0 
function giai(num){
    if(num>1){
        console.log(num);
        return giai(num*giai(num-1));
    }
    else{
        return 1;
    }
}
function giaithua1(num){
    if(num>1){
        console.log(num);
        return (num*giaithua(num-1))

    }
    // khi return về 1 thì kết quả sẽ đưa lại vào cái num*giaithua(num-1) này
    return 1;
    /**
     * if(num===0 || num===1){
     *      return 1;
     * }
     * else{
     *      return (num*giaithua(num-1))
     * }
     */
}
console.log(giaithua1(6))
