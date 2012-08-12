<h1>DarkSky.js</h1>
<blockquote>
<p>This library wraps all of the API calls for the <a href="https://developer.darkskyapp.com/docs" target="_blank">DarkSky API</a></p>
</blockquote>
<h2>Dependancies</h2>
<blockquote><ul><li>jQuery</li></ul></blockquote>
<h2>Usage</h2>
<blockquote>
	<div class="highlight">
		<pre>
		$(function(){

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

		});
		</pre>
	</div>
</blockquote>
