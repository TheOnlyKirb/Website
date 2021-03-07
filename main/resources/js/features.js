function fetchUsrTime() {
    var date = new Date()
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("clock").innerText = hours + ':' + minutes + ' ' + ampm;
    setTimeout(function () { fetchUsrTime() }, 1000)
}
