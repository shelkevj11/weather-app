
const apikey="95156458565b678deed7ac553786d3da";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

   const searchBox=document.querySelector('.main input')
   const searchBtn=document.querySelector('.submit')
   

async function checkweather(city){

   const response= await fetch(apiurl +city + `&appid=${apikey}`);
   var data = await response.json();

   console.log(data)
    
   document.querySelector('.city').innerHTML=data.name;
   document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + " °c";
   document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
   document.querySelector('.wind').innerHTML=data.wind.speed  + " Km/h";
 
}


searchBtn.addEventListener('click',()=>{

   checkweather(searchBox.value); 
})  



























// data.map(element => {
//    // a.insertAdjacentHTML = `<li>${element.eemail}</li>`
//    a.innerHTML +=`<span>${element.ename}</span>`
//    a.innerHTML +=`<div>${element.eemail}</div>`
// });