function validator(options){
    //hàm thực hiện validate đưa lên cho gọn
    var selectorRules={};
    function validate(inputElement,rule){
        // bây giờ làm thế nào để lưu tất cả cái rules của nó mà ko bị ghi đè
        var errorMessage=rule.test(inputElement.value)
        // h cách để lấy máy cái rule trong selectorRules
        // và ko dùng này nữa rule.test(inputElement.value) chuyển qua dùng cái khác 
        console.log(selectorRules) // khi blur thì nó sẽ in
        console.log(rule.selector) 
        var rules=selectorRules[rule.selector]
        // nos sẽ in ra key và value tương ứng 
        console.log(rules)
        // validate tưngf rule một rule nào ở trước ta validate trước đối với email thì isrequired nếu mà nó thõa DK là có nhập thì mới kiểm tra rule tiếp theo 
        //h lặp qua vì rule traả về một mảng
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
    }
    var formElement=document.querySelector(options.form)
    if(formElement){
        options.rulers.forEach(function(rule){
            // console.log(rule.selector)
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
    



