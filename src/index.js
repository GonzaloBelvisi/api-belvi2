const cors = require("cors")
const express = require("express");
const login = require("./controllers/login")
const register = require("./controllers/register")
const product = require("./controllers/product")

//Creamos nuestra app
const app = express();
app.use(cors())
app.use(express.json());

//Levantamos nuestra app y escuchamos el puerto que le digamos
app.use("/login", login)
app.use("/register", register)
app.use("/product", product)
app.listen(4010);