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
      const  user = await User.findOne({ username: req.body.username });
      if(!user) return res.status(404).send("user not found");
      const validPassword = bcrypt.compareSync(req.body.password, user.password);
      if(!validPassword) return res.status(404).send("wrong password or username"); 
      const {password,...info}=user._doc
      res.status(200).send(info);
      //  res.status(200).send("user logged in" + user.username);
    } catch (error) {
        res.status(500).send("something went wrong");
    }
};
export const logout = async (req, res) => { }; 