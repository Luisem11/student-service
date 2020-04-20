const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'students-database';
module.exports = async function () {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017/', {
            useUnifiedTopology: true
        });
        console.log("Connection to DB successfully");

        const db = client.db(dbName);
        return db;
    } catch (e) {
        console.log(e);
    }
};