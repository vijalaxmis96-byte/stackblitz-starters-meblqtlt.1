const express = require('express');
const router = express.Router();

const {addTask,getTasks,updateTasks,deleteTasks} = require('../controllers/taskController')


router.get('/',getTasks);
router.post('/',addTask);
router.put('/:id',updateTasks);
router.delete('/:id',deleteTasks)


module.exports = router;