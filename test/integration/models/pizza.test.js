/* eslint-env mocha */
process.env.NODE_ENV = 'test'
const faker = require('faker')
const { assert } = require('chai')


const {
    add,
    addWithIngredients,
    list,
} = require('../../../src/models/pizza')

const { ingredientsIds } = require('../../../src/services/ingredients')

describe('Integration', () => {
    describe('Models', () => {
        // beforeEach(async () => {
        //     await deleteAllPhones()
        // })

        // afterEach(async () => {
        //     await deleteAllPhones()
        // })

        describe('pizza model', () => {
            describe('#add', () => {
                it('should add pizza with name', async () => {
                    const userId = 1
                    const res = await add(`testPizza_${faker.random.word()}`, userId)
                    assert.isArray(res)
                    assert.lengthOf(res, 1)
                })
            })
            describe('#addWithIngredients', () => {
                it('should add pizza with ingredients', async () => {
                    const allIds = await ingredientsIds()
                    const ids = [allIds[1], allIds[4], allIds[9], allIds[15]]
                    const userId = 1
                    const pizzaId = (await add(`testPizza_${faker.random.word()}`, userId))[0]
                    const res = await addWithIngredients(pizzaId, ids)
                    assert.isArray(res)
                })
            })
            describe('#list', () => {
                it('should get list of all pizzas', async () => {
                    const res = await list()
                    assert.isArray(res)
                    // console.log(res)
                })
            })
        })
    })
})

