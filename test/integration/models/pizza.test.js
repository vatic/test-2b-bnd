/* eslint-env mocha */
process.env.NODE_ENV = 'test'
const { assert } = require('chai')


const {
    add,
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
                    const allIds = await ingredientsIds()
                    const ids = [allIds[1], allIds[3], allIds[5], allIds[15]]
                    const res = await add('testPizza#1', ids)
                    assert.isArray(res)
                    assert.lengthOf(res, 1)
                    console.log(res)
                })
            })
        })
    })
})

