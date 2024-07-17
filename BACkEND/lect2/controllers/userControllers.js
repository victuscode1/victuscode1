const { SUCCESS, BAD_REQUEST, CREATED, NOT_FOUND, INTERNAL_SERVER_ERROR  } = require("../utils/constant");

// any logic relating to user get into this function
let userDB = [] ;

exports.getAllUser = (req, res) => {
    res.status (SUCCESS).json({
        staus: "success",
        data: userDB,
    })
};

exports.getUserById = (req, res) => {
    const id = req.params.id;

    for (let i = 0; i < userDB.length; i++) {
        if (userDB[i].username == id) {
            res.status(SUCCESS).json({
                status: "success",
                data: userDB[i],
            });
            return;
        }
    }

    res.status(NOT_FOUND).json({
        status: "failure",
        message: `User with id ${id} not found`,
    });

};

exports.createUser = (req, res) => {
    let { email, username, phone, password } = req.body;
    if(email == undefined || 
        username == undefined || 
        phone == undefined || 
        password==undefined ) {
        res.status(BAD_REQUEST).json({
            status: "failure",
            message : " Please provide valid data"
        });
        return;
    }

let user = { 
  email, username, phone, password
};

userDB.push(user)
res.status (CREATED).json ({
    status: "success",
    data:user,
})

};

exports.updateUser = (req, res) => {

};

exports.deleteAllUser = (req, res) => {

};

exports.deleteUserById = (req, res) => {


};