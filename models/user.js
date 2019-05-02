const { ObjectId } = require('mongodb'); 

const { getDb } = require('../util/database');


class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save(){
    let db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId){
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) })
      .then(user => {
        return user;
      })
      .catch(console.log);
  }
}
module.exports = User;