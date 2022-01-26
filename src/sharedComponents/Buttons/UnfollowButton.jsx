import React from 'react';
import {Button} from "@mui/material";
import {unfollowUserThunk} from "../../store/Reducers/userReducer";

const UnfollowButton = ({followInProgress, dispatch, user}) => {
    return (
        <>
            <Button variant="contained"
                    sx={{width: 80, margin: 1}}
                    size="small"
                    disabled={followInProgress.some(id => id === user.id)}
                    onClick={() =>
                        dispatch(unfollowUserThunk(user.id))}>
                Unfollow </Button>
        </>
    );
};


export default UnfollowButton;