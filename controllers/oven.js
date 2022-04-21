var oven = require('../models/oven');
// List of all oven
exports.oven_list = async function(req, res) {
    try{
    theOven = await oven.find();
    res.send(theOven);
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
    document.oven_Color = req.body.oven_Color;
    document.oven_Brand = req.body.oven_Brand;
    document.oven_Type = req.body.oven_Type;
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
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await oven.findById(req.params.id)
        // Do updates of properties
        if (req.body.oven_Color)
            toUpdate.oven_Color = req.body.oven_Color;
        if (req.body.oven_Brand) toUpdate.oven_Brand = req.body.oven_Brand;
        if (req.body.oven_Type) toUpdate.oven_Type = req.body.oven_Type;
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
    theOven = await oven.find();
    res.render('Oven', { title: 'Oven Search Results', results: theOven });
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
        res.render('Ovendetail',
            { title: 'Oven Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a Barbeque.
// No body, no in path parameter, no query.
// Does not need to be async
exports.oven_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('ovencreate', { title: 'Oven Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a Barbeque.
// query provides the id
exports.oven_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await oven.findById(req.query.id)
        res.render('OvenUpdate', { title: 'Oven Update', toShow: result });
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
        res.render('OvenDelete', {
            title: 'Oven Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
