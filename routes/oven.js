var express = require('express');
const oven_controllers= require('../controllers/oven');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET costumes for all instances view*/
router.get('/', oven_controllers.oven_view_all_Page);

/* GET costumes for one instance view*/
router.get('/detail', oven_controllers.oven_view_one_Page);

/* GET create oven page */
router.get('/create', secured, oven_controllers.oven_create_Page);

/* GET update oven page */
router.get('/update', secured, oven_controllers.oven_update_Page);

/* GET delete delete page */
router.get('/delete', secured, oven_controllers.oven_delete_Page);

module.exports = router;