const getAmocrmTokenFromDb = async ({ strapi }) =>
  await strapi.db.query('api::amocrm-auth.amocrm-auth').findOne({
    where: { id: 1 }
  })

module.exports = { getAmocrmTokenFromDb }
