
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('users'),
        knex.schema.createTable('users', (table) => {
            table.increments('id').primary()
            table.text('username').notNullable()
            table.text('password').notNullable()
            table.text('role').notNullable().default('user')
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('users'),
    ])
)
