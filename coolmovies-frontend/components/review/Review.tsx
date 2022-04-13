import React, { FC, useState } from "react";
import { TextField, IconButton, Grid, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ReviewData } from "../../redux/types";
import { yellow } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import { blue, red, green } from "@mui/material/colors";
import { coolmoviesActions, useAppDispatch, useAppSelector } from "../../redux";
import { reviewBoxSx } from "../../styles/styles";

export const Review: FC<ReviewData> = ({
  title,
  rating,
  body,
  userByUserReviewerId: { id: userId, name: userName },
  nodeId,
  movieId,
}) => {
  const dispatch = useAppDispatch();
  const coolmoviesState = useAppSelector((state) => state.coolmovies);
  const currentUserId = coolmoviesState.loggedUser?.currentUser?.id;

  const [star2, setStar2] = useState(rating >= 2 ? true : false);
  const [star3, setStar3] = useState(rating >= 3 ? true : false);
  const [star4, setStar4] = useState(rating >= 4 ? true : false);
  const [star5, setStar5] = useState(rating == 5 ? true : false);
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  const Rating = isEdit ? (
    <Grid container mb={1}>
      <IconButton
        onMouseEnter={() => {
          setStar2(false), setStar3(false), setStar4(false), setStar5(false);
        }}
        onClick={() => {}}
      >
        <StarIcon sx={{ color: yellow[600] }} />
      </IconButton>
      <IconButton
        onMouseEnter={() => {
          setStar2(true), setStar3(false), setStar4(false), setStar5(false);
        }}
      >
        <StarIcon sx={{ color: star2 ? yellow[600] : "white" }} />
      </IconButton>
      <IconButton
        onMouseEnter={() => {
          setStar2(true), setStar3(true), setStar4(false), setStar5(false);
        }}
      >
        <StarIcon sx={{ color: star3 ? yellow[600] : "white" }} />
      </IconButton>
      <IconButton
        onMouseEnter={() => {
          setStar2(true), setStar3(true), setStar4(true), setStar5(false);
        }}
      >
        <StarIcon sx={{ color: star4 ? yellow[600] : "white" }} />
      </IconButton>
      <IconButton
        onMouseEnter={() => {
          setStar2(true), setStar3(true), setStar4(true), setStar5(true);
        }}
      >
        <StarIcon sx={{ color: star5 ? yellow[600] : "white" }} />
      </IconButton>
    </Grid>
  ) : (
    <Grid container>
      <StarIcon sx={{ color: yellow[500], marginRight: 0.6 }} />
      <Typography variant="subtitle1" color="neutral.main" mb={1}>
        {rating + "/5"}
      </Typography>
    </Grid>
  );

  const Title = isEdit ? (
    <TextField
      defaultValue={newTitle}
      label="Title"
      placeholder="Write your headline here..."
      variant="filled"
      size="small"
      color="primary"
      style={{ marginBottom: 16, width: 286, backgroundColor: "ivory" }}
      onChange={(e) => {
        setNewTitle(e.target.value);
      }}
    />
  ) : (
    <Typography variant="h6" color="neutral.main">
      {title}
    </Typography>
  );

  const UserName = (
    <Typography variant="subtitle2" color="secondary.light" mb={2}>
      {userName}
    </Typography>
  );

  const ReviewText = isEdit ? (
    <TextField
      defaultValue={body}
      id="review-field"
      label="Review"
      variant="filled"
      placeholder="Write your review here..."
      multiline
      minRows={6}
      style={{ width: 820, backgroundColor: "ivory" }}
      onChange={(e) => {
        setNewBody(e.target.value);
      }}
    />
  ) : (
    <Typography variant="body1" color="neutral.main">
      {body}
    </Typography>
  );

  const DeleteButton = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 1,
        alignItems: "end",
        alignContent: "end",
      }}
    >
      <div>
        <IconButton
          onClick={() => {
            console.log("Editing review: ", title);
            setIsEdit(true);
          }}
        >
          <EditIcon sx={{ color: blue[500] }} />
        </IconButton>

        <IconButton
          onClick={() => {
            console.log("Deleting review: ", nodeId);
            nodeId &&
              dispatch(coolmoviesActions.deleteMovieReview(nodeId)) &&
              dispatch(coolmoviesActions.removeReview(nodeId));
          }}
        >
          <DeleteIcon sx={{ color: red[400] }} />
        </IconButton>
      </div>
    </Box>
  );

  const ConfirmButton = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 1,
        alignItems: "end",
        alignContent: "end",
      }}
    >
      <div>
        <IconButton
          onClick={() => {
            nodeId &&
              dispatch(
                coolmoviesActions.updateMovieReview({
                  nodeId,
                  movieId,
                  rating: star5 ? 5 : star4 ? 4 : star3 ? 3 : star2 ? 2 : 1,
                  title: newTitle,
                  body: newBody,
                  userByUserReviewerId: {
                    id: userId,
                  },
                })
              ) &&
              dispatch(coolmoviesActions.removeReview(nodeId));

            setIsEdit(false);
          }}
        >
          <CheckIcon sx={{ color: green[500] }} />
        </IconButton>

        <IconButton
          onClick={() => {
            setIsEdit(false);
          }}
        >
          <CancelIcon sx={{ color: red[400] }} />
        </IconButton>
      </div>
    </Box>
  );

  return (
    <Box sx={reviewBoxSx}>
      {Rating}
      {Title}
      {UserName}
      {ReviewText}
      {currentUserId == userId && !isEdit && DeleteButton}
      {isEdit && ConfirmButton}
    </Box>
  );
};
