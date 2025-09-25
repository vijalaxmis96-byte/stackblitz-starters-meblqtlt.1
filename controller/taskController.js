const Task = require('../model/task')

const addTask = async (req,res)=>{
    try {
        const task = new Task(req.body);
        const newTask = task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getTasks = async (req,res)=>{
    try {
        const a = await Task.find()
        res.status(200).json(a)
    } catch (error) {
        res.status(500).json("Error")
    }
}

const updateTasks = async (req,res)=>{
    try {
        const updatedTask = Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json("Error")
    }
}

const deleteTasks = async (req,res)=>{
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted successfully")
    } catch (error) {
        res.status(500).json("Error")
    }
}

module.exports = {addTask,getTasks,updateTasks,deleteTasks}