import React from 'react';
import {Button} from "@mui/material";
import {followUserThunk} from "../../store/Reducers/userReducer";

const FollowButton = ({followInProgress, dispatch, user}) => {
    return (
        <>
            <Button variant="contained"
                    sx={{width: 80, margin: 1}}
                    size="small"
                    disabled={followInProgress.some(id => id === user.id)}
                    onClick={() =>
                        dispatch(followUserThunk(user.id))}>
                Follow </Button>
        </>
    );
};

export default FollowButton;