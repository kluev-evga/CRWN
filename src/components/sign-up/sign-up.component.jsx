import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SignUpContainer } from './sign-up.styles';


class SignIn extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) return alert("passwords don't mutch");

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            createUserProfileDocument(user, { displayName });
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='displayName'
                        required />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='confirmPassword'
                        required />

                    <CustomButton type='submit'>SING UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
};

export default SignIn;