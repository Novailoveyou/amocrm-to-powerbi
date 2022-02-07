'use strict'

const axios = require('axios')

/**
 *  v1 controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::v1.v1', ({ strapi }) => ({
  amocrm: async ctx => {
    const amocrmToken = await strapi.db
      .query('api::amocrm-auth.amocrm-auth')
      .findOne({
        where: { id: 1 }
      })

    const res = await axios.get(`${process.env.AMOCRM_ROOT}/api/v4/leads`, {
      headers: {
        Authorization: `Bearer ${amocrmToken.token.access_token}`
      }
    })

    console.log('data ', res.data)

    // ------ Amocrm auth & get token ------
    // const res = await axios.post(
    //   `${process.env.AMOCRM_ROOT}/oauth2/access_token`,
    //   {
    //     client_id: process.env.AMOCRM_ID,
    //     client_secret: process.env.AMOCRM_SECRET,
    //     grant_type: process.env.AMOCRM_GRANT_TYPE,
    //     code: process.env.AMOCRM_CODE,
    //     redirect_uri: process.env.AMOCRM_REDIRECT_URI
    //   }
    // )

    // const token = await res.data

    // const entry = await strapi.db.query('api::amocrm-auth.amocrm-auth').update({
    //   where: { id: 1 },
    //   data: {
    //     token
    //   }
    // })
    // /------ Amocrm auth & get token ------

    ctx.body = 'Hello World!'
  },
  amocrmAuth: async ctx => {}
}))
