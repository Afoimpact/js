const express = require('express')
const app = express()
const port = 5050;
//telling express to use a static file
app.use(express.static('public'))

//telling express to expect a json file
app.use(express.json())

app.get('/info', (req, res)=>{
    res.status(200).json({info:'message from backend'})

}) 
//to post a request
app.post('/', (req, res)=>{
    const { parcel } = req.body 
    console.log(parcel)
    if(!parcel){
        res.status(400).send({status:'failed '})
        console.log(err)
    }
    res.status(200).send({status:'message received to backend'})

}) 

app.listen(port, ()=>console.log(`server has started on port:${port}`)); 