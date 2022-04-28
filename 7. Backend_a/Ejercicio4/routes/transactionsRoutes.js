const express = require('express')
const router = express.Router()
const {getTransactions, postTransactions, deleteTransactions} = require('../controllers/transactionsControllers')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTransactions).post(protect, postTransactions) //simplificada 

router.route('/:id').delete(protect, deleteTransactions)//extendida

module.exports = router