let URL="https://api.openweathermap.org/data/2.5/weather?&appid=851b6f04c831be95d9e3aaf7ca2d797d&lang=en&units=metric&q=";
 


document.querySelector(".firstdiv");
const searchbox=document.querySelector(".firstdiv input");
const searchbtn=document.querySelector(".firstdiv button");
const pic=document.querySelector(".rain");


async function getfacts(city){
const response= await fetch(URL + city)
let data= await response.json();
console.log(response);
console.log(data);

if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".comb").style.display="none";

}else{
document.querySelector(".head1").innerText=Math.round(data.main.temp)  +  "°C";
document.querySelector(".head2").innerText=data.name;
document.querySelector(".last1").innerText=data.wind.speed  +  "km/hr";
document.querySelector(".last2").innerText=data.main.humidity  +  "%";


if(data.weather[0].main=="clouds"){
     pic.src="weather.png";
} else if(data.weather[0].main=="rain"){
    pic.src="rain.png";
} else if(data.weather[0].main=="clear"){
    pic.src="clear.png";
} else if(data.weather[0].main=="Haze"){
    pic.src="drizzle.png";
}
document.querySelector(".comb").style.display="block";
document.querySelector(".error").style.display="none";
};
}



searchbtn.addEventListener("click",()=>{
    getfacts(searchbox.value);
})
