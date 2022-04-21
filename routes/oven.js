var express = require('express');
const oven_controllers= require('../controllers/oven');
var router = express.Router();

/* GET costumes for all instances view*/
router.get('/', oven_controllers.oven_view_all_Page);

/* GET costumes for one instance view*/
router.get('/detail', oven_controllers.oven_view_one_Page);

/* GET create oven page */
router.get('/create', oven_controllers.oven_create_Page);

/* GET create update page */
router.get('/update', oven_controllers.oven_update_Page);

/* GET delete delete page */
router.get('/delete', oven_controllers.oven_delete_Page);

module.exports = router;