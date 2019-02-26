
function buildDate (str) {
  if(typeof str === 'number') {
    return new Date(str);
  } else if(str instanceof Date) {
    return str;
  }
  if(!str) {
    return null;
  }
  if (str.indexOf("+") >= 0) {
    str = str.replace("+0800 ", "");
  }
  str = str.replace(/-/g, "/");
  return new Date(str);
}

function format(dataStr, pattern) {
  if(!pattern) {
    pattern = 'yyyy-MM-dd HH:mm';
  }
  if(dataStr === undefined) {
    return '';
  }
  var date = buildDate(dataStr);
  var hour = date.getHours();
  var o = {
    "M+": date.getMonth() + 1, //month
    "d+": date.getDate(), //day
    "H+": hour, //hour
    "h+": (hour > 12 ? hour - 12 : hour), //hour
    "m+": date.getMinutes(), //minute
    "s+": date.getSeconds(), //second
    "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
    "S": date.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(pattern)) {
    pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o)
    if (new RegExp("(" + k + ")").test(pattern)) {
      pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  return pattern;
}

module.exports = format;