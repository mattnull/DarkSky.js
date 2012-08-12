DarkSky.js
==========

This library wraps all of the API calls for the <a href="https://developer.darkskyapp.com/docs" target="_blank">Dark Sky API</a>

Dependencies
------------

<a href="http://jquery.com" target="_blank">jQuery</a>

Usage
-----

```javascript
	var weather = new DarkSky('YOUR_API_KEY');

	///forecast
	weather.forecast(40.0150, -105.2700, function(data){
		console.log('Forecast : ', data);
	});

	//brief forecast
	weather.briefForecast(40.0150, -105.2700, function(data){
		console.log('Brief Forecast : ', data);
	});

	//percipitation
	weather.percipitation([{
		lat : 37.7750, 
		lon : -122.4183,
		timeStamp : (new Date()).getTime()
	},{
		lat : 40.0150, 
		lon : -105.2700,
		timeStamp  : (new Date()).getTime()
	}], function(data){
		console.log('Percipitation : ', data);
	});

	//interesting storms
	weather.interestingStorms(function(data){
		console.log('Interesting Storms : ', data);
	});
```

Copyright
---------

Copyright (c) 2012 Matt Null. See LICENSE.txt for further details.
