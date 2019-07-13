console.log('client side java script file')



const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')


// messageOne.textContent='from client side js file'


weatherform.addEventListener('submit', (e)=>
{ 
    e.preventDefault()
    const location =search.value
    // console.log(location)


    fetch('http://localhost:3000/weatherfetch?search='+location).then((res) =>
{
    res.json().then((data) =>
    {
        if(data.error)
        {
           return console.log(error)
        }
        // console.log(data)
        // console.log(data.forecast )

        messageOne.textContent=data.forecast
        messageTwo.textContent= "latitude :" +data.geocode.latitude + "   " +"  longitude :" +data.geocode.longitude + "    "+"location : " + data.geocode.location
        
        
    })
})
})

console.log('after testing')

