var people = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function (req,res) {
        res.json(people);
    });
}