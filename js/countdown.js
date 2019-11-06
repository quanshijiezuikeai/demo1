var comingdate= new Date("2019 11 22");

var d = document.getElementById("d");
var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");


var x = setInterval(function(){
  var now = new Date();
  var des = comingdate.getTime() - now.getTime();
  var days = Math.floor(des/(1000 * 60 * 60 * 24));
  var hours = Math.floor(des%(1000 * 60 * 60 *24) / (1000 * 60 * 60));
  var mins = Math.floor(des%(1000 * 60 *60) / (1000 * 60));
  var secs = Math.floor(des%(1000 * 60) / 1000);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

if(des <= 0) clearInterval(x);

},1000);

function getTrueNumber(x){
  return (x < 10) ? ('0' + x):x;
}
