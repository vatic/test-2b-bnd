exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.table('pizzas', (table) => {
            table.integer('activity', true).notNullable().default(1)
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.table('pizzas', (table) => {
            table.dropColumn('activity')
        }),
    ])
)
