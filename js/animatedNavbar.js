window.addEventListener('scroll', function(){
    var logoImage = document.querySelector('.logo img');
    var mainNav = document.getElementById('mainNav');
    
    if  (window.pageYOffset > 0) {
        logoImage.style.height = "64px";
        mainNav.classList.add('bg-black');
        mainNav.classList.add('text-white')
    }else {
        logoImage.style.height = "84px";
        mainNav.classList.remove('bg-black');
        mainNav.classList.remove('text-white')
    }
}) 
