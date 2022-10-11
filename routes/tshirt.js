const express = require('express')
const router = express.Router()
const { Tshirt } = require('../models')

router.get('/get-all', async(req, res) => {
    const shirts = await Tshirt.findAll()
    res.send(shirts)
})

router.post('/add', async(req, res) => {
    const newShirt = req.body
    await Tshirt.create(newShirt)
})

module.exports = router