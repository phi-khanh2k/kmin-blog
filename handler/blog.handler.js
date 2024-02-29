class blogHandler {
	constructor(blogStore) {
		this.blogStore = blogStore;
	}

	async getBlogs(search = null, category = null) {
		try {
			const blogs = await this.blogStore.getBlogs(search, category);
			return blogs
		} catch (err) {
			console.error(err)
			throw err;
		}
	}

	async getBlogById(id) {
		try {
			const blog = await this.blogStore.getBlogById(id);
			return blog
		} catch (err) {
			console.error(err)
			throw err;
		}
	}
}

module.exports = blogHandler;