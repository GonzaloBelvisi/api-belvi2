const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
  }
});

const Product = sequelize.define('Product', {
  name: {
    id: DataTypes.INTEGER,
    autoIncrement : true
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  components : {
    type:DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
});

const init = async () => {
  await User.sync();

  await User.create({ name: "gonzalo", password : "1234" });

  await Product.sync()

  await Product.create({ name: "Intel", description: "PC Intel Gamer", components: "I7 10700F,RTX 3080,64GB RAM DDR4", price: 1400})
  await Product.create({name: "Amd", description: "Pc Amd Gamer", components: "Ryzen 9 5950x,RTX 3090TI,64GB RAM DDR4", price: 1350})
  await Product.create({ name: "Qualcomm", description: "Pc Amd Gamer", components: "Snapdragon 898,RTX 3060,64GB RAM DDR4", price: 1100})
}

init()

module.exports = { User, Product }