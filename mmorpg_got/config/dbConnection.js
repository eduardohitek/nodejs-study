let mongo = require('mongodb');

let connMongoDB = function(){
  console.log('Db Connected!');
  let db = new mongo.Db(
    'got',
    new mongo.Server(
      'localhost',
      '27017',
      {}
    ),
    {}
  );

  return db;
};

module.exports = function(){
  return connMongoDB;
}
