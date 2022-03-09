const axios = require('axios')

const queryAmocrm = async ({ token, route }) =>
  await axios.get(`${process.env.AMOCRM_ROOT}${route}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

module.exports = { queryAmocrm }
