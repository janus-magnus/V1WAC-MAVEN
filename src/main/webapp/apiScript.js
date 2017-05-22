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
	if (degree>337.5) return 'Noord';
    if (degree>292.5) return 'Noord-West';
    if(degree>247.5) return 'West';
    if(degree>202.5) return 'Zuid-West';
    if(degree>157.5) return 'Zuid';
    if(degree>122.5) return 'Zuid-Oost';
    if(degree>67.5) return 'Oost';
    if(degree>22.5){return 'Noord-Oost';}
}

function showWeather(lon, lat, city){
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&APPID=b29420af2d5deea7456a513f9babc649", function(data) {
		var table_body = "";
		table_body += 
		"<tr><td>" + "Temperatuur" + "</td><td><b>" + data.main.temp + " ºC" + " </b></td></tr>" +
		"<tr><td>" + "Windsnelheid" + "</td><td><b>" + data.wind.speed + " km/h" +"</b></td></tr>" +
		"<tr><td>" + "Winddirectie" + "</td><td><b>" + windConverter(data.wind.deg) + "</b></td></tr>" +
		"<tr><td>" + "Windsnelheid" + "</td><td><b>" + data.main.humidity + " %" +"</b></td></tr>" +
		"<tr><td>" + "Zonsopkomst" + "</td><td><b>" + timeConverter(data.sys.sunrise) + "</b></td></tr>" +
		"<tr><td>" + "Zonsondergang" + "</td><td><b>" + timeConverter(data.sys.sunset) + "</b></td></tr>";
	
		$("#WeatherResults").html(table_body);
		$("#wh").html("Het weer in " + city);
	});
}

function startup(){
	var longitude = 0;
	var latitude = 0; 
	
	$.getJSON("http://ip-api.com/json/?callback=", function(data) {
		var table_body = "";
		longitude = Math.round(data.lon);
		latitude = Math.round(data.lat);
		table_body +=
		"<tr><td>" + "Landcode" + "</td><td><b>" + data.countryCode + "</b></td></tr>" +
		"<tr><td>" + "Land" + "</td><td><b>" + data.country + "</b></td></tr>" +
		"<tr><td>" + "Regio" + "</td><td><b>" + data.region + "</b></td></tr>" +
		"<tr><td>" + "Stad" + "</td><td><b>" + data.city + "</b></td></tr>" +
		"<tr><td>" + "Postcode" + "</td><td><b>" + data.zip + "</b></td></tr>"+
		"<tr><td>" + "Longitude" + "</td><td><b>" + data.lon + "</b></td></tr>" +
		"<tr><td>" + "Latitude" + "</td><td><b>" + data.lat + "</b></td></tr>" +
		"<tr><td>" + "IP" + "</td><td><b>" + data.query + "</b></td></tr>";
		$("#GeoResults").html(table_body);
		showWeather(longitude, latitude, data.city);
	});
	
	$.getJSON("http://localhost:4771/V1WAC-MAVEN/restservices/countries", function(data){
		var table_body = "";
		var newRow;
		$.each(data, function(x, y)	 {
			table_body +=
			"<tr class=\"rows\"><td>" + y.name + "</td>" +
			"</td><td>" + y.capital + "</td>" +
			"</td><td>" + y.region + "</td>" +
			"</td><td>" + y.surface + "</td>" +
			"</td><td>" + y.population + "</td></tr>";
			
			newRow = $(table_body).click(function () {
				console.log(y.capital)});
			
			
		});
		$("#CountryInfo").append(newRow);
	});
	}


startup();