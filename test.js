
function smoothScroll(section) {
	var scrollSection = document.getElementById(section);
	scrollSection.scrollIntoView();
}

function myFunction(sectionName) {
    var elmnt = document.getElementById(sectionName);
    elmnt.scrollIntoView({behavior: 'smooth'});
}