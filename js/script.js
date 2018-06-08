$(document).ready(function () {
  //toggler btn
  $(".navbar-toggler").click(function () {

    $(".navbar-toggler").toggleClass("change")

  });

  //sticky navbar less padding
  $(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 718){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    }
    else{
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })

  //smooth scroll
  $('.nav-item a, .header-link, #back-to-top').click(function(link){
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000);
  })

  //back to top
  $(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 718){
      $('#back-to-top').addClass('scrollTop');

    }
    else{
      $('#back-to-top').removeClass('scrollTop');
    }
  })


  //ripples
/*  $("#header, .info").ripples({
    dropRadius: 25,
    perturbance: 0.6,
  });
*/
  //magnific popup
  $(".parent-container").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery: {
      // options for gallery
      enabled: true
    }
    // other options
  });

  // about us magnificPopup
  // From jQuery object
$('#btn-learn').magnificPopup({
  items: {
      src: $('<div class="aboutus-popup"> Notre restaurent est situé au cœur de centre ville du Montrouge plus précisément deux pas de la mairie du Montrouge et de station du métro port d’Orléans. Dans notre restaurent, vous ferez connaissance avec la cuisine de la région Himalaya plus particulièrement du Népal et nord de l’inde. Vous pourrez y déguster des plats  avec une saveur  nouvelle au poulet, à l’agneau, aux poissons, au crevette, au gambas, aux fameux plats briyanis préparé avec 24 épices, aux grillades, dont le poulet tandoori, tikka, au seek kabbab et aux pains cuits au tandoor (four traditionnel indien en terre). <br/><br/> Notre équipe sera heureux de vous accueillir dans une atmosphère calme, un décor chaleureux et convivial. </div>'),
      type: 'inline'
  }
});
});
