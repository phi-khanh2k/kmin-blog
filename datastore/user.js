const { database } = require("./mongo");
var ObjectId = require('mongoose').Types.ObjectId;

class user extends database {
	collection = null;
	constructor() {
		super();
		this.collection = 'user';
	}

	async createUser(data) {
		return new Promise((resolve, reject) => {
			this.connection.collection(this.collection).insertOne(data, function (err, res) {
				if (err) reject(err);
				resolve(res);
			});
		});
	}

	async findUser(id) {
		return new Promise((resolve, reject) => {
			this.connection.collection(this.collection).findOne({ _id: new ObjectId(id) }, function (err, res) {
				if (err) reject(err);
				resolve(res);
			});
		});
	}

	async updateUser(data) {
		return new Promise((resolve, reject) => {
			this.connection.collection(this.collection).updateOne({ _id: data._id }, { $set: data }, function (err, res) {
				if (err) reject(err);
				resolve(res);
			});
		});
	}

	async deleteUser(data) {
		return new Promise((resolve, reject) => {
			this.connection.collection(this.collection).deleteOne(data, function (err, res) {
				if (err) reject(err);
				resolve(res);
			});
		});
	}

	async findAllUser() {
		return new Promise((resolve, reject) => {
			this.connection.collection(this.collection).find({}).toArray(function (err, res) {
				if (err) reject(err);
				resolve(res);
			});
		});
	}
}

module.exports = { user };