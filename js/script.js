$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      nav:false,
      responsive: {
        0: {
          items: 1,
          dotsEach: 5,
        },
        600: {
          items: 5,
        },
        1000: {
          items: 9,
          loop: true,
          margin: 20
        }
      }
    })
  })
  $('.accordion-toggle').click(function(e) {
    e.preventDefault();  
  $("a:first-of-type").removeClass('chev');
  
  var $this = $(this);
  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .accordion-inner').removeClass('show');
      $this.parent().parent().find('li .accordion-inner').slideUp(350);
      $this.toggleClass('chev');
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

$(".closeBtn").click(function(){
  $(".leftFixed").hide();
})


$(".menuBtn").click(function(event){
  event.stopPropagation();
  $("nav").toggleClass("active");
  $(this).toggleClass('open');
})
$("nav").click(function(event){
  event.stopPropagation();
})
$("body").click(function(){
  $("nav").removeClass("active");
  $('#nav-icon1').removeClass('open');
})

$('.subMenu').closest('li').addClass("hasChild");

$(".hasChild").append("<span class='openSub'>v</span>");
$(".openSub").on('click', function(){
  //alert("test");
  $('.subMenu').toggleClass('show');
})



$("input[type='radio']").click(function(){
    var radioValue = $("input[name='radioGroup']:checked").val();
if(radioValue == 'page'){
    $('.sideF .pageField').show();
    $('.sideF .wordField').hide();
    //alert("Your are a - " + radioValue);
}
else{
    $('.sideF .pageField').hide();
    $('.sideF .wordField').show();
    //alert("Your are a - " + radioValue);
}
})