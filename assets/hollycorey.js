jQuery(document).ready(function($){
  console.log('ready');

  $('input#add-to-cart').click(function(){

    if($('.variants a.go-to-checkout').length == 0){
      $('<a class="btn go-to-checkout" href="/cart">Go to Checkout</a>').insertAfter(this).fadeIn(300);
      $('<div class="added">Added to cart!</div>').insertAfter(this).fadeIn(300);
    }



  });

  $('.shop').hover(function(){
      $(this).html('<img src="http://hollycorey.com/wp-content/themes/HollyCoreyWordPress/assets/img/shop-new.png">');
   });

   //Add active state to header links

   //..Add 'main-nav' class to both portions of the main-nav, so we can hook to both
   $('#mainNav-left, #mainNav-right').addClass('main-nav');

   function addActive() {
     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
     //var currURI = $('#mainNav-left ul li a').attr('href');
     // var link = currURI.substring(currURI.lastIndexOf("/")+1);
     $('body').addClass(pgurl);
     $(".main-nav ul li a").each(function(){
          var currURI = $(this).attr('href');
          var link = currURI.substring(currURI.lastIndexOf("/")+1);
          if(link == pgurl){
          $(this).addClass("active");
          console.log(pgurl);
          //console.log(currURI);
          console.log(link);}
          });
   }

  addActive();

  $(".image").on("contextmenu",function(e){
     return false;
  });



  //product-loop image auto-size
  /*$('.product-row').each(function(i){
    var heightArr = [];
    $(this).find('.product').each(function(i){
      heightArr.push($(this).find('.image').height());
    });
    var maxHeight = Math.max.apply(Math, heightArr);
    $(this).find('.product .image').height(maxHeight);
  });*/




});
