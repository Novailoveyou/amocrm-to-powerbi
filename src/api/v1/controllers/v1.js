'use strict'

const axios = require('axios')
const {
  amocrmAuth,
  getAmocrmTokenFromDb,
  queryAmocrm,
  handleAmocrm
} = require('../../../../helpers/index')

/**
 *  v1 controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::v1.v1', ({ strapi }) => ({
  amocrm: async ctx => {
    let output
    try {
      output = await handleAmocrm({ strapi })
    } catch (err) {
      console.log(err)
      await amocrmAuth({ strapi })
      output = await handleAmocrm({ strapi })
    }

    // ctx.body = output
    return output
  },
  amocrmAuth: async ctx => {}
}))
