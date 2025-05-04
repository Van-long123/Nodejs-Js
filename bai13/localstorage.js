/*
localStorage.setItem() thêm dữ liệu vào localStorage */
// ví dụ thực tế là chế độ tối sáng của trang web dùng này lưu vĩnh viễn để biết người dùng bật tối hay sáng
// localStorage.setItem("fullname","Long Phạm");//nó lưu ở trình duyệt bật application có mục localstorage

// // lấy ra dữ liệu từ localStorage 
// console.log(localStorage.getItem("fullname"));//nếu key ko tồn tại trả về null

// document.querySelector('.test').innerHTML=localStorage.getItem("fullname")

if(localStorage.getItem("change")){
    console.log(localStorage.getItem("change")) 
    document.querySelector('body').classList.toggle(localStorage.getItem("change"))
}
document.querySelector('.btn').addEventListener('click',(e)=>{
    document.querySelector('body').classList.toggle('dark')
    if(localStorage.getItem("change")==="dark"){
        localStorage.setItem("change","light")
    }
    else{
        localStorage.setItem("change","dark")
    }
})
// localStorage.removeItem("test")
// localStorage.clear("test")
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}