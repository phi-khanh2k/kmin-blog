const mongoose = require('mongoose');

class database {
	connection = null;
	constructor() {
		mongoose.connect('mongodb://localhost:27017/kmin-blog');
		this.connection = mongoose.connection;
		this.connection.on('error', console.error.bind(console, 'connection error:'));
		this.connection.once('open', function () {
			console.log("Connected!");
		});
	}

	async close() {
		return new Promise((resolve, reject) => {
			this.connection.close(function (err) {
				if (err) reject(err);
				console.log("Closed!");
				resolve();
			});
		})
	}
}

module.exports = { database };
