var searchString = getParameterByName("search");

if (getParameterByName("logged") === "true") {
  $(document).ready(function() {
    $('#nav-placeholder').load('sections/user_nav.html');
    if (searchString !== undefined || searchString !== null) {
      if (document.getElementById('search-input')) {
        document.getElementById('search-input').value = getParameterByName("search");
      } else {
        setTimeout(function() {
          if (document.getElementById('search-input')) {
            document.getElementById('search-input').value = getParameterByName("search");
          }
        }, 15);
      }
    }
  });
} else {
  $(document).ready(function() {
    $('#nav-placeholder').load('sections/main_nav.html');
    if (searchString !== undefined || searchString !== null) {
      if (document.getElementById('search-input')) {
        document.getElementById('search-input').value = getParameterByName("search");
      } else {
        setTimeout(function() {
          if (document.getElementById('search-input')) {
            document.getElementById('search-input').value = getParameterByName("search");
          }
        }, 15);
      }
    }
  });
}

function loginFalso() {
  if (document.getElementById('user-nav') === null || document.getElementById('user-nav') === undefined) {
    window.location.href = "index.html?logged=true";
  }
}

function logoutFalso() {
  if (document.getElementById('main-nav') === null || document.getElementById('main-nav') === undefined) {
    window.location.href = "index.html?logged=false";
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

function searchFalso(url, parameterName, type, event) {
  var queryString = getParameterByName(parameterName);
  var searchInput = document.getElementById('search-input').value;
  var fullUrl;

  if (type === "click") {
    if (queryString !== null && queryString !== undefined) {
      fullUrl = url + '?' + parameterName + '=' + queryString;
    } else {
      fullUrl = url + '?' + parameterName + '=' + 'false';
    }
    if (searchInput !== null && searchInput !== undefined) {
      fullUrl = fullUrl + '&' + 'search' + '=' + searchInput;
    } else {
      return;
    }
  }

  if (type === "button") {
    if (event.which === 13 || event.keyCode === 13) {
      event.preventDefault();
      if (queryString !== null && queryString !== undefined) {
        fullUrl = url + '?' + parameterName + '=' + queryString;
      } else {
        fullUrl = url + '?' + parameterName + '=' + 'false';
      }
      if (searchInput !== null && searchInput !== undefined) {
        fullUrl = fullUrl + '&' + 'search' + '=' + searchInput;
      } else {
        return;
      }
    } else {
      return;
    }
  }
  document.location.href = fullUrl;
}
