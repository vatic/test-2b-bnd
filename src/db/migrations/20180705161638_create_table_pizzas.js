
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('pizzas'),
        knex.schema.createTable('pizzas', (table) => {
            table.increments('id').primary()
            table.string('name', 255).notNullable()
            table.timestamps()
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('pizzas'),
    ])
)
