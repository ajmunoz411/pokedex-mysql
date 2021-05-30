const db = require('./db/index.js');

const controllers = {
  // getAllPokemon: (callback) => {
  //   var queryStr = `SELECT pokemon.id, pokemon.name, types.type FROM pokemon INNER JOIN types ON pokemon.typeNum = types.id;`;
  //   db.query(queryStr, (err, data) => {
  //     err ? callback(err) : callback(data);
  //   });
  // },

  // getAllPokepic: (callback) => {
  //   var queryStr = '';
  // },

  getAllEverything: (callback) => {
    var queryStr = `SELECT pokemon.id, pokemon.name, types.type, images.img FROM pokemon INNER JOIN types ON pokemon.typeNum = types.id INNER JOIN images ON pokemon.imageNum = images.id;`;
    db.query(queryStr, (err, data) => {
      err ? callback(err) : callback(null, data);
    });
  },

  getTypes: (callback) => {
    var queryStr = `SELECT * FROM types;`;
    db.query(queryStr, (err, data) => {
      err ? callback(err) : callback(null, data);
    })
  }

};

module.exports = controllers;