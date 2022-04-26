const { Router } = require('express')
const { User } = require('../database/database')
const router = Router();

router.post("/", async (req, res) => {

    const userData = { name: req.body.user, password: req.body.password }

    if (!userData && !userData.name && !userData.password) {
        return res.status(400).send({ message: "Invalid register data" })
    }

    userFromBD = await User.findOne({
        where: {
            name: userData.name,
        }
    })

    if (userFromBD) {
        return res.status(400).send({ message: "User already exists" })
    }

    await User.create({ name: userData.name, password: userData.password });

    return res.status(200).send()
});

module.exports = router