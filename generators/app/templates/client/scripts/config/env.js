(function() {
  var isEmpty = function(the) {
    return the === '' || the === null || the === undefined ? true : false;
  };

  var getQuery = function() {
    return window.location.search.substring(1).split('&');
  };

  var getParam = function(variable) {
    var vars = getQuery();
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
  };

  var getHost = function() {
    let _ip   = getParam('ip');
    let _port = getParam('port');

    let ip    = isEmpty(_ip) ? 'localhost' : _ip;
    let port  = isEmpty(_port) ? 6888 : _port;

    return ('//' + ip + ':' + port);
  };

  var updateHref = function(href) {
    let _ip   = getParam('ip');
    let _port = getParam('port');

    let ip    = isEmpty(_ip) ? 'localhost' : _ip;
    let port  = isEmpty(_port) ? 6888 : _port;

    return href + '?ip=' + ip + '&port=' + port;
  };

  window.devApiHost = getHost();

  var _this, newHref;

  $.each($('a'), function() {
    _this = $(this);
    newHref = updateHref(_this.attr('href'));
    _this.attr('href', newHref);
  });

  $.each($('[data-jump]'), function() {
    _this = $(this);
    newHref = updateHref(_this.data('jump'));
    _this.data('jump', newHref);
  });
}());
