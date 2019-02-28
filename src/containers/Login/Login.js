import { connect } from 'react-redux'
import Login from '../../components/Login'
import * as LoginReducer from '../../reducers/Login'

const mapStateToProps = (state) => {
  const login = state.login;
  return {
    username: login.username,
    password: login.password,
    loggedIn: login.loggedIn,
    exist: login.exist,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormValue: function (fieldName, value) {
      dispatch(LoginReducer.updateFormValue(fieldName, value))
    },
    login: function (username, password) {
      dispatch(LoginReducer.login(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
