
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('pizzas_ingredients'),
        knex.schema.createTable('pizzas_ingredients', (table) => {
            table.increments('id').unsigned().primary()
            table.integer('pizza_id').unsigned().notNullable()
                .references('id')
                .inTable('pizzas')
                .onDelete('CASCADE')
                .index()
            // table.foreign('pizza_id').references('pizzas.id')
            table.integer('ingredient_id').unsigned().notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .index()
            // table.foreign('ingredient_id').references('ingredients.id')
            table.timestamps()
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('pizzas_ingredients'),
    ])
)
