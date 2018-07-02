module.exports = {

    development: {
        client: 'mysql',
        version: '5.6',
        connection: {
            user: 'vatagin',
            password: 'vat123',
            database: 'pizza_dev',
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/db/migrations',
        },
        seeds: {
            directory: './src/db/seeds/dev',
        },
    },

    test: {
        client: 'mysql',
        version: '5.6',
        connection: {
            user: 'vatagin',
            password: 'vat123',
            database: 'pizza_test',
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/db/migrations',
        },
        seeds: {
            directory: './src/db/seeds/dev',
        },
    },

    production: {
        client: 'mysql',
        version: '5.6',
        connection: {
            host: 'mysql.example.com',
            user: process.env.PIZZA_USER,
            password: process.env.PIZZA_PWD,
            database: 'db-name',
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/db/migrations',
        },
        seeds: {
            directory: './src/db/seeds/dev',
        },
    },

}
