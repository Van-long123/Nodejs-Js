// dùng object để lưu trữ thông tin một hông tin cụ thể 
// cách thêm một key mới bằng biến trong object
var banh='bảnh';
var myinfo={
    name: 'dia chi',
    adress: 'hoi an,VN',
    //thuộc tính
    age:'18',
    'e':'18',
    // thằng e nơs có ngoặc hay ko có ngoặc đều được táat cả mấy thằg kia cũng rứa
//    bỏ ngoạcư ko hiểu là biến đâu nó sẽ hiểu banh là key luôn/
    [banh]:'qua banh',
    // lưu function (phưongw thức)
    getname:function(){
        // this chính là myinfo this.name == myinfo.name tại sao dùng this tại vì lỡ như muốn sửa lại cái tên myinfo thì ko lẽ đi sửa lại từng cái
        return this.name;
    },
    Get(){
        return this.adress;
    }
};
myinfo.classname='FA';
console.log(myinfo);
// thêm một key và value trong một object đac được tạo 
myinfo.email='longpv@gmail.com'

// còn mà đặt full-name này nó sẽ bị lỗi nên đặt vào dấu ngoặc []
myinfo['full-name']='longpv'

//cacsh để láy value ra ngoài
// c1  
console.log(myinfo.name)
// c2 
console.log(myinfo['name'])
// còn mà thằng ko có trong object nó sẽ trả về undifined
console.log(myinfo['amen']);

// ko phải trường nào cũng có thể dùng đc cách thứ nhất 
// thằng này lại chạy ra đúng value là địa chỉ
var myKey='name';
console.log(myinfo[myKey])
// tahwfng này thì undefined 
console.log(myinfo.myKey)


//cách xóa đi một key value 
delete myinfo.e;


// 
console.log(myinfo.getname())

/**
 * tất cả mấy thằng sau : đều là key nhưng trong trường hợp nó là function--> phương thức /mrthod
 * 
 * trong trường hợp lấy ra trực tiếp luôn ko cần phải gọi ()
 * orther-->Thuộc tính /property 
 */




var mon='course'
var object2={
    'name': 'dia chi',
    adress: 'hoi an,VN',
    //thuộc tính
    age:'18',
    'e':'18',
    getname:function(){
        return this.name;
    },
    [mon]:'JS'
}
console.log('tesst')
console.log(object2);

object2.gia=250;
object2['no']='fa'
var a='age';
console.log(object2.name)
console.log(object2['name'])
console.log(object2[a])
delete object2.e



var myinfo1={
    name: 'dia chi',
    adress: 'hoi an,VN',
    //thuộc tính
    age:'18',
    'e':'18',
    [banh]:'qua banh',
    getname:function(){
        return this.name;
    }
};
myinfo1.name='long'
console.log(myinfo1.getname())
