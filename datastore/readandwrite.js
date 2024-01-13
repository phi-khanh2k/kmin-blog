const mysql = require('mysql');
require('dotenv').config();

class database {
    connection = null;
    constructor() {
        var conn = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "root",
            password: process.env.DB_PASSWORD,
            database: "blog-kmin"
        })
        conn.connect(function (err) {
            if (err) {
                console.error(err);
                throw err;
            }
            console.log("Connected!");
        });
        this.connection = conn;
    }

    async query(sql, params) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        })
    }

    async close() {
        return new Promise((resolve, reject) => {
            this.connection.end(function (err) {
                if (err) reject(err);
                console.log("Closed!");
                resolve();
            });
        })
    }
}

module.exports = database;