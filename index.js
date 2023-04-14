const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "f2b05782f8a16632b317770d53b66a6d"
}

const input = document.querySelector(`#input`);
input.addEventListener (`keypress`, enter);


function enter(e){
    if(e.keyCode===13){
        getInfo(input.value)
    }
    
}

async function getInfo(data) {

    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    console.log (result);
    displayResult (result);
}


function displayResult (result) {

    let city = document.querySelector(`#city`);
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temp = document.querySelector(`#temp`); 
    temp.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector(`#feelslike`); 
    feelsLike.innerHTML = `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector(`#conditions`);
    conditions.textContent = `${result.weather[0].description}`

    let variations = document.querySelector (`#variations`);
    variations.innerHTML = `Min: ${Math.round(result.main.temp_min)}<span>°</span>  Max:  ${Math.round(result.main.temp_max)}`;

}

function getOurDate(){

const myDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day = days[myDate.getDay()];
let todayDate = myDate.getDate();
let month = months[myDate.getMonth ()];
let year = myDate.getFullYear();

let showDate = document.querySelector(`#date`);
showDate.textContent = `${day}`+ " " + `${todayDate}` + " " + `${month}` + " " + `${year}`;

}