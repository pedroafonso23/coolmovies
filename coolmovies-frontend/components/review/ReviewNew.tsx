import React, { FC, useEffect, useState } from 'react';
import { IconButton, TextareaAutosize, TextField, Grid, Box, Typography, fabClasses } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../styles/styles';
import { ReviewData } from '../../redux/types';
import { green, yellow, red } from '@mui/material/colors';
import { coolmoviesActions, useAppDispatch, useAppSelector } from "../../redux";

export const ReviewNew: FC = () => {
    const dispatch = useAppDispatch();
    const coolmoviesState = useAppSelector((state) => state.coolmovies);

    useEffect(() => {
        dispatch(coolmoviesActions.fetchLoggedUser())
        console.log("FETCHING LOGGED USER")
    }, [dispatch])

    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);

    return (
        <Box sx={{
            width: 860,
            // height: 180,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'primary.main',
            borderRadius: 4,
        }}>
            <Typography variant='h6' color='neutral.main' ml={1} >
                {"New Review"} 
            </Typography>

            <Grid container mb={1} >
                <IconButton 
                    onMouseEnter={() => { setStar2(false), setStar3(false), setStar4(false), setStar5(false) }}
                    onClick={() => {
                        
                    }}
                >
                    <StarIcon sx={{ color: yellow[600] }} />
                </IconButton>
                <IconButton onMouseEnter={() => { setStar2(true), setStar3(false), setStar4(false), setStar5(false) }} >
                    <StarIcon sx={{ color: star2 ? yellow[600] : 'white' }} />
                </IconButton>
                <IconButton onMouseEnter={() => { setStar2(true), setStar3(true), setStar4(false), setStar5(false) }} >
                    <StarIcon sx={{ color: star3 ? yellow[600] : 'white' }} />
                </IconButton>
                <IconButton onMouseEnter={() => { setStar2(true), setStar3(true), setStar4(true), setStar5(false) }} >
                    <StarIcon sx={{ color: star4 ? yellow[600] : 'white' }} />
                </IconButton>
                <IconButton onMouseEnter={() => { setStar2(true), setStar3(true), setStar4(true), setStar5(true) }} >
                    <StarIcon sx={{ color: star5 ? yellow[600] : 'white' }} />
                </IconButton>
            </Grid>

            <TextField 
                label="Title" 
                placeholder="Write your headline here..." 
                variant="filled" 
                size='small' 
                color='primary' 
                style={{ marginBottom: 16, width: 286, backgroundColor: 'ivory' }} 
            />

            <TextField 
                label="Review" 
                variant="filled" 
                placeholder='Write your review here...' 
                multiline minRows={6} 
                style={{ width: 820, backgroundColor: 'ivory' }} 
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 1, alignItems: 'end', alignContent: 'end' }}>
                <div>
                <IconButton onClick={() => {
                    console.log(coolmoviesState.loggedUser?.currentUser.name)
                }}>
                    <CheckIcon sx={{ color: green[500], marginRight: 0.8 }} />
                </IconButton>
                <IconButton onClick={() => {
                    dispatch(coolmoviesActions.toggleNewReview(false))
                }} >
                    <DeleteIcon sx={{ color: red[400] }} />
                </IconButton>
                </div>
            </Box>
        </Box>
    )
}