const query = `
INSERT INTO users (username, password)
VALUES
('admin', SHA('admin')),
('user1', SHA('user1'))
`
exports.seed = knex =>
    knex('users').del()
        .then(() => knex.raw(query))
