import axios from 'axios'

//create an instance of axios with the authentication header

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'https://anywhere-fitness-bwft5.herokuapp.com/api'
  })
}

export default axiosWithAuth
