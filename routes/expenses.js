var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('expenses', {
    page:'Expenses', 
    menuId:'expenses',
    expenses: [
      {
        date: new Date(),
        description: 'Coffee for a Coding Dojo session.',
        value: 42,
      }
    ]
  });
});

module.exports = router;
