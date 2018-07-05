
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.table('ingredients', (table) => {
            table.integer('type_id').unsigned()
            table.foreign('type_id').references('types.id')
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.table('ingredients', (table) => {
            table.dropColumn('type_id')
        }),
    ])
)
