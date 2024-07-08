//company slider
if($(window).width() > 767) {
  let companySlider = new Swiper(".companies-slider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.company-slider-next',
    },
  });
}

//story slider
let storySlider = new Swiper(".stories-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    clickable: true,
    el: '.stories-slider-pagination',
  },
  grid: {
    rows: 3,
    fill: 'row',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      grid: {
        rows: 1
      }
    }
  }
});

//animations
jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  let doAnimations = function() {

    // Calc current offset and get all animatables
    let offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
      let $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});


//mobile menu
$('.toggle-mobile-menu').click(function () {
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('show');
  $('header').toggleClass('bg-blue');
  $('body').toggleClass('scroll-locked')
})

$('.mobile-menu-link').each(function () {
  const btn = $(this);
  btn.click(function () {
    closeMobileMenu()
  })
})

function closeMobileMenu() {
  $('.toggle-mobile-menu').removeClass('active');
  $('.mobile-menu').removeClass('show');
  $('header').removeClass('bg-blue');
  $('body').removeClass('scroll-locked')
}


//companies show more on mobile
$('.companies-show-more').click(function (){
  const wrapper = $('.companies-slider');
  const btnInnerText = $('.companies-show-more').find('span')[0];
  wrapper.toggleClass('show-all');
  if(wrapper.hasClass('show-all')) {
    btnInnerText.innerHTML = 'Hide'
  } else {
    btnInnerText.innerHTML = 'See more'
  }
})


//club-members slider
if($(window).width() > 767) {
  let clubMembersSlider = new Swiper(".club-members-slider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.club-members-slider-next',
    },
  });
}


//club members show more on mobile
$('.club-members-show-more').click(function (){
  const wrapper = $('.club-members-slider');
  const btnInnerText = $('.club-members-show-more').find('span')[0];
  wrapper.toggleClass('show-all');
  if(wrapper.hasClass('show-all')) {
    btnInnerText.innerHTML = 'Hide'
  } else {
    btnInnerText.innerHTML = 'See more'
  }
})


//Sync portfolioTabs1 and portfolioTabs2
$('#portfolioTabs1 .nav-link, #portfolioTabs2 .nav-link').on('click', function (e) {
  e.preventDefault();
  let tabId = $(this).attr('data-bs-target');
  $('#portfolioTabs1 .nav-link[data-bs-target="' + tabId + '"], #portfolioTabs2 .nav-link[data-bs-target="' + tabId + '"]').tab('show');
});









