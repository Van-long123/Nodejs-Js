function Validator(formSelector) {
    var _this = this;
    var FormRules = {};
    function getParent(inputelement, selector) {
        while (inputelement.parentElement) {
            if (inputelement.parentElement.matches(selector)) {
                return inputelement.parentElement;
            }
            inputelement = inputelement.parentElement
        }
    }
    var ValidatorRule = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email: function (value) {
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // nếu mà regax.test(value) này đúng là email thì tra về true thì trả về undifined
            return regax.test(value) ? undefined : "Trường này phải là email "
        },
        min: function (min) {
            return function (value) {
                return value.length >= 6 ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`
            }
        }

    }

    var formElement = document.querySelector(formSelector)
    var inputElement = formElement.querySelectorAll('input[name][rules]')
    for (var input of inputElement) {
        var rules = input.getAttribute('rules').split('|')
        var refunc;
        console.log(rules)
        rules.forEach(function (rule) {
            var isruleHasValue = rule.includes(":")
            refunc = ValidatorRule[rule]
            if (isruleHasValue) {
                var ruleinfo = rule.split(':')
                refunc = ValidatorRule[ruleinfo[0]](ruleinfo[1])
            }
            if (Array.isArray(FormRules[input.name])) {
                FormRules[input.name].push(refunc)
            }
            else {
                FormRules[input.name] = [refunc]
            }
        })

        // input.onblur=function(event ){

        // }
        input.onblur = handleValidate;
        input.oninput = handleClearValidate;
    }
    function handleValidate(event) {
        var rules = FormRules[event.target.name]
        for (var rule of rules) {
            var erromessage = rule(event.target.value);
            if (erromessage) {
                // forEach() không hỗ trợ một số tính năng như break hoặc continue để kiểm soát quá trình lặp. Nếu bạn cần sử dụng các tính năng này, vòng lặp for sẽ là lựa chọn tốt hơn.
                break;
            }
        }
        var message = getParent(event.target, '.form-group')
        console.log(message)
        if (erromessage) {
            message.classList.add('invalid')
            message.querySelector('.form-message').innerText = erromessage;
        }
        else {
            message.classList.remove('invalid')
            message.querySelector('.form-message').innerText = '';
        }
        return erromessage;
    }
    function handleClearValidate(event) {
        var message = getParent(event.target, '.form-group')
        if (message.matches('.invalid')) {
            message.classList.remove('invalid')
            message.querySelector('.form-message').innerText = '';
        }
    }
    console.log(FormRules)
    formElement.onsubmit = function (event) {
        event.preventDefault();
        var isValid = true;
        var inputs = formElement.querySelectorAll('input[name][rules]')
        console.log(inputs)
        for (var input of inputs) {
            var Valist = handleValidate({
                target: input
            })
            if (Valist) {
                isValid = false;
            }
        }
        if (isValid) {
            if (typeof _this.onSubmit === 'function') {
                var result=Array.from(inputs).reduce(function (values, input) {
                    switch (input.type) {
                        // boi den alt shift xuong 
                        case 'checkbox':
                            if(!input.matches(':checked')){
                                return values;
                            }
                            if(!Array.isArray(values[input.name])){
                                values[input.name]=[]
                            }
                            values[input.name].push(input.value)
                            break;
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                            break;
                        case 'file':
                            values[input.name] = input.files
                            break;
                        default:
                            values[input.name] = input.value
                    }
                    return values
                }, {})
                _this.onSubmit(result)
            }
        }
    }
}