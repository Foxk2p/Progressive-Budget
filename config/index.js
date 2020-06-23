module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI)


// module.exports = require('mongoose').connect('mongodb://localhost/budget', {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

