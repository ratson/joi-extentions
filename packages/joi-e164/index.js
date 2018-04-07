'use strict'

module.exports = joi => ({
  base: joi.string().regex(/^\+?[1-9]\d{1,14}$/),
  name: 'e164',
})
