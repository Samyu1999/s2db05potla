var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var oven_controllers = require('../controllers/oven');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/oven', oven_controllers.oven_create_post);
// DELETE request to delete Handbag.
router.delete('/oven/:id', oven_controllers.oven_delete);
// PUT request to update Handbag.
router.put('/oven/:id', oven_controllers.oven_update_put);
// GET request for one Handbag.
router.get('/oven/:id', oven_controllers.oven_detail);
// GET request for list of all Handbag.
router.get('/oven', oven_controllers.oven_list);
module.exports = router;