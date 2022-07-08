const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    name: 'api',
    version: '1.0.0'
  });
});

module.exports = router;
