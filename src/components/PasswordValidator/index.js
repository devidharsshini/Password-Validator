// Write your code here
import {useState} from 'react'
import {PassHeading} from './styledComponents'
const PasswordValidator = () => {
  const [defaultState, updateState] = useState('')
  const checkingLength = event => {
    updateState(event.target.value)
  }
  return (
    <div>
      <PassHeading> Password Validator</PassHeading>
      <p>Check how strong and secure is your password </p>
      <input type="password" onChange={checkingLength} value={defaultState} />
      {defaultState.length >= 8 ? (
        <div></div>
      ) : (
        <p> Your password must be at least 8 characters </p>
      )}{' '}
    </div>
  )
}
export default PasswordValidator
