const mongodb = require('mongodb');
const MongoClient= mongodb.MongoClient;

let _db;
const mongoConnect = callback =>{
    MongoClient.connect(
        'mongodb+srv://ladyymendez:trigo1994_12A@cluster0-e4mnf.mongodb.net/shop?retryWrites=true',
        { useNewUrlParser: true }
    )
    .then(client => {
        console.log('Connected!!!');
        _db = client.db("shop");
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });

};

const getDb = () => {
    console.log("ENTRA11");
    if(_db){
        console.log("ENTRA");
        return _db;
    }

    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;