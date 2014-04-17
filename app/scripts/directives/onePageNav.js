'use strict';

app.directive('activate', function (){
  return {
    link: function(scope, element, attrs ) {
      element.onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 40,
        filter: '',
        easing: 'swing'
      });
    }
  };
});
