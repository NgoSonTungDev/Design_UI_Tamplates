const img = [...document.querySelectorAll('.img-container')];

let i = 0;

const slider = () => {
    img.map(item => item.className = 'img-container');
    if(i === 0){
        img[0].classList.add('left');
        img[1].classList.add('front');
        img[2].classList.add('down');
    } else if(i === 1){
        img[2].classList.add('left');
        img[0].classList.add('front');
        img[1].classList.add('down');
    } else if(i === 2){
        img[1].classList.add('left');
        img[2].classList.add('front');
        img[0].classList.add('down');
    }
    if(i !== 2){
        i++;
    } else{
        i = 0;
    }
}

let loop;

setTimeout(() => {
    loop = setInterval(() => {
        slider();
    }, 3000)
}, 1000);