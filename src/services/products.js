import axios from 'axios'
const baseUrl = 'https://api.escuelajs.co/api/v1/products'

export const getAllProducts = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const getProducts = async ({ offset = '0', limit = '10' }) => {
  const response = await axios.get(`${baseUrl}?offset=${offset}&limit=${limit}`)
  return response.data
}
