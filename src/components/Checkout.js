import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Checkout () {
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = React.useState(false)
  React.useEffect(() => {
    checkLogin()
  }, [])

  function checkLogin () {
    if (localStorage.getItem('phone') === null) {
      setIsLogin(false)
      navigate('/login')
    } else {
      setIsLogin(true)
    }
  }
  return <div>Checkout</div>
}
export default Checkout
