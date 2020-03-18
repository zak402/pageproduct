$(document).ready(function(){
  $(window,"html").scroll(function(){
    if($(this).scrollTop()>100){
      $(".button_top").css("display","block");
    }
    else{
      $(".button_top").css("display","none"); 
    }
  })

  $(window).on("resize",function(){
    if($(window).width()<992){
      $(".services-icon").addClass("order-1");
      $(".services-heading").addClass("order-2");
    }
    else{
      $(".services-icon").removeClass("order-1");
      $(".services-heading").removeClass("order-2");
    }


    if($(window).width()<1024){
      $(".video-capture,.countdown-product").addClass("order-1");
      $(".video-content,.countdown-content").addClass("order-2");
    }
    else{
      $(".video-capture,.countdown-product").removeClass("order-1");
      $(".video-content,.countdown-content").removeClass("order-2");
    }
  });
  
  if($(window).width()<992){
    $(".services-icon").addClass("order-1");
    $(".services-heading").addClass("order-2");
  }
  else{
    $(".services-icon").removeClass("order-1");
    $(".services-heading").removeClass("order-2");
  }


  if($(window).width()<1024){
    $(".video-capture,.countdown-product").addClass("order-1");
    $(".video-content,.countdown-content").addClass("order-2");
  }
  else{
    $(".video-capture,.countdown-product").removeClass("order-1");
    $(".video-content,.countdown-content").removeClass("order-2");
  }

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    navText: [$('.am-next'),$('.am-prev')],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});

});

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 
  document.getElementById("timer_eng").innerHTML = "<span class='days text-center'>"+days+'<p>Day</p>'+"</span>"+ "<span class='hours text-center'>"+hours+'<p>Hours</p>'+"</span>"+
  "<span class='minutes text-center'>"+minutes+'<p>Minute</p>'+"</span>"+"<span class='seconds text-center'>"+seconds+'<p>Seconds</p>'+"</span>";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

$(".command-now").on("click",function(e){
  e.preventDefault();
  $("html").animate({
    scrollTop:20000
  },2000)
})