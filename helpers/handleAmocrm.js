// const { getAmocrmTokenFromDb, queryAmocrm } = require('./index')
const { getAmocrmTokenFromDb } = require('./getAmocrmTokenFromDb')
const { queryAmocrm } = require('./queryAmocrm')

const handleAmocrm = async ({ strapi }) => {
  const amocrmToken = await getAmocrmTokenFromDb({ strapi })
  console.log('amocrmToken ', amocrmToken)

  const resLeads = await queryAmocrm({
    token: amocrmToken.token.access_token,
    route: '/api/v4/leads'
  })
  console.log('data ', resLeads.data)
  return resLeads.data
}

module.exports = { handleAmocrm }
