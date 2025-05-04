// function Validator(formSelector, options) {
function Validator(formSelector) {
    // thì this này tương đương với đối tượng được tạo ra là form bên html dòng 63 gán vào _this
var _this=this;
    //gán gái trị mặc định cho tham số khi định nghĩa
    // if (!options) {
    //     options = {

    //     }
    // }
    function getParent(element, selector) {
        //  console.log(element.parentElement)
        while (element.parentElement) {
            // được sử dụng để kiểm tra xem một phần tử có khớp với một selector CSS cụ thể hay không
            if (element.parentElement.matches(selector)) {
                // console.log(element.parentElement)
                return element.parentElement;
                // console.log(element.parentElement)
            }
            element = element.parentElement;
        }
    }
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
                var isruleHasValue = rule.includes(':');
                // h nó đã hết ngăn cách chỉ còn thằng min:6 nữa 
                // includes hc rồi 
                var ruleInfo;
                if (isruleHasValue) {
                    ruleInfo = rule.split(':')
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
                // khi tới min:6 thì rulefunc này là function(min) cha trả về function
                var rulefunc = validatorRules[rule]
                //bây h muốn khi console thằng rule này nó sẽ là min ko phải min:6 nữa
                // thì ta gán đề nó 
                console.log(rule)
                if (isruleHasValue) {
                    // truowsc khi nó vào thằng formRules bên dưới ta ghi đè lại nó  là min
                    // này đề lại và trả về dfunction con 
                    rulefunc = rulefunc(ruleInfo[1])
                }
                // nhưng ông min này lại trong ổng lại có thêm return nữa còn mấy ông kia thì trả về luôn
                //bây giờ muốn thằng function min này là thẳng được tra về mà min tra về thì nó trả về function
                /**function(value){
                     return value.length>=min? undefined:`Vui lòng nhập ít nhất ${min} ký tự`
                }func tion này này mới sẫn sàng cho viêtj validate kiểu nó gọi phát là trra về luôn giá trị còn thằng min này thì nó tra về function nên phải tìm cách lấy function mà min nó trả về */
                // tại vì nó cần phải nhận giá trị số min của nó nên phải như thế 
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(rulefunc)
                }
                else {
                    // dduaw thẳng function vào luôn 
                    // khi đã đưa function vào thì đi lấy selector của thẻ input này để lắng nghe cac sự kiện
                    formRules[input.name] = [rulefunc]
                }
            }
            //lắng nghe sự kiện để validate (blur ,change...)
            // kiểu khi onblủ vào thì sẽ thucwj hiện code trong đó 
            console.log(formRules)
            input.onblur = handleValidate;
            // input.onblur=function handleValidate(){};
            input.oninput = handleClearValidate;

        }
        // hàm thực hiên validate 
        function handleValidate(event) {
            // lấy ra element 
            // bây giờ ta sẽ lấy ra cái rule bên trong formRules
            // trả về cái name của thẻ element tường ứng vd input đầu tiên nó sẽ lấy ra đc fullname giống với key của formRules nên lấy ra đc vale trong formRules
            // console.log(event.target.name)
            // lấy ra đc calue của formRules ta sẽ lặp qua thằng này vì calue nó là mảng
            // console.log(formRules[event.target.name])
            console.log(event.target.name)

            var rules = formRules[event.target.name];
            // tìm xem nó có lỗi nào hay ko duyệt fullname chạy 1 lần còn key email chạy 2 lần vì mảng có length là 2 
            // rule này là một function
            // dungf vongf for cũng đc 
            var erorMessage;
            // nếu nhập đúng trong input thì erorMessage trả về undifined là ko có lỗi
            // c1 ko nên dùng find này dùng để timf kiếm value trong array
            // rules.find(function (rule) {
            //     // nếu là email thì có 2 function đầu tiên là required nếu nó ko nhập thì trả về chuỗi vui lntn trả về chuỗi là 
            //     // true mà thằng find này trả về true là dùng luôn còn nếu  là function trả về undifined thì nó sẽ là false và chạy tiếp đến thằng thứ 2 trong mảng
            //     // kiểu có lỗi cái là ngưng vòng lặp luôn 
            //     // rule này chính là những function required email min của validatorRules 
            //     erorMessage = rule(event.target.value)
            //     return erorMessage
            // })
            // c2
            for(var rule of rules){
                erorMessage = rule(event.target.value)
                if(erorMessage){
                    break;
                }
            }
            // thằng này tìm đc là nó trả về function đó luôn 
            // var erorMessage=rules.find(function(rule){
            //     // rule này chính là những function required email min của validatorRules 
            //     // kiểu thằng này kiểm tra điều kiện nếu mà nó thõa điều kiện thì nó trả lại giá trị rule mà rule là function 
            //     // ko thõa Dk thì rả về undifined 
            //     return rule(event.target.value)
            // })
            console.log(erorMessage)
            // erorMessage=undifined là nhập đúng còn trả về chuỗi là nhập sai và ko nhập 
            //chuỗi nó mới chạy if
            //nếu có lỗi thì hiển thị message ra UI 
            // ta sẽ từ thẻ inpu đi tìm thẻ cha bên trên là form-group xong từ thằng chs đi xuống thằng span 
            //    khi xong lasng nghe theem moojt ssự kiện nữa là khi nhập thì nó sẽ mất đi báo lỗi 
            if (erorMessage) {
                // cách lấy là viết ra một function getParrent để gọn 
                // tham soos thuứ hai là thằng cha ta lấy ra để dí tới span 
                // phải có . nó mới biết đc là class hay name để nó tìm phần tử trong DOM có khớp với một selector css hay ko
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid')
                    var formmessage = formGroup.querySelector('.form-message')
                    if (formmessage) {
                        formmessage.innerText = erorMessage;
                        // console.log(formmessage)

                    }
                }
            }
            // else{
            //     var formGroup=getParent(event.target,'.form-group');
            //     var formmessage=formGroup.querySelector('.form-message')
            //     formGroup.classList.remove('invalid')
            //     formmessage.innerText='';
            // }


            // console.log(formGroup)
            return !erorMessage;
        }
        // cái form ta muốn validate h ta phải làm sao cho value nó phải là function vì thực thi validate chúng ta phải đẩy vào function fuction nó làm việt đó 
        console.log(formRules)
        // hàm clear mesage lỗi tiếp theo tới nút đăng ký là nó sẽ kiểm tra xong rồi submir in ra consolelog bây h chúng ta sẽ bỏ đi hành vi mặc định của nó
        function handleClearValidate(event) {
            var formGroup = getParent(event.target, '.form-group');
            var formmessage = formGroup.querySelector('.form-message')
            // if(formGroup.matches('.invalid')){
            // kiểm tra class có tồn tại trong element ko 
            // có trả về true 
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid')
                formmessage.innerText = '';
            }
        }

    }
