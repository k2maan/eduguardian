import React, { useState } from "react"
import SearchList from "./SearchList"
import TextField from "@material-ui/core/TextField"
import { Grid } from "@material-ui/core"
export const Search = ({ details }) => {
    const [searchField, setSearchField] = useState("")

    const filteredResources = details.filter((resource) => {
        return (
            // Search is based on what keyword
            resource.name.toLowerCase().includes(searchField.toLowerCase()) ||
            resource.desc.toLowerCase().includes(searchField.toLowerCase())
        )
    })

    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    function searchList() {
        return <SearchList filteredResources={filteredResources} />
    }

    return (
        <div>
            <Grid container justify="center">
                <TextField
                    style={{ width: 1210, marginBottom: 10 }}
                    id="filled-basic"
                    label="Search Resources"
                    variant="filled"
                    color="secondary"
                    placeholder="Type keyword"
                    onChange={handleChange}
                />
            </Grid>
            {searchList()}
        </div>
    )
}

export default Search
