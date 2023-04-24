import express from "express";
import { deletesUser } from "../contorellers/user.controller.js";
import { verifyToken } from "../middleWare/jwt.js"
;
const router = express.Router();
// router.get("/register",)
// router.get("/login",)
router.delete("/:id",verifyToken ,deletesUser )
export default router; 