class blogHandler {
	constructor(blogStore) {
		this.blogStore = blogStore;
	}

	async getBlogs(search = null) {
		try {
			const blogs = await this.blogStore.getBlogs(search);
			return blogs
		} catch (err) {
			console.error(err)
			throw err;
		}
	}
}

module.exports = blogHandler;