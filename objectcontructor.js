function User(firstname,lastname,avatar){
    // this.firstname, đối tượng được khởi tạo từ thằng Usẻ này thì sẽ có thược tính firstname = với tham số đc truyền vào
    this.firstname=firstname,
    this.lastname=lastname,
    this.avatar=avatar

    this.getname=function(){
        return `${this.firstname}+${this.lastname}`
    }
} 

// var User1=function(firstname,lastname,avatar){
//     this.firstname=firstname,
//     this.lastname=lastname,
//     this.avatar=avatar

//     this.getname=function(){
//         return `${this.firstname}+${this.lastname}`
//     }
// }
// Tạo một đối tượng mới có kiểu là User bằng cách sử dụng từ khóa "new"
// Gán đối tượng User mới tạo vào biến author. Sau khi thực hiện, biến author sẽ trỏ tới đối tượng User được tạo ra, 
// và bạn có thể sử dụng biến author để tham chiếu và truy cập các thuộc tính và phương thức của đối tượng User đó.
// DÚNG NEW ĐEER TẠO MỘT DỐI TƯỢNG 
var author=new User('ln','pham','avatar');
var user=new User('ln1','pham1','avatar1');
// thawfng nafy nó sẽ trả ra cái mô tả của nó và console.log(author.constructor===User); này kiểm trả thử nó có giống với function mô tả trên hay ko
console.log(author.constructor);
console.log(author);

console.log(user);
// cách thêm thuộc tính cho user 
user.comment='so lo ys ko?'
author.title='chia sẻ đê'
author.ct='chia tay di'
console.log(author);
console.log(author.title);


console.log(author.getname());

console.log(user.firstname);


// nếu mà ko dùng thằng Object constructor thì phải  khai báo và làm lại hai lần lại nên rất alua
var authour={
    firstname:'',
    lastname:'',
    avatar:'',
    getname:''
}
var user={
    firstname:'',
    lastname:'',
    avatar:'',
    getname:''
}
// một đối tượng được khơởi tạo từ những cái 
    //  mô tả của function amen 
// function amen (ama){
//     this.long=ama
// }

var a=new amen(function(){
    // this.firstname, đối tượng được khởi tạo từ thằng Usẻ này thì sẽ có thược tính firstname = với tham số đc truyền vào
    this.firstname='ln',
    this.lastname='pham',
    this.avatar='avatar'

    this.getname=function(){
        return `${this.firstname}+${this.lastname}`
    }
} );
console.log(a)