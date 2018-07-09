
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('pizzas'),
        knex.schema.createTable('pizzas', (table) => {
            table.increments('id').primary()
            table.string('name', 255).notNullable()
            table.integer('activity', true).notNullable().default(1)
            table.integer('user_id').unsigned().notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
                .index()
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        }),
    ])
)

exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('users'),
    ])
)
