require("dotenv").config()
const Sequelize = require("sequelize")

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
            SELECT name FROM user_choices
            ORDER BY RANDOM()
            LIMIT 1
        `)
        .then((dbRes) => {
            const {name} = dbRes[0][0]
            console.log(dbRes[0][0])
            res.status(200).send(name)
         })
         .catch((err) =>{
            console.log('add restaurants first')
            res.status(204).send(err)
         })
         
    },

    clearList: (req, res) =>{
        sequelize.query(`
            DELETE FROM user_choices
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
         })
    }

  }