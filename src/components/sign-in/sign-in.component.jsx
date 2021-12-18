import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SignIn extends Component {
    state = {
        password: '',
        email: ''
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange({ target: { name, value } }) {
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in' >

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

                    <div className='buttons'>
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>sign in with google</CustomButton>
                    </div>

                </form>

            </div>
        );
    }
};

export default SignIn;