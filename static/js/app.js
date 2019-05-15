// all imports at top, import config to access api key
import Config from '../../config.js';


// create an instance of the Config class
let config = new Config();


// render the navbar into the header
$.get('../../components/header.html', function(res) {
  $('#nav').html(res);
});



// write function to convert degrees



// create a function that logs the city entered in the form
function searchCity() {
  let city = $('#city_search').val();
  console.log(city);


  // TODO: add AJAX call to weather API and display info
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${config.getKey()}`;

$.get(url, function(res) {
  console.log(res);

  $('#city_name').text(res.name);
  $('#high').text(`${res.main.temp_max}`);
  $('#low').text(res.main.temp_min);
  $('#forecast').text(res.main.temp_max);
  $('#high').text(res.main.temp_max);

});


  $('#weather-info').css('display', 'block');
}


// check to see if the submit button is pressed, if it is, stop the event from refreshing the page, and call searchCity()
$('#submit-btn').click(function(e) {
  e.preventDefault();
  searchCity();
});


// make search information not appear until they submit a city
$('#weather-info').css('display', 'none');
