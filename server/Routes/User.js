const express = require('express');
const router = express.Router();
const User = require('../Models/User');

router.use(express.json());

router.post('/register', async (req, res)=> {  
    const { username, email, password } = req.body;
    const newUser = await User.create({
        username,
        email,
        password
    })

    res.json(newUser);
});

router.get('/', async (req, res) => {
    const user = await User.find({});
    res.json(user);
})

module.exports = router