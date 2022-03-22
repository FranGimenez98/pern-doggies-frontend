import React from 'react'

const FilterCreated = ({handleFilterCreated}) => {
  return (
    <div>
        <span>Created</span>
        <select onChange={handleFilterCreated}>
        <option value="created">Created</option>
        <option value="existents">existents</option>
        <option value="all">all</option>
      </select>
    </div>
  )
}

export default FilterCreated