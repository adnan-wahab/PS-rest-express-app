const faker = require("faker");
const _ = require("lodash");
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



class Address extends Model {}
Address.init({
  name: DataTypes.STRING,
  street: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  country: DataTypes.STRING,
}, { sequelize, modelName: 'address' });

sequelize.sync().then(() => {
  Address.bulkCreate(
    _.times(10, () => ({
      name: faker.name.findName(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
    }))
  );
});

module.exports = Address;
