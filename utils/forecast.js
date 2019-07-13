const request=require('request')

const forecast=(x,y,callback)=> {
    const url='https://api.darksky.net/forecast/b71b70dee653b9d6d1c307d87395382d/' + x +',' + y + '?'

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
            callback(undefined, response.body.daily.data[0].summary +'  the temp in your area is : ' +response.body.currently.temperature +'  and chance of rain are : ' + response.body.currently.precipProbability )
        }
    })
}

module.exports= forecast