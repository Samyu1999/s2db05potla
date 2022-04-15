var oven = require('../models/oven');
// List of all oven
exports.oven_list = async function(req, res) {
    try{
    theoven = await oven.find();
    res.send(theoven);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    res.status(500);
    }
    };
// for a specific Oven.
exports.oven_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await oven.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Costume create on POST.
exports.oven_create_post = async function(req, res) {
    console.log(req.body)
    let document = new oven();
    document.oven_type = req.body.oven_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle Costume delete form on DELETE.
exports.oven_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: oven delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.oven_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: oven update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.oven_view_all_Page = async function(req, res) {
    try{
    theoven = await oven.find();
    res.render('oven', { title: 'oven Search Results', results: theoven });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
