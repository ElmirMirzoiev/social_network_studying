import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import {
  setUserProfile,
  setUserStatus,
  setUserProfileThunk,
  setUserStatusThunk,
} from "../../../../store/Reducers/profileReducer";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfoContainer = () => {
  const profileData = useSelector((state) => state.profilePage.userProfile);
  const profilePage = useSelector((state) => state.profilePage);
  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(setUserProfileThunk(params.id));
    dispatch(setUserStatusThunk(params.id));
    return function cleanup() {
      dispatch(setUserProfile(null));
      dispatch(setUserStatus(null));
    };
  }, [dispatch, params]);

  if (!isAuth) return <Navigate to={"/login/"} />;

  return (
    <>
      <ProfileInfo {...profileData} />
      <MyPosts {...profilePage} />
    </>
  );
};

export default ProfileInfoContainer;
