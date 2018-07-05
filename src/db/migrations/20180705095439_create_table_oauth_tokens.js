
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('oauth_tokens'),
        knex.schema.createTable('oauth_tokens', (table) => {
            table.uuid('id').primary()
            table.text('access_token').notNullable()
            table.text('client_id')
            table.integer('user_id').notNullable()
            table.timestamp('expires', true).notNullable()
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('oauth_tokens'),
    ])
)
