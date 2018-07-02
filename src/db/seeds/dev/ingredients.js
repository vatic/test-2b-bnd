exports.seed = knex => (
    knex('ingredients').del()
        .then(() =>
            knex('ingredients').insert([
                { name: 'Дрожжевое кислое тесто', created_at: new Date(), updated_at: new Date() },
                { name: 'Пресное (бездрожжевое) тесто', created_at: new Date(), updated_at: new Date() },
                { name: 'Слоёное тесто', created_at: new Date(), updated_at: new Date() },
                { name: 'Сыр Моцарелла', created_at: new Date(), updated_at: new Date() },
                { name: 'Сыр Пармезан', created_at: new Date(), updated_at: new Date() },
                { name: 'Сыр Дор Блю', created_at: new Date(), updated_at: new Date() },
                { name: 'Сыр Фонтина', created_at: new Date(), updated_at: new Date() },
                { name: 'Сыр Чеддер', created_at: new Date(), updated_at: new Date() },
                { name: 'Курица', created_at: new Date(), updated_at: new Date() },
                { name: 'Говядина', created_at: new Date(), updated_at: new Date() },
                { name: 'Свинина', created_at: new Date(), updated_at: new Date() },
                { name: 'Бекон', created_at: new Date(), updated_at: new Date() },
                { name: 'Ветчина', created_at: new Date(), updated_at: new Date() },
                { name: 'Пепперони', created_at: new Date(), updated_at: new Date() },
                { name: 'Пицца-соус', created_at: new Date(), updated_at: new Date() },
                { name: 'Сливочный соус', created_at: new Date(), updated_at: new Date() },
                { name: 'Томатный соус', created_at: new Date(), updated_at: new Date() },
                { name: 'Шампиньёны', created_at: new Date(), updated_at: new Date() },
                { name: 'Грибной жюльен', created_at: new Date(), updated_at: new Date() },
                { name: 'Зелень', created_at: new Date(), updated_at: new Date() },
                { name: 'Укроп', created_at: new Date(), updated_at: new Date() },
                { name: 'Помидоры', created_at: new Date(), updated_at: new Date() },
                { name: 'Картофель', created_at: new Date(), updated_at: new Date() },
                { name: 'Лук красный', created_at: new Date(), updated_at: new Date() },
                { name: 'Лук зелёный', created_at: new Date(), updated_at: new Date() },
                { name: 'Огурцы маринованные', created_at: new Date(), updated_at: new Date() },
                { name: 'Кунжут', created_at: new Date(), updated_at: new Date() },
                { name: 'Перец болгарский', created_at: new Date(), updated_at: new Date() },
            ]))
)
