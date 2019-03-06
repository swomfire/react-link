import { connect } from 'react-redux';
import { selectCurrentAccount } from '../../reducers/Account';
import { toggleModal } from '../../reducers/form';
import Account from '../../components/Account';

const mapStateToProps = (state) => ({
  account: selectCurrentAccount(state)
})

const mapDispatchToProps = {
  toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
