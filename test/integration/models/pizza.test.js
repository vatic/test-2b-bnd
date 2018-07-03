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
                    const ids = await ingredientsIds()
                    console.log(ids)
                    const res = await add('testPizza#1')
                    assert.isArray(res)
                    assert.lengthOf(res, 1)
                    console.log(res)
                })
            })
        })
    })
})

