const query = "INSERT INTO users (username, password) VALUES ('admin', SHA('admin'))"
exports.seed = knex =>
    knex('users').truncate()
        .then(() => knex.raw(query))
