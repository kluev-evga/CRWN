import React, { useState } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { useMediaQuery } from 'react-responsive';
import { SignInAndSignUpContainer, Button } from './sign-in-and-sign-up.styles';


const SignInAndSignUpPage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const [haveAccount, changePannel] = useState(true);

    return (
        <SignInAndSignUpContainer>
            {
                isMobile && <Button onClick={() => changePannel(!haveAccount)}>{(haveAccount) ? 'I do not have a account' : 'I already have an account'}</Button>
            }

            {
                isMobile ?
                    (haveAccount) ? <SignIn /> : <SignUp />
                    :
                    <>
                        <SignIn />
                        <SignUp />
                    </>
            }
        </SignInAndSignUpContainer>
    );
};

export default SignInAndSignUpPage;