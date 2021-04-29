function apiWindow() {
    var resWindow = document.createElement("div")
    var randMarkableId = Math.floor(Math.random()*1000)
    resWindow.id = randMarkableId;
    resWindow.className = "window" + " icon-world"
    resWindow.style = `width: auto; height: auto; margin: auto; position: absolute; top: ${25+Math.random()*40}%; left: ${25+Math.random()*60}%; -ms-transform: translateX(-50%) translateY(-30%); -webkit-transform: translate(-50%,-30%); transform: translate(-50%,-30%);`
    var titleBar = document.createElement("div")
    titleBar.className = "title-bar"
    resWindow.appendChild(titleBar)
    var titleBarText = document.createElement("div")
    titleBarText.className = "title-bar-text"
    titleBarText.innerText = `API.txt`
    titleBar.appendChild(titleBarText)
    var titleBarX = document.createElement("div")
    titleBarX.className = "title-bar-controls"
    var closeX = document.createElement("button")
    closeX.setAttribute("aria-label", "Close")
    closeX.setAttribute("onclick", `closeWindow(${randMarkableId});`)
    var maximizeX = document.createElement("button")
    maximizeX.setAttribute("aria-label", "Maximize")
    maximizeX.setAttribute("onclick", `fullscreenWindow(document.getElementById(${randMarkableId}));`)
    var minimizeX = document.createElement("button")
    minimizeX.setAttribute("aria-label", "Minimize")
    minimizeX.setAttribute("onclick", `document.getElementById(${randMarkableId}).style.width = "300"; document.getElementById(${randMarkableId}).style.height = "auto"; minimize(${randMarkableId})`)
    titleBarX.appendChild(minimizeX)
    titleBarX.appendChild(maximizeX)
    titleBarX.appendChild(closeX)
    titleBar.appendChild(titleBarX)
    var resWindowBody = document.createElement("div")
    var resWindowBodyP = document.createElement("p")
    resWindowBodyP.style = "height: 95%;"
    resWindowBody.className = "window-body"
    resWindowBodyP.innerHTML = `
    <h4 style="margin: auto;">API Documentation/Endpoints</h4>
    <hr style="width: 50%; margin: "auto">
    Please head over to linkedweb.org/docs - I'll eventually update this window, but for now- that's where it is ;)
    `
    resWindowBody.appendChild(resWindowBodyP)
    resWindow.appendChild(resWindowBody)
    document.body.appendChild(resWindow)
    appendIt(randMarkableId)
}
function appendIt(ID) {
    addNewTaskbar(ID)
}