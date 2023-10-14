// models/people.js
const Sequelize = require("sequelize-cockroachdb");

const sequelize = new Sequelize({
    dialect: "postgres",
    username: "varghese",
    password: "ya995fGD1AiwdOvyLKHBHw",
    host: "minty-grub-6725.8nk.cockroachlabs.cloud",
    port: "26257",
    database: "defaultdb",
    dialectOptions: {
      ssl: {},
    },
    logging: false,
});

const People = sequelize.define("people", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
  },
  phoneNumber: {
    type: Sequelize.INTEGER,
  },
});

sequelize.sync()
  .then(() => {
    console.log('Database and tables synchronized.');
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });

module.exports = People;
