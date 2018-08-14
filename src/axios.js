import axios from 'axios'

function getToken() {
  return '777'
}

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: `${getToken()}` }
})

export default instance
