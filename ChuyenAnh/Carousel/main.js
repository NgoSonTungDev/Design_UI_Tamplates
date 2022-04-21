const indicator = [...document.querySelectorAll('.indicator span')];
const rightspan = document.querySelector('.right-span')
const slideimg = document.querySelector('.slide-img');
let slidenum = 0;
indicator.map((item,index)=>{
    item.addEventListener('click', ()=>{
        indicator.map(dom => dom.classList.remove('active'));
        item.classList.add("active");
        if(index !== slidenum){
            rightspan.classList.add('active')
        }
        setTimeout(() => {
            slideimg.src = `img/img${index+1}.jpg`;
        }, 1200);
        setTimeout(() => {
            rightspan.classList.remove('active')
        }, 1500);
        slidenum = index;
    })
})