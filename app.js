const express=require('express')
const path=require('path')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const hbs=require('hbs')
const publicdirpath=path.join(__dirname , './public/js')
const viewspath=path.join(__dirname , './templates/views')
const app=express()
const port = process.env.PORT || 3000
app.use(express.static(publicdirpath))

app.set('view engine', 'hbs')
app.set('views' , viewspath)

app.get('/weatherfetch' , (req,res)=>
{
    if(!req.query.search)
    {
        return res.send('provide a valid search')

    }
    else if(!req.query)
    {
       return  res.send('provide a query')
    }
    
    else{
    geocode(req.query.search ,(error , data)=>
    {
    if(error)
        {
            return res.send({error})
        }
    //res.send(data)

        forecast(data.latitude , data.longitude , (error,data1)=>
        {
            if(error)
        {
            return    res.send({error})
        }
        res.send({
            geocode:data,
            forecast: data1,
            
        })
        })
    })
}
    
})

app.get('' ,(req,res)=>
{
    res.render('weather')
})

app.get('/getwebhookDetails',async(req,res)=>{
    try{
        const details=req.body
        console.log(details)
        res.status(200).send(details)
    }catch(e){
        console.log(e)
        res.send(e)
    }
})

app.post('/getwebhookDetails',async(req,res)=>{
    try{
        const details=req.body
        console.log(details)
        res.status(200).send(details)
    }catch(e){
        console.log(e)
        res.send(e)
    }
})


app.listen(port , ()=>
{
    console.log('running on port ' +port)
})