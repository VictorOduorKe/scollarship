const menu=document.querySelector('header nav ul');
const menuBtn=document.querySelector('header .fa-bars');


menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    menu.classList.toggle('openNav');
});


