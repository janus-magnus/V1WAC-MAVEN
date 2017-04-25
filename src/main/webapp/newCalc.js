var operator = "";
var display = "";
var nr1 = "";
var nr2 = "";
var final = "";

function calculate() {
	

	
	console.log("nr1 "+nr1);
	console.log("nr2 "+nr2);
	if (nr1 == ""){
		nr1 = 0;
	}
	if (nr2 == ""){
		nr2 = 0;
	}
	console.log("nr1 "+nr1);
	console.log("nr2 "+nr2);
	
	switch (operator){
	
	case "*":
		final = Number(nr1) * Number(nr2);
		break;
	case "/":
		final = Number(nr1) / Number(nr2);
		break;
	case "+":
		final = Number(nr1) + Number(nr2);
		break;
	case "-":
		final = Number(nr1) - Number(nr2);
		break;
	default:
		final = 0;
		break;
	}
	document.getElementById("displayl1").innerHTML = nr1;
	document.getElementById("displayl2").innerHTML = final;
	nr1 = final;

	console.log("final "+final);
}

function setOperator() {
	console.log("nr1 "+nr1);
	console.log("nr2 "+nr2);
	nr2 = "";
	switch (event.target.id) {

	case "btn_div":
		operator = "/";
		break;
	case "btn_prod":
		operator ="*";
		break;
	case "btn_min":
		operator = "-";
		break;
	case "btn_plus":
		operator = "+";
		break;
	default:
		break;
	}
	document.getElementById("displayl3").innerHTML = operator;
	display = "";
	
	if (nr1!==""&&nr2!==""){
		calculate();
		nr2 = "";
	}
	console.log("op "+operator);
	console.log("nr1 "+nr1);
	console.log("nr2 "+nr2);
}
function buildnr() {
	var input;
	switch (event.target.id) {

	case "btn_1":
		input = 1;
		break;
	case "btn_2":
		input = 2;
		break;
	case "btn_3":
		input = 3;
		break;
	case "btn_4":
		input = 4;
		break;
	case "btn_5":
		input = 5;
		break;
	case "btn_6":
		input = 6;
		break;
	case "btn_7":
		input = 7;
		break;
	case "btn_8":
		input = 8;
		break;
	case "btn_9":
		input = 9;
		break;
	case "btn_0":
		if (display == "") {
			input = "";
			break;
		}
		input = 0;
		break;
	default:
		break;
	}

	if (operator == "") {
		nr1 += input;
		display += input;
		document.getElementById("displayl1").innerHTML = display;
	}
	if (operator !== "") {
		nr2 += input;
		display += input;
		document.getElementById("displayl3").innerHTML = operator + display;
	}

	if (input == "") {
		document.getElementById("displayl1").innerHTML = "0";
	}

	console.log(nr1);
	console.log(nr2);
}



function reset() {
	operator = "";
	display = "";
	nr1 = "";
	nr2 = "";
	final = "";
	document.getElementById("displayl1").innerHTML = "0";
	document.getElementById("displayl2").innerHTML = "0";
	document.getElementById("displayl3").innerHTML = "0";
}
