(function(win, doc){
  'use strict';

  var $menu = doc.querySelector('[data-js="menu-sandwich"]');
  var $nav = doc.querySelector('[role="navigation"]');
  
  $menu.addEventListener('click', toggle, false);

  function toggle(event) {
    event.preventDefault();
    
    if ($nav.classList.contains('nav-active') ) {
      $nav.classList.remove('nav-active');      
    } else {
      $nav.classList.add('nav-active');
    }
  }

})(window, document);