
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');


const express = require('express');
const testRouter = require('./routers/test');
const datainputRouter = require('./routers/datainput');



const cString = 'mongodb+srv://user:oWXrnOjoKaNl3MN6@cluster0.rs0u7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 
const client = new MongoClient(cString, { useNewUrlParser: true, useUnifiedTopology: true });
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

    app.listen(PORT, function() {
        console.log(`Server now running on port ${PORT}...`);
    })
})