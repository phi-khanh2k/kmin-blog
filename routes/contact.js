var express = require('express');
const saveContact = require('../datastore/contact');
var router = express.Router();

/* POST users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body)
  try {
    saveContact(req.body)
  } catch (err) {
    next(err)
  }
  res.redirect("/")
});

module.exports = router;
