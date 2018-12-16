const fetch = require('node-fetch');
const PORT = process.env.PORT || 3000;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:' + PORT;

const funzione = require('../index')
let server;

const testfun = function() {
  return fetch(SERVER_URL + "/", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
};

const testprova = function() {
  return fetch(SERVER_URL + "/prova", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
};


test('asd', () => {
  return testfun()
    .then(res => {
      expect(res.status).toBe(200);
    })
});

test('prova', () => {
  return testprova()
    .then(res => {
      expect(res.status).toBe(200);
      return res.json()
    })
    .then(json => {
      expect(json).toHaveProperty('ciao')
      expect(typeof json.ciao).toEqual('number')
      expect(json.ciao).toBe(1)
    })
});
