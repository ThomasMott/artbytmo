window.onload = myFunction;

// runs on load
function myFunction() {
	setThemeOnLoad();
	document
		.getElementById("footer-theme")
		.addEventListener("click", changeTheme);
}

// set theme on click
function changeTheme(e) {
	const themeValue = e.target.closest(`div`).querySelector("h5").innerHTML;
	setThemeLS(themeValue);
}

// set theme on load
function setThemeOnLoad() {
	if (window.localStorage.getItem("theme")) {
		const themeValue = window.localStorage.getItem("theme");
		setThemeLS(themeValue);
	}
}

// set theme in local storage
function setThemeLS(themeValue) {
	document.body.id = themeValue;
	localStorage.setItem("theme", themeValue);
}
