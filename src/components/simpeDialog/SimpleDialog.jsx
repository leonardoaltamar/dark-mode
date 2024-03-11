import { Dialog, DialogTitle } from '@mui/material'
import React from 'react'
import './simpleDialog.css';
export const SimpleDialog = ({ onClose, open, element }) => {

    const handleClose = () => {
        onClose();
    };


    return (
        <Dialog onClose={handleClose} open={open} className='dialog-back'>
            <DialogTitle className='content-title'>
                <div className={`circle-status ${element.status.toLowerCase()}`}></div>
                {element.name} - {element.status} 
            </DialogTitle>
            <img src={element.image} alt="" />
            <div className='content-text'>
                <div className='description'>
                    <h4 className='subtitle'>Episodes where it appears </h4>
                    <p className='paragrah'>{element.episode.length} Episodes</p>
                </div>

                <div className='description'>
                    <h4 className='subtitle'>Last known location </h4>
                    <p className='paragrah'>{element.location.name} </p>
                </div >

                <div className='description'>
                    <h4 className='subtitle'>Gender </h4>
                    <p className='paragrah'>{element.gender} </p>
                </div>
            </div>
        </Dialog>
    )
}
