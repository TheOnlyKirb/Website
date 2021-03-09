function spawnWindow(title, bodyText, buttonText, topPercent, leftPercent) {
    var errWindow = document.createElement("div")
    var randMarkableId = Math.floor(Math.random()*1000)
    errWindow.id = randMarkableId;
    errWindow.className = "window"
    errWindow.style = `width: auto; height: auto; margin: auto; position: absolute; top: ${topPercent}%; left: ${leftPercent}%; -ms-transform: translateX(-50%) translateY(-30%); -webkit-transform: translate(-50%,-30%); transform: translate(-50%,-30%);`
    var titleBar = document.createElement("div")
    titleBar.className = "title-bar"
    errWindow.appendChild(titleBar)
    var titleBarText = document.createElement("div")
    titleBarText.className = "title-bar-text"
    titleBarText.innerText = title
    titleBar.appendChild(titleBarText)
    var titleBarX = document.createElement("div")
    titleBarX.className = "title-bar-controls"
    var closeX = document.createElement("button")
    closeX.setAttribute("aria-label", "Close")
    closeX.setAttribute("aria-label", "Maximize")

    closeX.setAttribute("onclick", `closeWindow(${randMarkableId});`)
    titleBarX.appendChild(closeX)
    titleBar.appendChild(titleBarX)
    var errWindowBody = document.createElement("div")
    var errWindowBodyP = document.createElement("p")
    var errWindowBodyButton = document.createElement("button")
    errWindowBody.className = "window-body"
    errWindowBodyP.innerHTML = bodyText;
    if(buttonText) errWindowBodyButton.innerText = buttonText
    errWindowBody.appendChild(errWindowBodyP)
    if(buttonText) errWindowBody.appendChild(errWindowBodyButton)
    errWindow.appendChild(errWindowBody)
    document.body.appendChild(errWindow);
}
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
    var icon = document.createElement("img")
    icon.src = "../resources/icons/" + iconName + ".png"
    taskbarButton.append(icon)
    var taskbarButtonProgram = document.createElement("p")
    taskbarButtonProgram.innerHTML = programName.substr(0, 8)
    taskbarButton.append(taskbarButtonProgram)
    taskbarDiv.append(taskbarButton)
}