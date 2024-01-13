var { read, write } = require("./readandwrite");

function saveContact(contact) {
	try {
		var lists = read("./data/contact.json")
		if (Array.isArray(lists)) {
			lists.push(contact)	
		} else {
			lists = new Array(contact)
		}
		write(lists, "./data/contact.json")
	} catch (err) {
		if (err) {
			throw err
		}
	}
}

module.exports = saveContact