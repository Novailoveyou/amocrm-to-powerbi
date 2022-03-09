// const { getAmocrmTokenFromDb, queryAmocrm } = require('./index')
const { getAmocrmTokenFromDb } = require('./getAmocrmTokenFromDb')
const { queryAmocrm } = require('./queryAmocrm')

const handleAmocrm = async ({ strapi }) => {
  const amocrmToken = await getAmocrmTokenFromDb({ strapi })

  const leads = await queryAmocrm({
    token: amocrmToken.token.access_token,
    route: '/api/v4/leads',
    dataLabel: 'leads'
  })
  return { leads }
}

module.exports = { handleAmocrm }
