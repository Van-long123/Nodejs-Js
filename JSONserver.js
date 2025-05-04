// response.json() cos nghĩa là json.parse cho chúng ta luôn rồi
// ko cần gọi  json.parse luôn vì khi response.json() thì nó đã chuyển sang JS luôn rồi 

// trong bài này học thư viện JSON server 
// JSON server  có thể Fake API Server 
// JSON server:API SERVER (FAKE) /MOCK API
// cài íntall nodejs khi cài xong thì mới có npm 
// npm là node packet manager tức là nhungữ cái thư viện đc quản lý bới thằng node dd goi là npm
// nó sinh ra một thằg npmjs.com đc đi kèm khi cài node


// làm như video là ra mọjt package.json xem nó là cái menu nó quản lý cái thư viện mà ta sẽ cài 
//  mà ở file json_server ta chưa cài thư viện nào nên chúng ta cài thằng json server vào 

// bỏ chữ g đi để cho nó cai đúng vào trong cái folder json_server thôi nó đỡ cài hẳn lên máy tính của chúng ta 
// cònn nếu muốn cài thằng vào máy tính  gõ thẳg npm install -g json-server vào terminal ko cần tạo folder luôn 
// coi thư viện ở đây https://github.com/typicode/json-server
// vào terminal gõ npm i json-server

// sau khi cài xong thì packege.json này đc thêm cái thư viện vừa cài 



// dùng json là phải thêm dấu nháy vào 
// trong courses muốn lưu những khóa học 
// và sau khi tạo xong một cái database này thì tạo sẵn một trường dữ liệu 
/**nàty {
            "id":1,
            "name":"Kiến thưc cơ bản, tổng quan cho người mới bắt đầu",
            "description":"Kiến thưc cơ bản dành cho người mới bắt đầu"
        } 
        thì ta có thể start nó lên để ta truy câpj nó qua API cấp cho các bạn luôn gọi là rest api 
        sau bước tạo db rồi tạo fake data rồi ta start JSON Server lên bằg
        json-server --watch db.json
        --watch đc hiểu là nó sẽ lắng nghe db ỏw đâu ta tạo db.json thì ta viết sau watch
        nhưng việc làm theo đúng hương dẫn trong githup thì thằng npm i json-server này phải là npm install -g json-server
        mới chạy đc câu json-server --watch db.json này 
        mở file package.json lên ở mục "script" thêm "start":"json-server --watch db.json";
        thì thằng script start này thì có thể gọi đc ở terminal 
        là npm start
        Resources ddaay là nó cung cấp cái url gõ 1 phát vào là sẽ trả về json ở trong cái thằng ở db.json là thằng courses 
        ngoài ra thằng json server này nó ko đơn giản là chỉ lấy ra cái này thôi 
        chúng ta còn có thể thêm,xóa,lấy duẽ liệu  đúng như một cái API server mà ông backend làm ra
        nếu mà ta tắt cửa sổ = thùng rác thì nó tắt luôn cái server phải giữ nguyên cho nó chạy giữ nguyên thì nó mới còn
        json server còn bấm x thì nó chỉ ẩn đi thôi nên ko mất đâu
        */

        // sau đây là ta sẽ lấy nó bằng fetch thông qua API ta tự tạo 

var coursesApi='http://localhost:3000/courses'
fetch(coursesApi)
        .then(response=>{
            // response là object response.json( ) trả về promise và nó prase thành js cho ta luôn
            return response.json()
        })
        .then(function(course){
            // nso sẽ trả về đúng như trong cơ sở duc liệu 
            // để hiển thị ra giao diện ta xây dựng ui css đệp đẹp vào xong rồi hiển thị ra
            // nếu muôns có ảnh thì qua db.json thêm hình ảnh vào và cho thằng image bên db vào src của thẻ img 
            console.log(course)

            var html = course.map(function (course) {
                
                // h chỉ cần css đẹp nữa là thành website thôi 
                // mới chỉ là chức năng read thôi 
                // và bay giờ muốn tạo dữ liệu  luôn ở trên website ko ạo trên post man
                return `
                    <li class="course-item-${course.id}">
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick="handledeletecourse(${course.id})">xóa</button>
                    <button onclick="handleUpdatecourse(${course.id})">sửa</button>
                    </li>
                `;
                // <button>&times;</button>
            })
            console.log(html)
        })
