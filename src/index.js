function updateTime ()
{

let londonElement = document.querySelector("#london");

let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");



let tokyoElement = document.querySelector("#tokyo");

let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");
 tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY"); tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

 let newYorkElement = document.querySelector("#new-york");

 let newYorkDateElement = newYorkElement.querySelector(".date");
 let newYorkTimeElement = newYorkElement.querySelector(".time");
 let newYorkTime = moment().tz("America/New_York");
 newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
 newYorkTimeElement.innerHTML = newYorkTime.format(
   "h:mm:ss [<small>]A[</small>]"
 );

 

}


function updateCity(event) {
  let cityTimeZone = event.target.value;
  if(cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
   
  }
 
  


  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("h A"));
if (
  cityTime.format("h") > "0" &&
  cityTime.format("h") < "7" &&
  cityTime.format("A") === "AM"
) {
  let myElement = document.getElementById("container");

  myElement.style.backgroundImage =
    "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/112/715/original/night_edit.png?1706491191)";
} else if (cityTime.format("h") > "7" &&
  cityTime.format("h") < "12" &&
  cityTime.format("A") === "PM") {
  let myElement = document.getElementById("container");

  myElement.style.backgroundImage =
    "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/112/715/original/night_edit.png?1706491191)";
} else if (cityTime.format("h") === "12" && cityTime.format("A") === "AM") {
  let myElement = document.getElementById("container");

  myElement.style.backgroundImage =
    "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/112/715/original/night_edit.png?1706491191)";
} else {
  let myElement = document.getElementById("container");

  myElement.style.backgroundImage =
    "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/112/714/original/after_noon_edit.png?1706491177)";
}


  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = 
  `
  <div class="city" >
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
 <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small> 
    </div>
</div>
`;  


}


updateTime();
setInterval(updateTime, 1000);



let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);