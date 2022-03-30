const express = require('express')
const router = express.Router()
const {getTransactions, postTransactions, deleteTransactions} = require('../controllers/transactionsControllers')

router.route('/').get(getTransactions).post(postTransactions) //simplificada 

router.delete('/:id', deleteTransactions)//extendida

module.exports = router