//<!--------- CREAR AUTO NAVBAR SCROLLING--------->
const section=document.querySelectorAll('section')
const navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
    let top=window.scrollY;
    let offset=set.offsetTop - 150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id')
    if(top>=offset && top< offset + height){
        navLink.forEach(links=>{
            links.classList.remove('active')
            document.querySelector('header nav a[href*='+id+']').classList.add('active')
        })
    }
})

//<!--------- CREAR stycky nav bar--------->
var header=document.querySelector('header')
header.classList.toggle.apply("sticky",window.scrollY>100)


//<!--------- CREAR a toggle changer--------->
menubar.classList.remove('bx-x')
navbar.classList.remove('active')

};
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



var type= new Typed('.textline',{
    strings:['Frontend Developer','Desarrolladora Web'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    lopp:true
})



