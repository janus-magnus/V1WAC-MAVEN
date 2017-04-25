function print() {
	var x = document.getElementById("textarea").value
    console.log(x);
    setTimeout(print, 5000);
}
setTimeout(print, 1000);