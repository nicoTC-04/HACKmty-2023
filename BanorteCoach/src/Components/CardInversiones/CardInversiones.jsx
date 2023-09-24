import style from './CardInversionesStyle';
import img from '../../assets/Skyline2.jpg'

import React from 'react';
// MUI IMPORTS
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import inversiones from '../../assets/inversiones';



const styleModal1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function CardInversiones(props) {
    const { name, percentage, risk } = props;

    const item = () =>{
        for(let i = 0; i < inversiones.length; i++){
            if(inversiones[i].Nombre == name){
                return inversiones[i];

            }

    }}
    console.log(item());
    const elemento = item();

    //MODAL SETERS
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div style={style.cardContainer}>
            <img src={img} style={style.imgContainer}/>

            <div style={style.headerContainer}>
                <h1 style={style.mainInversion}>{elemento.name}</h1>
                <h3 style={style.compatibilidad}>Compatibilidad {percentage}</h3>
            </div>

            <div style={style.footerContainer}>
                 <h3 style={style.proyeccion}>Saldo final proyectado: 23,300 $</h3>
            </div>

            <button style={style.button1} onClick={handleOpen}>Informacion del Fondo</button>
            <button style={style.button2}>Invertir ya</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal1}>
                <h1 style={style.modalHead}>{elemento.name}</h1>
                <p style={style.modalTxt}>{elemento.descripcion}</p>
                <button onClick={handleClose}>Regresar</button>
                </Box>
            </Modal>
        </div>
    )
}