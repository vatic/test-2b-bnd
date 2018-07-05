
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('ingredients'),
        knex.schema.createTable('ingredients', (table) => {
            table.integer('id').unsigned().primary()
            table.string('name', 255)
            table.integer('type_id').unsigned().notNullable()
                .references('id')
                .inTable('types')
                .onDelete('CASCADE')
                .index()
            // table.foreign('type_id').references('types.id')
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('ingredients'),
    ])
)
