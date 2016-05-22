var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var standupSchema = new Schema({
	memberName : String,
	project : String,
	taskYesterday : String,
	taskToday : String,
	impediment : String,
	createOn : {
		type : Date,
		default : Date.now
	}
});


module.exports = mongoose.model('Standup', standupSchema);
