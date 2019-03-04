import { connect } from 'react-redux'
import { updateFormValue } from '../../reducers/Account'
import Account from '../../components/Account'

const mapStateToProps = (state) => {
  const account = state.account;
  return {
    username: account.username,
    password: account.password,
    email: account.email,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormValue: function (fieldName, value) {
      dispatch(updateFormValue(fieldName, value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)