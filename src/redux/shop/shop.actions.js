import shopActionsTypes from './shop.types';
import {collection, getDocs} from 'firebase/firestore';
import {db,convertCollectionsShapshotToMap} from '../../firebase/firebase.utils';


export const fetchCollectionStart = () => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage 
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = collection(db, 'collections');

        dispatch(fetchCollectionStart());

        getDocs(collectionRef)
            .then(snapshot => {
                const collectionsMap = convertCollectionsShapshotToMap(snapshot);
                dispatch(fetchCollectionSuccess(collectionsMap));
            })
            .catch(errorMessage =>{
                dispatch(fetchCollectionFailure(errorMessage))
            })
    }
};