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

	async sendMail(email) {
		if (!this.mailer) {
			throw new Error('Mailer is not initialized');
		}
		// save email
		// await this.userStore.SaveUser(email);
		const content = `<h1>Hi ${email}! Welcome to our website</h1>`;
		const info = await this.mailer.sendMail(email, 'Welcome to our website', null, content);
		return info;
	}
}

module.exports = { userHandler };
