---
  layout: null
sitemap:
exclude: 'yes'
---
$('.post-list').load('/index.html #post-list-blog')

//news
  $(document).ready(function () {
    {% if site.disable_landing_page != true %}
    let opened = false;
    $('a.news-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
        $('.post-list').load('/index.html #post-list-news')

      }
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.post-list').load('/index.html #post-list-news')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.post-list').load('/index.html #post-list-news')
        $('.content-wrapper').addClass('animated slideInRight')
        $('.panel-cover').animate({ 'max-width': '450px', 'width': '33%' }, 400, swing = 'swing', function () { })
      }
    })

    if (window.location.hash && window.location.hash == '#news') {
      $('.post-list').load('/index.html #post-list-news')
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
// games
    $('a.games-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')){
        $('.post-list').load('/index.html #post-list-games')

      } 
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.post-list').load('/index.html #post-list-games')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.post-list').load('/index.html #post-list-games')
        $('.content-wrapper').addClass('animated slideInRight')
        $('.panel-cover').animate({'max-width': '450px', 'width': '33%'}, 400, swing = 'swing', function () {})
      }
    })
  
  if (window.location.hash && window.location.hash == '#games') {
      $('.post-list').load('/index.html #post-list-games')
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
     
     
     
    if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
    {% endif %}

    $('.btn-mobile-menu').click(function () {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    $('.navigation-wrapper .news-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    $('.navigation-wrapper .games-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

  })
