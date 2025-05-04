// // vi du 2 
// // ví dụ 3 là tácgh thằng này qua một file khác và  bên này sẽ import thằng contants.js
// // export const TYPE_LOG='log';
// // export const TYPE_WARN='warn';
// // export const TYPE_ERROR='error';
// // vi du 2 
// // ví dụ 3 là tácgh thằng này qua một file khác và  bên này sẽ import thằng contants.js
// import{
//     TYPE_LOG,
//     // TYPE_WARN,
//     // TYPE_ERROR
//     // ../constants.js vì logger vừa ném vào một thư mục nên muốn lấy thằng nào ngoài thư mục thì hai .. còn trong thư mục thì 1 . 
// } from '../constants.js'

// function logger(log,type=TYPE_LOG){
//     console[type](log);
// }
// // sau khi viết function này rồi thì phải export ra ngoài thì chỗ khác mới nạp vào và dùng đc
// // export default casi giá trị bạn muốn export ra ngoài 

// // một module chỉ export constantsdefault 1 lần còn export thường thì vô số cũng đc
// export default logger;


// // logger.js này mới đầu thì nó ở ngoài vì hc thêm một thằng mới ở gần cuối video nên bỏ nó vào thư mục nhưng nó hoạt động bình thường 


import {type_log,type_warn,type_error} from '../constants.js'
function create(value,type=type_warn){
    console[type](value);
}
export default create;