var coursesApi = 'http://localhost:3000/courses';
function start() {
    getCourse(renderCourse)
    creatCourse()
}
start();
function getCourse(callback) {
    fetch(coursesApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}
function renderCourse(courses) {
    console.log(courses)
    const ulElement = document.querySelector('#list-courses')
    var html = courses.map(function (course) {
        return `<li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handledeletecourse(${course.id})">Xóa</button>
            <button onclick="handleupdate(${course.id})">Sửa</button>
        </li>`
    })
    ulElement.innerHTML = html.join('')
}
function creatCourse() {
    const creatbtn = document.querySelector('#create')
    creatbtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value//description
        var description = document.querySelector('input[name="description"]').value//description
        var form = {
            name,
            description
        }
        handlecreat(form)
    }
}
function handlecreat(data) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            getCourse(renderCourse)
            console.log(data)
        })
}
function handledeletecourse(courseid) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }
    fetch(coursesApi + '/' + courseid, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            var courseitem = document.querySelector('.course-item-'+courseid)
            if (courseitem) {
                courseitem.remove();
            }
        })
}
function handleupdate(courseid) {
    var nameinput = document.querySelector('input[name="name"]');
    var descriptionInput = document.querySelector('input[name="description"]');
    var updateBtn = document.querySelector('#update')
    updateBtn.style.display='block'
    
    fetch(coursesApi + '/' + courseid)
        .then((response)=>response.json())
        .then(data=>{
            console.log(data)
            nameinput.value=data.name;
            descriptionInput.value=data.description;
            updateBtn.onclick=function(){
                var form ={
                    name:nameinput.value,
                    description:descriptionInput.value
                }
                var options = {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(form)
                    }
                    fetch(coursesApi + '/' + courseid , options)
                    .then(response=>response.json())
                    .then(function(){
                        getCourse(renderCourse)
                    })
            }
        })
    // var options = {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data)
    // }
}





//
// coi lại ví dụ callback ở f8 fullstack 
// bài là ứng dụng quản lý khóa học 
// thêm sửa xóa và chạy trên trình duyệt 

// var coursesApi = 'http://localhost:3000/courses';

// function start() {
//     // lấy ra khóa học 
//     // getCourses(function (courses) {
//     //     console.log(courses)
//     //     renderCourses(courses);
//     // })
//     // cách viết ngắn gọn hơn 
//     getCourses(renderCourses)
//     handleCreateForm()
// }
// start()
// // khi ứng dụng nó chạy ta start luôn 

// // viết ra hamf gọi lên api để lấy dữ liệu ra và render ra view 
// function getCourses(callback) {
//     fetch(coursesApi)
//         .then(function (response) {
//             return response.json();
//         })
//         // thằng trong then là 1 callback nên ta sẽ làm theo cách khác là callback từ tham số 
//         // .then(function (courses) {
//         //     console.log(courses)
//         // })
//         .then(callback)
// }

// // tham soos truyền vào của thằng này là courses trong hàmgetCourses /
// // trong hàm này ta render html và đẩy qua html 
// function renderCourses(courses) {
//     console.log(courses)
//     var listCoursesBlock = document.querySelector('#list-courses');
//     var html = courses.map(function (course) {
//         // h chỉ cần css đẹp nữa là thành website thôi 
//         // mới chỉ là chức năng read thôi 
//         // và bay giờ muốn tạo dữ liệu  luôn ở trên website ko ạo trên post man
//         return `
//             <li class="course-item-${course.id}">
//             <h4>${course.name}</h4>
//             <p>${course.description}</p>
//             <button onclick="handledeletecourse(${course.id})">xóa</button>
//             <button onclick="handleUpdatecourse(${course.id})">sửa</button>
//             </li>
//         `;
//         // <button>&times;</button>
//     })
//     listCoursesBlock.innerHTML = html.join('');
//     console.log(listCoursesBlock.innerHTML)
// }
// // dùng thằg fetch để gửi đi 1 cái yêu cầu với phương thức là post để tạo mới mặc định
// // thằng fetch sẽ gửi đi phương thức là get thees nên dùng fetch ở trên hàm renderCourses thì
// // ko cần phải định nghĩa lại phương thức nhưng ở thnawfg createCourse thì phải có 
// // thì ta đi search gg https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// function createCourse(data, callback) {
//     // ủl là đối số thứ nhất còn có đối số thứ hai là options 
//     // cái body là dữ liệu gửi đi bởi vì ta để ý nhá khi get dữ liệu về ta ko cần phải
//     // gửi đi dữ liệu gì nhưng khi tạo dữ liệu mới ở postman thì phai gửi đi 1 cái name 
//     // và description với thằg fecth phải truyền body để gửi đi data chính là dữ liêu tta
//     // gửi đi và cần phải biến nó thành json là JSON.stringify 
//     var options = {
//         method: 'POST',
//         /**headers: Đây là một đối tượng chứa các thông tin về tiêu đề (headers) của yêu cầu. Trong ví dụ này, có hai tiêu đề được định nghĩa:

