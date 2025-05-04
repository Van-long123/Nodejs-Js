//innerText,textContent
// dùng để lấy ra nội dung text node nằm trong element và sửa nó 
// muốn tương tác đc với text hoặc attribute thì phải lấy được element đang chứa nó

var headingnode=document.querySelector('.heading')
console.log(headingnode)

// casch lấy textnode bằng hai thằng dưới đây
console.log(headingnode.innerText)
console.log(headingnode.textContent)

// cách để sửa textnode

/**
 * / sự thây đổi này được tạo ra khi mã JS được thực thi 
 * vì vậy khi show View page source thì vẫn là nội dung nguyên bản là heading text bên html
 * khi nào JS được thực thi thì mới thây đooir nội dung
 */
document.getElementById('btn').onclick=function(){
headingnode.innerText=' heading'
}
headingnode.innerText='new heading'
headingnode.textContent='new heading1'
// console.log(headingnode.textContent)
// console.log(headingnode.innerText)


// //innerText,textContent timf hiểu xem hai ônh này khác gì nhau
// /**
//  * innerText này là nếu lấy nội dung thì nó lấy giống nội dung trong trình duyệt web/
//  * textContent trả về nội dung thật của nó trong dom
//  * 
//  */


// var heading2node=document.querySelector('.heading1')
// console.log(heading2node)
// // innerText lấy những gì hiện trên giảo diện 
// console.log(heading2node.innerText)
// // textContent lấy giá trị như trong code nó in ra những textnode có trong code
// // thấy nó cách ra ko thì nó lấy luôn phần trắng trong code bên html 
// console.log(heading2node.textContent)



// var heading3node=document.querySelector('h3')
// console.log(heading3node)
// console.log(heading3node.innerText)
// console.log(heading3node.textContent)

// //textnode nằm trong element node đi qua element node mới goi tới những phương thức trên

// //mở rộng thêm
// // innerText là thuộc tính của element node tức là khi lấy ra node thù hải lấy ra đucowj element
// // mới có thể gọi innerText nếu đứng ở textnode gọi tới innerText thì sẽ undefined vì ko đc định nghĩa trên textnide

// //textContent tồn tại trên elemetn node và textnode tức có nghĩa là bạn lấy được ra textnode bạn gọi tới
// // textContent để lấy ra đc nội dung text của textnode đó 


// //bổ sing

// // nó hiểu đây là đoạn text thôi chớ ko phải element trong dom html 
// headingnode.innerText='<i>new heading</i>'

// // ví dụ tiếp 
// // thì khoảng trắng nớ nóe sẽ mặc định khi xxuoongs hàng là thẻ br 
// // lý do ông innerText này khi mà xuôngs dòng nó sẽ đổi thành thẻ br 
// headingnode.innerText=`

// new heading

// `
// // html nó ko hiểu những khảng cách này textContent thì nó sẽ ko hiểu nên nó ko cách
// headingnode.textContent=`

  




// new heading1

// `

