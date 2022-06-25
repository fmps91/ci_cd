const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const app= express();

const port= process.env.PORT || 3000

//hola 

//middlewars
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listenings on port ${port}`)
})