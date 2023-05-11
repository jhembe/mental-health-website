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
    offset:'50%'
  })

});