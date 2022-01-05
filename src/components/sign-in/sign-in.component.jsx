import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ password: '', email: '' });
    const { email, password } = userCredentials;

    const handleSubmit = e => {
        e.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = ({ target: { name, value } }) => { setCredentials({ ...userCredentials, [name]: value }) }

    return (
        <SignInContainer>

            <h2>I already have an account</h2>
            <span>Sign in with email and password.</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                    label="email" />
                <FormInput
                    name='password'
                    type="password"
                    value={password}
                    onChange={handleChange}
                    required
                    label="password" />

                <ButtonsContainer>
                    <CustomButton type="submit">sign in</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>sign in with google</CustomButton>
                </ButtonsContainer>

            </form>

        </SignInContainer>
    );
};


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);