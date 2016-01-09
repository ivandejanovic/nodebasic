(function(root, document) {
  'use strict';
  
  var message = document.getElementById('message');
  var button = document.getElementById('button');
  
  if (message && button) {
    var clickHandler = function(event) {
      var xhr = new XMLHttpRequest({mozSystem: true});
      xhr.open("GET", "/ajax", true);
      xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
          message.innerHTML = "Ajax succeded";
        }
      };

      xhr.onerror = function () {
        message.innerHTML = "Ajax failed.";
      };
      
      xhr.send();
    };

    button.addEventListener('click', clickHandler);
  }

}(this, this.document));
