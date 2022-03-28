import React, { useEffect, useState } from 'react';
import {Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../styles/styles';

export default function Review() {
    const dispatch = useDispatch();




    return (
        <div>
            <Typography variant='subtitle1' >
                {"REVIEW COMPONENT"} 
            </Typography>
        </div>
    )
}