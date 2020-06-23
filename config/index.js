module.exports = require('mongoose').connect('mongodb://localhost/budget', {
  useNewUrlParser: true,
  useFindAndModify: false
});