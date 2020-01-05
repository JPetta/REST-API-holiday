const express = require('express')
const app = express()
const port = 3000
const Contacts = require('./models').Contacts
const cors = require('cors')


app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors())

app.get('/contact',(req,res)=>{
    Contacts.findAll()
    .then(contacts => {
        res.status(200).json(contacts)
    })
})

app.post('/contact/:name/:phone', (req,res)=>{
    Contacts.create({
        name : req.params.name,
        phone : req.params.phone
    })
    .then(()=>{
        res.status(201).send("data added")
    })
})

app.put('/contact/:name/:phone',(req,res)=>{
    Contacts.update({
        name : req.params.name,
        phone: req.params.phone
    },{
        where : {
            phone : req.params.phone
        }
    })
    .then(()=>{
        res.status(200).send("updated successfully")
    })
})

app.delete('/contact/:name/:phone',(req,res)=>{
    Contacts.destroy({
        where : {
            phone : req.params.phone
        }
    })
    .then(()=>{
        res.status(200).send("deleted successfully")
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))