const { Router } = require('express')
const { Product } = require('../database/database')
const router = Router();

router.get("/", async (req, res) => {

    const productsFromBD = await Product.findAll()

    const productsAdapted = productsFromBD.map(x => {
        return {
            id: x.id,
            name: x.name,
            description: x.description,
            price: x.price,
            components : x.components.split(","),
        }
    })

    return res.status(200).send(productsAdapted)
});

module.exports = router