import { getDay } from 'date-fns';
import './styles.css';

let key = "879b15820c1f4c41884224003230507" 
const inputValue = document.querySelector('#locationSearch')
const searchBtn = document.querySelector('#searchButton')
//Current Weather Variables
const currTime = document.querySelector('#date')
const currTemp_c = document.querySelector('#temp-c')
const currCondition = document.querySelector('#condition')
const currIcon = document.querySelector('#current-icon')
const location = document.querySelector('#location')
const feelslike_c = document.querySelector('#feels-temp-c')
const humidity = document.querySelector('#humidity')
const chance_rain = document.querySelector('#chance-rain')
const wind_speed = document.querySelector('#wind-speed')
//Daily Weather Variables
const daysOfWeek = { 0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday",}
const conditionDay = { 
    "Sunny":"sunny.svg", "Partly cloudy":"partly_cloudy_day.svg", "Cloudy": "cloudy.svg",
    "Patchy rain possible": "rainyCloud.svg", "Moderate rain": "rainyCloud.svg", "Heavy rain": "rainyCloud.svg", "Moderate rain at times": "rainyCloud.svg",
    "Mist": "foggy.svg", "Fog":"foggy.svg", "Clear": "clearNight.svg"} 
const conditionNight = { "Clear": "clearNight.svg", "Partly cloudy":"partly_cloudy_night.svg",}

const dailyFore = document.querySelector('#dailyForecast')
const hourlyFore = document.querySelector('#hourlyForecast')

function StringToDate(string) {
    return new Date(string.slice(0,4), string.slice(5,7)-1, string.slice(8,10))
}

function getDayOfWeek(date) {
    const result = getDay(date)
    return daysOfWeek[result]
}

function tConvert (time) {
    // Check correct time format and split into components
    if(time.length < 5) {
        time = "0" + time
    }
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    let result = time.join ('')

    return result; // return adjusted time or original string
}

function getTime(data) {
    let time = tConvert(data.slice(11,16))
    return time
}

function createDailyElements(dayText, highTemp,lowTemp, condition) {
    const container = document.createElement('div')
    container.classList.add("daily-container")
    const day = document.createElement('div')
    day.id = "day-of-week"
    day.textContent = dayText
    const maxTemp = document.createElement('div')
    maxTemp.id = "day-temp"
    maxTemp.textContent = "High: " + highTemp + "°C"
    const minTemp = document.createElement('div')
    minTemp.id = "day-feels"
    minTemp.textContent = "Low: " + lowTemp + "°C"

    const img = document.createElement('img')
    img.id = "daily-icon"
    //console.log(condition)
    if(conditionDay[condition] != null) {
        img.src = "/src/images/weather/" + conditionDay[condition]
    }
    else {
        img.src = "/src/images/weather/" + conditionDay["Sunny"]
    }
    
    container.appendChild(day)
    container.appendChild(maxTemp)
    container.appendChild(minTemp)
    container.appendChild(img)
    dailyFore.appendChild(container)
}

function createHourlyElements(hourText,tempText, condition) {
    const container = document.createElement('div')
    container.classList.add("hourly-container")
    const hour = document.createElement('div')
    hour.id = "hour-of-day"
    hour.textContent = hourText
    const temp = document.createElement('div')
    temp.id = "hour-temp"
    temp.textContent = tempText + "°C"
    const img = document.createElement('img')
    img.id = "hourly-icon"
    img.src = "/src/images/weather/" + conditionDay[condition]

    container.appendChild(hour)
    container.appendChild(temp)
    container.appendChild(img)
    hourlyFore.appendChild(container)
}

function assignDailyWeather(response) {
    dailyFore.textContent = ""
    hourlyFore.textContent = ""
    for(let data in response) {
        createDailyElements(getDayOfWeek(StringToDate(response[data].date)), response[data].day.maxtemp_c,
        response[data].day.mintemp_c, response[data].day.condition.text)
    }
    for(let data in response[0].hour) {
        createHourlyElements(getTime(response[0].hour[data].time), response[0].hour[data].temp_c, response[0].hour[data].condition.text)
    }
}

function assignCurrentBasic(day, time, temp, condition, name, region, country) {
    currTime.textContent = day + " " + time
    currTemp_c.textContent = temp + '°C'
    currCondition.textContent = condition
    location.textContent = name + ', ' + region + ', ' + country

    let result = conditionDay[condition] != null ? conditionDay[condition] : conditionNight[condition]
    currIcon.src = "/src/images/weather/" + result
}

function assignCurrentAdvanced(feels,humid,rain,wind) {
    feelslike_c.textContent = feels + '°C'
    humidity.textContent = humid + '%'
    chance_rain.textContent = rain + '%'
    wind_speed.textContent = wind + 'km/h'
}

function grabCurrentWeatherAPI() {
    let currentWeather = 'http://api.weatherapi.com/v1/forecast.json?key=' + key + '&q=' + inputValue.value + "&days=7&aqi=no&alerts=no"
    //console.log(currentWeather)
    fetch(currentWeather,{mode: 'cors'})
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            //console.log(response)
            let temp_c = response.current.temp_c
            let cond = response.current.condition.text
            let name = response.location.name
            let region = response.location.region
            let country = response.location.country
            let feels = response.current.feelslike_c
            let humidity = response.current.humidity
            let rain = response.forecast.forecastday[0].day.daily_chance_of_rain
            let wind = response.current.wind_kph
            //console.log(getLocalTime(response.location.localtime))
            assignCurrentBasic(getDayOfWeek(StringToDate(response.forecast.forecastday[0].date)), getTime(response.location.localtime), temp_c,cond,name,region,country)
            
            assignCurrentAdvanced(feels,humidity,rain,wind)
            assignDailyWeather(response.forecast.forecastday)
        })
        .catch(function(){
            console.log("Error!, Couldnt Find Data")
        });
}

searchBtn.addEventListener('click', () =>{
    grabCurrentWeatherAPI()
})

grabCurrentWeatherAPI()