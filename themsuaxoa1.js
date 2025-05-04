// coi lại ví dụ callback ở f8 fullstack 
// bài là ứng dụng quản lý khóa học 
// thêm sửa xóa và chạy trên trình duyệt 

var coursesApi = 'http://localhost:3000/courses';

function start() {
    // lấy ra khóa học 
    // getCourses(function (courses) {
    //     console.log(courses)
    //     renderCourses(courses);
    // })
    // cách viết ngắn gọn hơn 
    getCourses(renderCourses)
    handleCreateForm()
}
start()
// khi ứng dụng nó chạy ta start luôn 

// viết ra hamf gọi lên api để lấy dữ liệu ra và render ra view 
function getCourses(callback) {
    fetch(coursesApi)
        .then(function (response) {
            return response.json();
        })
        // thằng trong then là 1 callback nên ta sẽ làm theo cách khác là callback từ tham số 
        // .then(function (courses) {
        //     console.log(courses)
        // })
        .then(callback)
}

// tham soos truyền vào của thằng này là courses trong hàmgetCourses /
// trong hàm này ta render html và đẩy qua html 
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var html = courses.map(function (course) {
        // h chỉ cần css đẹp nữa là thành website thôi 
        // mới chỉ là chức năng read thôi 
        // và bay giờ muốn tạo dữ liệu  luôn ở trên website ko ạo trên post man
        return `
            <li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handledeletecourse(${course.id})">xóa</button>
            </li>
        `;
                    // <button>&times;</button>
    })
    listCoursesBlock.innerHTML = html.join('');
    console.log(courses)
}
// dùng thằg fetch để gửi đi 1 cái yêu cầu với phương thức là post để tạo mới mặc định
// thằng fetch sẽ gửi đi phương thức là get thees nên dùng fetch ở trên hàm renderCourses thì
// ko cần phải định nghĩa lại phương thức nhưng ở thnawfg createCourse thì phải có 
// thì ta đi search gg https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function createCourse(data, callback) {
    // ủl là đối số thứ nhất còn có đối số thứ hai là options 
    // cái body là dữ liệu gửi đi bởi vì ta để ý nhá khi get dữ liệu về ta ko cần phải
    // gửi đi dữ liệu gì nhưng khi tạo dữ liệu mới ở postman thì phai gửi đi 1 cái name 
    // và description với thằg fecth phải truyền body để gửi đi data chính là dữ liêu tta
    // gửi đi và cần phải biến nó thành json là JSON.stringify 
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        // và nó cũng trả về promise 
        // bởi vì sau khi tạo xong tài nguyên thì nó trả về chính tài nguyên đc tạo mới
        // nên ta tận dụng tài nguyen này đeer hiển thị ra website luôn / 
        .then(function (response) {
            return response.json()
        })
        .then(callback)

}
function handleCreateForm() {
    // lắng nghe việc click vào nút 
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function () {
        // var name=document.querySelectorAll('input[name]')
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // việc của ta là gửi đi 1 yêu cầu để tạo mới dữ liệu với phương thức là post thì dùng thằng fetch
        var formData={
            name,
            description
        }
        // gưit thành công nhưng ko thêm đc name và descriptionvào database thêm đc mỗi id
        // xảy ra khi chúng ta đang gửi dữ liệu đi này ko đúng nó ko giống postman gửi đi với form-urlencoded
        // thì bay giờ có thể thiếu header nó giống như cái việc ta gửi thư nó là nhãn thư để
        // cho thằg backend đang mong chờ điêu gì 

        // và khi tạo thành công rồi nhưng nó ko tự hiện ra giữ liệu mới  nhưng bây giờ reload lại trang 
        // thì nó hiện ra vì khi reload lại thì nó chậy lại từ đầu chạy thnawfg start,getCourses(renderCourses) in ra tất cả giá trị có trong database 
        
        // sau khi createcourse xong mà muốn nó render lại luôn ấy thì làm như sau thêm thằng callback vào
        
        // createCourse(formData);
        // và trong callback này gọi lại getCourses(renderCourses) nó sẽ load lại cả list mới 
        createCourse(formData,function(data){
            getCourses(renderCourses)
            console.log(data)
        });

    }
}


// tiếp theo đến phương thức xóa là delete truyền cái id lên
// h là m theem nút xóa ở tất cả các thằng 

function handledeletecourse(idCourse){
    console.log(idCourse)
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    // và nhớ là url/id 
    fetch(coursesApi+'/'+idCourse, options)
        // và nó cũng trả về promise 
        // bởi vì sau khi tạo xong tài nguyên thì nó trả về chính tài nguyên đc tạo mới
        // nên ta tận dụng tài nguyen này đeer hiển thị ra website luôn / 
        .then(function (response) {
            return response.json()
        })
        .then(function(){
            // sau khi xóa render lại view 
            // kiểu mình xóa xong nó sẽ ko mất đi trên vìe mà khi load lại thì nó mới mất 
            // dùng thằng này lại ko tối ưu lắm mỗi lần xóa là phải gọi lại api 
            // thì chubgs ta làm thế nào mà ta biết đc cái logic xóa thẳng element trong dom  
            // thì làm thế nào để xác định đc đúng cái domn để xóa hi ta bấm nút xóa thì ta có 
            // cái idCourse hãy nghĩ ra 1 cách nào đó để xóa đc thì đây ta có thêm đc cái id vào khi render ra cái view
            // cái việc của ta khi bấm xóa là xóa thẳg thẻ li đi là nó sẽ xóa luôn cái khóa hc 
            // thêm cái class vào khi xoa chọc đúng vào cái class và xóa nó khỏi dom
            
            // getCourses(renderCourses)
        })
}