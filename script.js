var slideMenu = document.getElementById("side-menu");
var mainDiv = document.getElementById("main");
var openBtn = document.getElementById("btn-open");
var closeBtn = document.getElementById("btn-close");

function openSlideMenu() {
	slideMenu.style.width = "250px";
	mainDiv.style.marginLeft = "250px";
}

function closeSlideMenu() {
	slideMenu.style.width = "0";
	mainDiv.style.marginLeft = "0";
}

openBtn.addEventListener("click", openSlideMenu);
closeBtn.addEventListener("click", closeSlideMenu);
