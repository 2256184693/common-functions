module.exports = {
  addEvent: function(element, type, handler) {
    if(element.addEventListener) {
      element.addEventListener(type, handler, false);
    }else {
      element.attach('on'+ type, function() {
        handler.call(element);
      });
    }
  },
  removeEvent: function(element, type, handler) {
    if(element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    }else {
      element.detachEvent('on' + type, handler);
    }
  },
  getTarget: function(evt) {
    return evt.target || evt.srcElement;
  },
  getEvent: function(e) {
    var evt = e || window.event;
    if(!evt) {
      var c = this.getEvent.caller;
      while(c) {
        evt = c.arguments[0];
        if(evt && Event == evt.constructor) {
          break;
        }
        c = c.caller;
      }
    }
    return evt;
  },
  stopPropagation: function(evt) {
    if(evt.stopPropagation) {
      evt.stopPropagation();
    }else {
      evt.cancelBuble  =true;
    }
  },
  preventDefault: function(evt) {
    if(evt.preventDefault) {
      evt.preventDefault();
    }else {
      evt.returnValue = false;
    }
  }
}