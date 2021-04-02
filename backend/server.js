
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');


const express = require('express');
const testRouter = require('./routers/test');
const datainputRouter = require('./routers/datainput');
const connectionString = require('./config').connectionString;

const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        throw err
    }
    const shipWrecks = client.db("sample_geospatial").collection("shipwrecks");

    const PORT = process.env.PORT || 5151;

    const app = express()

    app.use(express.json());
    app.use(cors());

    app.use('/api/test/', testRouter);
    app.use('/api/datainput/', datainputRouter);

    app.get('/api/shipwrecks', (req,res) => {
       let cursor = shipWrecks.find({latdec: 
            9.3547792}) 
            cursor.forEach(value => {res.send(value)})
    })

    app.listen(PORT, function() {
        console.log(`Server now running on port ${PORT}...`);
    })
})