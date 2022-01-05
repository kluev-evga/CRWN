import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';


const ShopPage = () => {
    const match = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionStart());
    }, [dispatch]);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
};

export default ShopPage;