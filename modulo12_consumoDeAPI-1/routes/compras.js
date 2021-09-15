var express = require('express');
var router = express.Router();

/* POST criação de compra. */
router.post('/', function(req, res, next) {
  res.send('Rodando...');
});

/* GET criação de compra. */
router.get('/:compra_id/status', function(req, res, next) {
  res.send('Rodando status...');
});

module.exports = router;
