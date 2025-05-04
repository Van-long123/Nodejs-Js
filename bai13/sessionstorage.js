if(sessionStorage.getItem("change")){
    console.log(sessionStorage.getItem("change")) 
    document.querySelector('body').classList.toggle(sessionStorage.getItem("change"))
}
document.querySelector('.btn').addEventListener('click',(e)=>{
    document.querySelector('body').classList.toggle('dark')
    if(sessionStorage.getItem("change")==="dark"){
        sessionStorage.setItem("change","light")
    }
    else{
        sessionStorage.setItem("change","dark")
    }
})
// localStorage.removeItem("test")
// localStorage.clear("test")
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     console.log(`${key}: ${value}`);
// }