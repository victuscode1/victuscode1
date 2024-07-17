const express = require ("express");
const { getAllUser,
        getUserById,
        createUser,
        updateUser,
        deleteAllUser,
        deleteUserById,    
    } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.get("/", getAllUser); //get all user 
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/", deleteAllUser);
userRouter.delete("/:id", deleteUserById); // delete user by ID

module.exports = userRouter ;

