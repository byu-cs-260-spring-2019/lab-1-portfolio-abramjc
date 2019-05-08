function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delCookie(cname) {
    var pastDate = new Date();
    pastDate.setTime(pastDate.getTime() - 10000);
    var expires = "expires=" + pastDate.toGMTString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function changeBackground() {
    var color = '#' + (function co(lor){   return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
    delCookie("backgroundColor");
    setCookie("backgroundColor", color, 10);

    document.getElementsByTagName("body")[0].style.backgroundColor = color;
    document.getElementsByTagName("html")[0].style.backgroundColor = color;
}

function resetBackground() {
    delCookie("backgroundColor");

    document.getElementsByTagName("body")[0].style.backgroundColor = "#4EACDE";
    document.getElementsByTagName("html")[0].style.backgroundColor = "#4EACDE";
}

function setBackground() {
    if (getCookie("backgroundColor") === "") {
        return;
    }
    else {
        document.getElementsByTagName("body")[0].style.backgroundColor = getCookie("backgroundColor");
        document.getElementsByTagName("html")[0].style.backgroundColor = getCookie("backgroundColor");

    }
}
