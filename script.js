let icon = document.querySelector("#mobile-menu > i")
document.querySelector("#mobile-menu > i").addEventListener('click',()=>{
    let menu = document.querySelector("#menu");
    menu.classList.toggle('show')
    icon.classList.toggle('rotate')
})


