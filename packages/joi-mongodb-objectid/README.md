# joi-mongodb-objectid

Joi extension to validate MongoDB ObjectId.

## Installation

```
npm install joi-mongodb-objectid --save
```

## Usage

<!-- eslint-disable strict,node/no-missing-require,no-unused-vars -->

```js
const { ObjectId } = require('bson')
const JoiBase = require('joi')
const JoiObjectId = require('joi-mongodb-objectid')

const Joi = JoiBase.extend(JoiObjectId)

const result = Joi.objectId().validate(ObjectId())
```
