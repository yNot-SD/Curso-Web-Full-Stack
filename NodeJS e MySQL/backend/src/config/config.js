module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'cursoNodeMySQL',
            dialect: 'mysql',
            user: 'root',
            passoword: 'root'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}