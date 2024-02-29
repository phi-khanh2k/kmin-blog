var express = require('express');
const getBlog = require('../datastore/blog');
const blog = require('../datastore/blog');
const blogHandler = require('../handler/blog.handler');
const { user } = require('../datastore/user');
const { userHandler } = require('../handler/user.handler');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {

  let search = req.query.search
  let category = req.query.category
  console.log(search)

  const blogStore = new blog();
  const blogHandle = new blogHandler(blogStore);

  const userStore = new user();
  const userHandle = new userHandler(userStore);

  const blogs = await blogHandle.getBlogs(search, category);
  const userData = await userHandle.getUser("65d379157b103404986b36de");
  
  res.render('index', { title: 'Blog App', user: userData, blogs: blogs });
});

router.get('/contact', async function (req, res, next) {
  res.render('contact', { title: 'Contact' });
})

module.exports = router;
