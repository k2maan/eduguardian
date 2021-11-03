import React from "react"
import CardComponent from "./CardComponent"

function SearchList({ filteredResources }) {
    const filtered = filteredResources.map((resource) => (
        <CardComponent key={resource.id} resource={resource} />
    ))
    return <div>{filtered}</div>
}

export default SearchList
