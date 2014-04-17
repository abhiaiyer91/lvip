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
app.directive('activateLogo', function (){
  return {
    link: function(scope, element, attrs ) {
      element.onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 85,
        filter: '',
        easing: 'swing'
      });
    }
  };
});
app.directive('activateMobile', function (){
  return {
    link: function(scope, element, attrs ) {
      element.onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 0,
        filter: '',
        easing: 'swing'
      });
    }
  };
});