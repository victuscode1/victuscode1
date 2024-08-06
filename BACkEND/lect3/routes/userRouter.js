const express = require("express");
const {
    getUserById,
    createUser,
    upadagteUserById,
    deleteUserById,

} =require ("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/:id", getUserById);