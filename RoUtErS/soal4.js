const express = require('express')
const app = express()
const bodyParser = require("body-parser") 

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal4C = require ('../CoNtRoLlErS/soal4')

app.post("/bmicalculator", soal4C.bmicalculator)

module.exports = app