const express = require('express')
const router = express.Router()
const { getTareas, postTareas, putTareas, deleteTareas } = require('../controllers/tareaControllers')

router.route('/').get(getTareas).post(postTareas)
router.route('/:id').delete(deleteTareas).put(putTareas)

//router.put('/:id', putTareas)
//router.delete('/:id', deleteTareas)
//router.get('/', getTareas)
//router.post('/', postTareas)

module.exports = router