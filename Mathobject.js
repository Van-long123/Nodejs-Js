// này ko phải object contructor nên ko new Math()
// dùng để truy xuất phương thức và thuộc tính

// dùng để in ra số Pi=3.14...
console.log(Math.PI)
//làm ròn số làm tròn lên 4 nếu lớn kơn 5
console.log(Math.round(3.55))

//giá trị tuyết đối nó sẽ trả về giá trị dương 4 là ra 4, -4 là ra 4
console.log(Math.abs(-4))

//làm tròn trên dù có phảy nhỏ đến mấy nó cũng làm tròn lên ví dụ 4.0001 nó sẽ làm tronf lên 5
console.log(Math.ceil(9.11))


//làm tròn dưới thì nó sẽ làm trong xuống 3
console.log(Math.floor(3.95))


//nó sẽ random số thập phân nhỏ hơn 1
console.log(Math.random())

// nó sẽ ngẫu nhiên từ 0 đến 9 /
console.log(Math.floor(Math.random()*10))
console.log(Math.random()*10)
// 0 1 2 3 4 còn mà ceil là 12345 
var random=(Math.floor(Math.random()*5));
var bonus=[
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
]
// quay phần thưởng ngãu nhiên tỷ lệ đều nhau
console.log(bonus[random])

// tỷ lệ trong game thì thằng 10 coin nó  sẽ hiên hiện ra nhiều nhất nên chỉnh tỷ lệ phần trăm 
// nó sẽ random đều từ 0 đến 99 
var random1=(Math.floor(Math.random()*100));
// tỷ lệ random <5 chỉ có 5 phần trăm thôi 
// kiểu nó sẽ random đều từ 0 đến 99 nhưng h điều kiẹn nhỏ hơn 5 thì chỉ có 01234 nó mới in ra là thành công còn thất bại thì nó từ 5->99 nên tỷ lệ thành công thấp chr có 5% thôi  
// thì 100 lần thì chỉ có 5 lần trùng thôi 
// tăng random1<50 thì nó có tỷ lệ thành công là 50 50 
if(random1<5){
console.log('cương hoa thành công')
}
else{
    console.log('cương hoa thhất bại')

}

// lấy ra con số nhỏ nhất
console.log(Math.min(-100,1,3,5521,12))
// lấy ra con số lớn nhất
console.log(Math.max(-100,1,3,5521,12))


console.log(Math.PI )
console.log(Math.round(3.5))
console.log(Math.abs(-3) )
console.log(Math.ceil(4.1) )
console.log(Math.floor(4.99))
console.log(Math.random()*10 )
// nos sẽ radom từ 1 tới 10
console.log(Math.ceil(Math.random()*10) )
// nos sẽ radom từ 0 tới 9

console.log(Math.floor(Math.random()*10) )





var bonus1=[
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
]
console.log(bonus1[Math.floor(Math.random()*5)] )
random11=Math.floor(Math.random()*100);
if(random11<5){
    console.log('thanh coong')
}
else{
    console.log('that bai')
}



