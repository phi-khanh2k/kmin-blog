var express = require('express');
// const { upload } = require('../datastore/readandwrite');
var router = express.Router();
const blog = require('../datastore/blog');
const { upload } = require('../datastore/readandwrite');


/* POST users listing. */
router.post('/upload/banner', upload.single('banner'), async function (req, res, next) {
  const file = req.file;
  const files = req.files;
  const id = req.body.id;
  console.log(file)
  console.log(files)
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  var response = {
    filename: file.filename,
    path: file.path.replace('public', 'http://localhost:3000')
  }

  if (!id || id == 0) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    console.error(err)
    return next(error);
  }

  var blogDB = new blog();
  await blogDB.updateBanner(id, response.path);

  res.send(response);
});

module.exports = router;
