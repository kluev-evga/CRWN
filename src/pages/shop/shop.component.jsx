import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';


const ShopPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionStart());
    }, [dispatch]);

    return (
        <div className='shop-page'>
            <Routes>
                <Route path='/' element={<CollectionsOverviewContainer />} />
                <Route path='/:collectionId' element={<CollectionPageContainer />} />
            </Routes>
        </div>
    );
};

export default ShopPage;