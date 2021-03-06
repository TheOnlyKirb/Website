function playMp3(start, file) {
    let tmp = new Audio(`https://shitterwasfull.ajnicoloff.me/media/${file}`)
    tmp.currentTime = 0.0;
    tmp.play()
    tmp = null;
}