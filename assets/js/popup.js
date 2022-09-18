function writeTime() {
  var realTime = new Date();
  var hour = realTime.getHours();
  var minutes  = realTime.getMinutes();
  var seconds  = realTime.getSeconds();
  var text = hour + ":" + minutes + ":" + seconds;
  document.getElementById("real-time").innerHTML = text;
};

window.onload = () => {
  setInterval(writeTime, 1000)
}