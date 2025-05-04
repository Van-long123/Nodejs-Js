// object protype
function User(firstname,lastname,avatar){
    // thanwfg nafo goij toiws thuoocj tinhs vaf phuongw thức này thì nó sẽ trả về về giá trị của thằng đc gọi tới 
    this.Firstname=firstname,
    this.Lastname=lastname,
    this.Avatar=avatar,
    this.getname=function(){
        return `${this.firstname}+${this.lastname}`
    }
} 
// thằng này nó sẽ ko them vào đc 
User.classname='FA';
User.prototype.fa='no FA'
//thêm thuộc tính
// thêm thuôc thuộctinhs ở ngoài thì nó sẽ ko nhânj được như cái new User 'ln','pham','avatar' để đưa lên function này  muôn muốn đc thì phải viết thêm this.... =..... ở trong function và khi đó thì ta thêm đc
//thằng này mới đc này dùng để thêm thược tính bên ngoài hàm tạo vaf nos theem vào đối tượng được tạo ra là author và user tất cả các 
// thằng đc tạo từ User thì đều nhận cái nó
// thêm trực tiếp trong function trên thì mở nó ở trong console.log là có còn thằng này thì ko nhìn thấy phẩi nhấn [[Prototype]]:Object 
// mới thấy
// theem sau khi hàm tạo đc tạo ra 
User.prototype.classname='FA';
// thêm phương thứuc 
User.prototype.getclass=function(){
    // thàng nào gọi tới thằng này thì this nó là giá trị classname của thằng đó
    return this.classname;
}

// tất cả các đối tượng tạo ra từ User này thì đều có classname getclass
var author=new User('ln','pham','avatar');
var user=new User('ln1','pham1','avatar1');
// gọi nó sẽ bị underfined vì nó ko tồn tại
console.log(author.classname);
console.log(author.getclass());
console.log(author);


var date=2;
switch(date){
    case 0:// suwr dungj toasn tuwr 3 ===
        console.log('0');
        // ko cos break nos sẽ ko dừng lại và lọt xuống case tiếp theo à in giá trị ra console 
        break;
        //trong trường jopwj date =2 nó thấy case 2 là đúng nó sẽ lọt xuống case 10 xong nó sẽ in ra tới break thì nó mới dừng
//    trong trường hơp date =10 thì nó sẽ đọc case 2: ko đúng với nó xong tới case 10 ko thấy break xuống case 11 và in ra giá trị xong break
        case 2: case 10: case 11:
        console.log('2,10')
    
}
var chuoi='ame';
switch (chuoi){
    case 'a':
        console.log('a');
    break;
    case 'ame':
        console.log('ame')
        break;
    default:
        console.log('ko biet')
}
// sử dụng if else trong trươngf hợp >< !==
// while khi mà biết trước giá trị với nó nhiều hơn 3 case ko thì dùng ì else 


// Làm bài tại đây
function Student(firstName,lastName){
    this.firstName=firstName,
    this.lastName=lastName
}
Student.prototype.getFullName=function(){
        return `${this.firstName} ${this.lastName} `
    }


// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'