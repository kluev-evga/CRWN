import {shopActionsTypes} from './shop.types';


export const updateCollections = (collectionsMap) => ({
    type: shopActionsTypes.UPDATE_COLLECITONS,
    payload: collectionsMap
});