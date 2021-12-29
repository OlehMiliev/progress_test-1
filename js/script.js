// header_scroll

let site_bar_wrapper_scroll = document.querySelector('.site_bar_wrapper')

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    site_bar_wrapper_scroll.classList.add('site_bar_wrapper_scrolled')
  } else {
    site_bar_wrapper_scroll.classList.remove('site_bar_wrapper_scrolled')
  }
});

new Swiper ('.catalog_sliders_col_item',{
  direction:'horizontal',
  loop:true,
  slidesPerView:1,
  pagination:{
    el:'.swiper-pagination-catalog',
    clickable:true,
  }
});

// const swiper = new Swiper ('.swiper',{
//   direction:'horizontal',
//   loop:true,
//   pagination:{
//     el:'.swiper-pagination',
//     clickable:true,
//   }
// });

// const doc_swiper_popup = new Swiper('.doc_popup_inner',{
//   direction:'horizontal',
//   loop:true,
//   slidesPerView:1,
//   navigation: {
//     nextEl: '.doc_popup_prev',
//     prevEl: '.doc_popup_next',
//   }
// });


// попапы POPUPs

let call_btn = document.querySelector('.call_btn')
let make_call_popup_wrapper = document.querySelector('.make_call_popup_wrapper')
let call_close_icon = document.querySelector('.call_close_icon')

call_btn.addEventListener('click', function(){
  make_call_popup_wrapper.classList.toggle('make_call_popup_wrapper_active')

});
call_close_icon.addEventListener('click',function (){
  make_call_popup_wrapper.classList.remove('make_call_popup_wrapper_active')
});

let private_politic_text = document.querySelector('.private_politic_text');
let private_politic_popup = document.querySelector('.private_politic_popup')
let pp_close_btn = document.querySelector('.pp_close_btn')

private_politic_text.addEventListener('click',function (){
  private_politic_popup.classList.toggle('private_politic_popup_active')
});
pp_close_btn.addEventListener('click', function (){
  private_politic_popup.classList.remove('private_politic_popup_active')
});



// попапы POPUPs попап для документов
let doc_img_inner = document.querySelector('.doc_img_inner')
let doc_popup_wrapper = document.querySelector('.doc_popup_wrapper')
let doc_popup_close_icon = document.querySelector('.doc_popup_close_icon')

doc_img_inner.addEventListener('click',function (){
  doc_popup_wrapper.classList.toggle('doc_popup_wrapper_active')
});


let request_btn = document.querySelector('.request_btn');
let request_popup_wrapper = document.querySelector('.request_popup_wrapper');
let call_close_icon_2 = document.querySelector('.call_close_icon_2');

request_btn.addEventListener('click',function (){
  request_popup_wrapper.classList.toggle('request_popup_wrapper_active')
});
call_close_icon_2.addEventListener('click',function (){
  request_popup_wrapper.classList.remove('request_popup_wrapper_active')
});




// попапы для каталогов
let cat_rend_btn = document.querySelectorAll('.cat_rend_btn');
let cat_sliders_popup_wrapper = document.querySelectorAll('.cat_sliders_popup_wrapper');
let cat_close_icon = document.querySelectorAll('.cat_close_icon');
let body_body = document.body;

cat_rend_btn.forEach(function (button) {
  button.addEventListener('click', function () {
    const container = this.closest('.catalog_sliders_col_list')
    const statistic = container.querySelectorAll('.min_spec')
    const statistic_2 = container.querySelectorAll('.min_spec:nth-child(2)')
    const statistic_3 = container.querySelectorAll('.min_spec:nth-child(3)')
    console.log()

    const heihgt = statistic[0].innerText;

    const test = container.querySelector('.catalog_sliders_img_inner.swiper-slide.swiper-slide-active').querySelector('img').
    console.log(test)
  })
})
// cat_rend_btn.addEventListener('click', function (){
//   cat_sliders_popup_wrapper.classList.toggle('cat_sliders_popup_wrapper_active')
//   body_body.style.overflow = "hidden"
// });
// cat_close_icon.addEventListener('click',function (){
//   cat_sliders_popup_wrapper.classList.remove('cat_sliders_popup_wrapper_active')
//   body_body.style.overflow = "unset"
// })

// burger_popup
let burger_menu_wrapper = document.querySelector('.burger_menu_wrapper');
let mobil_site_bar_popup = document.querySelector('.mobil_site_bar_popup');
let mobil_site_bar_close_btn = document.querySelector('.mobil_site_bar_close_btn');
let mobil_site_bar_popup_active = document.querySelector('.mobil_site_bar_popup_active')

burger_menu_wrapper.addEventListener('click', function (){
  mobil_site_bar_popup.classList.toggle('mobil_site_bar_popup_active')
  body_body.style.overflow = "hidden"
});
mobil_site_bar_close_btn.addEventListener('click',function (){
  mobil_site_bar_popup.classList.remove('mobil_site_bar_popup_active')
  body_body.style.overflow = "unset"
});


