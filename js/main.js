
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .4 + 'px)';
});

/*---------------- srcoll reveal parallax ------------------*/


window.addEventListener('load', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

/*---------------- srcoll reveal content ------------------*/
        
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})