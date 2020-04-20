let userLocation = document.querySelector(".user-location");
let temperatureDegree = document.querySelector(".temperature-degree");
let weatherCondition = document.querySelector(".weather-condition");
let icon = document.querySelector(".icon");
let zipButton = document.querySelector(".zip-button")
let zipInput = document.querySelector(".zip-input")


// Stores users ip addresss
let userIP = document.querySelector(".userip").textContent;

// event listeners
// Collects users Zip Code
zipButton.addEventListener("click", getUserZip);

// Runs the getCurrentWeather function on page load
window.addEventListener("load", getCurrentWeather);

// Fetches the current weather based on users ip address
function getCurrentWeather() {
  // Creates the API call URL
  const weatherApi = `https://api.weatherapi.com/v1/current.json?key=90524d3d43a74dee991135548201604&q=${userIP}`;

  //Call and displays the data from the API
  fetch(weatherApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //CITY NAME
      userLocation.textContent = data.location.name;
      // SET DEGREE IN F
      temperatureDegree.textContent = Math.round(data.current.temp_f);
      //SET WEATHER CONDITION
      weatherCondition.textContent = data.current.condition.text;
      // //SET WEATHER ICON
      const iconImg = data.current.condition.icon;
      icon.innerHTML = `<img src="${iconImg}"/>`;
    });
}

// Get User Zip Function

function getUserZip(event){
  event.preventDefault();
  userZip = zipInput.value;
  document.body.style.width = "100vw";
  
const weatherApi = `https://api.weatherapi.com/v1/current.json?key=90524d3d43a74dee991135548201604&q=${userZip}`;

  //Call and displays the data from the API
  fetch(weatherApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //CITY NAME
      userLocation.textContent = data.location.name;
      // SET DEGREE IN F
      temperatureDegree.textContent = Math.round(data.current.temp_f);
      //SET WEATHER CONDITION
      weatherCondition.textContent = data.current.condition.text;
      // //SET WEATHER ICON
      const iconImg = data.current.condition.icon;
      icon.innerHTML = `<img src="${iconImg}"/>`;
    });
  
  zipInput.value = "";
};


//Clock 

function clock(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  var clock = document.querySelector(".clock")
  clock.textContent = strTime
}

clock()

setInterval(function(){
  clock()
},10000)
// Code Graveyard. Some might be ressurected later.

// let long;
// let lat;

// getCurrentWeather();

// window.addEventListener("load", () => {
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         long = position.coords.longitude;
//         lat = position.coords.latitude;

//         const weatherApi = `https://api.weatherapi.com/v1/current.json?key=90524d3d43a74dee991135548201604&q=${lat},${long}`

//         fetch(weatherApi)
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             console.log(data);
//             //CITY NAME
//             userLocation.textContent = data.location.name;
//             // SET DEGREE IN F
//             temperatureDegree.textContent = Math.round(data.current.temp_f);
//             //SET WEATHER CONDITION
//             weatherCondition.textContent = data.current.condition.text;
//             // //SET WEATHER ICON
//             const iconImg = data.current.condition.icon
//              icon.innerHTML = `<img src="${iconImg}"/>`;
//           });
//       },
//       function (error) {
//         if (error.code == error.PERMISSION_DENIED) {
//           const ipstackapi = `https://cors-anywhere.herokuapp.com/http://api.ipstack.com/${userIP}?access_key=82e161af0e004f3302c459717a7c6741&format=1`;

//           fetch(ipstackapi)
//             .then((response) => {
//               return response.json();
//             })
//             .then((data) => {
//               console.log(data);
//               //SET USER LOCATION
//               userLocation.textContent = data.city;
//               lat = data.latitude;
//               long = data.longitude;

//               const weatherApi = `https://api.weatherapi.com/v1/current.json?key=90524d3d43a74dee991135548201604&q=${lat},${long}`

//               fetch(weatherApi)
//                 .then((response) => {
//                   return response.json();
//                 })
//                 .then((data) => {
//                   console.log(data);

//                   // SET DEGREE IN F
//                   temperatureDegree.textContent = Math.round(data.current.temp_f);
//                   //SET WEATHER CONDITION
//                   weatherCondition.textContent = data.current.condition.text;
//                   // //SET WEATHER ICON
//                   const iconImg = data.current.condition.icon
//                    icon.innerHTML = `<img src="${iconImg}"/>`;
//                 });
//             });
//         }
//       }
//     );
//   }
// });
