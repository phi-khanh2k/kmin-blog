var express = require('express');
const getBlog = require('../datastore/blog');
const blog = require('../datastore/blog');
const blogHandler = require('../handler/blog.handler');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  var user = {
    name: "Khanh",
    title: "Handsome",
    avatar: "/assets/images/author.jpg",
  }

  const blogStore = new blog();
  const blogHandle = new blogHandler(blogStore);

  const blogs = await blogHandle.getBlogs();
  
  res.render('index', { title: 'Blog App', user: user, blogs: blogs });
});

router.get('/contact', async function (req, res, next) {
  res.render('contact', { title: 'Contact' });
})

module.exports = router;
