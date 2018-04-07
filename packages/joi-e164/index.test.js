'use strict'

const JoiBase = require('joi')

const JoiE164 = require('.')

const Joi = JoiBase.extend(JoiE164)

describe('Joi.extend(JoiE164)', () => {
  const validNumbers = [
    '+14155552671',
    '+442071838750',
    '+551155256325',
    '+123456789012345',
  ]
  const invalidNumbers = [
    '+1 4155552671', // no spaces
    '+04155552671', // no country codes start with 0
    '+1234567890123456', // too many digits
  ]

  validNumbers.forEach(validNumber => {
    it(`return valid number: ${validNumber}`, () => {
      const result = Joi.e164().validate(validNumber)
      expect(result.error).toBeNull()
      expect(result.value).toBe(validNumber)
    })
  })

  invalidNumbers.forEach(invalidNumber => {
    it(`return error for invalid number: ${invalidNumber}`, () => {
      const result = Joi.e164().validate(invalidNumber)
      expect(result.error).not.toBeNull()
      expect(result.value).toBe(invalidNumber)
    })
  })

  it('return undefined without error', () => {
    const result = Joi.e164().validate(undefined)
    expect(result.error).toBeNull()
    expect(result.value).toBeUndefined()
  })
})
