import React from 'react'
import ContentItem from './ContentItem'
import Spinner from '../img/Spinner'
 const ContentGrid = ({items, isLoading}) => {
    return isLoading ? <Spinner/> : <section className="cards">
    {items.map(item =>(
        <ContentItem key={item.char_id} item={item}>{item}</ContentItem>
    ))}
    </section>
}
export default ContentGrid;