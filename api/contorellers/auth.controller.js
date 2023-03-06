import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({
            ...req.body,
            password: hash,

        });
        await newUser.save();
        res.status(201).send("newUser has been created");
    }
    catch (error) {
        res.status(500).send("something went wrong");

    }
}
export const login = async (req, res) => { 
    try {
        newUser = await User.findOne({ email: req.body.email });
        res.status(200).send(newUser); 
    } catch (error) {
        res.status(500).send("something went wrong");
    }
};
export const logout = async (req, res) => { };