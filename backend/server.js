const express = require('express');
const testRouter = require('./routers/test');
const datainputRouter = require('./routers/datainput');

const PORT = process.env.PORT | 5151;

const app = express();
app.use(express.json());

app.use('/api/test/', testRouter);
app.use('/api/datainput/', datainputRouter);

app.listen(PORT, function() {
    console.log(`Server now running on port ${PORT}...`);
})