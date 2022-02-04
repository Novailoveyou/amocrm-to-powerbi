'use strict'

const axios = require('axios')

/**
 *  v1 controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::v1.v1', ({ strapi }) => ({
  amocrm: async ctx => {
    // let token
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

    // const data = await res.data

    // console.log(res)
    // console.log(res.data)
    strapi.query('api::amocrm-auth.amocrm-auth').create({
      name: 'amocrmAuth',
      content: [
        {
          token: { test: 'test' }
        }
      ]
    })

    ctx.body = 'Hello World!'
  },
  amocrmAuth: async ctx => {}
}))
