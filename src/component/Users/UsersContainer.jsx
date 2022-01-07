import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    setUsersData, toggleIsLoading,
    unfollow
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

    const mapDispatchToProps =  {
        follow,
        unfollow,
        setUsersData,
        setCurrentPage,
        toggleIsLoading,
    }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

