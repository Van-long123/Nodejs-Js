// trong class nauf nó chỉ là cáh viết khác của contructor function 
// contructor function  laf moojt khuôn mẫu để giúp tạo ra bản thiết kế của đối tượng 
// thiết kế đối tượng course sau này được tạo ra từ khuôn mẩu này sẽ có hai thuộc tính là Name và Price
// nên ta có thể tạo phpCourse và jsCourse từ một khuôn chung 
function course(name,price){
    this.Name=name;
    this.Price=price;
    this.getname=function(){
        return this.Name;

    }
}
const phpCourse=new course('PHP',1000)
const jsCourse=new course('js',1200)
console.log(phpCourse)
console.log(jsCourse)



// và sau đây là cách viết class thì nó sẽ dễ nhìn hơn  khi in ra kết quả thì vẫn tương tự 
// viết theo class nó cung cấp cách viết nó tổ chức nó gộn gàng hơn 
class Course{
    // trong contructor laf thuộc tính và phương thức nhưng mà nên để trong contructor là thuộc tính còn phương thức làm ngoài contrutor nhưng trong class 
    // trong class có contructor làm nhiệm vụ tương tự contructor function 
    constructor(name,price){
        this.Name=name;
        this.Price=price;
    }
    getName(){
        return this.Name;
    }
    getprimse(){
        return this.Price;
    }
}

const phpcourse=new Course('PHP',1000)
const jscourse=new Course('js',1200)
console.log(phpcourse.getName())
console.log(jscourse)


