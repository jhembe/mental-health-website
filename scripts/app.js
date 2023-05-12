// let docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//     else{
//         console.log("None element overflows")
//     }
//   }
// );


$(document).ready(function () {
  let offset = {offset:'50%'}
  console.log("Loaded Successfuly")
  $('.hero-heading').waypoint(function(){
    // console.log("Reached to top");
    $('.hero-heading').addClass('animate__animated animate__pulse')
  })

  $('.about-heading').waypoint(function(){
    $('.about-heading').addClass('animate__animated animate__bounce')
  },
  {offset:'50%'})

  $('.founders-heading').waypoint(function(){
    $('.founders-heading').addClass('animate__animated animate__fadeInLeft')
  },
  {
    offset:'80%'
  })

  $('.depression-cond').waypoint(function(){
    $('.founders-heading').addClass('animate__animated animate__fadeInLeft')
  },
  {
    offset:'50%'
  })

  $('img').waypoint(function(){
    $('img').addClass('animate__animated animate__fadeInLeft')
  },offset)

  $('.founder-one').waypoint(function(){
    $('.founder-one').addClass('animate__animated animate__fadeInLeft')
  },{offset:'65%'})

  $('.founder-two').waypoint(function(){
    $('.founder-two').addClass('animate__animated animate__fadeInRight')
  },{offset:'65%'})

  $('.condition-one').waypoint(function(){
    $('.condition-one').addClass('animate__animated animate__fadeIn')
  },offset)
    $('.condition-two').waypoint(function(){
    $('.condition-two').addClass('animate__animated animate__fadeIn')
  },offset)
    $('.condition-three').waypoint(function(){
    $('.condition-three').addClass('animate__animated animate__fadeIn')
  },offset)


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = $(img).data('src');
        $(img).attr('src', src);
        $(img).on('load', () => {
          $(img).addClass('loaded');
        });
        observer.unobserve(img);
      }
    });
  });
  const images = $('img[data-src]');
  images.each(function() {
    observer.observe(this);
  });


});