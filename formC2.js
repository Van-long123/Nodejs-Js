
function Validator(formSelector) {
    // biến chứa tất cả rules của form 
    var formRules = {
        // format như sau 
        // kêy là name còn value là rules 
        // fullname:'required'
        // email:'required|email'
    };


    /**
     * qui ước tạo rule:
     * nếu có rỗi thì return erroer message\ko có lỗi thì return undifined
     */
    var validatorRules = {
        // tất cả rules được định nghĩa trong này
        // value này sẽ là giá trị được lấy từ input nớ truyền vào 
        // bây giờ dựa vào cái chuỗi value (required,required|email,required|min:6) của formRules này để lấy ra đucowj mấy thằng function này
        required: function (value) {
            // có value là có người dùng nhập 
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email: function (value) {

            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // nếu mà regax.test(value) này đúng là email thì tra về true thì trả về undifined
            return regax.test(value) ? undefined : "Trường này phải là email "
        },
        min: function (min) {
            // này nó khó hơn là phải đẩy số 6(required|min:6) vào function cua chúng ta 
            // đây là functuion lồng nhau kết quả trả về của function thứ nhất là kết quả trả về của functon thứ hai 
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`
            }
        },
        max: function (max) {
            // này nó khó hơn là phải đẩy số 6(required|min:6) vào function cua chúng ta 
            // đây là functuion lồng nhau kết quả trả về của function thứ nhất là kết quả trả về của functon thứ hai 
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${min} ký tự`
            }
        }
    };
    // cách để dựa vào cái chuỗi value (required,required|email,required|min:6) của formRules này để lấy ra đucowj mấy thằng function này 
    //ví dụ nha
    //   dựa vào tahwfng rulename nầy để lấy ra rules ở trong validatorRules
    var ruleName = 'required'
    // này là lấy giá trị value của một object thôi 
    // này nó sẽ lấy ra đc value là function có key là required 
    // nhưng ko đơn giản như vậy bởi vì value trong thằng formRules này lại có dấu ngăn cách cái chuỗi value ("required","required|email","required|min:6" 3 thằng này là value và là chuỗi)
    //    dùng split để đổi chuỗi thành array nếu có điểm chung là | nó sẽ thằnh một cái mảng
    var a = "required|email".split('|')
    console.log(a, a[0]) //và đây là cách lấy là như thế ta sẽ đêm nó xuống thằng ban đaafu thêm nó vao object là formRules
    console.log(validatorRules[ruleName])



    console.log(formSelector)
    var formElement = document.querySelector(formSelector)
    // trả về null nếu ko tìm thấy 
    //nếu có forrm thì mới sử lý
    // console.log(formElement)
    // chỉ sử lý khi có element /
    if (formElement) {
        // laasy tất cả thể  input nằm trong formElement có attribut là rules và name 
        // đây là lấy tất cả thằng có name là gender         
        // var inputs=formElement.querySelectorAll('input[name="gender"]')

        // var inputs=formElement.querySelectorAll('[name]')
        var inputs = formElement.querySelectorAll('input[name][rules]')
        // trả về một nodelist key của nó là 0 1 2 còn value là element
        console.log(inputs)
        for (var input of inputs) {
            // và sau khi tách hết ra ta làm tiêp là lấy ra đc cái rule bên tromng validatorRules và đưa vào thằng formRules ở vị trí là value 
            //    kiểu value của formRules tahwfng trong nó phải là một array trong array lưu function lý do đưa vào mảng vì email có hai thằng functiomn;là required và email nếu ko đưa vào mảng thì gán giá trị trực tiếp sẽ mất đi thằng required

            // console.log(input.rules)// nó sẽ trả về undifined bởi vì name là lấy ra đc vì nó là attribute hợp lệ của input
            // console.log(input.getAttribute('rules')) này nó sẽ lấy required|email vân vân mà khi lấy được thằng này thì ta split nó luôn để lên kia khỏi split
            //    nó trả về mảng dùng for lặp qua 
            var rules = input.getAttribute('rules').split('|')
            for (var rule of rules) {
                // h nó đã hết ngăn cách chỉ còn thằng min:6 nữa 
                // includes hc rồi 
                if (rule.includes(':')) {
                    var ruleInfo = rule.split(':')
                    // console.log(ruleInfo)
                    // phần tử đầu là min 
                    rule = ruleInfo[0];
                    // ruleInfo[1] số 6
                    // nó sẽ gọi tới rule min và value nó là function lồng nhau
                    // var a=validatorRules[rule]
                    // console.log(a)
                    // // này thì tra về function ở trong 
                    // var b=validatorRules[rule](ruleInfo[1])
                    // console.log(b,b('amen luon'))
                    // kiểu nếu có dâus : thì chạy function min function cha để nó nhận về function bên trong 


                }
                //bây h muốn khi console thằng rule này nó sẽ là min ko phải min:6 nữa
                // thì ta gán đề nó 
                console.log(rule)
                // nhưng ông min này lại trong ổng lại có thêm return nữa còn mấy ông kia thì trả về luôn
                //bây giờ muốn thằng function min này là thẳng được tra về mà min tra về thì nó trả về function
                /**function(value){
                     return value.length>=min? undefined:`Vui lòng nhập ít nhất ${min} ký tự`
                }func tion này này mới sẫn sàng cho viêtj validate kiểu nó gọi phát là trra về luôn giá trị còn thằng min này thì nó tra về function nên phải tìm cách lấy function mà min nó trả về */
                // tại vì nó cần phải nhận giá trị số min của nó nên phải như thế 
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(validatorRules[rule])
                }
                else {
                    // dduaw thẳng function vào luôn 
                    formRules[input.name]=(validatorRules[rule])
                }
            }
        }
        // cái form ta muốn validate h ta phải làm sao cho value nó phải là function vì thực thi validate chúng ta phải đẩy vào function fuction nó làm việt đó 
        console.log(formRules)

    }

}