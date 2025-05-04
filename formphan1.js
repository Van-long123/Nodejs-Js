// chạm vào trường input ko nhập mà onblur ra vào sẽ báo lỗi làm cái này 
// khi gõ một thứ gì vào thì thông báo lỗi sẽ mất đi

// bài toán viết js mà vẫn giữ lại các form khác 
// viết mã ra có thể dùng hầu hết cac form khácchứ ko riêng gì một form này

// tại vì khi viết cho riêng một thằng muốn thêm thằng khác bên html thì bên này phải viết lại 

// viết bên này mọt lần thôi dùng nó hầu hết các web 
// viết ra một lần dùng cho hầu  hết tất cả các form 


// ko có tahwfng này sẽ lỗi vì validator bên kia   chưa đc định nghĩa 
// sau khi tạo có lỗi khác la  validator.isRequired này bên html thì h phải tạo thêm hai function
// hàm valid (đối tượng)
// options là một object 
function validator(options){
    //hàm thực hiện validate đưa lên cho gọn
    function validate(inputElement,rule){
        var errorMessage=rule.test(inputElement.value)
                // này là nó lấy tới span 
            var errorElement=inputElement.parentElement.querySelector('.form-message')
        console.log(errorMessage)
        if(errorMessage){
            inputElement.parentElement.classList.add('invalid')
            errorElement.innerText=errorMessage
        }
        else{
            inputElement.parentElement.classList.remove('invalid')
            errorElement.innerText=''
        }
    }
    console.log(options.form)
    // tra về undefined vì đang chạy một cái hàm vì hai cái hàm này chưa return gì cả
    console.log(options.rulers)
//lấy element của form cần validate
    var formElement=document.querySelector(options.form)
    if(formElement){
        // việc đầu tiên là blur ra khỏi input đầu là nó  báo lỗi luôn khi chưa nhập
        // muốn làm được thì phải get đc element của máy thàng đó rồi mới lắng nghe sự kiện
        // console.log(formElement)
        // để duyệt rulers là mộ mảng
        options.rulers.forEach(function(rule,index){
            // console.log(rule)
            // // trả về id của hai thằng này để lấy element tuừ nó 
            // console.log(rule.selector)

            var inputElement=formElement.querySelector(rule.selector)
            console.log(inputElement)
            if(inputElement){
                //xử ly struonwgf hợp blur khỏi input
                inputElement.onblur=function(){
                //    sau đây là kiểm tra người dùng có nhập hay ko để báo lỗi 
            //  thằng isRequired trươcs 
                //ko nhập nó sẽ tra về rỗng
                // lấy value qua 
                // console.log(inputElement.value)
                //lấy test dunc qua rule.test
                // h qua test func viết 
                
                // console.log(rule)
                // gọi như này nó sẽ trả về giá trị và gán vào errorMessage 
               
                // var errorMessage=rule.test(inputElement.value)
                
                //     console.log(errorMessage)
                //     // vieest nafy dễ loạn khó quan sát nên viết ra một hàm riêng 
                //     if(errorMessage){
                //         // h là lỗi thì nó sẽ phải lấy đc class form-mesage mà lấy thì nhiều thằng ko biết lấy ông nào cho đúng 
                //         //   nên h lỗi ở đâu thì onblur ra ở đó 
                //         // thì từ input lấy ra thẻ cha của nó từ thẻ cha tìm tới thẻ con là form-mesage
                //         // có span rồi xử lý 
                //         // dùng này thì nó sẽ xóa đi class cũ thêm class mới 
                //         // inputElement.parentElement.className='invalid'
                //         inputElement.parentElement.classList.add('invalid')
                //         errorElement.innerText='Vui lòng nhập trường này'
                        
                //     }
                //     else{
                //         inputElement.parentElement.classList.remove('invalid')

                //         errorElement.innerText=''
                //     }

                validate(inputElement,rule)

                    // cách lấy thằng cha 
                // console.log(inputElement.parentElement)
                // từ thằng ch lấy form-mesage 
                // console.log(inputElement.parentElement.querySelector('.form-message'))

                }
                // xử lý trường hợp khi người dùng nhập vào input  xảy ra khi giá trị của một phần tử input hoặc textarea thay đổi khi người dùng nhập liệu.
                inputElement.oninput=function(e){
                    //  console.log(inputElement.value)
                    // kieeru errorElement này thì môix lần dùng là phải gọi h muốn cho nó linh động dùng bất cứ trang nào cũng đc 
                //    nên qua bên html nớ thêm errorselector:'.form-mesage ' h chỉ cần options.errorselector là có thể lấy tên class của thằng này
                // var errorElement=inputElement.parentElement.querySelector(options.errorselector)
                    var errorElement=inputElement.parentElement.querySelector('.form-message')
                    errorElement.innerText=''
                    inputElement.parentElement.classList.remove('invalid')

                }
            }

        })

    }
}

// định nghĩa rules những cái điều luật bắt buộc
// định nghĩa một phương thức mới có tên isRequired cho đối tượng validator
validator.isRequired=function(selector){
    // trả về một object thì lúc đó kết quả của hàm validitor bên html này chính là object nó return về và nó sẽ được đưa vào cái rulers
    return {
        selector:selector,
        // dùng để kiểm tra 
        //isRequired là bắt buộc nhập dữ liệu 
        // tahwfng này kiểm tra xem người dùng đã nhập chưa 
        //1.khi cos lỗi =>tra ra mesage lỗi
//2.khi hợp lệ ko tra về cái gì cả(undefined)
        test:function(value){
            // value ?kiểu này thì người dùng nhập dấu cách vào thì nó vẫn dúng nên thêm trim vào 
            //tuy nhiên hàm này chưa đc chạy để chạy thì phải gọi
            return value.trim() ? undefined:'Vui lòng nhập trường này'
        }
    };
}
validator.isemail=function(selector){
    // casi cuoois của  bài form 1 là làm thế nào khi đang lỗi cái mình nhập giá trị vào là mất đi cáci báo lỗi 
    return {
        selector:selector,
        //thằng này thì coi nó có phải là email ko
        test:function(value){
            // check email lên mạng sợt 
            var regax =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //    nếu nó là email thì trae về undifined 
            return regax.test(value)? undefined:"Trường này phải là email "
        }
    };
}

validator.minLength=function(selector,min){
    // casi cuoois của  bài form 1 là làm thế nào khi đang lỗi cái mình nhập giá trị vào là mất đi cáci báo lỗi 
    return {
        selector:selector,
        //thằng này thì coi nó có phải là email ko
        test:function(value){
            return value.length>=min? undefined:`Vui lòng nhập tối thiêu ${min} ký tự`
        }
    };
}