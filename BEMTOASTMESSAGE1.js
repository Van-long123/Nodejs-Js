// chúng ta sẽ gọi tới toast và truyền vào title truyền vào message và truyền vào cái type để nó là kiểu info success ...
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast')
    // tạo ra cái biến thây đổi icon khi success error ìno.. 
    const icons = {
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle',
        warn: 'fas fa-exclamation-circle',
        error: 'fas fa-exclamation-circle',
    }
    // dựa vào cái type dder lấy đc icon tương đương 
    const icon = icons[type]
    const delay = (duration / 1000).toFixed(2))// lấy ra hai số thập phân
    // nếu có ông main ta mới tạo ra nội dụng toast trong id 
    if (main) {
        // tạo document.createElement('div') chỉ có document.createElement này mới dcd còn mà một thằng div. thì ko đc 
        // sử dụng createlement để tạo một node con có create này mới appendchild đc
        const toast = document.createElement('div')// chính là thằng <div class="toast toast--succes"> chauw đưa modifile vào vội 
        // Remove toast when clicked
        
        toast.classList.add('toast', `toast--${type}`)//khi add class toast xong ta add thêm animation
        // h làm sao để 3000ml s ra đc thằnh 3s 
        toast.style.animation = `slideInleft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        // taoj xong thằng cha h thêm nội dung con vào trong nó 
        // innerhtml laf thêm element vào element 
        toast.innerHTML = `
        <div class="toast__icon ">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__body-title">${title}</h3>
            <p class="toast__body-msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
        `;
        // đưa toast vào trong thằng main 
        main.appendChild(toast)
        // khi giải quyết xong thì nó giật nó nhẩy mạnh thêm animation vào
        // nó settimeout sẽ trả lại cái id 
        const autoRemoveID= setTimeout(() => {
            main.removeChild(toast)
            // này dùng ml giây còn cái thằng animation dùng s 
        }, duration + 1000);
        console.log(autoRemoveID)
        toast.onclick = function (e) {
            // closest có nghĩa là tìm cái class của chính nó xem có class này hay ko nếu ko có nó tìm ra thẻ cha 
            // đại loại là nếu bấm trúng nút close thì nó mới lọt vào đây 
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                // sau khi xóa xong nó laij gây ra một cái lỗi là khi xóa thằng toast đi rồi thì nó đẫ xóa mất khỏi dom rồi và sau xuống setimeout thì nó lại xóa thêm một lần nữa nên lỗi 
                clearTimeout(autoRemoveID);
            }
            // e.target nó sẽ trả về  những element ta click vào 
            console.log(e.target)
        };
    }

}

// tiếp theo là bâms vào nút nhấn nó show ra 
// xẩy ra lỗi càng bấm thì nó lại hiện thông báo càng rớt xuống dưới 
// lý do là nó ẩn đi = Animation thôi thực ra là nó vẫn còn ở trong đoạn code function toast ta thêm code vào trong id =toast ở đoạn code trong function toast và khi nhấn lần tiếp theo thì nó tiếp
// nên h khi nó ẩn đi thì ta gỡ bỏ nó đi luôn ta sẽ dùng settimeout
// và cuối cùng là bấm vào dấu x thì nó sẽ tắt đi 
// function showerrorToast() {
//     toast({
//         title: "Thất bại",
//         message: "Có lỗi xảy ra,vui lòng liên hệ quản trị viên",
//         type: 'error',
//         //khoảng thời gian bao nhiêu lâu là ẩn là
//         duration: 5000
//     })
// }
// function showSuccessToast() {
//     toast({
//         title: "Thành công",
//         message: "Bạn đã đăng ký thành công",
//         type: 'success',
//         //khoảng thời gian bao nhiêu lâu là ẩn là
//         duration: 5000
//     })

// }