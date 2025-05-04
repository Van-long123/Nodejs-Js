var i=0;
var succes=false;
do{
    i++;
    console.log("nap the lan"+ i)
    // điều kiện trong câu lệnh if là false, vì vậy khi chương trình thực thi đến đó, nó sẽ không thực hiện câu lệnh bên trong if,
    if(false){
        succes=true;
    }
    // !succes la phue định của false là true nên nó sẽ luôn chạy 
}while(!succes && i<=3)
// succes !=true có nghĩa là nếu succes ==false thì nó chạy
// còn !succes thì phủ định của cái thằng đc gán gần nhất 
 var k=0;
 var thanhcong=false;
 var ab=1;
 var cd=2;
do{
    k++;
    if(ab===cd){
        thanhcong=true;
    }
    else{
        thanhcong=false;
    }
}while(!thanhcong&k<=3)
console.log("TH2")
var i=0;
var succes=false;
do{
    i++;
    console.log("nap the lan"+ i)
    // điều kiện trong câu lệnh if là false, vì vậy khi chương trình thực thi đến đó, nó sẽ không thực hiện câu lệnh bên trong if,
    if(true){
        succes=true;
    }
    // !succes la phue định của false là true nên nó sẽ luôn chạy 
}while(!succes && i<=3)
// sau khi succes=true; thì !succes sẽ là false mà điều kiện mà flase thì nó sẽ dừng lại?



// break 
console.log('BREAK')
for(var i=0;i<10;i++){
    console.log(i);
    if(i==5){
        break;
    }
}


// CONTINUE dùng để bỏ qua một vài lần lặp của vvongf lặp
console.log('CONTINUE')
for(var i=0;i<10;i++){
    // bài toán là chỉ in chẳn ko in lẽ 
    if(i%2===1){
        // đầu tiên là 0 ko thảo điều kiện if nên nó in ra  tiếp theo là một 
        // thảo dk if khi vào gặp contiune nó sẽ bỏ qua mấy thằng phía dưới nó và tiếp tục vòng lặp tiếp theo nó sẽ tiếp tục lại máy thằng ở trên như tăng i lên một và xét điều kiện
        continue;
    }
    console.log(i);
    
}


console.log('Lôngf nhau')
var myArray=[
    [1,2],
    [3,4],
    [5,6]
]
// này nó in thì nó sẽ in ra mảng con /
for(var i=0;i<myArray.length;i++){
    console.log(myArray[i])
}
for(var i=0;i<myArray.length;i++){
    // j<myArray[i] là phải nhỏ hơn mảng con .length nếo ko có thì thằng i có size là 3 thăng i cũng là 3 mà trong nớ mảng con có zize là 2 nên tới lúc thằng thứ 3 nó sẽ ko có và in ra là undefined
    
    for(var j=0;j<myArray[i].length;j++){
        console.log(myArray[i][j])
    }
}
console.log('giarm dan')
for(var i=10;i>0;i--){
    console.log(i)
}
for(var i=100;i>0;){
    console.log(i)
    i-=5;
}


