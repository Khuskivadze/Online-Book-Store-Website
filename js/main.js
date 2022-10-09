// search button in media  
searchForm =  document.querySelector ('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
}
// search button in media  

// login menu show and hide

let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
} 
document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
}
// login menu show and hide



window.onscroll = () =>{
    searchForm.classList.toggle('active');
    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
}

// book slider 
var swiper  =  new Swiper(".books-slider", {
   
  loop:true,
  centeredSlider:true,
  autoplay:{
   delay:9500,
   disableOnInteraction:false,
  },
  breakpoints : {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
       
    },
    1024: {
      slidesPerView:  3,
    }
  }
}) 
// book slider 
// feature book slider 
var swiper  =  new Swiper(".feature-slider", {
   
  loop:true,
  centeredSlider:true,
  autoplay:{
   delay:9500,
   disableOnInteraction:false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints : {
    0: {
      slidesPerView: 1,
     
    },
    450: {
      slidesPerView:  2,
    },
    768: {
      slidesPerView: 3,
       
    },
    1024: {
      slidesPerView:  4,
    }
  }
})
// feature book slider 