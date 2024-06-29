import { Navigate, useNavigate } from 'react-router-dom'
import { RiHome2Line } from 'react-icons/ri'
import { RiHome2Fill } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa6'
import { IoLogOutOutline } from 'react-icons/io5'
import { IoLogOut } from 'react-icons/io5'
import { useContext, useState } from 'react'
import { AuthContext } from '@contexts/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '@remote/index'
import { toast } from 'react-toastify'

const Menu = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const handleLogout = () => {
    try {
      signOut(auth)
      toast.success('로그아웃되었습니다.')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="nav">
      <div className="nav__grid">
        <button
          type="button"
          onClick={() => {
            navigate('/')
          }}
        >
          <RiHome2Line />
          <span className="nav__grid-text">HOME</span>
        </button>
        <button
          type="button"
          onClick={() => {
            navigate('/profile')
          }}
        >
          <FiUser />
          <span className="nav__grid-text">MY</span>
        </button>
        {user ? (
          <button type="button" onClick={handleLogout}>
            <IoLogOutOutline />
            <span className="nav__grid-text">LOGOUT</span>
          </button>
        ) : (
          <button type="button" onClick={() => <Navigate to="/login" />}>
            <IoLogOutOutline />
            <span className="nav__grid-text">LOGIN</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Menu
