const express = require('express');
const testRouter = require('./routers/test')

const PORT = process.env.PORT | 5151;

const app = express();
app.use(express.json());

app.use('/api/test/', testRouter);

app.listen(PORT, function() {
    console.log(`Server now running on port ${PORT}...`);
})