require('dotenv').config()
const Sequelize = require('sequelize')

let {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  })

  module.exports = {
    // seed: (req, res) =>{
    //     sequelize.query(`

    //         CREATE TABLE restaurant_types(
    //             type_id SERIAL PRIMARY KEY,
    //             type VARCHAR
    //         );

    //         CREATE TABLE user_choices(
    //             name VARCHAR(50) NOT NULL UNIQUE,
    //             type_id VARCHAR REFERENCES restaurant_types,
    //             rating INT
    //         );
        
    //         CREATE TABLE resturants(
    //             name VARCHAR(50) NOT NULL UNIQUE,
    //             type VARCHAR,
    //             rating INT
    //         );
    //     `)
    // }
    getTypes: (req, res) =>{
        sequelize.query(`
        SELECT * FROM restaurant_types
    `)
    .then((dbRes) => {
        res.status(200).send(dbRes[0])
     })
    },

    addRestaurant: (req, res) =>{
        let {name, typeId, rating} = req.body
        sequelize.query(`
            INSERT INTO user_choices(name, type_id, rating)
            VALUES ('${name}', ${typeId}, ${rating})
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
         })
    },

    getRandomRestaurant: (req, res) =>{
        sequelize.query(`
            SELECT * FROM user_choices
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
         })
    }

  }