if (getParameterByName("logged") === "true") {
  $(document).ready(function() {
    $('#nav-placeholder').load('sections/user_nav.html');
  });
} else {
  $(document).ready(function() {
    $('#nav-placeholder').load('sections/main_nav.html');
  });
}

function loginFalso () {
  if (document.getElementById('user-nav') === null) {
    window.location.href = "index.html?logged=true";
  }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function updateNav() {
  console.log(getParameterByName("logged") === "true");
  if (getParameterByName("logged") === "true") {
    $('#nav-placeholder').load('sections/user_nav.html');
  }
}

function switchPage(url, parameterName) {
  var queryString = getParameterByName(parameterName);
  if (queryString !== null) {
    window.location.href = url + '?' + parameterName + '=' + queryString;
  } else {
    window.location.href = url;
  }
}
