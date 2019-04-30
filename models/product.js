const { getDb } = require('../util/database');
var { ObjectId } = require('mongodb'); 
class Product{
  constructor(title,price,description,imageUrl){
    this.title= title;
    this.price=price;
    this.description= description;
    this.imageUrl= imageUrl;
  }

  save(){
    let db = getDb();
    console.log(db);
    return db.collection('products')
    .insertOne(this)
    .then(result =>{
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
}

module.exports = Product;