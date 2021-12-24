import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CollectionPageContainer, Title, Items } from './collection.styles';


const CollectionPage = ({ collection: { title, items } }) => (
    <CollectionPageContainer>
        <Title>{title}</Title>
        <Items>
            {items.map(item => <CollectionItem key={item.id} item={item} />)}
        </Items>
    </CollectionPageContainer>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);