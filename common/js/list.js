var nav = $('nav');
var container = $('.container');
var line = $('<div />').addClass('line');

line.appendTo(nav);

var pos = 0;
var wid = 0;

nav.find('ul li a').click((e) => {
  var _this = $(e.target);
  if (!_this.parent().hasClass('active-list') && !nav.hasClass('animate')) {
    nav.addClass('animate');

    nav.find('ul li').removeClass('active-list');
    container.find('.content').hide();

    var position = _this.position();
    var width = _this.parent().width();

    if (position.left >= pos) {
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
        container.find(_this.attr('href')).show();
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
        container.find(_this.attr('href')).show();
      });
    }

    pos = position.left;
    wid = width;
  }
});

$(window).bind("load", () => {
  setupList();
});

function setupList() {
  var href = document.location.href.split('#')[1];
  nav.find('ul li').removeClass('active-list');

  if (href) {
    nav.find(`a[href$="${href}"]`).addClass('active-list');
  } else {
    $(nav.find('a')[0]).addClass('active-list');
  }

  var active = nav.find('a.active-list');
  active.click();
}