// để ra ngoài thì nó nằm ở function Validator này this nằm ở thằng nào thì trả về giá trị trương ứng 
// this nằm trong function Validator này là đối tượng đc khởi tạo khi gọi ừ khóa new khi gọi từ khóa new nó sẽ tạo ra 1 đối tượng ới contructor function Validator thì từ khóa this  trong cái contructor function này tương ứng với đối tượng nó tạo ra  
// trong trường hợp này trả về đoois tươnghj form      và trả về Validator() đây là đối tượng được khởi  tạo từ contructor validator   và Validator() tương ứng với chính thằng form luôn chính  thằng đc tạo ra                                                          
// từ this     nàm trong một contrutor function  Validator thì nó tường đương với đối tượng đc tạo ra từ contructor function đó

console.log(this)
    //xử lý hành vi submit form 
    // và khi bấm vô thì check tất cả các trường input 
    formElement.onsubmit = function (event) {
        event.preventDefault()
        // nó sẽ là this utuwf bên ngoài 
        console.this(_this)
        // c1 nó sẽ nhận về một lỗi là TypeError: this.onSubmit is not a function
    // at Validator.formElement.onsubmit lỗi này có nghĩa là onSubmit ko phải là một hàm
        //this keyword this này lúc nó mang giá trị này lúc mang giá trị kia tùy vào trường hợp ta sử dụng nó 
        // ta đang dùng this trong một cái function mà function đc gán cho dom event là onsubmit và element là formElement thì this chính là element
        // this.onSubmit(); là ăn lõio vì cái form cái form của formElement(là thanwg  <form action="" method="POST" class="form" id="register-form">) lấy đâu ra là submit
        // thật ra khi gọi  this.onSubmit(); này mong muốc this nàyu chính là đối tượng đc khởi tạo từ validator là thằng form bên hrml 
        // this.onSubmit() là mong muốn gọi tới thằng form.onSubmit=function(formData){ bên html 
        // bây giờ viết thằng this này ra ngoài 
        console.log(this)
    this.onSubmit();
        var inputs = formElement.querySelectorAll('input[name][rules]')
        var isValid = true;
        for (var input of inputs) {
            // console.log(input.name)
            // formRules[input.name](input.value)
            // rvent.target là cái element 
            if (!handleValidate({
                // dùng object vì trên là event.target  thì đưa lên là event sẽ là object mà muốn lấy element thì object.jey mà key là target
                target: input
                // sau khi xong thằng nyaf cho handleValidate này trả về một erromessage 
            })) {
                isValid = false;
            }

        }
        
        //có lỗi là isvalid =false chỉ cần có một lỗi trong input thì nó vẫn là false
        console.log(isValid)
        //khi ko có lỗi submit
        if (isValid) {
            // trong trường hợp ko muốn submit với hành vi mặc định muốn trả về một cái value để có thể gọi API thì qua bên html tạo một  new thằng validator
            //    c1 dùng từ khóa new 
            // if(this.onSubmit){
            //     // thì chạy thàng này 
            //     // thì bay giờ ónubmit ko có nên nó sẽ xuống  else còn mà muốn lọt vào thì qua bên html
            //     this.onSubmit();
            // }
            // else{
            //     formElement.submit();
            // }
            //C2        
            // this.onSubmit lại lỗi vì trong này từ khóa thí lại là element formElement nên alf coi code ở dòng 3
            if(typeof options.onSubmit==='function'){
                var enableInput=document.querySelectorAll('[name]:not([disabled])')
                var formValues=Array.from(enableInput).reduce(function(values,input){
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
                    switch(input.type){ 
                        
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
                            values[input.name]=formElement.querySelector('input[name="'+input.name+'"]:checked').value
                            
                            break;
                        case 'checkbox':
                            // checckbox chúng ta sẽ cho nó vào array người dùng đc chọn chớ nó ko trả về riêng lẽ nữa 
                            if(!input.matches(':checked')){
                                // kieeru khi mà bỏ đi mất cáci điều kiện rule bên validator thì tất cả input đều mất điều kiện 
                                // nêú ko nhập gì nó sẽ trẻ tất về rỗng trừ checkbox này nên ta phỉa gán rỗng cho nó nếu ko checked 
                                values[input.name]='';
                                return values
                            }
                            if(!Array.isArray(values[input.name])){
                                values[input.name]=[];
                            }
                            values[input.name].push(input.value)
                            break;
                            case 'file':
                                // nó tra về một filelist dùng này để up lên API có thể up load được ảnh khi hc backend còn ko có tahwnfg này thì nó lại tra về chỗ lưu 
                                values[input.name]=input.files
                            break;
                        default :
                        // console.log(input.name,input.value)
                        // console.log(input)
    
                        values[input.name]=input.value;
                    }
                    return  values
                },{})
    //gọi hàn ónubmit và trả về kèm giá trị của form c2
                options.onSubmit(formValues);
            }
            else{
                formElement.submit();
            }
        }
    }
}


// fix bugs:
// find method
// ónubmit method