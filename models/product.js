const { getDb } = require('../util/database');
const { ObjectId } = require('mongodb'); 
class Product{
  constructor(title,price,description,imageUrl,id){
    this.title= title;
    this.price=price;
    this.description= description;
    this.imageUrl= imageUrl;
    this._id = id ? new ObjectId(id) : null;
  }

  save(){
    let db = getDb();
    let dbOp;
    if(this._id){
      dbOp = db
      .collection('products')
      .updateOne({ _id: this._id }, { $set: this });
    }else{
      dbOp = db
      .collection('products')
      .insertOne(this);
    }
    console.log(db);
    return dbOp.then(result =>{
      console.log(result);
    })
    .catch(console.log);
  }

  static fetchAll(){
    let db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(console.log);
  }

  static findById(id){
    let db = getDb();
    return db
      .collection('products')
      .find({_id: new ObjectId(id)})
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(console.log);
  }

  static deleteById(id){
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({ _id: new ObjectId(id) })
      .then(result => {
        console.log("Deleted");
      })
      .catch(console.log);

  }
}

module.exports = Product;