import React from 'react'

 const ContentItem = ({item}) => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            
          </div>
        </div>
      </div>
    )
  }
export default ContentItem;