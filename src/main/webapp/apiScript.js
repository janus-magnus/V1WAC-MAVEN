function initPage(){
	$.get("http://ip-api.com/json"), function(data){
		
		    $("body").append(data.status);
		



	}
	
}