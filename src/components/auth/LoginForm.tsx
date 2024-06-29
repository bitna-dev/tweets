import { auth } from '@remote/index'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GoogleAuthProvider } from 'firebase/auth'

interface LoginValues {
  email: string
  password: string
}
const LoginForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ mode: 'onChange' })
  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        toast.success('로그인 되었습니다.')
      })
    } catch (error) {
      console.log(error)
    }
  }
  const appleLogin = () => {}

  const handleLogin = ({ email, password }: LoginValues) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user)
      })
      navigate('/')
      toast.success('로그인되었습니다.')
    } catch (error) {
      toast.error('입력하신 정보가 존재하지 않습니다.')
      navigate('/')
    }
  }
  return (
    <div className="login">
      <div className="login__logo">TWEETS</div>
      <form onSubmit={handleSubmit(handleLogin)} className="login__box">
        <div className="login__block">
          <label>아이디</label>
          <input
            type="text"
            className="input"
            id="email"
            placeholder="이메일을 입력해주세요."
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          />
          {errors.email && <small role="alert">{errors.email.message}</small>}
        </div>
        <div className="login__block">
          <label>비밀번호</label>
          <input
            id="password"
            type="password"
            className="input"
            placeholder="비밀번호를 입력해주세요."
            {...register('password', {
              required: '비밀번호는 필수 입력입니다.',
              minLength: {
                value: 8,
                message: '8자리 이상 비밀번호를 입력하세요.',
              },
            })}
          />
          {errors.password && (
            <small role="alert">{errors.password.message}</small>
          )}
        </div>
        <div className="login__block">
          <Link to="/signup" className="link__auth">
            아직 계정이 없으신가요?
          </Link>
        </div>
        <div className="login__block">
          <input className="btn--submit" type="submit" value="로그인" />
        </div>
        <div className="social__block">
          <img
            src="/web_light_sq_SI.svg"
            alt="google login"
            onClick={googleLogin}
          />
          <img
            src="/appleid_button@2x.png"
            alt="apple login"
            onClick={appleLogin}
          />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
