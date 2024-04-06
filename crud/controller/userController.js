const { Model } = require("sequelize")

const getUserController =async(req,res)=>{
    res.render('index')
}

const addUserController =async(req,res)=>{
    res.render('add_user')
}

const allUserController =async(req,res)=>{
    res.render('all_user')
}


Model.export={
    getUserController,
    addUserController,
    allUserController,
    
}






