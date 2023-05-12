var api_key = "abc123"; // Api key obtained from your account page
var url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${api_key}`;

function httpGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

function showLocation(data) {
  console.log(data);
}

httpGetAsync(url, showLocation)