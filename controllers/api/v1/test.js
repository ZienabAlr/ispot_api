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
    test.url = req.body.url;
    test.meaning = req.body.meaning;
   
    test.save().then( result => {
       
        res.json({
            "status": "success"
        })

    }).catch((err) => {
        res.json({
            "status": "error"
          
        })
    }
    );


}

module.exports.create = create;
module.exports.getAll = getAll;
