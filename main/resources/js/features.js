function fetchUsrTime() {
  var date = new Date()
  var hour = updateTime(date.getHours())
  var min = updateTime(date.getMinutes())
  document.getElementById("clock").innerText = hour + ":" + min
    setTimeout(function(){ fetchUsrTime() }, 1000)
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k
  }
  else {
    return k
  }
}