var React = require('react');

$('p')

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This a weather application built with React from the React Web App Developer Course</p>
			<p> The app uses the following tools:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript Framework used
				</li>
				<li>
					<a href="http://openweathermap.org" target="_blank">Open Weather Map API</a> - The Open Weather Map is used to search for weather data by city name.
				</li>
				<li>
					<a href="https://foundation.zurb.com/" target="_blank">Foundation</a> - The CSS Library used to style this Web Application.
				</li>
			</ul>
		</div>
	)
};
module.exports = About;