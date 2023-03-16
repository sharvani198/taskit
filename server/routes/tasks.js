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

router.get('/', (req,res) => {
	Task.find()
		.then(tasks => res.json(tasks))
		.catch(err => res.status(404).json(err));
});

module.exports = router;