// "Content-Type": "application/json": Đây là tiêu đề Content-Type và giá trị của nó là "application/json".
//  Tiêu đề này chỉ định rằng dữ liệu được gửi đi được định dạng dưới dạng JSON. */
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(coursesApi, options)
//         // và nó cũng trả về promise 
//         // bởi vì sau khi tạo xong tài nguyên thì nó trả về chính tài nguyên đc tạo mới
//         // nên ta tận dụng tài nguyen này đeer hiển thị ra website luôn / 
//         .then(function (response) {
//             return response.json()
//         })
//         .then(callback)
// }
// function handleCreateForm() {
//     // lắng nghe việc click vào nút 
//     var createBtn = document.querySelector('#create')
//     createBtn.onclick = function () {
//         // var name=document.querySelectorAll('input[name]')
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;
//         // việc của ta là gửi đi 1 yêu cầu để tạo mới dữ liệu với phương thức là post thì dùng thằng fetch
//         var formData = {
//             name,
//             description
//         }
//         // gưit thành công nhưng ko thêm đc name và descriptionvào database thêm đc mỗi id
//         // xảy ra khi chúng ta đang gửi dữ liệu đi này ko đúng nó ko giống postman gửi đi với form-urlencoded
//         // thì bay giờ có thể thiếu header nó giống như cái việc ta gửi thư nó là nhãn thư để
//         // cho thằg backend đang mong chờ điêu gì 

//         // và khi tạo thành công rồi nhưng nó ko tự hiện ra giữ liệu mới  nhưng bây giờ reload lại trang 
//         // thì nó hiện ra vì khi reload lại thì nó chậy lại từ đầu chạy thnawfg start,getCourses(renderCourses) in ra tất cả giá trị có trong database 

//         // sau khi createcourse xong mà muốn nó render lại luôn ấy thì làm như sau thêm thằng callback vào

//         // createCourse(formData);
//         // và trong callback này gọi lại getCourses(renderCourses) nó sẽ load lại cả list mới 
//         createCourse(formData, function (data) {
//             getCourses(renderCourses)
//             console.log(data)
//         });
//     }
// }


// // tiếp theo đến phương thức xóa là delete truyền cái id lên
// // h là m theem nút xóa ở tất cả các thằng 

// function handledeletecourse(idCourse) {
//     console.log(idCourse)
//     var options = {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//     }
//     // và nhớ là url/id 
//     fetch(coursesApi + '/' + idCourse, options)
//         // và nó cũng trả về promise 
//         // bởi vì sau khi tạo xong tài nguyên thì nó trả về chính tài nguyên đc tạo mới
//         // nên ta tận dụng tài nguyen này đeer hiển thị ra website luôn / 
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function () {
//             // sau khi xóa render lại view 
//             // kiểu mình xóa xong nó sẽ ko mất đi trên vìe mà khi load lại thì nó mới mất 
//             // dùng thằng này lại ko tối ưu lắm mỗi lần xóa là phải gọi lại api 
//             // thì chubgs ta làm thế nào mà ta biết đc cái logic xóa thẳng element trong dom  
//             // thì làm thế nào để xác định đc đúng cái domn để xóa hi ta bấm nút xóa thì ta có 
//             // cái idCourse hãy nghĩ ra 1 cách nào đó để xóa đc thì đây ta có thêm đc cái id vào khi render ra cái view
//             // cái việc của ta khi bấm xóa là xóa thẳg thẻ li đi là nó sẽ xóa luôn cái khóa hc 
//             // thêm cái class vào có thể hiểu đây là 1 attribute và sau khi truyền vào
//             // ta để ý bên trình duyệt elements sẽ có attribute trong thẻ li nên ta có 
//             // thẻ get cái class khi ta bấm xóa  get li khi ta muooons xoas

//             // getCourses(renderCourses)
//             // ta đã get đc cái element thẻ li của cái ta nhấn xóa 
//             var coursesItem = document.querySelector('.course-item-' + idCourse)
//             if (coursesItem) {
//                 //nó sẽ gở khỏi đom luôn và ko cần getCourses(renderCourses) gọi lại api
//                 coursesItem.remove();
//             }
//         })
// }

// function handleUpdatecourse(idCourse) {
//     var nameinput = document.querySelector('input[name="name"]');
//     var descriptionInput = document.querySelector('input[name="description"]');
//     var updateBtn = document.querySelector('#update')
//     updateBtn.style.display='block'
//     fetch(coursesApi + '/' + idCourse)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (course) {
//             nameinput.value = course.name;
//             descriptionInput.value = course.description;
//             updateBtn.onclick = function () {
//                 var updateData={
//                     name: nameinput.value,
//                     description: descriptionInput.value
//                 }
//                 var option = {
//                     method: 'PUT',
//                     headers: {
//                         "Content-Type": "application/json",
//                         // 'Content-Type': 'application/x-www-form-urlencoded',
//                     },
//                     body: JSON.stringify(updateData)
//                 }
//                 fetch(coursesApi+'/'+idCourse,option)
//                 .then(function(response){
//                     return response.json();
//                 })
//                 .then(function(){
//                     getCourses(renderCourses)
//                 })

//             }
//             console.log(course)
//         })
// }
// /**
//  * var options = {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//     }
//     // và nhớ là url/id 
//     fetch(coursesApi+'/'+idCourse, options)
//     code là để xóa database
//  */






