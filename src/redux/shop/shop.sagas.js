import { takeLatest, call, put, all} from 'redux-saga/effects';
import shopActionTypes from './shop.types';
import {db, convertCollectionsShapshotToMap} from '../../firebase/firebase.utils';
import {getDocs, collection} from 'firebase/firestore';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';


function* fetchCollectionAsync() {
    try {
        const collectionRef = collection(db, 'collections');
        const snapshot = yield getDocs(collectionRef);
        const collectionsMap = yield call(convertCollectionsShapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error));
    }
};

function* fetchCollectionStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
        );
}

export function* shopSagas() {
    yield all([call(fetchCollectionStart)])
}
