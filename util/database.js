const mongodb = require('mongodb');
const MongoClient= mongodb.MongoClient;

const mongoConnect = callback =>{
    MongoClient.connect(
        'mongodb+srv://ladyymendez:trigo1994_12A@cluster0-e4mnf.mongodb.net/test?retryWrites=true',
        { useNewUrlParser: true }
    )
    .then(client => {
        console.log('Connected!!!');
        callback(client);
    })
    .catch(console.log);
}

module.exports = mongoConnect;