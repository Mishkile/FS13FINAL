const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/FS13', () => {
    console.log('Connected to DB');
})