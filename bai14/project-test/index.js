// file này sẽ là file chính 
// để chạy đc file này 

// muốn dùng đc express thì phải import nó vào  require('express')
// mỗi lần sửa file này là phải chạy lại câu lệnh node index.js
// cứ mỗi lần sửa thì phải chạy lại thì phiền nên có công phụ phục vụ là nodemon nó giúp tự động
// khởi động lại khi phát hiện thay đổi của tệp 
/*
npm i nodemon khi chạy này thì nó sẽ càu đặt nodemon vào project ở trong môi trường dev và product(có nghĩa là deploy product lên servẻ thì cả server cũng cài đặt nodemon này 
nhưng mà server có tính năng reload lại trang ko cần dùng nodemon này )
Bước 1: Chạy câu lệnh npm i --save-dev nodemon
● Bước 2: Thêm dòng "start": "nodemon index.js" vào mục script trong file package.json
● Bước 3: Chạy npm start khi chạy này thì nó sẽ chạy thằng start trong script
khi ctrl+s thì tự động khởi tạo lại ứng dụng
thêm "nodemon --inspect index.js" vào mục script trong file package.json thì f12 sẽ thấy icon nodejs
mục đích của nó để depug 
là kiểu js in ra kết quả ở console còn node bật console thì sẽ ko đc vì node nằm ở backend còn console ở frontend
nên dùng cái nó mới show ra đc cái console của server */
// KHI SỬA FILE PACKAGE PHẢI CHẠY LẠI NPM START 


// CÁCH NHÚNG FILE css,js,image,bootstrap vào 
/*
tạo 1 folder trên public
tải 1 ảnh sau đó  vào index.pug hiển thị ra như img(src="../public/images/image.js", alt="") này sẽ ko đc vì code backend tụi nó là 1 private 
tuy nhiên ta muốn người dùng truy cập vào đc các file trong public
dùng static files 
app.use(express.static('public')) */

const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/product-test')
  .then(() => console.log('Connected!')); 
  // định nghĩa một mô hình (model) cho một (collection)
  // sau đó controller dùng model này làm trung gian để kết nối DB để lấy ra data
const Product = mongoose.model('Product', {
  title:String,
  price:Number,
  thumbnail:String
});
app.use(express.static('public'))
app.set('view engine', 'pug') //này là set Template Engines ta muốn dùng là pug
app.set('views', './views') //nó sẽ đọc thằng pug trong folder ./views (folder này trong nó sẽ có các file pug  )

// app.get('/', function (req, res) {
//   console.log("ok");
//   res.send('home')
// })

  //-trang product nó cũng có giống như này mà khác nội dung vì thế dùng mixin để tái sử dụng
  //- muốn dùng đc mixin dùng từ khóa include
app.get('/products', async (req, res) => {
  // Model.find() lấy ra tất cả các bản ghi thõa mãn điều kiện gì đó
  // Model.findOne() lấy ra 1 bản ghi thõa mãn điều kiện gì đó
  const products=await Product.find({});//dùng await vì nó sẽ lấy bản ghi tốn thời gian mà js nó bất đồng bộ nó sẽ chạy lệnh dưới luôn thêm vào cho giống promise đợi thằng này thực thi rồi code dưới mới chạy
  console.log(products);
  res.render('product',{ title: 'danh sách sản phẩm',products: products})
})
app.get('/deatil-products', function (req, res) {
  res.send('<h1>detail products</h1>')
})


app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/test', (req, res) => {
  res.render('./test/test.pug')
})








app.listen(3000,()=>{
    console.log("http://localhost:3000/")
})