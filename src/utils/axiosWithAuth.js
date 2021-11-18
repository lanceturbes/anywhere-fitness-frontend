import axios from 'axios'

//create an instance of axios with the authentication header

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    headers: {
      authorization: token
    }
  })
}

export default axiosWithAuth
