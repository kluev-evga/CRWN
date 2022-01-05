import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { SignUpContainer } from './sign-up.styles';


const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) return alert("passwords don't mutch");
        signUpStart({ displayName, email, password });
    }

    const handleChange = ({ target: { name, value } }) => setUserCredentials({ ...userCredentials, [name]: value });

    return (
        <SignUpContainer>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='displayName'
                    required />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='email'
                    required />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='confirmPassword'
                    required />

                <CustomButton type='submit'>SING UP</CustomButton>
            </form>
        </SignUpContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);