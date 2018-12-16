const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());


const PORT = process.env.PORT || 3000


app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.get('/prova', async (req, res) => {
    //console.log(req.query.string); :3000/prova?string=
    //console.log(req.query) :3000/prova?
  let result = await funzione(1);
  res.status(200).json(result)
});

let server = app.listen(PORT, () => console.log('Example app listening on port ' + PORT));

async function funzione(i) {
  return {
    ciao: i
  };
}

module.exports = funzione;
