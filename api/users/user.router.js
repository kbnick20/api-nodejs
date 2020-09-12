const {createUser,getUserByUserId,getUsers,updateUsers,deleteUser,login} = require('./user.controller');

const router= require("express").Router();
const { checkToken}= require("../../auth/token_validation");

router.post("/",checkToken,createUser);
router.get("/",checkToken,getUsers);
router.get("/:id",checkToken,getUserByUserId);
router.post("/login",login);
router.patch("/",checkToken,updateUsers);
router.delete("/",deleteUser);

module.exports=router;