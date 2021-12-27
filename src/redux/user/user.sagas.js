import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionsTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import {getDoc} from 'firebase/firestore';
import { signInSuccess, signInFailure, signOuSuccess, signOutFailure, signUpSuccess, signUpFailure } from "./user.actions";


function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield getDoc(userRef);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailure(error));
    }
};


function* signInWithGoogle() {
    try {
        const {user} = yield signInWithPopup(auth, googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        console.log(error);
        yield put(signInFailure(error));
    }
};

function* signInWithEmail({payload:{email, password}}) { // here function gets whole action - and payload distructured from action
    console.log(email, password);
    try {
        const {user} = yield signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
};


function* onGoogleSignInStart() {
    yield takeLatest(
        userActionsTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
        )
};

function* onEmailSignInStart() {
    yield takeLatest(
        userActionsTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
        );
};


function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();

        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

function* onCheckUserSession() {
    yield takeLatest(
        userActionsTypes.CHECK_USER_SESSION,
         isUserAuthenticated
         );
};

function* signOutUser() {
    try {
        yield signOut(auth);
        yield put(signOuSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
};

function* onSignOutStart() {
    yield takeLatest(
        userActionsTypes.SIGN_OUT_START,
        signOutUser
    )
};

function* signUp ({payload: {email, password, displayName}}) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password);
        yield put(signUpSuccess({user, additionalData: {displayName}}));
    } catch (error) {
        yield put(signUpFailure());
    }
};

function* signInAfterSignUp ({payload: {user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData);
}

function* onSignUpStart () {
    yield takeLatest(userActionsTypes.SIGN_UP_START, signUp)
};

function* onSignUpSuccess () {
    yield takeLatest(userActionsTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
};