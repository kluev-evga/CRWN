import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


class SignIn extends Component {
    state = {
        password: '',
        email: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = ({ target: { name, value } }) => { this.setState({ [name]: value }) }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>

                <h2>I already have an account</h2>
                <span>Sign in with email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        label="email" />
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        label="password" />

                    <ButtonsContainer>
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>sign in with google</CustomButton>
                    </ButtonsContainer>

                </form>

            </SignInContainer>
        );
    }
};


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);