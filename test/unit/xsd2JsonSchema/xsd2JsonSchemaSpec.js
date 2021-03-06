'use strict';

const URI = require('urijs');

const XsdAttributes = require('@matthieu.ghilain/xsd2jsonschema').XsdAttributes;
const XsdElements = require('@matthieu.ghilain/xsd2jsonschema').XsdElements;
const XsdFile = require('@matthieu.ghilain/xsd2jsonschema').XsdFile;

const JsonSchemaTypes = require('@matthieu.ghilain/xsd2jsonschema').JsonSchemaTypes;
const JsonSchemaFormats = require('@matthieu.ghilain/xsd2jsonschema').JsonSchemaFormats;
const JsonSchemaFileDraft04 = require('@matthieu.ghilain/xsd2jsonschema').JsonSchemaFileDraft04;

const DefaultConversionVisitor = require('@matthieu.ghilain/xsd2jsonschema').DefaultConversionVisitor;
const BaseConversionVisitor = require('@matthieu.ghilain/xsd2jsonschema').BaseConversionVisitor;
const XmlUsageVisitor = require('@matthieu.ghilain/xsd2jsonschema').XmlUsageVisitor;
const XmlUsageVisitorSum = require('@matthieu.ghilain/xsd2jsonschema').XmlUsageVisitorSum;

const Xsd2JsonSchema = require('@matthieu.ghilain/xsd2jsonschema').Xsd2JsonSchema;
const Processor = require('@matthieu.ghilain/xsd2jsonschema').Processor;
const ConverterDraft06 = require('@matthieu.ghilain/xsd2jsonschema').ConverterDraft06;
const ConverterDraft07 = require('@matthieu.ghilain/xsd2jsonschema').ConverterDraft07;
const BaseSpecialCaseIdentifier = require('@matthieu.ghilain/xsd2jsonschema').BaseSpecialCaseIdentifier;
const BuiltInTypeConverter = require('@matthieu.ghilain/xsd2jsonschema').BuiltInTypeConverter;
const NamespaceManager = require('@matthieu.ghilain/xsd2jsonschema').NamespaceManager;
const CONSTANTS = require('@matthieu.ghilain/xsd2jsonschema').Constants;


describe('@matthieu.ghilain/xsd2jsonschema Test -', function() {

    it('should create a xsd2JsonSchema instance with default values', function() {
        const xsd2JsonSchema = new Xsd2JsonSchema();
        //expect(xsd2JsonSchema.baseId).toEqual('http://www.xsd2jsonschema.org/defaultBaseId');
        expect(xsd2JsonSchema.baseId).toBeUndefined();
        // BuiltInTypeConverter
        expect(xsd2JsonSchema.namespaceManager.builtInTypeConverter).toEqual(new BuiltInTypeConverter());
        // NamespaceManager
        expect(xsd2JsonSchema.namespaceManager).toEqual(new NamespaceManager({
            jsonSchemaVersion: CONSTANTS.DRAFT_07
        }));
        // Converter
        expect(xsd2JsonSchema.visitor.processor).toEqual(new ConverterDraft07());
        // visitor
        expect(xsd2JsonSchema.visitor).toEqual(new BaseConversionVisitor());
        // generateTitle
        expect(xsd2JsonSchema.getBuiltInTypeConverter).toBeTruthy();
    });

    it('should create a xsd2JsonSchema instance with the given parameters', function() {
        const baseId = 'testBaseId';
        const xsd2JsonSchema = new Xsd2JsonSchema({
            baseId: baseId
        });
        expect(xsd2JsonSchema.baseId).toEqual(baseId);
    });

    it('should create a xsd2JsonSchema instance with the given builtInTypeConverter', function() {
        const converter = new ConverterDraft06();
        const xsd2jsonschema = new Xsd2JsonSchema({
            jsonSchemaVersion: CONSTANTS.DRAFT_06,
            converter : converter
        });
        expect(xsd2jsonschema.visitor.processor).toBe(converter);
    });

    it('should create a xsd2JsonSchema instance with the given converter', function() {
        const converter = new ConverterDraft06();
        const xsd2jsonschema = new Xsd2JsonSchema({
            jsonSchemaVersion: CONSTANTS.DRAFT_06,
            converter : converter
        });
        expect(xsd2jsonschema.visitor.processor).toBe(converter);
    });

    it('should create a xsd2JsonSchema instance with the given visitor', function() {
        const visitor = new DefaultConversionVisitor();
        const xsd2jsonschema = new Xsd2JsonSchema({
            visitor : visitor
        });
        expect(xsd2jsonschema.visitor).toBe(visitor);
    });

    it('should create a xsd2JsonSchema instance with the generateTitle options set to false', function() {
        const xs2js = new Xsd2JsonSchema({
            generateTitle : false
        });
        expect(xs2js.generateTitle).toBeFalsy();
    })

    it('should create a xsd2JsonSchema instance with the generateTitle options set to true', function() {
        var xs2js = new Xsd2JsonSchema();
        expect(xs2js.generateTitle).toBeTruthy();

        xs2js = new Xsd2JsonSchema({
            baseId: 'anything'
        });
        expect(xs2js.generateTitle).toBeTruthy();
    })
});
