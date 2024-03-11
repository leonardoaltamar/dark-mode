import React, { useState } from 'react'
import './Card.css'
import { Button, Chip } from '@mui/material'
import { SimpleDialog } from '../simpeDialog/SimpleDialog';

export const Card = ({ element }) => {

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  

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

        <section className='section'>
          <h4 className='subtitle'>Episodes where it appears </h4>
          <p className='paragrah'>{element.episode.length} Episodes</p>
        </section>

        <section className='section'>
          <h4 className='subtitle'>Last known location </h4>
          <p className='paragrah'>{element.location.name} </p>
        </section >

        <section className='section'>
          <h4 className='subtitle'>Gender </h4>
          <p className='paragrah'>{element.gender} </p>
        </section>

        <div className='link-modal'>
          {/* <Button variant="text">Ver info</Button> */}
          <Button style={{ textTransform: 'initial' }} onClick={ handleClickOpen }>Ver info</Button>
          {/* <Chip label="Ver info" variant="outlined"  onClick={handleClick} /> */}
        </div>
      </div>

      <SimpleDialog
        open={open}
        onClose={handleClose}
        element={element}
      />

    </div>
  )
}
