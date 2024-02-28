const { database } = require("./mongo");
var ObjectId = require('mongoose').Types.ObjectId;

class blog extends database {
	collection = null;
	constructor() {
		super();
		this.collection = 'blogs';
	}

	async getBlogs(search = null) {
		return new Promise((resolve, reject) => {
			let query = {}
			if (search) {
				query = { title: { $regex: search, $options: 'i' } }
			}
			console.log(query)
			this.connection.collection(this.collection).find(query, function (err, result) {
				if (err) throw reject(err);
				resolve(result.toArray());
			});
		});
	}

	async getBlogById(id) {
		return new Promise((resolve, reject) => {
			this.connection.collection(this.collection).findOne({ _id: ObjectId(id) }, function (err, result) {
				if (err) throw reject(err);
				resolve(result.next());
			});
		});
	}

	async updateBanner(id, bannerUrl) {
		return new Promise((resolve, reject) => {
			this.connection.collection(this.collection).updateOne({ _id: ObjectId(id) }, { $set: { banner: bannerUrl } }, function (err, result) {
				if (err) throw reject(err);
				resolve(result);
			});
		});
	}
}

module.exports = blog;