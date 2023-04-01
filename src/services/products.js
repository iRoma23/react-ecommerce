import axios from 'axios'
const baseUrl = 'https://api.escuelajs.co/api/v1/products'

export const getAllProducts = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
