import React from 'react';
import {
  HomeContentWrapper,
  LeftPanel, CenterPanel, RightPanel,
  ActionButtonWrapper, ActionButton, PokemonWrapper
} from './styles';
import { ButtonStyled } from '../styles';
import MainScreen from '../MainScreen';
import Pokemon from '../Pokemon';
import Avatar from '../Avatar';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: false,
    }
  }


  static getDerivedStateFromProps(props, state) {
    const loggedIn = props.loggedIn;
    const locationState = props.location.state;
    if (loggedIn && locationState) {
      return { ...state, loggedIn: true, username: locationState.username }
    }
    return state;
  }


  handleLoggin = () => {
    this.setState({
      loggedIn: true
    })
  }

  handleLoggout = () => {
    this.setState({
      loggedIn: false
    })
  }

  handleRedirectButton = (url) => {
    const { history } = this.props;
    history.push(url);
  }

  render() {
    return (
      <HomeContentWrapper>
        <LeftPanel>
          <Avatar />
          <ButtonStyled onClick={() => this.handleRedirectButton('/account')}>Account</ButtonStyled>
          <ButtonStyled onClick={() => this.handleRedirectButton('/profile')}>Profile</ButtonStyled>
          <ButtonStyled onClick={() => this.handleRedirectButton('/setting')}>Setting</ButtonStyled>
        </LeftPanel>
        <CenterPanel>
          <MainScreen />
          <ActionButtonWrapper>
            <ActionButton>Battle</ActionButton>
            <ActionButton>Play</ActionButton>
            <ActionButton>Eat</ActionButton>
            <ActionButton>Clean</ActionButton>
          </ActionButtonWrapper>
        </CenterPanel>
        <RightPanel>
          <PokemonWrapper>
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
            <Pokemon />
          </PokemonWrapper>
        </RightPanel>
      </HomeContentWrapper>
    )
  }
}

export default Home
