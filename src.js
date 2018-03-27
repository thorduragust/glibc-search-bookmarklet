var input_string = prompt("search string: ");
var url = "https://duckduckgo.com/?q=site%3Agnu.org%2Fsoftware%2Flibc%2F+";

for(var i = 0; i < input_string.length; i++) {
  if(input_string[i] == " ") {
    url += "+";
  }else {
    url += input_string[i];
  }
}

window.location.assign(url);
