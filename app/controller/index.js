var reviews = require('../model/reviews');
var registrants = require('../model/registrants');

async function reviews(req, res){
    try {
        const header = await reviews.findOne();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Post Registrants Form Data
async function registrants(req, res){
    try {
        const registrants = await Registrants.create(req.body);
        res.json({ success: true, registrants });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    reviews,
    registrants
}