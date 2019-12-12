function loadjs(file, callback) {
  var cdn = 'https://s1-cdn.hm.com/global/frontend/';
  addEventListener('load', function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = cdn + file;
    script.async = true;
    script.onload = function(){
      typeof callback === 'function' && callback(null);
    };
    document.body.appendChild(script);
  });
}

loadjs('hm-utils.1.0.2.js');
