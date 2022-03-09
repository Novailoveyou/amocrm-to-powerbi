const { amocrmAuth } = require('./amocrmAuth')
const { getAmocrmTokenFromDb } = require('./getAmocrmTokenFromDb')
const { handleAmocrm } = require('./handleAmocrm')
const { queryAmocrm } = require('./queryAmocrm')

module.exports = {
  amocrmAuth,
  getAmocrmTokenFromDb,
  handleAmocrm,
  queryAmocrm
}
