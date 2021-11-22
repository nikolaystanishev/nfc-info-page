function setupList() {
  var nav = $('nav');
  var line = $('<div />').addClass('line');

  line.appendTo(nav);

  var active = nav.find('.active-list');
  var pos = 0;
  var wid = 0;

  if (active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
      left: pos,
      width: wid
    });
  }

  nav.find('ul li a').click((e) => {
    e.preventDefault();
    if(!$(this).parent().hasClass('active-list') && !nav.hasClass('animate')) {
      nav.addClass('animate');

      var _this = $(this);

      nav.find('ul li').removeClass('active-list');

      var position = _this.parent().position();
      var width = _this.parent().width();

      if(position.left >= pos) {
        line.animate({
          width: ((position.left - pos) + width)
        }, 300, () => {
          line.animate({
            width: width,
            left: position.left
          }, 150, () => {
            nav.removeClass('animate');
          });
          _this.parent().addClass('active-list');
        });
      } else {
        line.animate({
          left: position.left,
          width: ((pos - position.left) + wid)
        }, 300, () => {
          line.animate({
            width: width
          }, 150, () => {
            nav.removeClass('animate');
          });
          _this.parent().addClass('active-list');
        });
      }

      pos = position.left;
      wid = width;
    }
  });
}