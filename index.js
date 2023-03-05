const express = require('express');
const cors = require('cors');
const controller = require('./controllers/controller');

const app = express();

require('./config/database')

app.use(cors());

app.use(express.json());

app.use('/api', controller);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});