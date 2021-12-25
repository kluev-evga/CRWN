import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


import {collection, writeBatch} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC6fK-8P0t_LHGVIHlfj9oirU3RsnUiMVc",
    authDomain: "crwn-7d6eb.firebaseapp.com",
    projectId: "crwn-7d6eb",
    storageBucket: "crwn-7d6eb.appspot.com",
    messagingSenderId: "826687191599",
    appId: "1:826687191599:web:da0fccb8b3e5fb2fefe4da",
    measurementId: "G-7ZTM1886GE"
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : 'select_account'
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);



// --------------------------------------------------------------------------
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef);
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

// addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title,items})));



// const collectionRef = collection(db, 'users');
// const snapshot = getDocs(collectionRef)
// .then(res => console.log(res));
// --------------------------------------------------------------------------


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, 'users', userAuth.uid);

    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const convertCollectionsShapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};