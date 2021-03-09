function playMp3(start, file) {
    let tmp = new Audio(`../media/${file}`)
    tmp.currentTime = 0.0;
    tmp.play()
    tmp = null;
}