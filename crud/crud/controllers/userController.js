// Model
const User = require("../model/userModel");

const getUserController = async (req, res) => {
  res.render("index", { title: "Home" });
};

const allUsersController = async (req, res) => {
  const users = await User.findAll();
  res.render("all_users", { title: "all_users", users: users });
};

const userFormController = async (req, res) => {
  res.render("add_user", { title: "add_user" });
};

const addUserController = async (req, res) => {
  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  await user.save();
  res.redirect("/all-users");
};

const deleteUserController = async (req, res) => {
  const { id } = req.params;
  User.destroy({
    where: { id: id },
  });
  res.redirect("/all-users");
};

const UpdateUserController = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({where:{ id: id} });
  console.log(user.firstname);

  res.render("update_user", {
    title: "update_user",
    firstname: user.firstname,
    lastname: user.lastname,
    id:user.id
  });
};

const UpdateUserController2 = async (req, res) => {
      const {id} = req.params
      console.log(id);
      const firstname = req.body.firstname
      const lastname = req.body.lastname

     await User.update({firstname:firstname,lastname:lastname},{
        where:{
          id:id
        }
     })


  res.redirect("/all-users");
};

const contactPageController = async (req, res) => {
  res.render("contact", { title: "contact" });
};

module.exports = {
  getUserController,
  addUserController,
  UpdateUserController,
  contactPageController,
  allUsersController,
  userFormController,
  deleteUserController,
  UpdateUserController2 
};
