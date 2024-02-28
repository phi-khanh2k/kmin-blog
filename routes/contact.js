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
  // define mailer and userStore
  const mailer = new Mailer();
  const userStore = new user();

  // define handler
  const handler = new userHandler(userStore, mailer);

  // save contact and send mail
  try {
    const info = await handler.sendMail(req.body.email);
    res.redirect('/');
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
    return;
  }
});

module.exports = router;
