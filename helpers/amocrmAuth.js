const axios = require('axios')

const amocrmAuth = async ({ strapi }) => {
  // Login to amocrm
  const res = await axios.post(
    `${process.env.AMOCRM_ROOT}/oauth2/access_token`,
    {
      client_id: process.env.AMOCRM_ID,
      client_secret: process.env.AMOCRM_SECRET,
      grant_type: process.env.AMOCRM_GRANT_TYPE,
      code: process.env.AMOCRM_CODE,
      redirect_uri: process.env.AMOCRM_REDIRECT_URI
    }
  )

  // Get amocrm bearer token
  const token = await res.data

  // Save token to db
  try {
    const entry = await strapi.db.query('api::amocrm-auth.amocrm-auth').update({
      where: { id: 1 },
      data: {
        token
      }
    })
  } catch (err) {
    console.log(err)
    const entry = await strapi.db.query('api::amocrm-auth.amocrm-auth').create({
      data: {
        token
      }
    })
  }
}

module.exports = { amocrmAuth }
