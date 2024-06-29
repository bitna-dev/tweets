import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@remote/index'

interface SignupValues {
  email: string
  password: string
  c_password: string
}
const SignupForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupValues>({ mode: 'onChange' })

  const handleSignup = ({ email, password, c_password }: SignupValues) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user)
      })
      navigate('/')
      toast.success('로그인되었습니다.')
    } catch (error) {
      toast.error('입력하신 정보가 존재하지 않습니다.')
      navigate('/')
    }
  }

  // react form hooks 써서 구현하기
  return (
    <div className="login">
      <div className="login__logo">TWEETS</div>
      <form onSubmit={handleSubmit(handleSignup)} className="login__box">
        <div className="login__block">
          <label htmlFor="email">이메일</label>
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
          <label htmlFor="password">비밀번호</label>
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
              validate: {
                check: (val) => {
                  if (getValues('c_password') !== val) {
                    return '비밀번호가 일치하지 않습니다.'
                  }
                },
              },
            })}
          />
          {errors.password && (
            <small role="alert">{errors.password.message}</small>
          )}
        </div>
        <div className="login__block">
          <label htmlFor="c_password">확인비밀번호</label>
          <input
            type="password"
            id="c_password"
            className="input"
            placeholder="확인비밀번호를 입력해주세요."
            {...register('c_password', {
              required: '비밀번호는 필수 입력입니다.',
              minLength: {
                value: 8,
                message: '8자리 이상 비밀번호를 입력하세요.',
              },
              validate: {
                check: (val) => {
                  if (getValues('password') !== val) {
                    return '비밀번호가 일치하지 않습니다.'
                  }
                },
              },
            })}
          />
          {errors.c_password && (
            <small role="alert">{errors.c_password.message}</small>
          )}
        </div>
        <div className="login__block">
          <Link to="/login" className="link__auth">
            이미 계정이 있으신가요?
          </Link>
        </div>
        <div className="login__block">
          <input className="btn--submit" value="회원가입" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default SignupForm
