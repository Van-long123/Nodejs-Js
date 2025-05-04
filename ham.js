function show(hien,hdh){
    alert(hien);
    console.log(hien)
    //nếu hdh là true là nó có một thằng nào đó ko phải nằm trong 6 thằng fasle thì nó sẽ thưucj hiện
    if(hdh){
        console.log(hdh)
    }
  
}

show(['long','ma'],'tesst')
console.log('thử')
show('tesst')

 //arguments chỉ được gọi trong function thôi gọi ngoài là bị lỗi
/**
 * arguments là một đối tượng mà được sử dụng 
 * để đại diện cho các tham số được truyền vào 
 * một hàm.

arguments là một mảng-like object (đối tượng giống
     mảng) chứa tất cả các đối số được truyền vào
      hàm. .
 */

 function write(){
    console.log(arguments);
 }
 write('log1','log2','log3')
//  arguments là một array
 function write1(){
    var luu='';
    // chạy lần thứu nhất nos sẽ lấy phần tử đầu tiên của arguments và gán cho param
    for(var param of arguments){
        // nó sẽ thauwf mà sau này ta sẽ hc cách đee loại bỏ nó
        luu+=param+'-';
        
        // luu+=`${param} -`
    }

    console.log(luu);
 }
 write1('log1','log2','log3')

 var a=[
    'long',
    'linh'
 ]
//  nếu mà gọi mà ko có giá trị trong nớ thì trả về undefined
 
console.log(a[2]);




//cách để lấy confirm
// thằng confirm sẽ bật lên một hộp thoại khi đó nó sẽ ngăn cản code sau nó 
//trong lúc hộp thoại đang bật thì code sau nó sẽ ko chạy
// code sau nó sẽ được chạy néue như tắt hộp thoại
var Confirm=confirm("ảe you ok");
console.log(Confirm);


//function return

function cong(a,b){
    a+b;
}
var result=cong(5,7)
//thì nõs sẽ trả về undefined 
console.log(result);

// cách 1
var tong1;
function cong1(a,b){
    tong1=a+b;
    //và nếu nó trar về giá trị rồi thì mấy thừang dưới return sẽ ko hoạt đôngk
    //đụng tới retủn là thoát hàm
    return tong1;
    // or
    // return a+b 
}
var result1=cong1(5,7)
console.log(result1);

// cách 2
var tong3;
function cong12(a,b){
    tong3=a+b;
    console.log(tong3) ;
}
cong12(3,7)
// chữ màu đen số màu xanh 

function array(a,b){
    // nó sẻ trả về mảng 
   return [a,b];
}
var a1=array(3,7)
console.log(a1)

//biêns sô thằnh chuỗi
function chuoi(a,b){
    return a.toString() +b.toString();
    // return '3'+'7'
 }
 var chuoi1=chuoi(3,7)
 console.log(chuoi1);

//khaibáo trong hàm thì chỉ đc dùng trong hàm
 //hiểu hơn về Function
//  khai báo biến trong hàm đc
function showmessage(){
    console.log('show1')
 }
 function showmessage(){
    var amen='lng'
    console.log(`${amen} amen`)
 }
//  khi gọi console.log(amen) mà tham số là amen sẽ bị lỗi vì chưa đc khai báo nó  đc khai báo trong hàm 
// nên nó chỉ dùng đc trong hàm 
//  console.log(amen)

 //khi goij thằng này mà ở trên hai thằng có tên giống nhau thì nó sẽ lấy thằng  
//  đc khai báo sau 
 showmessage();


//  hàm trong hàm
function inn(){
    // phạm vi sử dụng của inn1 chỉ ở trong cái function mà ta định nghĩa
    function inn1(){
        console.log('ame');
    }
    console.log('amen')
    inn1();
} 
inn();

// cacs loại function 
// declaration 
ma();
// thằng này có thể gọi ở phía trước nó và thực thi đc 
// thằng expression này thì ko 
function ma(){

}
//expression function
// 3 thằng này có thể dặt tên cho nó haowcj ko đặt cho biết nó dùng để làm cái gì
var ma1=  () => {
    alert('à')
}
ma1();
// tahwfng này cần phải đặt tên tại ko có tên thì ko biết nó làm cái gì
setTimeout( function ae(){
    alert('à')
});
// ae()
var myobject={
    myfunction:function(){

    }
}

var a=setTimeout(function(){
    alert('con me may')
},1000)


