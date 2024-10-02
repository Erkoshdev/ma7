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
document.addEventListener("DOMContentLoaded", function() {
  if(window.innerWidth > 767) {
    const container = document.querySelector('.stories-slider'); // Получаем контейнер
    const containerRect = container.getBoundingClientRect(); // Получаем размеры и положение контейнера

    const distanceToRightEdge = window.innerWidth - containerRect.right; // Расчет расстояния от правой границы контейнера до края экрана

    container.style.marginRight = -distanceToRightEdge + 'px';
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

//добавление класса к блоку когда его верхняя часть наполовину экрана
document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.scroll-block');

  const observerOptions = {
    root: null, // Отслеживание в контексте окна браузера
    rootMargin: '0px',
    threshold: 0.3 // Порог, при котором запускается callback (30% видимости)
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('middle-screen');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  blocks.forEach(block => observer.observe(block));
});