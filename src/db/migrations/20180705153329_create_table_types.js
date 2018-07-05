exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('types'),
        knex.schema.createTable('types', (table) => {
            table.increments('id').primary()
            table.string('name', 255)
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('types'),
    ])
)
