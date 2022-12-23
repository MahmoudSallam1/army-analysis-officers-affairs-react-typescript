'use strict';

/**
 * nashara service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nashara.nashara');
