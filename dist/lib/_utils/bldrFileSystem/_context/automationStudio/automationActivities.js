"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingByActivityTypeId = exports.MappingByActivityType = void 0;
/**
 * Identify AutomationStudio Activity Details by Activity Type
 *
 * @param {string} activityType
 * @returns
 */
const MappingByActivityType = (activityType) => {
    let out;
    switch (activityType) {
        case 'queryactivity':
            out = {
                objectTypeId: 300,
                api: 'queries',
                name: 'queryactivity',
                objectIdKey: 'queryDefinitionId',
                folder: 'automation-studio/Query',
            };
            break;
        case 'ssjsactivity':
            out = {
                objectTypeId: 423,
                api: 'scripts',
                name: 'ssjsactivity',
                objectIdKey: 'ssjsActivityId',
                folder: 'automation-studio/Scripts',
            };
            break;
        case 'importactivity':
            out = {
                objectTypeId: 43,
                api: 'imports',
                name: 'importactivity',
                objectIdKey: 'importDefinitionId',
                folder: 'automation-studio/File Imports',
            };
            break;
        case 'transferactivity':
            out = {
                objectTypeId: 53,
                api: 'filetransfers',
                name: 'transferactivity',
                objectIdKey: 'id',
                folder: 'automation-studio/File Transfers',
            };
            break;
        case 'filteractivity':
            out = {
                objectTypeId: 303,
                api: 'filters',
                name: 'filteractivity',
                objectIdKey: 'filterActivityId',
                folder: 'automation-studio/Filters',
            };
            break;
        case 'dataextractactivity':
            out = {
                objectTypeId: 73,
                api: 'dataextracts',
                name: 'dataextractactivity',
                objectIdKey: 'dataExtractDefinitionId',
                folder: 'automation-studio/Extracts',
            };
            break;
        case 'userinitiatedsend':
            out = {
                objectTypeId: 42,
                api: 'EmailSendDefinition',
                name: 'userinitiatedsend',
                objectIdKey: 'ObjectID',
                folder: 'automation-studio/User-Initiated',
            };
            break;
        default:
    }
    return out;
};
exports.MappingByActivityType = MappingByActivityType;
/**
 * Identify AutomationStudio Activity Details by Activity Type ID
 *
 * @param {number} activityTypeId
 * @returns
 */
const MappingByActivityTypeId = (activityTypeId) => {
    let out;
    switch (activityTypeId) {
        case 300:
            out = {
                api: 'queries',
                name: 'queryactivity',
                objectIdKey: 'queryDefinitionId',
                folder: 'automation-studio/Query',
            };
            break;
        case 423:
            out = {
                api: 'scripts',
                name: 'ssjsactivity',
                objectIdKey: 'ssjsActivityId',
                folder: 'automation-studio/Scripts',
            };
            break;
        case 43:
            out = {
                api: 'imports',
                name: 'importactivity',
                objectIdKey: 'importDefinitionId',
                folder: 'automation-studio/File Imports',
            };
            break;
        case 53:
            out = {
                api: 'filetransfers',
                name: 'transferactivity',
                objectIdKey: 'id',
                folder: 'automation-studio/File Transfers',
            };
            break;
        case 303:
            out = {
                api: 'filters',
                name: 'filteractivity',
                objectIdKey: 'filterActivityId',
                folder: 'automation-studio/Filters',
            };
            break;
        case 73:
            out = {
                api: 'dataextracts',
                name: 'dataextractactivity',
                objectIdKey: 'dataExtractDefinitionId',
                folder: 'automation-studio/Extracts',
            };
            break;
        case 42:
            out = {
                api: 'EmailSendDefinition',
                name: 'userinitiatedsend',
                objectIdKey: 'ObjectID',
                folder: 'automation-studio/User-Initiated',
            };
            break;
    }
    return out;
};
exports.MappingByActivityTypeId = MappingByActivityTypeId;
