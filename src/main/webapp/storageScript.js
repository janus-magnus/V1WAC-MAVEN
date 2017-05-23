function init(){
	var htmlstuff = "<textarea id=\"textarea\" rows=\"4\" cols=\"50\"></textarea>";
	htmlstuff = $(htmlstuff).keyup(function(){
		storestuff();
	});
	$("#ding").append(htmlstuff);
}

function storestuff(){
	var text = document.getElementById("textarea").value;
	localStorage.test = text;

	var textforlabel = localStorage.test;
	console.log(textforlabel);
}

window.addEventListener('storage',function(event){
	var textforlabel = localStorage.test;
	$("#out").html(textforlabel);
});


init();