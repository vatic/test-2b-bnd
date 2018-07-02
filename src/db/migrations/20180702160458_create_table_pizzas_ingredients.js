exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('pizzas_ingredients'),
        knex.schema.createTable('pizzas_ingredients', (table) => {
            table.increments('id').primary();
            table.integer('pizza_id').unsigned();
            table.foreign('pizza_id').references('pizzas.id');
            table.integer('ingredient_id').unsigned();
            table.foreign('ingredient_id').references('ingredients.id');
            table.timestamps();
        }),
    ])
);

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('pizzas_ingredients'),
    ])
);
