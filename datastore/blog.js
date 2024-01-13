const database = require("./readandwrite");

class blog extends database {
	constructor() {
		super();
	}

	async getBlog() {
		var sql = "SELECT * FROM blog";
		var result = await this.query(sql);
		return result;
	}

	async getBlogById(id) {
		var sql = "SELECT * FROM blog WHERE id = ?";
		var result = await this.query(sql, [id]);
		return result;
	}

	async getBlogByTitle(title) {
		var sql = "SELECT * FROM blog WHERE title = ?";
		var result = await this.query(sql, [title]);
		return result;
	}
}

module.exports = blog;