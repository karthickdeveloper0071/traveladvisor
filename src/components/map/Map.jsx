import React from "react";
import GoogleMapReact from 'google-map-react'
import {Paper, Typography,useMediaquery} from '@material-ui/core';
import { LocationCityOutlined } from "@material-ui/icons";
import { Rating } from '@mui/lab';  
import  useStyles from './styles';
 const Map =()=>{

    const classes =useStyles()
    const isMobile =useMediaquery('(min-width:600px)')

    const coordinates ={lat:0 ,lng:0}
    return(
        <>
        <div className ={classes.mapContainer}>
            <GoogleMapReact bootstrapURLKeys={{key:''}}
            defaultCenter={coordinates}
            center={coordinates}
            
            >

            </GoogleMapReact>

            </div>
        
        
        </>
    )
 } 
  export default Map