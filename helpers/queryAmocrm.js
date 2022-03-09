const axios = require('axios')

const queryAmocrm = async ({ token, route, dataLabel }) => {
  const data = []

  const handleQuery = async ({ query }) => {
    const res = await axios.get(query, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    data.push(...res?.data?._embedded?.[dataLabel])

    if (res?.data?._links?.next?.href) {
      await handleQuery({ query: res?.data?._links?.next?.href })
    }
  }

  try {
    await handleQuery({ query: `${process.env.AMOCRM_ROOT}${route}` })
  } catch (err) {
    console.log(err)
  }

  return data
}

module.exports = { queryAmocrm }
