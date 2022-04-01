import React, { FC, useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../styles/styles';
import { ReviewData } from '../../redux/types';
import { yellow } from '@mui/material/colors';

export const Review: FC<ReviewData> = ({ title, rating, body, userByUserReviewerId: { name } }) => {
    const dispatch = useDispatch();



    return (
        <Box sx={{
            width: 860,
            // height: 180,
            padding: 2,
            backgroundColor: 'primary.main',
            borderRadius: 4,
            transition: '0.2s',
            '&:hover': {
                // height: 'auto',
                backgroundColor: 'primary.dark',
                // opacity: [0.9, 0.8, 0.7],
            },
        }}>
            <Grid container >
                <StarIcon sx={{ color: yellow[500], marginRight: 0.6 }} />
                <Typography variant='subtitle1' color='neutral.main' mb={1} >
                    {rating + "/5"} 
                </Typography>
            </Grid>

            <Typography variant='h6' color='neutral.main' >
                {title} 
            </Typography>

            <Typography variant='subtitle2' color='secondary.light' mb={2} >
                {name} 
            </Typography>

            <Typography variant='body1' color='neutral.main' >
                {body} 
            </Typography>
        </Box>
    )
}