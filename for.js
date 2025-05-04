var marray=[
    'JS',
    'Dark',
    'PHP',
    'java',
    'Python'
];
// mảng này có đọ dài là 4 và nó bắt đầu từ 0-->3
// tại sao lại ko viết luôn marray.length trong điều kiện  tại vì
// mỗi một lần kiểm tra điều kiện lại phải lấy độ daif từ mảng nên ta khai báo lấy luôn một lần 
// hiêu hiệu năng sẽ chậm hơn vì vâyh nên tách ra ngoài 
// tuy nhiên một sóo trình duyệt bay giờ nó lại rất thông minh 
// viết marray.length này vào trong đièu kiện vòng for thì tốc độ ko bị ảnh hưởng tuy nhiên một số trình duyệt cũ hơn có thể nó sẽ bị ảnh hưởng 
var arraylength=marray.length;
for(var i=0;i<arraylength;i++){
    console.log(marray[i]);
}
