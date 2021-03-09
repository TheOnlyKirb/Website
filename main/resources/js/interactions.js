function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function refreshDrag(elementClassName) {
    Array.from(document.getElementsByClassName(elementClassName)).forEach(element => {
        dragElement(element);
    })
}
function toggleIcon(element, original, updated, revertMs) {
    element.src = `../resources/icons/${updated}`
    if (revertMs) setTimeout(function () { element.src = `../resources/icons/${original}` }, revertMs)
}
function fullscreenWindow(element) {
    element.style = "top: 0; right: 0; left: 0; z-index: 2 !important; width: 99.7%; height: 95.5%; position: absolute;"
}
function fullscreenContent(element) {
    element.style = "top: 0; right: 0; left: 0; width: 99.5%; height: 95%;"
}