const request=require('request')

const forecast=(x,y,callback)=> {
    const url='https://api.darksky.net/forecast/b71b70dee653b9d6d1c307d87395382d/' + x +',' + y + '?&units=si'

    request( { url:url , json : true} , (error,response ) =>
    {
        if (error)
        {
            callback('unable to find location' , undefined)
        }
        else if(response.body.error)
        {
            callback('unable to find location ', undefined)
        }
        else
        {
            callback(undefined, { 
                summary : response.body.daily.data[0].summary, 
                temp: response.body.currently.temperature ,
                chances_of_rain : response.body.currently.precipProbability,
                icon :response.body.currently.icon} )
        }
    })
}

module.exports= forecast