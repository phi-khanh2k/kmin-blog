const nodemailer = require('nodemailer');

class Mailer {
	transporter = null;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'valakismyname2345@gmail.com',
				pass: 'phcr ifoc iurt odof'
			},
			tls: {
				rejectUnauthorized: false
			}
		});
	}

	async sendMail(to, subject, text, html) {
		const mailOptions = {
			from: 'Khanh Nguyen',
			to,
			subject,
			text, // send plain text
			html,
		}
		const info = await this.transporter.sendMail(mailOptions);
		return info;
	};
}

module.exports = { Mailer };
