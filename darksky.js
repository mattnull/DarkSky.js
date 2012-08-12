var DarkSky = function(apiKey){	

	this.apiKey = apiKey || false;
	this.apiUrl = 'https://api.darkskyapp.com/v1';
};

DarkSky.prototype.forecast = function(lat, lon, callback){
	callback = callback || function(){};
	
	var endpoint = 'forecast/'+this.apiKey+'/'+lat+','+lon;

	this.request(endpoint, callback);
};

DarkSky.prototype.briefForecast = function(lat, lon, callback){
	callback = callback || function(){};
	
	var endpoint = 'brief_forecast/'+this.apiKey+'/'+lat+','+lon;

	this.request(endpoint, callback);
};

/**
 * params {lat : 42.7, lon : -73.6, timeStamp : 1325607100}
 */
DarkSky.prototype.percipitation = function(params, callback){
	callback = callback || function(){};

	var endpoint = 'precipitation/'+this.apiKey+'/';
	var iter = 0;

	for(var i in params){
		endpoint += params[i].lat+','+params[i].lon+','+params[i].timeStamp;

		if(iter != params.length - 1){
			endpoint += ';';
		}

		iter++;
	}

	this.request(endpoint, callback);
};

DarkSky.prototype.interestingStorms = function(callback){
	callback = callback || function(){};
	
	var endpoint = 'interesting/'+this.apiKey;
	
	this.request(endpoint, callback);
};

DarkSky.prototype.request = function(endpoint, callback){

	callback = callback || function(){};

	$.ajax({
		url : this.apiUrl+'/'+endpoint,
		dataType : 'jsonp',
		success : function(res){
			callback(res);
		}
	});
};