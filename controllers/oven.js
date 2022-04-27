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
// for a specific oven.
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
    document.oven_color = req.body.oven_color;
    document.oven_brand = req.body.oven_brand;
    document.oven_type = req.body.oven_type;
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
exports.oven_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await oven.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
exports.oven_update_put = async function (req, res) {
    //res.send('NOT IMPLEMENTED: oven update PUT' + req.params.id);
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await oven.findById(req.params.id)
        // Do updates of properties
        if (req.body.oven_color)
            toUpdate.oven_color = req.body.oven_color;
        if (req.body.oven_brand) toUpdate.oven_brand = req.body.oven_brand;
        if (req.body.oven_type) toUpdate.oven_type = req.body.oven_type;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
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

   // Handle a show one view with id specified by query
exports.oven_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await oven.findById(req.query.id)
        res.render('ovendetail',
            { title: 'oven Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a oven.
// No body, no in path parameter, no query.
// Does not need to be async
exports.oven_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('ovencreate', { title: 'oven Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a oven.
// query provides the id
exports.oven_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await oven.findById(req.query.id)
        res.render('ovenUpdate', { title: 'oven Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.oven_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await oven.findById(req.query.id)
        res.render('ovenDelete', {
            title: 'oven Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
