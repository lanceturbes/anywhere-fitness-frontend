import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  useEffect((navigate = useNavigate) => {
    localStorage.removeItem('token')
    navigate('/login')
  }, [])

  return (<div></div>)
}

export default Logout
