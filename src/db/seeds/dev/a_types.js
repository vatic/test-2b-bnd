
exports.seed = knex => (
    knex('types').del()
        .then(() =>
            // Inserts seed entries
            knex('types').insert([
                { id: 1, name: 'Тесто' },
                { id: 2, name: 'Сыр' },
                { id: 3, name: 'Мясо' },
                { id: 4, name: 'Грибы' },
                { id: 5, name: 'Соус' },
                { id: 6, name: 'Овощи' },
                { id: 7, name: 'Приправы' },
                { id: 8, name: 'Другое' },
            ]))
)
