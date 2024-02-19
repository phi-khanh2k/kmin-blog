class userHandler {
	userStore = null;

	constructor(userStore) {
		this.userStore = userStore;
	}

	async getUser(userId) {
		try {
			const user = await this.userStore.findUser(userId);
			return user;
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = { userHandler };
