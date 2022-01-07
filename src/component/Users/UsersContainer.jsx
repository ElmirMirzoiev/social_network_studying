import {connect} from "react-redux";
import {
    followAC, setCurrentPageAC,
    setUsersDataAC, toggleIsLoadingAC,
    unfollowAC
} from "../../redux/userReducer";
import Users from "./Users";

    const mapStateToProps = (state) => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalCount: state.usersPage.totalCount,
            currentPage: state.usersPage.currentPage,
            photos: state.usersPage.photos,
            isLoading: state.usersPage.isLoading
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            followUser: (id) => {
                dispatch(followAC(id))
            },
            unfollowUser: (id) => {
                dispatch(unfollowAC(id))
            },
            setUsersData: (users, totalCount) => {
                dispatch(setUsersDataAC(users, totalCount))
            },
            setCurrentPage: (pageNumber)  => {
                dispatch(setCurrentPageAC(pageNumber))
            },
            toggleIsLoading: (isLoading) => {
                dispatch(toggleIsLoadingAC(isLoading))
            }
        }
    }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

