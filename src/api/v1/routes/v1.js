'use strict'

/**
 * v1 router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/v1/amocrm',
      handler: 'v1.amocrm'
    },
    {
      method: 'POST',
      path: '/v1/amocrm/token',
      handler: 'v1.amocrmAuth'
    }
  ]
}
