
$(document).ready(function(){
var celsiusTemp,whatWeather,windSpeed,farTemp,city;
  var latitude,longitude;

var api = "73bf188896b7e9c2";
 
  $.ajax({
  url: "https://api.wunderground.com/api/73bf188896b7e9c2/forecast/conditions/q/autoip.json",
  parsed_jsonType : "jsonp",
  success : function(parsed_json) {
   "use strict";
	  city = parsed_json.current_observation.display_location.full;
	  whatWeather = parsed_json.current_observation.weather;
	  windSpeed = parsed_json.current_observation.wind_mph;
    latitude = parsed_json.current_observation.display_location.latitude;
    longitude = parsed_json.current_observation.display_location.longitude;
	  
	  farTemp = parsed_json.current_observation.temp_f;
	  farTemp = Math.round(farTemp);
	  celsiusTemp = parsed_json.current_observation.temp_c;
	  celsiusTemp = Math.round(celsiusTemp);
	  
    
     
      $("#city").html(city);
      $("#weather").html(whatWeather);
      $("#wind").html(windSpeed);
      $("#temp").html(celsiusTemp+ "&#8451");
      
    var temp=1;
    $("#temp").click(function(){
      
        if(temp==0){ $("#temp").html(celsiusTemp+ "&#8451");
                temp=1;  }
        else{ $("#temp").html(farTemp+ "&#8457");
                temp=0;
            }
         });//click
      
   
   var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
 if(celsiusTemp<0){ 
            $('body').css('background-image','url(http://az616578.vo.msecnd.net/files/2016/01/06/6358763574958474882005758066_winter-03-2.jpg)');
   }
  else if(celsiusTemp>10&&celsiusTemp<20){ 
            $('body').css('background-image','url(http://static1.visitfinland.com/wp-content/uploads/Header_Linnunlaulu_ruska_autumn.jpg)');
   }
    else if(celsiusTemp>20&&celsiusTemp<25){ 
            $('body').css('background-image','url(http://mobilemarketingwatch.com/wp-content/uploads/2016/05/summer.jpg)');
   }
   else if(celsiusTemp>25&&celsiusTemp<30){ 
            $('body').css('background-image','url(http://theinspirationroom.com/daily/print/2008/10/aucma_fish.jpg)');
   }
     else if(celsiusTemp>30&&celsiusTemp<40){ 
            $('body').css('background-image','url(http://freedesignfile.com/upload/2016/03/Hot-summer-holiday-background-with-funny-sun-vector-01.jpg)');
   }
   else {
       $('body').css('background-image','url(https://i.ytimg.com/vi/QwO_IhiQS3o/maxresdefault.jpg)');
   }
   

 


    
  
  }
  });//ajax

	  
        	  
});//jquery  
  

  

