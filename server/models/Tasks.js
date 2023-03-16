const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	status: {
    	type: String,
    	required: true
  	},
  	source: {
    	type: String,
    	required: true
  	},
  	description: {
    	type: String,
    	required: true
  	},
  	created_date: {
    	type: Date,
    	required:true
  	}
});

module.exports = Task = mongoose.model('task', TaskSchema);