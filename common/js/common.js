(() => {
  loadJquery(loadCommonResources);
})();

function loadJquery(callback) {
  const script = document.createElement("script");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
  script.type = 'text/javascript';
  script.addEventListener('load', () => {
    callback();
  });
  document.head.appendChild(script);
}

function loadCommonResources() {
  $("head").prepend('<div id="common"></div>');

  $("body").prepend('<div id="header"></div>');
  $("body").append('<div id="footer"></div>');

  $("#common").load("./common/common.html");
  $("#header").load("./common/header.html", selectTabInHeader);
  $("#footer").load("./common/footer.html");
}

selectTabInHeader = () => {
  tab = document.location.pathname;
  tab = tab.slice(1);
  if (tab === '') {
    tab = 'index';
  }
  tab = tab.split('.')[0];

  $('.topnav').children().removeClass('active');
  $('.topnav #' + tab).addClass('active');
}