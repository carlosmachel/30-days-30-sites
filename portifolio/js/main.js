(function(win, doc){
  'use strict';

  var $menu = doc.querySelector('[data-js="js-header__sandwich"]');
  var $nav = doc.querySelector('[data-js="js-nav"]');
  
  $menu.addEventListener('click', toggle, false);

  function toggle(event) {
    event.preventDefault();
    
    if ($nav.classList.contains('nav--active') ) {
      $nav.classList.remove('nav--active');      
    } else {
      $nav.classList.add('nav--active');
    }
  }

})(window, document);