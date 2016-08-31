$(function () {
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