import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {onSnapshot} from 'firebase/firestore';
import {onAuthStateChanged} from 'firebase/auth';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { setCurrentUser } from './redux/user/user.actions';

import {GlobalStyle} from './app.styles';


class App extends Component {
  unsubscribeFromAuth = null;

  
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, snapshot => {
          setCurrentUser({id: snapshot.id, ...snapshot.data()});
        });
      } else {
        setCurrentUser(userAuth);
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);