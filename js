

window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  var rules = {
    createHTML: function(src) {
      return src;
    },
    createScriptURL: function(src) {
      return src;
    }
  };
  var ttPolicy;
  
  try {
   ttPolicy = window.trustedTypes.createPolicy('google-maps-api-loader', rules);
  } catch(e) {
    ttPolicy = rules;
  }
  
  function getScript(src) {
    var a, nonce = ((a = document.querySelector("script[nonce]")) == null ? void 0 : a.nonce) || "";
    var s = document.createElement('script');
    
    s.src = ttPolicy.createScriptURL(src);
    s.nonce = nonce;
    document.head.appendChild(s);
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/64/12ha/search.js");
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/64/12ha/geometry.js");
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/64/12ha/main.js");
})();
