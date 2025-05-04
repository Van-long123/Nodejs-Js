// // file index này đứng trung gian 
// // nó export default ra một cái modul khác
// // c1  cách viết  tắt ví dụ 4
// // default ở đây chính là hàm logger đc nhận về as sang một tên mới
// // export {default as logger2} from './logger.js';

// //c2
// // và bay giờ ko muốn dùng export default nữa mà muốn import thường thì sẽ làm ở cách 1
// import logger from "./logger.js"; 
// // // dùng export default thì bên mà nhận chỉ cần import logger  from './logger/index.js' ko cần bỏ vào {} khi nào vieest export bình thường ko có dèault kia mới cần 
// export default logger
 

// // import và export bình thường phải cùng tên còn có dèault thì ko cần 


export {default as logger1} from "./logger.js";