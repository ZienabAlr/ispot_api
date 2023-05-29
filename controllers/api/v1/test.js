const Test = require('../../../models/test');


const getAll = (req, res) => {
    Test.find().then((tests) => {
        res.json(tests);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const create = (req, res) => {
    // console.log(req.body);

    let test = new Test(); 
    test.name = req.body.name;
    test.age = req.body.age;
    test.save().then((newTest) => {
        res.json(newTest);
    }
    ).catch((err) => {
        res.status(500).json(err);
    }
    );




}

module.exports.create = create;
module.exports.getAll = getAll;
