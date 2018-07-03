/* eslint-env mocha */
process.env.NODE_ENV = 'test'
const { assert } = require('chai')


const {
    list,
    ids,
} = require('../../../src/models/ingredients')

describe('Integration', () => {
    describe('Models', () => {
        describe('ingredients model', () => {
            describe('#list', () => {
                it('should show list of ingredients with id and name', async () => {
                    const res = await list()
                    assert.isArray(res)
                    if (res.length > 0) {
                        assert.isObject(res[0])
                        assert.property(res[0], 'id')
                        assert.property(res[0], 'name')
                    }
                    // assert.lengthOf(res, 1)
                    console.log(res)
                })
            })
            describe('#ids', () => {
                it('should show list of ids of ingredients', async () => {
                    const res = await ids()
                    assert.isArray(res)
                    if (res.length > 0) {
                        assert.isObject(res[0])
                        assert.property(res[0], 'id')
                    }
                    // assert.lengthOf(res, 1)
                    console.log(res)
                })
            })
        })
    })
})

