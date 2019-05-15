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
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}&units=imperial`;

  $.get(url, function(res) {
    console.log(res);

    $('#city_name').text(`${res.name}, ${res.sys.country}`);
    $('#high').html(`${res.main.temp_max.toFixed(0)}&#x2109;`);
    $('#low').html(`${res.main.temp_min.toFixed(0)}&#x2109;`);
    $('#forecast').text(`${res.weather[0].main}`);
    $('#humidity').text(`${res.main.humidity}%`);
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
