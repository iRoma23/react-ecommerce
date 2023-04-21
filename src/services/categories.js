import axios from 'axios'
const baseUrl = 'https://api.escuelajs.co/api/v1/categories'

export const getAllCategories = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const getSingleCategory = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export const getProductsByCategory = async ({ id, offset = '0', limit = '10' }) => {
  const response = await axios.get(`${baseUrl}/${id}/products?offset=${offset}&limit=${limit}`)
  return response.data
}
