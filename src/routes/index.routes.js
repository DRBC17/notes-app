const { Router } = require('express');
const router = Router();

const { showIndex, showAbout } = require('../controllers/index.controller')

router.get('/', showIndex);
router.get('/about', showAbout);

module.exports = router