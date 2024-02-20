var express = require('express');
const saveContact = require('../datastore/contact');
const { Mailer } = require('../library/mail/mail');
const { userHandler } = require('../handler/user.handler');
const { user } = require('../datastore/user');
var router = express.Router();

/* POST users listing. */
router.post('/', async function (req, res, next) {
  console.log(req.body)
  if (!req.body.email) {
    res.status(400).send('Email is required');
    return;
  }
  const mailer = new Mailer();
  const userDB = new user();
  const handler = new userHandler(userDB, mailer);
  try {
    const info = await handler.sendMail(req.body.email, req.body.content);
    res.status(200).send(info);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
    return;
  }
});

module.exports = router;
