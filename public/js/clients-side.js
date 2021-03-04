const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message1=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')
const message3=document.querySelector('#message-3')
const message4=document.querySelector('#message-4')
const message5=document.querySelector('#message-5')
const message6=document.querySelector('#message-6')
const message7=document.querySelector('#message-7')

weatherform.addEventListener('submit', (e)=>
{ 
    e.preventDefault()
    const location =search.value
    // console.log(location)


    fetch('/weatherfetch?search='+location).then((res) =>
{
    res.json().then((data) =>
    {
        if(data.error)
        {
           return console.log(error)
        }
        console.log(data)
        message1.textContent="Summary :" +data.forecast.summary;
        message2.textContent= "latitude :" +data.geocode.latitude + "   " +"  longitude :" +data.geocode.longitude + "    "+"location : " + data.geocode.location
        message3.textContent="Temperature :" +data.forecast.temp; + "degrees"
        message4.textContent="Probability of Rain :" +data.forecast.chances_of_rain
        message7.textContent="humidity :" +data.forecast.moonphase
        message5.textContent="UV Index :" +data.forecast.uvindex
        
    })
})
})
