// // Module khi  bốc tách thầnh phânf nó xử lý 1 nghiệp vụ cụ thể ra một cái nơi riêng goi là module
// // tách một phần chức nâng riêng ra một cái file js để các bạn viết riêng code đó ở file đó thôi thf chúng ta đc hiểu là modul hóa 
// //   để sử dụng đc modiule đầu tiên chính file đang viết mã ví dụ file js này nó phải được nàp vào trong thẻ script bên html

// // Module :Import(nạp vào)/export(xuất ra ) vì tư tưởng nó là tách riêng ra một file
// // nên là nếu trong file Module.js này muốn sử dụng logger này thì phải nạp nó vào bằng từ khó Import 
// // nếu mà ở trong file Module.js này muốn Import đc nó vào thì bản thân logger này nó phải export ra 1 cái gì đó 
// // thì thằng logger export đc cái gì  thì Import đc cái đó 
// // tạo ra một file js tên logger 
// //h nạp logger vào cách dungf 

// // nó sẽ báo lỗi Cannot use import statement outside a module 
// // có nghĩa là chúng ta đang dùng cú pháp import này ở bên ngoài một cái module 
// // bản thân chính thằng Module.js này cũng phải là 1 module  và cách biến thằng này thành module 
// // là qua bên html chỗ script thêm vào thì file Module.js này ko còn lỗi nữa
// // bây giờ bất cứ module nào import thì thằg logger này sẽ chính là giá trị mà bên logger.js export ra ngoai
// // import logger from './logger.js'
// // logger('test message','warn')
// // vi du 2 
// // import logger,{TYPE_LOG,TYPE_WARN,TYPE_ERROR} from './logger.js'
// // logger('test message',TYPE_ERROR)
// // vi du 2 
// // vi du 3

// // h ko muốn import file logger.js nữa mà h muốn đâm vào thư mục logger 
// // trong thư mục tạo ra file index.js 
// // ví dụ 4     
// //   import {logger2}  from './logger/index.js' // ví dụ 4  
// import logger  from './logger/index.js'

// // import logger from './logger.js'

// // kiểu ko export default ra nên ko thể import như thế này phải hiểu khi import mà viết thẳng như này thif cái mà module nó export default                         
// // còn khi mà thấy dáu {} này thì ta export những cái ko phải export default 
// // the requested module './constants.js' does not provide an export named 'default lỗi 
// // import constants from './constants.js'
// // console.log(constants)

// // export bình thường thì dùng cách này và ngoài ra thằng này còn một cách nữa là 
// // * là tất cả nó sẽ lấy ra tất cả những export bên constants.js
// import * as constants from './constants.js'
// // trả về object dang module và nó dung cấp getter và seter để thay đổi value cuar nó 
// console.log(constants)
// logger('test message!',constants.TYPE_WARN)

// // import{
// //     TYPE_LOG,
// //     TYPE_WARN,
// //     TYPE_ERROR
// // } from './constants.js'
// // logger('test message!',TYPE_ERROR)

// // console.log(logger)
// // The requested module './logger.js' does not provide an export named 'default' lỗi 
// // logger.js này nó chưa cung cấp export named 'default'có nghĩa là import thành công rồi còn export của logger nữa 

// // trong bản thân module sử dụng chúng ta dùng import để nạp vào 
// // còn trong module mà ta muốn viết hàm để cho chỗ khác sử dụng ta export ra ngoài (thì logger viết hàm cho Module sử dụng)



// // và sau đây hc thêm một thằg nữa là 


import {logger1} from './logger/index.js';
console.log(logger1)
import  * as contants from './constants.js';
logger1('long',contants.type_error)