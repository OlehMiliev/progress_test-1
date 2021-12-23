new Swiper ('.catalog_sliders_col_item',{
  direction:'horizontal',
  loop:true,
  slidesPerView:1,
  pagination:{
    el:'.swiper-pagination-catalog',
    clickable:true,
  }
});

const swiper = new Swiper ('.swiper',{
  direction:'horizontal',
  loop:true,
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
  }
});
