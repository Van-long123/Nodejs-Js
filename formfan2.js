function validator(options){
    // options.onSubmit('amen')
    //hàm thực hiện validate đưa lên cho gọn
   
    var selectorRules={};
    function validate(inputElement,rule){
        // blur thawfng nào hì láy thằng input đó /
        // bây giờ làm thế nào để lưu tất cả cái rules của nó mà ko bị ghi đè
        // và sau thằng này là tới nút button Đăng ký 
        // var errorMessage=rule.test(inputElement.value)
        var errorMessage;
        // h cách để lấy máy cái rule trong selectorRules
        // và ko dùng này nữa rule.test(inputElement.value) chuyển qua dùng cái khác 
        // console.log(selectorRules) // khi blur thì nó sẽ in
        // console.log(rule.selector) 
        // lấy ra các rules của selector 
        // dưới đây là toán khi nhiều rule rồi h thêm nhiều rule vào để kiểm tra thì vẫn đc 
        var rules=selectorRules[rule.selector]
        // nos sẽ in ra key và value tương ứng 
        // console.log(rules)
        // validate tưngf rule một rule nào ở trước ta validate trước đối với email thì isrequired nếu mà nó thõa DK là có nhập thì mới kiểm tra rule tiếp theo 
        //h lặp qua vì rule traả về một mảng
        // lăph qua từng rules và kiểm tra
        // console.log(document.querySelector(rule.selector).value)
        for(var i=0;i<rules.length;i++){
            // xóa cái var errorMessage=rule.test(inputElement.value) thay thế bằng cái ở dưới 
            // rules nàu là function inputElement.value này là đối số 
            // nhưng để như này thì chạy tới thằng email đầu tiên đc gán xong chạy toiuws functiom email thứ hai nó sẽ ghi dè thằng 1 
            errorMessage= rules[i](inputElement.value)
        //    nêu lỗi dừng thoats for luôn
            if(errorMessage){
                break;
            }
        }




        // này là nó lấy tới span 
            var errorElement=inputElement.parentElement.querySelector('.form-message')
        // console.log(errorMessage)
        if(errorMessage){
            inputElement.parentElement.classList.add('invalid')
            errorElement.innerText=errorMessage
        }
        else{
            inputElement.parentElement.classList.remove('invalid')
            errorElement.innerText=''
        }
        // chuyển đổi thành một giá trị boolean 
        //null, undefined, 0, NaN, false hoặc một chuỗi rỗng (''), thì kết quả sẽ là false.
        //trả false nếu có lỗi(trả về chứ) và true nếu ko có lỗi (undifined)
        return !errorMessage;

    }
    var formElement=document.querySelector(options.form)
    if(formElement){

        //xử lý lặp qua mỗi rule và xử lý (lắng nghe ssujw kiện blur,oninput) và h là lắng nghe thêm sự kiện button
        // là onsubmit 
        // khi nhấn vào submit thì nó bị đauw sang method khác nó lỗi h ta bỏ đi hành vi mặc định 
        // bỏ đi hành vi mặc định method="POST" của form-1
        // và chúng ta validate tất cả các tahwfng input
        // "validate" (kiểm tra hợp lệ) là quá trình kiểm tra tính hợp lệ của dữ liệu hoặc điều kiện trong một hệ thống 
        formElement.onsubmit=function(e){
            e.preventDefault()


            //lặp qua từng rule và validate
            //sau thằng này thì khi nhấn vào nó lấy tất cả giá trị người dùng nhâp ra console
            // thif h ta sẽ truyền bên ngoài vào bên html
            // đầu tiên lấy dữ liệu của tụi input ra nếu ko có lỗi 
            var isFormValid=true ; //trường hợp ko lỗi nếu có lỗi thì sẽ đổi thành false
            options.rulers.forEach(function(rule){
                var inputElement=formElement.querySelector(rule.selector)
                // trả về true nếu có lỗi 
                var isValid=validate(inputElement,rule)
                if(!isValid){
                    isFormValid=false;
                }
            });
            // nếu có lỗi ko thực hiện thằng ni luôn chỉ cần một thằng input lỗi nó cũng ko hoạt động
            if(isFormValid){
                // console.log('ko có lỗi')
                // nếu nó là function

                // trương hơp submit với js 
                // nếu ẩn thằng onSubmit dùng submit mặc định thì nó sẽ false và chuyển xuống else 
                if(typeof options.onSubmit==='function'){
// lấy ra tất cả input trong trạng thái Enable trong form
// laasy tất những thàng có attribue là name mà ko có attribue là disable
// "disable", nghĩa là nó không hoạt động hoặc không sẵn sàng để sử dụng.
// querySelectorALL All ll ko viết hoa 
// kieeru disable trong input là nó sẽ ko tương tác đc nó sẽ loại bỏ ấmy thằng có đisable
// {/* <input disabled id="email" name="email" type="text" placeholder="VD: email@long.com" class="form-control"> */}
// tuyf vào bài toán riêng thằng này thì ko cần :not([disabled])
            // var enableInput=document.querySelectorAll('[name]:not([disabled])')
                    // trả về nodelist giống mảng nhưng ko dùng đc map reduce 
                    console.log(enableInput)
// lấy tất cả các thằng input có name trả về nodelist chứa các element
            var enableInput=document.querySelectorAll('[name]:not([disabled])')
            // Array.from nó sẽ đổi thành này sang array 
            // var formValues=Array.from(enableInput)
            // console.log(enableInput)
            // console.log(formValues)
            var formValues=Array.from(enableInput).reduce(function(values,input){
// bước 1 là gán input.value cho objecy calue của chứng ta cuối cubngf return ra values 
                values[input.name]=input.value;
                return  values
                //return values[input.name]=input.value && values
            },{})
            // khi có dữ liệu trong form rồi h chúng ta làm gì bay h thì ko tương lai thì có  tương lai sẽ code API trong htnl
            /**này onSubmit:function(data){
             * //Call API
          console.log(data)
        } */
        // kiểu người ta vẫn ưa chuộn dùng submit của html mặc định trong trường hơp ko có onSubmit bên html validator

                    options.onSubmit(formValues)
                }
                //trường hợp submit với hành vi mặc định
            else{
                // đây là trường hợp options.onSubmit ko phải hàm kiểu ko dùng rới onsubmit chuyển qua dùng submit bt của hrml
                console.log('có lỗi')
                // nó sẽ có lại hành vi mặc định 
                // submit với hảnh vi mặc định 
                formElement.submit();
               
            }
            }
            

        }



        options.rulers.forEach(function(rule){
            // cách để ko bị ghi đè
            //lưu laih các rules cho mỗi input
            // selectorRules[rule.selector] còn ái này nó sẽ in ra value rule.selector này nó sẽ lấy ra cái key
            if (Array.isArray( selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }
            else{

                // thằng này h là một cái mảng 
                selectorRules[rule.selector]=[rule.test];
            }
            var inputElement=formElement.querySelector(rule.selector)
            // console.log(rule)
            if(inputElement){
                inputElement.onblur=function(){
                validate(inputElement,rule)
                }
                inputElement.oninput=function(e){
                    // Element.parentElement.querySelector(options.errorselector)
                    var errorElement=inputElement.parentElement.querySelector('.form-message')
                    errorElement.innerText=''
                    inputElement.parentElement.classList.remove('invalid')

                }
            }

        })
        // thì nó vẫn chi lưu được cái rule thứ 2 nếu nó trung id gasn daus = nên ko thể lưu đc nên lưu vào một cái mảng
    }
}

validator.isRequired=function(selector){
    return {
        selector:selector,
        test:function(value){
            return value.trim() ? undefined:'Vui lòng nhập trường này'
        }
    };
}
validator.isemail=function(selector){
    return {
        selector:selector,
        test:function(value){
            var regax =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regax.test(value)? undefined:"Trường này phải là email "
        }
    };
}

validator.minLength=function(selector,min){
    return {
        selector:selector,
        test:function(value){
            return value.length>=min? undefined:`Vui lòng nhập tối thiêu ${min} ký tự`
        }
    };
}
validator.isComfired=function(selector,getConfirmValue,message){
    // cái mới c1 
    // var passElement=document.querySelector('#password')
    // var a='';
    // passElement.onchange=function(e){
    //     a+=passElement.value;
    // }
    return {
        selector:selector,
        test:function(value){
            //cáci củ
            // return getConfirmValue(q)===value?undefined:"Giá trị nhập vào ko chính xác"
    // cái mới c1
            return getConfirmValue()===value?undefined: message
        }
    };
}
// mật khẩu giowf thêm một vấn đề nữa khi chúng ta ko nhập nó bảo tối thiểu 6 ý tự
//kieeru giờ mính ko nhập mataj khẩu nthì nó sẽ báo lỗi xong qua blur thàng confirm thì ko báo lỗi
// tiếp theo là email ko nhập gì mà nó báo ko phải trường email nên sai khi nào nhập rồi mới báo còn chưa nhập thì mời bạn nhapaj
    


// khi dùng and nó đọc từ về trái sang phải nếu gặp giá trị khác 6 giá trị thì lấy giá trị tiếp theo gán ngược lại
// chỉ cần một thằng trong 6 thằng kia mà dính vào thì nó sẽ in ra thằng đó và dừng lại var result=null&&'B'&&'C'
// tương ứng với return ở trên 
// return values[input.name]=input.value && values thì nó sẽ đọc từ trái qua phải nếu nó gặp giá trị khác giá trị trên  thì nó đọc thằng tiếp theo và gán cho réult
var result='A'&&'B'&&'C'
console.log(result)
// thì nó sẽ in ra C 

// còn mà || thì nó lấy thằng đầu tiên . var result='A'||'B'||'C' nó trả về A và dừng lại
// null||'B'||'C' thì nó sẽ lấy b và dừng lại 
// 'a'||null||'C' đọc a và dừg lại 