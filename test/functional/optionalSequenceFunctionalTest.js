'use strict';

const debug = require('debug')('@matthieu.ghilain/xsd2jsonschema:OptionalSequenceFunctionalTest');
const BaseFunctionalTest = require('./baseFunctionalTest');

class OptionalSequenceFunctionalTest extends BaseFunctionalTest {
	constructor() {
		super({
			xsdPath: 'test/xmlschemas/functional/',
			xsdFilename: 'optionalSequence.xsd',
			testInstances: [
				{
					"expectedToValidate": true,
					"testData": {
					}
				}
			]
		})
	}
}

module.exports = OptionalSequenceFunctionalTest
