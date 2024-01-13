class blogHandler {
	constructor(blogStore) {
		this.blogStore = blogStore;
	}

	async getBlogs() {
		try {
			const blogs = await this.blogStore.getBlogs();
			return blogs
		} catch (err) {
			console.error(err)
			throw err;
		}
	}
}

module.exports = blogHandler;