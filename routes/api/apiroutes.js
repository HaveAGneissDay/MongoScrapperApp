//API routes
//Need packages
const path = require('path');

app.get('/articles', function (req, res) {
    Article.find({}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});

app.get('/articles/:id', function (req, res) {
    Article.findOne({ '_id': req.params.id })
        .populate('note')
        .exec(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.json(doc);
            }
        });
});

app.post('/articles/:id', function (req, res) {
    var newNote = new Note(req.body);

    newNote.save(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            Article.findOneAndUpdate({ '_id': req.params.id }, { 'note': doc._id })
                .exec(function (err, doc) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(doc);
                    }
                });

        }
    });
});