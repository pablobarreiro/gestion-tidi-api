const { User } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  login: (req, res) => {
    if (req.user.is_admin)
      res.status(201).send({
        id: req.user.id,
        username: req.user.username,
        is_admin: req.user.is_admin,
      });
    else res.status(201).send({ id: req.user.id, username: req.user.username });
  },

  newUser: async (req, res) => {
    try {
      const createdUser = await User.create({
        username: req.body.username.toLowerCase(),
        password: req.body.password,
        is_admin: req.body.is_admin || false,
      });
      if (createdUser.is_admin)
        res.status(201).send({
          id: createdUser.id,
          username: createdUser.username,
          is_admin: createdUser.is_admin,
        });
      else
        res.status(201).send({ id: createdUser.id, username: createdUser.username });
    } catch (err) {
      if (err.errors) res.send(err.errors[0].message);
      else {
        console.log(err);
        res.send(`${err}`);
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy(() => {
      res.sendStatus(204);
    });
  },

  persist: (req, res) => {
    if (req.user){
    if (req.user.is_admin)
      res.send({
        id: req.user.id,
        username: req.user.username,
        is_admin: req.user.is_admin,
      })
    else res.status(201).send({ id: req.user.id, username: req.user.username });
    }
    else res.sendStatus(401);
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
