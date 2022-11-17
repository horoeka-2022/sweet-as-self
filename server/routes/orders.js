const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  db.addOrder(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('error in server' + err.message)
    })
})

router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.json(orders)
      return null
    })
    .catch((err) => {
      res.sendStatus(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/', (req, res) => {
  const order = req.body  //req.body = {id:1, status: 'pending'}
  db.editOrderStatus(order.id, order.status)
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err.message))
})
 