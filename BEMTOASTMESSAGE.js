// chúng ta sẽ gọi tới toast và truyền vào title truyền vào message và truyền vào cái type để nó là kiểu info success ...
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main=document.querySelector('#toast')
    const icons={
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle',
        warn: 'fas fa-exclamation-circle',
        error: 'fas fa-exclamation-circle',
    }
    let icon=icons[type]
    let delay=(duration/1000).toFixed(2)
    if(main){
        const toast=document.createElement('div')
        toast.classList.add('toast',`toast--${type}`)
        toast.style.animation=`slideInleft ease 0.3s,fadeout linear 1s ${delay}s forwards` ;
        toast.innerHTML=`
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__body-title">${title}</h3>
                <p class="toast__body-msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `
        main.appendChild(toast)
        const autoRemoveID=setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000);

        toast.onclick=function(e){
            console.log(e.target)
            if(e.target.closest('.toast__close')){
                main.removeChild(toast)
                clearTimeout(autoRemoveID)
            }
            
        }

}

}