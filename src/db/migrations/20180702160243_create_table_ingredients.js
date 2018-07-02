exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('ingredients'),
        knex.schema.createTable('ingredients', (table) => {
            table.increments('id').primary();
            table.string('name', 255);
            table.timestamps();
        }),
    ])
);

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('ingredients'),
    ])
);
