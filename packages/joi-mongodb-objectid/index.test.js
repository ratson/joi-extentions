'use strict'

const { ObjectId } = require('bson')
const JoiBase = require('joi')

const JoiObjectId = require('.')

const Joi = JoiBase.extend(JoiObjectId)

describe('Joi.extend(JoiObjectId)', () => {
  const validId = ObjectId.createPk()
  const invalidId = 'invalid-id'

  it('return valid ObjectId', () => {
    const result = Joi.objectId().validate(validId)
    expect(result.error).toBeNull()
    expect(result.value instanceof ObjectId).toBe(true)
    expect(result.value).toBe(validId)
  })

  it('return valid ObjectId string', () => {
    const result = Joi.objectId().validate(String(validId))
    expect(result.error).toBeNull()
    expect(result.value instanceof ObjectId).toBe(true)
    expect(result.value).toEqual(validId)
  })

  it('return the original value for an invalid input', () => {
    const result = Joi.objectId().validate(invalidId)
    expect(result.value).toBe(invalidId)
  })

  it('set error message', () => {
    const result = Joi.objectId().validate(invalidId)
    expect(result.error.message).toBe('"value" needs to be a valid ObjectId')
  })

  it('return undefined without error', () => {
    const result = Joi.objectId().validate(undefined)
    expect(result.error).toBeNull()
    expect(result.value).toBeUndefined()
  })

  it('return null with error', () => {
    const result = Joi.objectId().validate(null)
    expect(result.error).not.toBeNull()
    expect(result.value).toBeNull()
  })
})
