function Validator(Option) {
    var selectorRules = {}
    var formElement = document.querySelector(Option.Form)
    console.log(formElement)
    function getParent(inputElement, formGroupselector) {
        while (inputElement.parentElement) {
            // kiểm tra nó có class nớ ko dùng matches 
            if (inputElement.parentElement.matches(formGroupselector)) {
                return inputElement.parentElement
            }
            inputElement = inputElement.parentElement;
        }
    }
    console.log(selectorRules)
    function validate(inputElement, rule) {
        var rules = selectorRules[rule.Selector]
        var errorMessage;
        // console.log(rules)
        // console.log(errorElement)

        console.log(inputElement.value)
        for (var i = 0; i < rules.length; i++) {
           switch(inputElement.type){
            case 'checkbox': case 'radio':
                errorMessage = rules[i](
                    // trả về cái input đc checkes 
                    // rule.Selector cuar thawfng này là input[name="gender"]
                    //tìm ko thấy thằng nào được checked trả về null 
                    // onblur vào trar về input onblur ra trả vè null 
                    formElement.querySelector(rule.Selector+':checked')
                )
                break;
                default:
                    errorMessage = rules[i](inputElement.value)
           }
            // checkbox và radio khi mà .value thì nó cos value trả về value thì nó sẽ ko báo lỗi ví dih như mail femail ỏher  
            if (errorMessage) {
                    break;
                }
        }
        var errorElement=getParent(inputElement,Option.formGroupselector).querySelector('.form-message')
        if (errorMessage) {
            getParent(inputElement, Option.formGroupselector).classList.add('invalid')
            errorElement.innerText = errorMessage;
            
        }
        else {
            getParent(inputElement, Option.formGroupselector).classList.remove('invalid')
            errorElement.innerText = '';
           
        }
        return !errorMessage;
    }
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault()
            //('[name]lấy tất cả những thừag nào có name input[name] lấy nunegx thằng có name trong input
            // var inputElements = formElement.querySelectorAll('[name]')
            var isFormValid = true;
            Option.rules.forEach(function (rule) {
                var inputelement = formElement.querySelector(rule.Selector)
                var isValid = validate(inputelement, rule)
                if (!isValid) {
                    isFormValid = false;
                }
            })
            if (isFormValid) {
                if (typeof Option.onSubmit === 'function') {
                    // var a = true;
                    var enableInput=document.querySelectorAll('[name]:not([disabled])')
                    var formValue = Array.from(enableInput).reduce(function (values, input, index) {

                        switch (input.type) {
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break;
                            case 'radio':

                                // console.log(formElement.querySelector('input[name="'+input.name+'"]'))
                                // console.log(formElement.querySelector('input[name="'+input.name+'"]:checked'))
                                // values[input.name]=formElement.querySelector('input[name="'+input.name+'"]:checked').value
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value

                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})
                    Option.onSubmit(formValue)
                }
            }
           
        }
    }
    Option.rules.forEach(function (rule) {
        // một nodelist
        // khi mà chỉ dùng selector thôi thì nó chỉ lấy đc một thằng input gender là nam còn mấy thằng sau ko lấy đc 
        // vậy nên chỉ mình nó đc gán onblur và oninput còn hai thằng gender kia thì ko đc gán onplur 
        var inputElement = formElement.querySelectorAll(rule.Selector)
        if (Array.isArray(selectorRules[rule.Selector])) {
            selectorRules[rule.Selector].push(rule.test)
        }
        else {
            selectorRules[rule.Selector] = [rule.test]
        }
        console.log(inputElement)
        // onblur chỉ hoạt động trên từng phần tử đơn lẻ, không phải trên một NodeList
        Array.from(inputElement).forEach(function (inputElement) {
            inputElement.onblur = function () {
                validate(inputElement, rule)
            }
            inputElement.oninput = function () {
                var errorElement = getParent(inputElement, Option.formGroupselector).querySelector('.form-message')
                getParent(inputElement, Option.formGroupselector).classList.remove('invalid')
                errorElement.innerText = ''
            }
        })

    })
    console.log(selectorRules)
}
Validator.isRequired = function (Selector) {
    return {
        Selector: Selector,
        test: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function (Selector) {
    return {
        Selector: Selector,
        test: function (value) {
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regax.test(value) ? undefined : "Trường này phải là email "
        }
    }
}
Validator.minLength = function (Selector, min) {
    return {
        Selector: Selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiêu ${min} ký tự`
        }
    }
}
//confirmPass
Validator.confirmPass = function (Selector, getValue, message) {
    return {
        Selector: Selector,
        test: function (value) {
            return getValue() === value ? undefined : message
        }
    }
}

// chỉ lấy đc những thằng có id name và claass
var a = document.querySelector('#amen')
console.log(a)