// Default parameter value đinhj nghĩa các giá trị mặc định cho những tham số 

function logger(log){
    // ES5 là làm như này
    if(typeof log==='undefined'){
        log='giá trị mặc định'
    }
    console.log(log)
}

// kiểu ko truyền gì vào muốn có giá trị mặc định 
// còn truyền gì đó vào thì nó sẽ lấy thằng truyền vào 
logger()


// đây chính là khía niệm Default parameter value 
// Default là mặc định parameter là tham số value là giá trí 
function logger1(log='giá trị mặc định'){
    
    console.log(log)
}
logger1('amen')

// trong thực tế khi nà nàota làm những việc này là những cái hàm đc định nghĩa có 
// những tham số mà ko bắt buộc phải nhập thì mới cần dùng cái này
// còn những tham số bắt buộc phải nhập rồi thì cần gì  Default parameter value 

// type='log' kiểu gán giá trị trên tham số với mục đích kà nếu mà ko truyền tham số cho nó thì 
// 'log' nó sẽ đc gán cho type
// còn mà có truyền tham số vào cho nó thì type sẽ dc gán cho một giá trị trong đối số 

// tiếp theo là log ko có gán gì trên tham số thì nếu ko có tham số truyền vào thì nó là undefined 
// còn có tham số truyền vào thì nó in ra gí trị đo  
// ngược lại nếu log='long' ở trong tham số thì khi ko nhập giá trị thì nó log tự động sẽ là long 
// tham số mà ko bắt buộc phải truyền vào thì ta mới đặt giá trị dèualt cho nó thôi 
// log bắt buộc phải truyền vào còn type thì ko cần 
function kt(log,type='log'){
    console[type](log)
}
kt('long','warn')
// tham số ko bắt buộc phải nhập 













