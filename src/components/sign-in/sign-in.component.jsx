import React, { Component } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';


class SignIn extends Component {
    state = {
        password: '',
        email: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    render() {
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
                        <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>sign in with google</CustomButton>
                    </ButtonsContainer>

                </form>

            </SignInContainer>
        );
    }
};

export default SignIn;