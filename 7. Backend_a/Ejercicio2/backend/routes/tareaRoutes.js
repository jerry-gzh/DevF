const express = require('express')
const router = express.Router()
const { getTareas, postTareas, putTareas, deleteTareas } = require('../controllers/tareaControllers')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTareas).post(protect, postTareas) //Protect, deberá ir antes de la función a proteger
router.route('/:id').delete(protect, deleteTareas).put(protect, putTareas)

//router.put('/:id', putTareas)
//router.delete('/:id', deleteTareas)
//router.get('/', getTareas)
//router.post('/', postTareas)

module.exports = router