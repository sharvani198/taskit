const express = require('express');
const router = express.Router();

const Task = require('../models/Tasks');

router.get('/test', (req,res) => {
	let sample_task = new Task({
		name:'Testing task',
		status:'TODO',
		source:'local dev sharvani',
		description:' a placeholder task to test',
		created_date: Date.now()
	})
	sample_task
		.save()
		.then((doc) => res.json(doc))
		.catch((err) => res.status(400).json(err));

});

router.get('/undoTest', (req,res) => {
	Task.deleteMany({name: 'Testing task'})
		.then((d) => res.json({msg:'deleted', doc: d}))
		.catch((err) => res.status(400).json(err));
});

router.post('/', (req,res) => {
	Task.create(req.body)
		.then(task => res.json({msg: 'Task added successfully', doc: task}))
		.catch(err => res.status(400).json({errorMsg: 'Could not create task', err: err}));
});

router.get('/', (req,res) => {
	Task.find()
		.then(tasks => res.json(tasks))
		.catch(err => res.status(404).json(err));
});

router.get('/:id', (req,res) => {
	Task.findById(req.params.id)
		.then( task => res.json(task))
		.catch(err => res.status(404).json({errorMsg: "Invalid Task id.", err:err}));
});


router.put('/:id', (req,res) => {
	Task.findByIdAndUpdate(req.params.id, req.body)
		.then(task => res.json({msg: 'Task updated successfully', doc: task}))
		.catch(err => res.status(404).json({errorMsg: "Invalid Task id.", err:err}));
});

router.delete('/:id', (req,res) => {
	Task.findByIdAndDelete(req.params.id)
		.then(task => res.json({msg: 'Task deleted successfully', doc: task}))
		.catch(err => res.status(404).json({errorMsg: "Invalid Task id.", err:err}));
});

module.exports = router;