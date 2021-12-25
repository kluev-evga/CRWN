import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import { collection, onSnapshot } from 'firebase/firestore';
import { db, convertCollectionsShapshotToMap } from '../../firebase/firebase.utils';


const CollectionOverwiewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    unsubscribeFromSnapshot = null;

    state = {
        loading: true
    }

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = collection(db, 'collections');

        onSnapshot(collectionRef, async (snapshot) => {
            const collectionsMap = convertCollectionsShapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverwiewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);