var owmkey = "b29420af2d5deea7456a513f9babc649";


function timeConverter(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = hour + ':' + min + ':' + sec ;
	  return time;
	}

function windConverter(degree){
	if (degree>337.5) return 'Nord';
    if (degree>292.5) return 'Nord-West';
    if(degree>247.5) return 'West';
    if(degree>202.5) return 'Zuid-West';
    if(degree>157.5) return 'Zuid';
    if(degree>122.5) return 'Zuid-Oost';
    if(degree>67.5) return 'Oost';
    if(degree>22.5){return 'Nord-Oost';}
}

function showWeather(lon, lat, city){
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&APPID=b29420af2d5deea7456a513f9babc649", function(data) {
		var table_body = "";
		table_body += 
		"<tr><td>" + "Temperatuur" + "</td><td><b>" + data.main.temp + "</b></td></tr>" +
		"<tr><td>" + "Windsnelheid" + "</td><td><b>" + data.wind.speed + "</b></td></tr>" +
		"<tr><td>" + "Winddirectie" + "</td><td><b>" + windConverter(data.wind.deg) + "</b></td></tr>" +
		"<tr><td>" + "Zonsopkomst" + "</td><td><b>" + timeConverter(data.sys.sunrise) + "</b></td></tr>" +
		"<tr><td>" + "Zonsondergang" + "</td><td><b>" + timeConverter(data.sys.sunset) + "</b></td></tr>";
	
		$("#WeatherResults").html(table_body);
		$("#wh").html(city);
	});
}

function startup(){
	var longitude = 0;
	var latitude = 0; 
	
	$.getJSON("http://ip-api.com/json/?callback=", function(data) {
		var table_body = "";
		longitude = Math.round(data.lon);
		latitude = Math.round(data.lat);
		$.each(data, function(k, v) {
			table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
		});
		$("#GeoResults").html(table_body);
		showWeather(longitude, latitude, data.city);
	});
	
	$.getJSON("http://localhost:4477/V1WAC-MAVEN/restservices/countries/", function(data){
		var table_body = "";
		$.each(data, function(x, y)	 {
			table_body +=
			"<tr onclick=\"showWeather(document.getElementById(\"c\").innerText,4 ,\"Bejing\" )\"><td>" + y.name + "</td>" +
			"</td><td id=\"c\">" + y.capital + "</td>" +
			"</td><td>" + y.region + "</td>" +
			"</td><td>" + y.surface + "</td>" +
			"</td><td>" + y.population + "</td></tr>";
		});
		$("#CountryInfo").append(table_body);
	});
	}
startup();