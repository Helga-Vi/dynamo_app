var express = require('express');
var router = express.Router();
var users = require('../models/users');

//const {s3} = require('../AWSconfig.js');
//const {docClient} = require('../AWSconfig.js');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try { 
  let list = await users.list();
  res.send(list);
} catch (error) {
  res.status(500).send({ error: 'Failed to list users' });
}
});

router.get('/:key', async function(req, res, next) {
  try {
  let item = await users.get(req.params.key);
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ error: 'User not found' });
  }
} catch (error) {
  res.status(500).send({ error: 'Failed to get user' });
}
});

router.post('/', async function(req, res, next) {
  try {
  const {email, firstName, lastName, age} = req.body;
  const newUser = await users.set(email, {
    firstName: firstName,
    secondName: lastName,
    age: age
  });
  res.status(201).json(newUser);
 } catch (error) {
    res.status(500).send({ error: 'Failed to create user' });
 }
});

router.put('/', async function(req, res, next) {
  try {
  const {email, firstName, lastName, age} = req.body;
  const changedUser = await users.set(email, {
    firstName: firstName,
    secondName: lastName,
    age: age
  });
  res.json(changedUser);
} catch (error) {
  res.status(500).send({ error: 'Failed to update user' });
}
});

router.delete('/', async function(req, res, next) {
try {
  const email = req.query.email;
  const age = req.query.age ? Number(req.query.age) : undefined; // Convert age to a number if provided
  await users.delete(email,age);
  res.end();
} catch (error) {
  res.status(500).send({ error: 'Failed to delete user' });
}
});
module.exports = router;
