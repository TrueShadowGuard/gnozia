document.addEventListener("keydown", e => {
    if(e.code === "F11") {
        e.preventDefault();
        toggleFullScreen();
    }
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}