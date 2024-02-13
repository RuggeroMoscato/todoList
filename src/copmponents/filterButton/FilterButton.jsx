import React from 'react'

const FilterButton = () => {
  return (
    <div className='todo__filterButton'>
    <select>
<option value="All">All</option>
<option value="COMPLETE">Complete</option>
<option value="INCOMPLETE">Incomplete</option>
</select>
<button>Mark all Completed</button>
    </div>
  )
}

export default FilterButton