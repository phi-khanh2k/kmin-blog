const nodemailer = require('nodemailer');

class Mailer {
	transporter = null;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASS
			},
			tls: {
				rejectUnauthorized: false
			}
		});
	}

	async sendMail(to, subject, text, html) {
		const mailPayload = {
			from: 'Khanh Nguyen',
			to,
			subject,
			text, // send plain text
			html,
		}
		const info = await this.transporter.sendMail(mailPayload);
		return info;
	};
}

module.exports = { Mailer };
