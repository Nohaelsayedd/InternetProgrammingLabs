const express = require('express');
const mongoose = require('mongoose');
const courseRouter = require('./routes/courseRouter');

const app = express();
const PORT = 5000;

const MONGO_URI = 'mongodb+srv://nohasayed1311_db_user:Noha1311@cluster0.xrbmiu8.mongodb.net/?appName=Cluster0'; 

const databaseConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Successful Connection to MongoDB');
    } catch (error) {
        console.error(' MongoDB Connection Error:', error.message);
        process.exit(1); 
    }
};

databaseConnect();

//app.use(express.json()); 

app.use('/courses', courseRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});