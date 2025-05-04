function validator(options) {

    function getparent(inputElement, selector) {
        // dùng vòng lặp tại ko biết từ input đến formgroup bào nhiêu cấp bao nhiêu thằng div đâu
        // lặp lần lượt cho đến khi gặp ông form-group lặp mãi mà ko gặp thì kết thúc vòng lặp 
        // inputElement.parentElement lấy ra thằng cha của nó 
        while (inputElement.parentElement) {
            // lặp từng thằng cha cho ddsen khi có thõa điêu kiện
            // dùng để kiểm cha xem phần tử cha có class selector hay ko 
            if (inputElement.parentElement.matches(selector)) {
                return inputElement.parentElement;
            }
            inputElement = inputElement.parentElement
        }
        // lấy được rồi thây thế cho inputElement.parentElement.querySelector('.form-message')


    }


    var selectorRules = {};
    // tất cả các hàm rule đều phải qua thawfng này 

    function validate(inputElement, rule) {
        // console.log(selectorRules)
        // var errorElement=getparent(inputElement,'.form-group')
        var errorMessage;
        var rules = selectorRules[rule.selector]

        // console.log(document.querySelector(rule.selector).value)
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'checkbox': case 'radio':
                    // kiểu nó phải đc check vào thì mới lấy value 
                    errorMessage = rules[i](
                        // rule.selector giờ nó sẽ lấy ra được input[name="gender + thêm checked để lấy ra thằng đc chọn 
                        //sẽ bị lỗi là 'trim' òof null  là cá cái gì mà gọi tới phương thức trim bị null là value
                        // kiểu khi bấm ko trả về gì thì là null m,à null.trim() là bị lỗi 
                        //sau khi xong có một lỗi nữa là bấm đăng ký khi chauw chọn thì nó sẽ báo lỗi khi checked vào thằng đầu thì mất thông báo lôix còn chọn hai hằng sau thì vẫn conf thông báo lỗi 
                        //vì trường hợp này có nhiều thằng mà dùng querySelector trong thằng inputElement đc khai báo chính thì sao đc
                        //mà dùng  querySelector thì lấy đc có mỗi thằng đầu tiên
                        //   trả về element đc chọn 
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            // errorMessage= rules[i](inputElement.value)
            // h sửa lại trong trường hợp là redio checkbox input 
            //    nêu lỗi dừng thoats for luôn
            if (errorMessage) {
                break;
            }
        }
        //vấn đề của form bài 3 là kiểu thêm thông báo lỗi trong span 
        // là từ thằng input gét thằng cha xong tưf thằng cha get span mà đâu phải form nào cũng cấu tạo như này 
        // qua fullname trong html thây đổi như thế rồi nên ta hiểu là ko phải form nào cũng bắt đầu như thế 
        // inputElement.parentElement là từ input lấy thẻ cha là thấy thằng div từ div tìm ko form-message nhưng ông div này ko có  
        // nên h kiểu ông input này nằm trong bao nhiêu thẻ div thì cugx phải lấy được class form-group 
        // vì từ ông form-group này mới lấy đc .form-message là h viết sang một cai hàm
        //sau khi xong thì ngoài ra form này còn phải có checkbox  radio 




        // thây  thế và ko nên đặt .form-group vào đây getparent(inputElement,'.form-group') nên đặt bên validator(html)
        var errorElement = getparent(inputElement, options.formGroupselector).querySelector('.form-message')
        // console.log(errorElement)
        // var errorElement= inputElement.parentElement.querySelector('.form-message')
        // console.log(errorMessage)
        if (errorMessage) {
            // inputElement.parentElement.classList.add('invalid') //sửa lại thành cái dưới vì lỡ như thằng inputElement.parentElement này nằm trong nhiều thẻ div thì nó lấy thể cha gần nhất nên ko tới đc form-group 
            getparent(inputElement, options.formGroupselector).classList.add('invalid')
            errorElement.innerText = errorMessage

        }
        else {
            getparent(inputElement, options.formGroupselector).classList.remove('invalid')
            errorElement.innerText = ''
        }
        return !errorMessage;

    }
    var formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault()
            var isFormValid = true; //trườsng hợp ko lỗi nếu có lỗi thì sẽ đổi thành false
            options.rulers.forEach(function (rule) {
                // này ko cần đổi qua all vì ở dưới3 thằng input name gender nớ đc gán onblur oninput tương úng nên khi nhấn nó trả về một 
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    console.log(enableInput)
                    var enableInput = document.querySelectorAll('[name]:not([disabled])')
                    var formValues = Array.from(enableInput).reduce(function (values, input) {
                        // bước 1 là gán input.value cho objecy calue của chứng ta cuối cubngf return ra values 
                        //đang có một cái bug trong form3 nói ở đây kiểu sẽ có trường hợp là input nớ ko bắt buộc nhập nên có thể bỏ qua
                        //   input.value nó sẽ ko có gái trị 1 cái input trpng form ko có giá trị thì khi đó kết quả của phép gán values[input.name]=input.value nó sẽ return về 9 giá trị cua input.value nà7
                        //    trong trường hợp ko nhập vào input thì là chuỗi rỗng mà chuỗi rỗng thì nó gặp toán tử && nó sẽ dừng lại là in ra chuỗi rỗng                    
                        //return values[input.name]=input.value  &&values
                        // console.log(input.name)
                        // console.log(values)
                        // dúng gán ni thì gender nó sẽ có 3 thằng reduce 3 lần thằng nớ thì nó sẽ lấy tahwfng cuối là ỏther 
                        // name trungf nhau lwpj qua sau đó nó lấy orther vì phép gán  
                        // sử lại cái hàm này               
                        // values[input.name]=input.value;
                        switch (input.type) {

                            case 'radio':
                                // kiểm tra phàn tử input có đc checked ko 
                                // heckboxes, radio buttons và checkboxes được đánh dấu là "checked" khi người dùng chọn chúng
                                // dùng để kiểm tra tahwfng input có đc chọn ko 
                                // kiểu nó lặp qua ba ông á ví dụ chọn ông thứ nhất là nam thì gán là nam nhưng lặp 3 ông lận nên tới ông tiếp theo ko đc checked thì nó trả về rỗng 
                                // vì thế ko dùng cách này      mà chỉ cần bỏ thằng else đi là đc   nhưng chúng ta sẽ là cách kahsc                 
                                // if(input.matches(':checked')){
                                //     values[input.name]=input.value;
                                // }else{
                                //     values[input.name]='';
                                // }
                                // values[input.name]=formElement.querySelector('input[name="'+input.name+'"]:checked').value
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value

                                break;
                            case 'checkbox':
                                // checckbox chúng ta sẽ cho nó vào array người dùng đc chọn chớ nó ko trả về riêng lẽ nữa 
                                if(!input.matches(':checked')){
                                    return values
                                }
                                if(!Array.isArray(values[input.name])){
                                    values[input.name]=[];
                                }
                                values[input.name].push(input.value)
                                // if(Array.isArray(values[input.name])){
                                //     values[input.name].push(formElement.querySelector('input[name="' + input.name + '"]:checked').value)
                                // }else{
                                //     values[input.name] =[formElement.querySelector('input[name="' + input.name + '"]:checked').value]
                                // }
                                break;
                            default:
                                console.log(input.name, input.value)
                                console.log(input)

                                values[input.name] = input.value;
                        }
                        return values
                    }, {})

                    options.onSubmit(formValues)
                }
                //trường hợp submit với hành vi mặc định
                else {
                    // đây là trường hợp options.onSubmit ko phải hàm kiểu ko dùng rới onsubmit chuyển qua dùng submit bt của hrml
                    console.log('có lỗi')
                    formElement.submit();

                }
            }


        }



        options.rulers.forEach(function (rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            }
            else {

                // thằng này h là một cái mảng 
                selectorRules[rule.selector] 
            }
            // nó lấy được có một thằng 

            // var inputElement=formElement.querySelector(input[name="gender"])
            // inputElement chính nên đổi lại All để tahwfng radio nớ lấy đc tất 
            // phải lặp qua vì nó là nodelist gần giống array nhưng nko có map reduce foreach nên chuyênr nó qua mảng
            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
                inputElement.oninput = function (e) {
                    // var errorElement=inputElement.parentElement.querySelector('.form-message')
                    var errorElement = getparent(inputElement, options.formGroupselector).querySelector('.form-message')
                    errorElement.innerText = ''
                    getparent(inputElement, options.formGroupselector).classList.remove('invalid')

                }

            })
            // console.log(inputElement)

        })
    }
}

validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            // dấu cách được coi là ký tự ko phải là rỗng 
            if (typeof value === 'string') {
                console.log(value)
                return value.trim() ? undefined : 'Vui lòng nhập trường này'
            }
            else {
                // ko nhập gì của input thì trả về rỗng còn tahwfng checkbox radio thì trả về null mà null.trim() bị lỗi nên xóa
                return value ? undefined : 'Vui lòng nhập trường này'
            }
        }
    };
}

validator.isemail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regax.test(value) ? undefined : "Trường này phải là email "
        }
    };
}

validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiêu ${min} ký tự`
        }
    };
}
validator.isComfired = function (selector, getConfirmValue, message) {

    return {
        selector: selector,
        test: function (value) {

            return getConfirmValue() === value ? undefined : message
        }
    };
}
var a = document.querySelectorAll('input[name="gender"]')
for (var i = 0; i < a.length; i++) {
    console.log(a[i].value)
}














// phương thức matches được sử dụng để kiểm tra xem một phần tử (element) có khớp với một bộ chọn (selector) CSS hay không.

{/* <div id="myDiv" class="highlight"></div>
var myDiv = document.getElementById('myDiv');
sử dụng phương thức matches để kiểm tra xem phần tử có id "myDiv" có khớp với bộ chọn "#myDiv" hay không. Ví dụ:
if (myDiv.matches('#myDiv')) {
  console.log('Element matches the selector.');
} else {
  console.log('Element does not match the selector.');

} 

if (myDiv.matches('div.highlight')) {
  console.log('Element matches the selector.');
} else {
  console.log('Element does not match the selector.');
}
*/}

// console.log(document.querySelector('#email').trim())