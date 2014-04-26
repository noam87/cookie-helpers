;(function(window, exports) {
  ////
  // Namespace your shit, people.
  //
  // Usage:
  //
  // To initialize this  the user may call the `Clusterfoo()` function,
  // which will make `Clusterfoo.cookies` available globally.
  if (typeof window.Clusterfoo !== "object") {
    window.Clusterfoo = function() {
      window.Clusterfoo = {};
    }
  }

  var C = {};
  if (typeof Clusterfoo === "object") Clusterfoo.cookies = C;

  ////
  // Set a cookies by name, value, and days until it expires.
  exports.set = C.set = set;
  function set(name, value, days) {
    var expiration_date = new Date();
    expiration_date.setDate(expiration_date.getDate() + days);
    value = escape(value) + ((days == null) ? "" : "; expires="+expiration_date.toUTCString()) + "; path=/;";
    document.cookie = name + "=" + value;
  }

  ////
  // Get a cookies value by name.
  exports.get = C.get = get;
  function get(name) {
    var value = document.cookie;
    var start = value.indexOf(" " + name + "=");
    if (start == -1) start = value.indexOf(name + "=");
    if (start == -1) {
      value = null;
    } else {
      start = value.indexOf("=", start) + 1;
      var end = value.indexOf(";", start);
      if (end == -1) end = value.length;
      value = unescape(value.substring(start,end));
    }
    return value;
  }

  ////
  // Destroy a cookies by name.
  exports.destroy = C.destroy = destroy;
  function destroy(name) {
    setCookie(name, "", -1);
  }
})(typeof window !== "undefined" ? window : {},
   typeof exports !== "undefined" ? exports : {});
