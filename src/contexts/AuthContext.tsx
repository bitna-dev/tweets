// import { auth } from '@remote/firebase'
import { auth } from '@remote/index'
import { User, onAuthStateChanged } from 'firebase/auth'
import { ReactNode, createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({
  user: null as User | null,
})

interface AuthProps {
  children: ReactNode
}
export const AuthContextProvider = ({ children }: AuthProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(user)
      }
    })
  }, [auth])
  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
