const express = require('express')
const router   = express.Router()
const {
    getUserController,
    addUserController,
    allUsersController,
    UpdateUserController,
    contactPageController,
    userFormController,
    deleteUserController,
    UpdateUserController2 
  } = require('../controllers/userController');
// USER ROUTES
//
router.get('/',getUserController)
// form routes
router.get('/userform',userFormController)
router.post('/add-user',addUserController)

router.get('/delete-user/:id',deleteUserController)

// update routes
router.get('/update-user/:id',UpdateUserController)
router.post('/edit-user/:id',UpdateUserController2)

router.get('/all-users',allUsersController)
router.get('/contact',contactPageController)

module.exports=router;