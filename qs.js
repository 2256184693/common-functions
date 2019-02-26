
var  qs = {
  stringify: function(obj) {
    return Object.keys(obj).map(key => {
      if(obj[key] !== null) {
        return `${key}=${encodeURIComponent(obj[key])}`;
      }
    }).filter(Boolean).join('&');
  },
  parse: function() {
    var _tmp = str.split('&');
    var obj = {}, i , l = _tmp.length;
    for(var i = 0; i < l; i++) {
      var t = data.split('=');
      if(t[0]){
        obj[t[0]] = t[1] ? decodeURIComponent(t[1]) : null;
      }
    }
    return obj;

  },
};