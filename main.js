// // PARALLAX HEADER START
new WOW().init();
let fantasy = document.querySelector('.fantasy');
let cloud = document.querySelectorAll('.cloud');
let boat = document.querySelector('.boat');

window.addEventListener('scroll', (e) => {
    fantasy.style.objectPosition = `0 ${window.scrollY / 10}%`
    cloud.forEach(clouds => {
        // console.log(clouds);

        const speed = clouds.getAttribute('data-speed');

        let value = window.scrollY;

        clouds.style.transform = `translateX(${value * speed}px)`;

        boat.style.transform = `translateX(${value * -0.5}px)`;
    })
})

// // PARALLAX HEADER END

// // PARALLAX SECTION START

let section = document.querySelector('.section__box');
let layer = document.querySelectorAll('.layer');

section.addEventListener('mousemove', (e) => {
    layer.forEach(layers => {
        // console.log(layer);
        const speed = layers.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed) / 100;//e.clientX * speed / 100
        const y = (window.innerHeight - e.pageY * speed) / 100;//e.clientY * speed / 100
        console.log(x, y);
        layers.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
});

let timer = document.querySelector('.timer');
let timerNums = document.querySelectorAll('.timer__num');
function scrollCount(dur){
        let id;
        timerNums.forEach(item=>{
            let count = item.getAttribute('data-num');
            // console.log(count);
            item.innerHTML = 0;
            plus(0, item, count);
        })
        function plus(i, elem, num){
            if(i < num){
                i++;
                elem.innerHTML = i;
                id = setTimeout(plus, dur/num,i , elem, num);
            }
        }
} 
window.addEventListener('scroll', function onScroll(){
    if(window.scrollY > timer.offsetTop-window.innerHeight/2) {
        scrollCount(3000);
        this.removeEventListener('scroll', onScroll);
    }
})
//todolist
let form = document.querySelector('.box'),
    formInput = document.querySelector('.box__inp'),
    list = document.querySelector('.list');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let li = document.createElement('li');
    li.className = 'list__item';
    li.innerHTML = `${formInput.value} <button class="list__btn remove">X</button>`;
    list.append(li);
    rmList();
    this.reset();
})
function rmList (){
    let rm = document.querySelectorAll('.remove');
    rm.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();
            this.parentElement.remove();
        })
    })
}
rmList();

let accordName = document.querySelectorAll('.accord__name');
accordName.forEach(item=>{
    item.addEventListener('click', function(e){
        e.preventDefault();
        if(!this.classList.contains('active')){
            accordName.forEach(elem=>{
                elem.classList.remove('active')
                elem.nextElementSibling.style.height = `0px`;
            });
            this.classList.add('active');
            this.nextElementSibling.style.height = `${this.nextElementSibling.scrollHeight}px`;
        }
        else{
            this.classList.remove('active');
            this.nextElementSibling.style.height = `0px`;
        }
    })
})
let hoverImg = document.querySelectorAll('.hover__item img');
hoverImg.forEach(item=>item.addEventListener('mousemove', function(e){
    let bound = this.getBoundingClientRect();
let x = (e.clientX - bound.x - this.clientWidth / 2) * -1;
let y = e.clientY - bound.y - this.clientHeight / 2;
    this.style.transform = `perspective(${this.clientWidth}px) rotateX(${x/20}deg) rotateY(${y/10}deg)`;
}))
hoverImg.forEach(item=>item.addEventListener('mouseout', function(e){
    this.style.transform = '';
}))

let hoverItem = document.querySelectorAll('.hover__item');

function some(entries, observer){
    // console.log();
//    if(entries[0])
if(entries[0].isIntersecting){
        entries[0].target.classList.remove('active');
        entries[0].target.classList.add('active');

    }
    // observer.observe(entries);
    // entries.classList.remove('active');
}
hoverItem.forEach(item => {
   let elem = new IntersectionObserver(some, {threshold: 1.0});
    elem.observe(item);
})

