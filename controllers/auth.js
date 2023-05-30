const User = require('../models/User');
// const passport = require('../passport/passport');

const signup = async (req, res, next) => {
    let firstname = req.body.firstname;
    let surname = req.body.surname;
    let email = req.body.email;
    let school = req.body.school;

    const user = new User(
        {
            firstname: firstname,
            surname: surname, 
            email: email, 
            school: school
        }
    );

    await user.save().then( result => {
       console.log(result);
        res.json({
            "status": "success",
            "data": {result}
        })

    }).catch((err) => {
        res.json({
            "status": "error",
            "error": err
        })
    }
    );

}; 

module.exports.signup = signup;