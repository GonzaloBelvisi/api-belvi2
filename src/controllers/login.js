const { Router } = require('express')
const { User } = require('../database/database')
const jwt = require('jsonwebtoken');
const router = Router();

router.post("/", async (req, res) => {

    const userData = { name: req.body.user, password: req.body.password }

    if (!userData && !userData.name && !userData.password) {
        return res.status(400).send({ message: "Invalid login data" })
    }

    userFromBD = await User.findOne({
        where: {
            name: userData.name,
            password: userData.password,
        }
    })

    if (!userFromBD) {
        return res.status(400).send({ message: "User not found" })
    }

    const token = jwt.sign({
        data: userData.name
    }, 'belvi', { expiresIn: '1h' })

    return res.status(200).send({ token })
});

module.exports = router