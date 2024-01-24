var express = require('express');
const saveContact = require('../datastore/contact');
const { upload } = require('../datastore/readandwrite');
var router = express.Router();

/* POST users listing. */
router.post('/upload/banner', upload.single('file'), function (req, res, next) {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

module.exports = router;
