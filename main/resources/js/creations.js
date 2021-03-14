function closeWindow(elementID) {
    document.getElementsByClassName(elementID)[0].remove()
    document.getElementById(elementID).remove()
}
function addNewTaskbar(elementID) {
    var taskbarDiv = document.getElementById("programList")
    // i know this is gross but it was easier than doing a loop or something so /shrug
    // may change this later when im not exhausted lmao
    // TODO: look at this later? may be a better way- probably is
    var iconName = document.getElementById(elementID).className.split("icon-")[1]
    var programName = Array.from(Array.from(document.getElementById(elementID).children).filter(div => div.className == "title-bar")[0].childNodes).filter(title => title.className == "title-bar-text")[0].innerText
    var taskbarButton = document.createElement("div")
    // so this one is a little odd but lemme explain my thinking.
    // so I want the storage of windows to be by ID, ie: can be identified by id. problem is
    // if I want to have them go to the taskbar, ill need to be able to remove them when closed.
    // you cant have more than 1 id with the same name/number, but i could make a class based on
    // the id of the window, attach it to the taskbar button, then on close, delete all parent divs
    // with the class name that matches the id.
    // i of course could do this with javascript have a global variable yada yada, but
    // the less JS i use, the better tbh. and I'm already gonna use a lot so /shrug
    taskbarButton.className = elementID + " programButton"
    taskbarButton.style = "overflow-x: none;"
    taskbarButton.setAttribute("onclick", `unminimize(${elementID})`)
    var icon = document.createElement("img")
    icon.src = "../resources/icons/" + iconName + ".png"
    taskbarButton.append(icon)
    var taskbarButtonProgram = document.createElement("p")
    taskbarButtonProgram.innerHTML = programName.substr(0, 8)
    taskbarButton.append(taskbarButtonProgram)
    taskbarDiv.append(taskbarButton)
}