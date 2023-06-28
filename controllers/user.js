const { User } = require("../models");
const Op = require("sequelize").Op;
const { generateToken } = require("../config/tokens");

module.exports = {
  login: async (req, res) => {
    try {
      const user = await User.findOne({
        where: { username: req.body.username.toLowerCase() },
      });
      if (!user) return res.status(401).send("Wrong credentials");
      if (!user.validatePassword(req.body.password))
        return res.status(401).send("Wrong credentials");
      else {
        const token = generateToken({
          id: user.id,
          username: user.username,
          is_admin: user.is_admin,
        });
        if (user.is_admin) {
          res.cookie("token", token, { httpOnly: true }).status(200).json({
            id: user.id,
            username: user.username,
            is_admin: user.is_admin,
          });
        } else {
          res.cookie("token", token, { httpOnly: true }).status(200).json({
            id: user.id,
            username: user.username,
          });
        }
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
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  },

  logout: (req, res) => {
    res.clearCookie("token");
    res.status(204).json("logged out successfully");
  },

  persist: (req, res) => {
    res.send(req.user);
  },

  changeUsername: async (req, res) => {
    try {
      const newUsername = req.body.newUsername;
      const password = req.body.password;
      const user = await User.findByPk(req.body.user.id);
      const repeatedUser = await User.findOne({where: { username: newUsername }});

      if (repeatedUser) return res.send({correct: false, message: "Ese nombre de usuario ya existe"});
      else if (!user.validatePassword(password)) return res.send({correct: false, message: "Contraseña invalida"});
      else if (newUsername.length < 3) return res.send({correct: false, message: "El nombre de usuario tiene que tener al menos 3 caracteres"});
      else {
        await user.update({ username: newUsername });
        const token = generateToken({
          id: user.id,
          username: user.username.toLowerCase(),
          is_admin: user.is_admin,
        });
        res.clearCookie("token");
        res.cookie("token", token, { httpOnly: true });
        res.send({
          correct: true,
          message: "El nombre de usuario se actualizo con exito",
        });
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },

  changePassword: async (req, res) => {
    try {
      const reqUser = req.body.user;
      const oldPass = req.body.oldPassword;
      const newPass = req.body.newPassword;
      const confirmNewPass = req.body.confirmNewPassword;

      const user = await User.findByPk(reqUser.id);
      if (!user)
        return res.send({
          correct: false,
          message: "No se encontro el usuario",
        });
      else if (newPass.length < 8)
        return res.send({
          correct: false,
          message: "La nueva contraseña debe tener al menos 8 caracteres",
        });
      else if (newPass !== confirmNewPass)
        return res.send({
          correct: false,
          message: "La nueva contraseña no coincide",
        });
      else if (!user.validatePassword(oldPass))
        return res.send({
          correct: false,
          message: "La contraseña anterior no coincide",
        });
      else {
        const newHashedPassword = user.hashPassword(newPass, user.salt);
        await user.update({ password: newHashedPassword });
        res.send({
          correct: true,
          message: "La contraseña se actualizo con exito",
        });
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
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
