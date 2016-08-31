(function ($) {

  $.fn.carousel = function () {

    var leftArrow = $('.carousel__arrow_left');
    var rightArrow = $('.carousel__arrow_right');
    var elementsList = $('.carousel__list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftArrow.click(function () {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += 125;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });

    rightArrow.click(function () {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 125;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });

    return this;
  }

})(jQuery);;// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();;$(function () {
  $('.carousel').carousel();

  var html = $('.user-profile').html();
  var body = $('body');

  var userData = {
	  title: 'My profile',
      fio: 'Bogdan Derii',
      photo: 'img/foto.jpg',
      prevPosition: 'Freelancer (Design and Front-end)',
      goal: 'Want to learn front-end because:',
      rationale1: 'I like IT',
      rationale2: 'I want to create fine user interfaces',
      rationale3: 'I want to provide a normal future for my son',
      tel: '+380986489391',
      fb: 'https://www.facebook.com/bogdan.derii',
      feadback: 'I can to develope web sites soon'
    };

/*Simple JavaScript Templating John Resig*/
  var content = tmpl(html, userData);
  body.append(content);

/*-----LoDash-----*/
  var template = _.template('<div class="wrapper block-title"><h2>Bonus Profile</h2></div>' + html);
  var contentLow = template(userData);

  body.append(contentLow);

});