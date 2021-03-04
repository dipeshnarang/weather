const request = require('request')

const geocode=( address , callback) =>
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'  +   address +'.json?access_token=pk.eyJ1IjoiZGlwZXNobmFyYW5nIiwiYSI6ImNqd3JyZWZ0czFtdHo0OXFxMmQ4azU4d3kifQ.m-eyfKcFjMaGS_e6zmgteg&limit=1'
    request( { url:url , json:true } , (error, response) =>
    {
        if(error)
        {
            callback('could not connect')
        }
        else if (!response.body)
        {
            console.log("invalid search")
        }
        else if(!response.body.features[0])
        {
            callback('try another search location')
        }
        else{ 
            callback( undefined ,  {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
                features1 : response.body.features[0].id
            })
        }

    })

}

module.exports = geocode