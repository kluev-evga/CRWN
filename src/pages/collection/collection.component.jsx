import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CollectionPageContainer, Title, Items } from './collection.styles';


const CollectionPage = () => {
    const params = useParams();
    const collection = useSelector((state) => selectCollection(params.collectionId)(state));
    const { title, items } = collection;
    // const {collectionId} = useParams();
    // const collection = useSelector(selectCollection(collectionId));

    return (
        <CollectionPageContainer>
            <Title>{title}</Title>
            <Items>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </Items>
        </CollectionPageContainer>
    );
};

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

export default CollectionPage;