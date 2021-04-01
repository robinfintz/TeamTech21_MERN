
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');


const express = require('express');
const testRouter = require('./routers/test');
const datainputRouter = require('./routers/datainput');
const authRouter = require('./routers/auth');
const connectionString = require('./config').connectionString;

const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        throw err
    }
    const profile = client.db("teamtech21").collection("profile");

    const PORT = process.env.PORT || 5151;

    const app = express()

    app.use(express.json());
    app.use(cors());

    app.use('/api/test/', testRouter);
    app.use('/api/datainput/', datainputRouter);
    app.use('/api/auth/',authRouter);

    app.get('/api/profile', (req,res) => {
       let cursor = profile.find({Username: 
            "Name"}) 
            cursor.forEach(value => {res.send(value)})
    })

    app.post('/api/profile', (req, res) =>{
        profile.insertOne(req.body, error => {
            if(error) {
                console.error(error)
            }
            res.send('posted')
        })

    })


    app.listen(PORT, function() {
        console.log(`Server now running on port ${PORT}...`);
    })
})