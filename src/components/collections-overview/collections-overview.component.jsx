import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collection-overview.styles';


const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);
    return (
        <CollectionsOverviewContainer>
            {collections.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps} />)}
        </CollectionsOverviewContainer>
    );
}

export default CollectionsOverview;