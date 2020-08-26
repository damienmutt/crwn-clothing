import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.styles.scss'

const CollectionPage = ({match}) => (
    <div className="collection-page">
        <h2>{match.params.collectionId}</h2>
    </div>
)

export default CollectionPage;