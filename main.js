const btnReload = document.querySelector('.reload');
const imgLoad = document.querySelectorAll(".img-item");
const images = document.querySelectorAll('img')

for(let i = 0; i < images.length; i++) {
    const src = images[i].getAttribute('src');
    if(src) images[i].src = src;
    images[i].addEventListener('load',()=>{
        imgLoad[i].classList.remove("lazy")
    })
}

btnReload.addEventListener('click', () => {
    window.location.reload();
})