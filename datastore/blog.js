const { database } = require("./readandwrite");

class blog extends database {
	tableName = "";

	constructor() {
		super();
		this.tableName = "blogs";
	}

	async getBlogs() {
		var sql = `SELECT * FROM ${this.tableName}`;
		var result = await this.query(sql);
		return result;
	}

	async getBlogById(id) {
		var sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
		var result = await this.query(sql, [id]);
		return result;
	}

	async getBlogByTitle(title) {
		var sql = `SELECT * FROM ${this.tableName} WHERE title = ?`;
		var result = await this.query(sql, [title]);
		return result;
	}

	async updateBanner(id, bannerUrl) {
		var sql = `UPDATE ${this.tableName} SET banner = ? WHERE id = ?`;
		var result = await this.query(sql, [bannerUrl, id]);
		return result;
	}
}

module.exports = blog;