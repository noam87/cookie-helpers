;(function(window, exports) {
  var C = {};
  
  appendToNamespace("Clusterfoo", "cookies", C)
  
  function appendToNamespace(namespace, elementName, elementValue) {
    if (typeof window[namespace] === "object") {
      window[namespace][elementName] = elementValue;
    }
    var oldNamespaceFunction = function(){};
    if (typeof window[namespace] == "function") {
      oldNamespaceFunction = window[namespace];
    }
    if (typeof window[namespace] !== "object") {
      window[namespace] = function() {
        window[namespace] = {};
        oldNamespaceFunction();
        window[namespace][elementName] = elementValue;
      }
    }
  }

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
    set(name, "", -1);
  }
})(typeof window !== "undefined" ? window : {},
   typeof exports !== "undefined" ? exports : {});
