import React from "react"
import {Pagination as MuiPagination, TextField} from "@mui/material"
import {setCurrentPage} from "../../store/Reducers/userReducer";
import styles from "./Pagination.module.scss"

export const Pagination = ({totalCount, pageSize, currentPage, dispatch}) => {

    const pagesTotal = Math.ceil(totalCount / pageSize)

    return (
        <>
            {!!pagesTotal && (
                <div className={styles.pagination}>
                    <MuiPagination
                        sx={{mb: 1}}
                        count={pagesTotal}
                        defaultPage={1}
                        page={currentPage}
                        onChange={(_, page) => dispatch(setCurrentPage(page))}
                        showFirstButton
                        showLastButton
                        shape={"rounded"}
                        color={"primary"}
                    />
                    <TextField
                        size="small"
                        id="outlined-basic"
                        label="search"
                        variant="outlined"
                    >Search</TextField>
                </div>
            )}
        </>
    )
}


