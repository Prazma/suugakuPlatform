var proport = document.getElementById("proport");
var gameWrapper = document.getElementById("gameWrapper");

var gameFrame = document.getElementById("gameFrame");
gameFrame.src = "./loading.html";

var returnToMenu = document.getElementById("returnToMenu");

function init() {
    proport.style.display = "block";
    gameWrapper.style.display = "none";
    gameFrame.style.height = window.innerHeight - 58 + "px";
}
function openGame(link) {
    proport.style.display = "none";
    gameWrapper.style.display = "block";
    gameFrame.src = link;
}
returnToMenu.onclick = function () {
    proport.style.display = "block";
    gameWrapper.style.display = "none";
    gameFrame.style.height = window.innerHeight - 58 + "px";

    gameFrame.src = "./loading.html";
}
