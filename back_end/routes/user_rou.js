const router = require('express').Router();
const users = require('../model/user.model');

router.route('/').get((req,res)=>{
    users.find()
    .then(user => res.json(user))
    .catch(err => res.statusCode(400).json("Error :"+ err))
});
router.route('/add').post((req,res)=>{
    const {username,password} = req.body;

    const newUser =new users(({username,password}));

    newUser.save()
    .then(()=> res.json('User Added'))
    .catch((err)=> res.status(400).json("Error :"+err))
})



module.exports = router;