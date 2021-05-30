const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

const port = 3000;

app.listen(port, (err) => {
  err ? console.log('err in express listen', err) :
  console.log(`App is running on port${port}`);
});

// app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static('client/dist'));

const controllers = require('./controllers.js');

// app.get('/api/pokemon', (req, res) => {
//   controllers.getAllPokemon((err, data) => {
//     err ? res.status(400).send(err) : res.status(200).send(data);
//   });
// });

app.get('/api/pokemon', (req, res) => {
  controllers.getAllEverything((err, data) => {
    err ? res.status(400).send(err) : res.status(200).send(data);
  });
})

// app.get('/api/pokepic', (req, res) => {
//   controllers.getAllPokepic((err, data) => {
//     err ? res.status(400).send(err) : res.status(200).send(data);
//   })
// })

app.get('/api/types', (req, res) => {
  controllers.getTypes((err, data) => {
    err ? res.status(400).send(err) : res.status(200).send(data);
  });
})

app.get('/api/:id', (req, res) => {
  var { id } = req.params;
  controllers.getAllOfOneType(id, (err, data) => {
    err ? res.status(400).send(err) : res.status(200).send(data);
  });
})
