import React from 'react'
import './Card.css'
export const Card = ({element}) => {
  return (
    <div className='card'>
      <div className='container-img'>
          <img src={element.image} alt="" />
      </div>
      <div className="container-description">
        <section className='info-person'>
          <h2 className='name'>{element.name}</h2>
          <div className='status'>
            <div className={`circle-status ${element.status.toLowerCase()}`}></div> 
            <p>{element.status} - {element.species}</p>
          </div>
        </section>
        
        <section>
          <h4 className='subtitle' >Episodes where it appears: </h4>
          <p>{element.episode.length} Episodes</p>
        </section>

        <section className='subtitle'>
          <h4>Last known location: </h4>
          <p>{element.location.name} </p>
        </section>

        <section className='subtitle'>
          <h4>Gender: </h4>
          <p>{element.gender} </p>
        </section>
        
      </div>
    </div>
  )
}
