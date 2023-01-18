const { User } = require("../models");
const Op = require("sequelize").Op;
const { generateToken } = require("../config/tokens");

module.exports = {
  login: async (req, res) => {
    try {
      const user = await User.findOne({
        where: { username: req.body.username.toLowerCase() },
      });
      if (!user) return res.status(404).send('User not found');
      if (!user.validatePassword(req.body.password)) return res.status(401).send('Wrong password')
      else {
        const token = generateToken({id:user.id,username:user.username});
        res.cookie("token", token, {httpOnly:true}).status(200).json({
          id: user.id,
          username: user.username,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  },

  newUser: async (req, res) => {
    try {
      const createdUser = await User.create({
        username: req.body.username.toLowerCase(),
        password: req.body.password,
        is_admin: req.body.is_admin || false,
      });
      res.status(201).send({
        id: createdUser.id,
        username: createdUser.username,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  },

  logout: (req, res) => {
    res.clearCookie('token')
    res.status(204).json('logged out successfully');
  },

  persist: (req, res) => {
    res.send(req.user);
  },

  // promote: async (req, res) => {
  //   try {
  //     const userToPromote = await User.findOne({where:{id:req.params.id}})
  //     userToPromote.is_admin = !userToPromote.is_admin
  //     userToPromote.save()
  //   } catch (err) {
  //     if (err.errors) res.send(err.errors[0].message);
  //     else {
  //       console.log(err.original);
  //       res.send(`${err.original}`);
  //     }
  //   }
  // }
};
