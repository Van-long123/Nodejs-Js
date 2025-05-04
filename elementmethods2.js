// làm thế nào để select ddc ra những thẻ li trong casi box
var box=document.querySelectorAll('.box-1 ul li')
console.log(box)

// nó đứng ở tại box-1 và tìm con của nó giống như document 
var boxNode=document.querySelector('.box-1')
// cách số hai để mở rộng kiến thức 
console.log(boxNode)
console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.getElementsByTagName('li'))
console.log(boxNode.querySelector('p'))

console.log(boxNode.getElementsByTagName('p'))

// getElementsByTagName getElementsByClassName thif trả vèe htmlcollection dù trả về 1 thì cũng có thằng này
// còn getElementById thì nó trả về một elemtent luôn
// querySelector thì một thằng thì nó trả về thẳng elemetn luôn querySelectorALL hai thằng thì trả về nodelist cói như mảng để truy vaans dùng for  

