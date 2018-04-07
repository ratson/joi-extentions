# joi-e164

Joi extension to validate E.164 numbering format.

## Installation

```
npm install joi-e164 --save
```

## Usage

<!-- eslint-disable strict,node/no-missing-require,no-unused-vars -->

```js
const JoiBase = require('joi')
const JoiE164 = require('joi-e164')

const Joi = JoiBase.extend(JoiE164)

const result = Joi.e164().validate('+14155552671')
```
