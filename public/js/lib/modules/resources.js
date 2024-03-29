(function() {
  var resourceCache = {}
    , loading = []
    , readyCallbacks = [];

  function load(src) {
    if (src instanceof Array) {
      src.forEach(function(url) {
        _load(url);
      });
    } else {
      _load(src);
    }
  }

  function _load(url) {
    if (resourceCache[url]) {
      return resourceCache[url];
    } else {
      var img = new Image();
      img.onload = function() {
        resourceCache[url] = img;

        if(isReady()) {
          readyCallbacks.forEach(function(func) { func(); });
        }
      };
      resourceCache[url] = false;
      img.src = url;
    }
  }

  function get(url) {
    return resourceCache[url];
  }

  function onReady(func) {
    readyCallbacks.push(func);
  }

  function isReady() {
    var ready = true;
    for (var k in resourceCache) {
      if (resourceCache.hasOwnProperty(k) && !resourceCache[k]) {
        ready = false;
      }
    }
    return ready;
  }

  window.resources = {
    load: load,
    get: get,
    onReady: onReady,
    isReady: isReady
  };
}());
