// Template literals 


const courseName='JS';
const courseName1='PHP';

// đây là sử dụng + để nối chuỗi 
const description='Course name: '+courseName;
console.log(description)
// còn dùng Template literals là dấu ``
const description1=`Course name: ${courseName} ${courseName1}`;
console.log(description1)
// kiểu muốn dùng dấu \ thì phải ghi 2 lần mới đc  
const description2=`\\`;
console.log(description2)

// kiểu h dùng ${}  này để hiện thỉ ra màn hình thì nó lỗi phải thêm \trước nó 
const description3=`\${}`;
console.log(description3)

// tiếp theo Multi-line String
// kiểu muốn line2 line3 xuống dòng dùng \n theo cách thông thường khi dùng  Template String thì nó đơn giản hơn
// const lines='line1\n'
// +'line2\n'
// +'line3\n'
const lines='line1\nline2\nline3'
console.log(linesa)

// kiểu nó sẽ giữ lại formmart mà minh làm mình gì thì y như thế đó cách là nó sẽ in ra cách enter nó sẽ in ra enter
const lines1=`line1
line2
line3`
console.log(lines1)
