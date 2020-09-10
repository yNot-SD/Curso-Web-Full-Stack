module.exports = {
    development: {
        database: {
            name: 'root',
            user: 'root',
            passoword: 'root',
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}