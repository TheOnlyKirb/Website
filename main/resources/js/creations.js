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
    document.getElementById(elementID).remove()
}