var owmkey = "b29420af2d5deea7456a513f9babc649";

function timeConverter(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = hour + ':' + min + ':' + sec ;
	  return time;
	}

$.getJSON("http://ip-api.com/json/?callback=", function(data) {
	var table_body = "";
	$.each(data, function(k, v) {
		table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
	});
	$("#GeoResults").html(table_body);
});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&APPID=b29420af2d5deea7456a513f9babc649", function(data) {
	var table_body = "";
	console.log(data.coord.lon);
	table_body += 
	"<tr><td>" + "Temperatuur" + "</td><td><b>" + data.main.temp + "</b></td></tr>" +
	"<tr><td>" + "Windsnelheid" + "</td><td><b>" + data.main.temp + "</b></td></tr>" +
	"<tr><td>" + "Winddirectie" + "</td><td><b>" + data.main.temp + "</b></td></tr>" +
	"<tr><td>" + "Zonsopkomst" + "</td><td><b>" + timeConverter(data.sys.sunrise) + "</b></td></tr>" +
	"<tr><td>" + "Zonsondergang" + "</td><td><b>" + timeConverter(data.sys.sunset) + "</b></td></tr>" 
	
	
	
	
	;

	$("#WeatherResults").html(table_body);
});
