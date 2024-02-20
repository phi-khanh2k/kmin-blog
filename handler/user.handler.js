class userHandler {
	userStore = null;
	mailer = null;

	constructor(userStore, mailer) {
		this.userStore = userStore;
		this.mailer = mailer;
	}

	async getUser(userId) {
		try {
			const user = await this.userStore.findUser(userId);
			return user;
		} catch (error) {
			console.log(error);
		}
	}

	async sendMail(email, content) {
		if (!this.mailer) {
			throw new Error('Mailer is not initialized');
		}
		const info = await this.mailer.sendMail(email, 'Welcome to our website', content);
		return info;
	}
}

module.exports = { userHandler };
