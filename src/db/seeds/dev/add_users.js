const query = `
INSERT INTO users (username, password, role)
VALUES
('admin', SHA('admin'), 'admin'),
('user1', SHA('user1'), 'user'),
('user2', SHA('user2'), 'user')
`
exports.seed = knex =>
    knex('users').del()
        .then(() => knex.raw(query))
